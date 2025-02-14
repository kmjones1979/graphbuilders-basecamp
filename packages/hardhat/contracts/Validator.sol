// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";
import { FunctionsClient } from "./@chainlink/contracts/src/v0.8/functions/dev/1_0_0/FunctionsClient.sol";
import { FunctionsRequest } from "./@chainlink/contracts/src/v0.8/functions/dev/1_0_0/libraries/FunctionsRequest.sol";
import { Basecamp } from "./Basecamp.sol";

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Validator is
    FunctionsClient,
    OwnableUpgradeable,
    AccessControlUpgradeable
{
    using FunctionsRequest for FunctionsRequest.Request;

    error AlreadyMinted();
    error InvalidSourceCode();
    error ValidationFailed();
    error TransferFailed();

    bytes32 private immutable ADMIN_ROLE_HASH;
    
    struct MissionRequest {
        address account;
        uint8 missionIndex;
        bool isProcessed;
    }
    
    Basecamp public basecamp;
    bytes32 public donId;
    
    mapping(bytes32 => MissionRequest) private requests;
    mapping(uint8 => mapping(address => bool)) public accountMinted;
    mapping(uint8 => bytes32) public missionCodeHashes;

    event BasecampAddressSet(address indexed newBasecampAddress);
    event DonIdSet(bytes32 indexed newDonId);
    event MissionSubmitted(
        bytes32 indexed requestId,
        uint8 indexed missionIndex,
        string queryUrl,
        address indexed account
    );
    event MissionValidated(
        bytes32 indexed requestId,
        uint8 indexed missionIndex,
        uint256 isValid,
        bool success,
        address indexed account
    );
    event Withdraw(uint256 amount);

    constructor(
        address _functionsRouterAddress
    ) FunctionsClient(_functionsRouterAddress) {
        ADMIN_ROLE_HASH = keccak256("ADMIN_ROLE");
    }

    function initialize(
        address _owner,
        address _basecampAddress,
        bytes32 _donId
    ) external initializer {
        __Ownable_init(_owner);
        __AccessControl_init();

        _grantRole(ADMIN_ROLE_HASH, _owner);
        basecamp = Basecamp(payable(_basecampAddress));
        donId = _donId;
        
        emit BasecampAddressSet(_basecampAddress);
        emit DonIdSet(donId);
    }

    function setMissionCodeHash(
        uint8 missionIndex,
        string calldata javaScriptSourceCode
    ) external onlyRole(ADMIN_ROLE_HASH) {
        missionCodeHashes[missionIndex] = keccak256(bytes(javaScriptSourceCode));
    }

    function setBasecampAddress(
        address _basecampAddress
    ) external onlyRole(ADMIN_ROLE_HASH) {
        basecamp = Basecamp(payable(_basecampAddress));
        emit BasecampAddressSet(_basecampAddress);
    }

    function setDonId(bytes32 _donId) external onlyRole(ADMIN_ROLE_HASH) {
        donId = _donId;
        emit DonIdSet(_donId);
    }

    function validateMission(
        uint8 missionIndex,
        string calldata javaScriptSourceCode,
        uint64 subscriptionId,
        uint32 gasLimit,
        string calldata queryUrl
    ) external returns (bytes32) {
        if(accountMinted[missionIndex][msg.sender]) {
            revert AlreadyMinted();
        }

        bytes32 submittedCodeHash = keccak256(bytes(javaScriptSourceCode));
        if(submittedCodeHash != missionCodeHashes[missionIndex]) {
            revert InvalidSourceCode();
        }

        FunctionsRequest.Request memory req;
        req.initializeRequestForInlineJavaScript(javaScriptSourceCode);

        string[] memory args = new string[](2);
        args[0] = Strings.toHexString(msg.sender);
        args[1] = queryUrl;
        req.setArgs(args);

        bytes32 requestId = _sendRequest(
            req.encodeCBOR(),
            subscriptionId,
            gasLimit,
            donId
        );

        requests[requestId] = MissionRequest({
            account: msg.sender,
            missionIndex: missionIndex,
            isProcessed: false
        });

        emit MissionSubmitted(requestId, missionIndex, queryUrl, msg.sender);
        return requestId;
    }

    function fulfillRequest(
        bytes32 requestId,
        bytes memory response,
        bytes memory err
    ) internal override {
        if (err.length > 0) {
            revert(string(err));
        }


        MissionRequest storage request = requests[requestId];
        if(request.isProcessed) {
            return;
        }

        uint256 isValid = abi.decode(response, (uint256));
        
        unchecked {
            if (isValid == 1) {
                request.isProcessed = true;
                accountMinted[request.missionIndex][request.account] = true;
                
                basecamp.mint(request.missionIndex, request.account);
                
                emit MissionValidated(
                    requestId,
                    request.missionIndex,
                    1,
                    true,
                    request.account
                );
                return;
            }
        }
        
        emit MissionValidated(
            requestId,
            request.missionIndex,
            0,
            false,
            request.account
        );
        revert ValidationFailed();
    }

    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        (bool success, ) = payable(owner()).call{value: balance}("");
        if(!success) revert TransferFailed();
        emit Withdraw(balance);
    }

    receive() external payable {}
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {FunctionsClient} from "./@chainlink/contracts/src/v0.8/functions/dev/1_0_0/FunctionsClient.sol";
import {FunctionsRequest} from "./@chainlink/contracts/src/v0.8/functions/dev/1_0_0/libraries/FunctionsRequest.sol";
import {Basecamp} from "./Basecamp.sol";

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Validator is FunctionsClient, OwnableUpgradeable, AccessControlUpgradeable {
  using FunctionsRequest for FunctionsRequest.Request;

  Basecamp public basecamp;

  bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

  bytes32 public donId;

  mapping(bytes32 => address) public requestsInProgress;
  mapping(bytes32 => uint8) public missionIndexSubmitted;

  mapping(uint8 => mapping(address => bool)) public accountMinted;

  mapping(uint8 => bytes32) public missionCodeHashes;

  event BasecampAddressSet(address newBasecampAddress);
  event DonIdSet(bytes32 newDonId); 
  event MissionSubmitted(bytes32 requestId, uint8 missionIndex, string queryUrl, address account);
  event MissionValidated(bytes32 requestId, uint8 missionIndex, uint256 isValid, bool success, address account);
  event Withdraw(uint256 amount);

  constructor(address _functionsRouterAddress) FunctionsClient(_functionsRouterAddress) {}

  function initialize(address _owner, address _basecampAddress, bytes32 _donId) external initializer {
    __Ownable_init(_owner);
    __AccessControl_init();

    _grantRole(ADMIN_ROLE, _owner);
    basecamp = Basecamp(payable(_basecampAddress));
    donId = _donId;
    emit BasecampAddressSet(_basecampAddress);
    emit DonIdSet(donId);
  }

  /**
   * @notice Set the JavaScript source code hash for a mission index
   * @param missionIndex The mission index
   * @param javaScriptSourceCode The JavaScript source code
   */
  function setMissionCodeHash(uint8 missionIndex, string memory javaScriptSourceCode) external onlyRole(ADMIN_ROLE) {
      bytes32 codeHash = keccak256(abi.encodePacked(javaScriptSourceCode));
      missionCodeHashes[missionIndex] = codeHash;
  }

  /**
   * @notice Set the Basecamp address
   * @param _basecampAddress New Basecamp address
   */
  function setBasecampAddress(address _basecampAddress) external onlyRole(ADMIN_ROLE) {
    basecamp = Basecamp(payable(_basecampAddress));
    emit BasecampAddressSet(_basecampAddress);
  }

  /**
   * @notice Set the DON ID
   * @param _donId New DON ID
   */
  function setDonId(bytes32 _donId) external onlyRole(ADMIN_ROLE) {
    donId = _donId;
    emit DonIdSet(_donId);
  }

  function validateMission(
    uint8 missionIndex,
    string memory javaScriptSourceCode,
    uint64 subscriptionId,
    uint32 gasLimit,
    string memory queryUrl
  ) external returns (bytes32 requestId) {
    require(!accountMinted[missionIndex][msg.sender], "Account already minted");

    // Hash the submitted JavaScript source code
    bytes32 submittedCodeHash = keccak256(abi.encodePacked(javaScriptSourceCode));
    
    // Check if the submitted code hash matches the stored hash for the mission index
    require(submittedCodeHash == missionCodeHashes[missionIndex], "Invalid JavaScript source code");

    FunctionsRequest.Request memory req;
    req.initializeRequestForInlineJavaScript(javaScriptSourceCode);

    string[] memory args = new string[](2);
    args[0] = Strings.toHexString(msg.sender);
    args[1] = queryUrl;

    req.setArgs(args);

    requestId = _sendRequest(req.encodeCBOR(), subscriptionId, gasLimit, donId);
    requestsInProgress[requestId] = msg.sender;
    missionIndexSubmitted[requestId] = missionIndex;
    emit MissionSubmitted(requestId, missionIndex, queryUrl, msg.sender);
  }

  function fulfillRequest(bytes32 requestId, bytes memory response, bytes memory err) internal override {
    if (err.length != 0) {
      revert(string(err));
    }

    uint256 isValid = abi.decode(response, (uint256));
    if (isValid == 1) {
      address account = requestsInProgress[requestId];
      uint8 missionIndex = missionIndexSubmitted[requestId];
      basecamp.mint(missionIndex, account);
      accountMinted[missionIndex][account] = true;
      emit MissionValidated(requestId, missionIndex, isValid, true, account);
    } else {
      address account = requestsInProgress[requestId];
      uint8 missionIndex = missionIndexSubmitted[requestId];
      emit MissionValidated(requestId, missionIndex, isValid, false, account);
      revert("Validation failed");
    }
  }

	/**
	 * Function that allows the owner to withdraw ETH from the contract
	 */
	function withdraw() public onlyOwner {
		uint256 balance = address(this).balance;
		(bool success, ) = payable(owner()).call{value: balance}("");
		require(success, "Transfer failed");
		emit Withdraw(balance);
	}

  /**
	 * Function that allows the contract to receive ETH
	 */
	receive() external payable {}
}

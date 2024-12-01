// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {FunctionsClient} from "./@chainlink/contracts/src/v0.8/functions/dev/1_0_0/FunctionsClient.sol";
import {FunctionsRequest} from "./@chainlink/contracts/src/v0.8/functions/dev/1_0_0/libraries/FunctionsRequest.sol";
import {Basecamp} from "./Basecamp.sol";

contract Validator is FunctionsClient, Ownable {
  using FunctionsRequest for FunctionsRequest.Request;

  Basecamp public basecamp;

  // Functions Router Address
  address public functionsRouterAddress;

  // DON ID
  bytes32 public donId;

  // Requests in progress
  mapping(bytes32 => address) public requestsInProgress;
  mapping(bytes32 => uint8) public missionIndexSubmitted;

  // Account minted
  mapping(uint8 => mapping(address => bool)) public accountMinted;

  event BasecampAddressSet(address newBasecampAddress);
  event FunctionsRouterAddressSet(address newFunctionsRouterAddress);
  event DonIdSet(bytes32 newDonId); 
  event MissionSubmitted(bytes32 requestId, uint8 missionIndex, string queryUrl, address account);
  event MissionValidated(bytes32 requestId, uint8 missionIndex, uint256 isValid, bool success, address account);
  event Withdraw(uint256 amount);

  constructor(address _owner, address _basecampAddress ) Ownable(_owner) FunctionsClient(0xb83E47C2bC239B3bf370bc41e1459A34b41238D0) {
    basecamp = Basecamp(payable(_basecampAddress));
    functionsRouterAddress = 0xb83E47C2bC239B3bf370bc41e1459A34b41238D0;
    donId = 0x66756e2d657468657265756d2d7365706f6c69612d3100000000000000000000;
    emit BasecampAddressSet(_basecampAddress);
    emit FunctionsRouterAddressSet(functionsRouterAddress);
    emit DonIdSet(donId);
  }

  /**
   * @notice Set the Basecamp address
   * @param _basecampAddress New Basecamp address
   */
  function setBasecampAddress(address _basecampAddress) external onlyOwner {
    basecamp = Basecamp(payable(_basecampAddress));
    emit BasecampAddressSet(_basecampAddress);
  }

  /**
   * @notice Set the Functions Router address
   * @param _functionsRouterAddress New Functions Router address
   */
  function setFunctionsRouterAddress(address _functionsRouterAddress) external onlyOwner {
    functionsRouterAddress = _functionsRouterAddress;
    emit FunctionsRouterAddressSet(_functionsRouterAddress);
  }

    /**
   * @notice Set the DON ID
   * @param _donId New DON ID
   */
  function setDonId(bytes32 _donId) external onlyOwner {
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

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {FunctionsClient} from "./@chainlink/contracts/src/v0.8/functions/dev/1_0_0/FunctionsClient.sol";
import {FunctionsRequest} from "./@chainlink/contracts/src/v0.8/functions/dev/1_0_0/libraries/FunctionsRequest.sol";
import {Basecamp} from "./Basecamp.sol";

contract ValidatorM0 is FunctionsClient, Ownable {
  using FunctionsRequest for FunctionsRequest.Request;

  Basecamp public basecamp;

  // ERC115 NFT to Mint
  uint8 public nftIndex;

  // Functions Router Address
  address public functionsRouterAddress;

  // DON ID
  bytes32 public donId;

  // Requests in progress
  mapping(bytes32 => address) public requestsInProgress;

  // Account minted
  mapping(address => bool) public accountMinted;

  constructor(address _owner, address _basecampAddress, uint8 _nftIndex ) Ownable(_owner) FunctionsClient(0xb83E47C2bC239B3bf370bc41e1459A34b41238D0) {
    basecamp = Basecamp(payable(_basecampAddress));
    nftIndex = _nftIndex;

    functionsRouterAddress = 0xb83E47C2bC239B3bf370bc41e1459A34b41238D0;
    donId = 0x66756e2d657468657265756d2d7365706f6c69612d3100000000000000000000;
  }

  /**
   * @notice Set the Functions Router address
   * @param newFunctionsRouterAddress New Functions Router address
   */
  function setFunctionsRouterAddress(address newFunctionsRouterAddress) external onlyOwner {
    functionsRouterAddress = newFunctionsRouterAddress;
  }

    /**
   * @notice Set the DON ID
   * @param newDonId New DON ID
   */
  function setDonId(bytes32 newDonId) external onlyOwner {
    donId = newDonId;
  }

  function validateMission(
    string memory javaScriptSourceCode,
    uint64 subscriptionId,
    uint32 gasLimit,
    string memory queryUrl
  ) external returns (bytes32 requestId) {
    require(!accountMinted[msg.sender], "Account already minted");
    
    FunctionsRequest.Request memory req;
    req.initializeRequestForInlineJavaScript(javaScriptSourceCode);

    string[] memory args = new string[](2);
    args[0] = Strings.toHexString(msg.sender);
    args[1] = queryUrl;

    req.setArgs(args);

    requestId = _sendRequest(req.encodeCBOR(), subscriptionId, gasLimit, donId);
    requestsInProgress[requestId] = msg.sender;
  }

  function fulfillRequest(bytes32 requestId, bytes memory response, bytes memory err) internal override {
    if (err.length != 0) {
      revert(string(err));
    }

    uint256 isAccountEnlisted = abi.decode(response, (uint256));
    if (isAccountEnlisted == 1) {
      address account = requestsInProgress[requestId];
      basecamp.mint(nftIndex, account);
      accountMinted[account] = true;
    } else {
      revert("Account not enlisted");
    }
  }

	/**
	 * Function that allows the owner to withdraw ETH from the contract
	 */
	function withdraw() public onlyOwner {
		payable(owner()).transfer(address(this).balance);
	}

  /**
	 * Function that allows the contract to receive ETH
	 */
	receive() external payable {}
}

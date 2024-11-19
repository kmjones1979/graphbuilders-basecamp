//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

/**
 * A smart contract for the The Graph Builders Basecamp challenges
 * @author Kevin Jones
 */
contract Enlist {

	mapping(address => bool) public isEnlisted;

	/**
	 * Constructor for the Enlist contract
	 */
	constructor() {
	}

	function enlist() public {
		require(!isEnlisted[msg.sender], "You are already enlisted");
		isEnlisted[msg.sender] = true;
	}

	/**
	 * Function that allows the contract to receive ETH
	 */
	receive() external payable {}
}

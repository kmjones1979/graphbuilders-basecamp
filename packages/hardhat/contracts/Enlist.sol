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
	
	// STEP 1: Add an event to track addresses which have enlisted
	event Enlisted(address indexed user);
	/**
	 * Constructor for the Enlist contract
	 */
	constructor() {
	}

	function enlist() public {
		require(!isEnlisted[msg.sender], "You are already enlisted");
		isEnlisted[msg.sender] = true;
		// STEP 2: Emit the Enlisted event
		emit Enlisted(msg.sender);
	}

	/**
	 * Function that allows the contract to receive ETH
	 */
	receive() external payable {}
}

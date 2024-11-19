//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

/**
 * A smart contract for the The Graph Launchpad challenges
 * @author Kevin Jones
 */
contract Welcome {

	string public welcomeMessage = "Welcome to The Graph Builders Launchpad!";

	/**
	 * Constructor that sets the owner of the contract
	 * The owner is the account that deploys the contract
	 */
	constructor()  {}

	/**
	 * Function that allows the contract to receive ETH
	 */
	receive() external payable {}
}

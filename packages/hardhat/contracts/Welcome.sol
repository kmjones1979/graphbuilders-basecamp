//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

/**
 * A smart contract for the The Graph Builders Basecamp challenges
 * @author Kevin Jones
 */
contract Welcome {

	string public welcomeMessage;

	event WelcomeMessageChanged(string newMessage);

	constructor() {
		welcomeMessage = "Welcome to The Graph Builders Basecamp!";
		emit WelcomeMessageChanged(welcomeMessage);
	}

}

//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
// STEP 1: Import the ERC20 contract from OpenZeppelin
// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * A smart contract for the The Graph Builders Basecamp challenges
 * @author Kevin Jones
 */

// STEP 2: Inherit the ERC20 contract from OpenZeppelin
contract Moon is Ownable {

	// STEP 3: Add your burner wallet where you will mint tokens to
	address public burner = 0x0000000000000000000000000000000000000000;
	
	// STEP 4: Add your initial supply

	// STEP 5: Initialize the ERC20 contract with the name and symbol
	constructor() Ownable(burner) {
		// STEP 6: Mint the initial supply to the burner wallet
	}

	/**
	 * Function that allows the contract to receive ETH
	 */
	receive() external payable {}
}

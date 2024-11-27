//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract for the The Graph Builders Basecamp challenges
 * @author Kevin Jones
 */
contract Basecamp is Ownable {

	constructor(address _owner) Ownable(_owner) {}

	/**
	 * Function that allows the contract to receive ETH
	 */
	receive() external payable {}
}

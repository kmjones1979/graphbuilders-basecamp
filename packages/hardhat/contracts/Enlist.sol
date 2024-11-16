//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract for the The Graph Launchpad challenges
 * @author Kevin Jones
 */
contract Enlist is Ownable {

	mapping(address => bool) public isEnlisted;

	event Enlisted(address indexed account);

	/**
	 * Constructor that sets the owner of the contract
	 * The owner is the account that deploys the contract
	 */
	constructor(address _owner) Ownable(_owner) {
	}

	function enlist() public {
		require(!isEnlisted[msg.sender], "You are already enlisted");
		isEnlisted[msg.sender] = true;
		emit Enlisted(msg.sender);
	}

	/**
	 * Function that allows the owner to withdraw all the Ether in the contract
	 * The function can only be called by the owner of the contract as defined by the isOwner modifier
	 */
	function withdraw() public onlyOwner {
		(bool success, ) = msg.sender.call{ value: address(this).balance }("");
		require(success, "Failed to send Ether");
	}

	/**
	 * Function that allows the contract to receive ETH
	 */
	receive() external payable {}
}

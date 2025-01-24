// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * A smart contract for the The Graph Builders Basecamp challenges
 * @author Kevin Jones
 */
contract Basecamp is Ownable, ERC1155, AccessControl {

	string public name = "Basecamp";
    string public symbol = "CRED";

	// Credentials
	struct Credential {
		bool enabled;
		string name;
	}

	// Mapping of credentials
	mapping(uint8 => Credential) public credentials;

	// Role for the minter
	bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
	bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");


	event CredentialSet(bool enabled, uint8 id, string name);
	event CredentialMinted(address to, uint8 id);
	event AdminAdded(address admin);
	event MinterAdded(address minter);
	event AdminRemoved(address admin);
	event MinterRemoved(address minter);
	event Withdraw(uint256 amount);

	constructor(address _owner, address _minter ) 
		Ownable(_owner) 
		ERC1155("http://example.com/") 
		AccessControl() {
		_setRoleAdmin(MINTER_ROLE, ADMIN_ROLE);
		_grantRole(ADMIN_ROLE, _owner);
		_grantRole(MINTER_ROLE, _minter);
	}

	/**
	 * Add a credential
	 * @param _enabled Whether the credential is enabled
	 * @param _id The ID of the credential
	 * @param _name The name of the credential
	 */
	function setCredential(bool _enabled, uint8 _id, string memory _name) public onlyOwner {
		credentials[_id] = Credential(_enabled, _name);
		emit CredentialSet(_enabled, _id, _name);
	}

	/**
	 * Mint a credential
	 * @param id The ID of the credential
	 * @param _account The account to mint the credential to
	 */
	function mint( uint8 id, address _account) public onlyRole(MINTER_ROLE) {
		require(credentials[id].enabled, "credential not enabled");
		_mint(_account, id, 1, "0x00");
		emit CredentialMinted(_account, id);
	}

	/**
	 * Add a minter
	 * @param _account The account to add as a minter
	 */
	function addMinter(address _account) public onlyRole(ADMIN_ROLE) {
		_grantRole(MINTER_ROLE, _account);
		emit MinterAdded(_account);
	}

	/**
	 * Add an admin
	 * @param _account The account to add as an admin
	 */
	function addAdmin(address _account) public onlyRole(ADMIN_ROLE) {
		_grantRole(ADMIN_ROLE, _account);
		emit AdminAdded(_account);
	}

	/**
	 * Remove an admin
	 * @param _account The account to remove as an admin
	 */
	function removeAdmin(address _account) public onlyRole(ADMIN_ROLE) {
		_revokeRole(ADMIN_ROLE, _account);
		emit AdminRemoved(_account);
	}

	/**
	 * Remove a minter
	 * @param _account The account to remove as a minter
	 */
	function removeMinter(address _account) public onlyRole(ADMIN_ROLE) {
		_revokeRole(MINTER_ROLE, _account);
		emit MinterRemoved(_account);
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

	/**
	 * Override supportsInterface to resolve conflict from base contracts
	 */
	function supportsInterface(bytes4 interfaceId) public view virtual override(ERC1155, AccessControl) returns (bool) {
		return super.supportsInterface(interfaceId);
	}

	/**
	 * Override safeTransferFrom to revert
	 */
	function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes memory data) public override(ERC1155) {
		revert("Token soulbound!");
	}
}

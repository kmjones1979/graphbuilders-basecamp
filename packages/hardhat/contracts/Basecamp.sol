//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/extensions/AccessControlDefaultAdminRules.sol";
/**
 * A smart contract for the The Graph Builders Basecamp challenges
 * @author Kevin Jones
 */
contract Basecamp is Ownable, ERC1155, AccessControl {

	string public name = "Basecamp";
    string public symbol = "CRED";

	// Credential struct
	struct Credential {
		bool enabled;
		string name;
	}

	// Mapping of credentials
	mapping(uint8 => Credential) public credentials;

	// Role for the minter
	bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
	bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

	event Withdraw(uint256 amount);
	event CredentialAdded(uint8 id, string name);
	event CredentialStatusChanged(uint8 id, bool enabled);
	event CredentialUpdated(uint8 id, string name);
	event CredentialMinted(address to, uint8 id);

	constructor(address _owner, address _minter ) 
		Ownable(_owner) 
		ERC1155("http://example.com/") 
		AccessControl() {
		_setRoleAdmin(MINTER_ROLE, ADMIN_ROLE);
		_grantRole(ADMIN_ROLE, _owner);
		_grantRole(MINTER_ROLE, _minter);
	}

	function addCredential(bool _enabled, uint8 _id, string memory _name) public onlyOwner {
		credentials[_id] = Credential(_enabled, _name);
		emit CredentialAdded(_id, _name);
	}

	function updateCredential(uint8 _id, string memory _name) public onlyOwner {
		credentials[_id].name = _name;
		emit CredentialUpdated(_id, _name);
	}

	function toggleCredentialEnabled(bool _enabled, uint8 _id) public onlyOwner {
		credentials[_id].enabled = _enabled;
		emit CredentialStatusChanged(_id, _enabled);
	}

	function mint(address to, uint8 id) public onlyRole(MINTER_ROLE) {
		require(credentials[id].enabled, "credential not enabled");
		_mint(to, id, 1, "0x00");
		emit CredentialMinted(to, id);
	}

	function addMinter(address _minter) public onlyRole(ADMIN_ROLE) {
		_grantRole(MINTER_ROLE, _minter);
	}

	function addAdmin(address _admin) public onlyRole(ADMIN_ROLE) {
		_grantRole(ADMIN_ROLE, _admin);
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

	function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes memory data) public override(ERC1155) {
		revert("Tokens are soulbound and cannot be transferred");
	}
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract AxiomGenesis is Initializable, ERC721Upgradeable, ERC721URIStorageUpgradeable, ERC721BurnableUpgradeable, OwnableUpgradeable, UUPSUpgradeable {
    uint256 private _nextTokenId;
    uint256 private constant MAX_CLAIM_AMOUNT = 5;
    mapping(address => bool) private _whitelist;

    error UnauthorizedAccount(address account);
    error ExceedQuantity(address account, uint number);

    modifier onlyInWhiteList() {
        if (!_whitelist[_msgSender()]) {
            revert UnauthorizedAccount(_msgSender());
        }
        _;
    }

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function addWhiteListMember(address luckyMember) public onlyOwner {
        _whitelist[luckyMember] = true;
    }

    // Claim an NFT
    // @param uri the NFT metadata
    // requirements:
    // 1. The sender is whitelisted
    // 2. The sender has less than MAX_CLAIM_AMOUNT NFTs
    function claim(string memory uri) public onlyInWhiteList {

        if (balanceOf(_msgSender()) + 1 > MAX_CLAIM_AMOUNT) {
            revert ExceedQuantity(msg.sender, MAX_CLAIM_AMOUNT);
        }

        uint256 tokenId = _nextTokenId++;
        _safeMint(_msgSender(), tokenId);
        _setTokenURI(tokenId, uri);
    }

    function initialize(address initialOwner) initializer public {
        __ERC721_init("AxiomGenesis", "AXMG");
        __ERC721URIStorage_init();
        __ERC721Burnable_init();
        __Ownable_init(initialOwner);
        __UUPSUpgradeable_init();
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        onlyOwner
        override
    {}

    // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721Upgradeable, ERC721URIStorageUpgradeable)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721Upgradeable, ERC721URIStorageUpgradeable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
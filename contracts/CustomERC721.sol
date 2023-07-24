// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CustomERC721 is ERC721Enumerable, ReentrancyGuard, Ownable {
    using Counters for Counters.Counter;

    struct Attributes {
        uint256 startDate;
        string idNumber;
    }

    Counters.Counter private _tokenIdCounter;

    mapping(uint256 => Attributes) internal _attributes;

    constructor(
        string memory name,
        string memory symbol
    ) ERC721(name, symbol) {}

    function mint(
        uint256 _startDate,
        string memory _idNumber
    ) external nonReentrant {
        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();

        _attributes[tokenId] = Attributes(_startDate, _idNumber);

        _safeMint(msg.sender, tokenId);
    }

    function safeTransferFrom(
        address _from,
        address _to,
        uint256 _tokenId
    ) public override(ERC721, IERC721) {
        super.safeTransferFrom(_from, _to, _tokenId);
    }

    function getStartDate(uint256 _tokenId) public view returns (uint256) {
        return _attributes[_tokenId].startDate;
    }

    function getIdNumber(uint256 _tokenId) public view returns (string memory) {
        return _attributes[_tokenId].idNumber;
    }
}

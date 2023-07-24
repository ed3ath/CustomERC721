# CustomERC721 Contract Documentation

The `CustomERC721` contract is an ERC-721 token smart contract with additional attributes `startDate` and `idNumber`. It extends the `ERC721Enumerable` contract to enable enumeration of tokens and implements the `ReentrancyGuard` and `Ownable` contracts for reentrancy protection and ownership management, respectively. This contract allows minting, transferring, and querying the custom attributes associated with each token.

## Contract Details

- Solidity Version: ^0.8.19
- SPDX License Identifier: MIT

## Struct Definition

The contract includes a struct named `Attributes`, which holds the custom attributes for each token. The `Attributes` struct consists of two fields:

1. `uint256 startDate`: Represents the start date of the token in Unix timestamp format.
2. `string idNumber`: Represents the custom ID number associated with the token.

## State Variables

- `_tokenIdCounter`: A `Counters.Counter` variable used to keep track of the next token ID to be minted.
- `_attributes`: A mapping that associates each token ID with its corresponding `Attributes` struct.

## Constructor

The contract constructor takes two parameters, `name` and `symbol`, which are used to initialize the ERC-721 token with the provided name and symbol.

## Minting Function

The `mint` function is used to create and mint a new token with the specified `startDate` and `idNumber` attributes. The function increments the `_tokenIdCounter` to generate a unique token ID and assigns the provided attributes to the newly created token. The token is then safely minted to the address of the caller.

## Token Transfer Function

The contract overrides the `safeTransferFrom` function from the `ERC721` contract to ensure secure token transfers. The overridden function allows tokens to be transferred from one address to another.

## View Functions

- `getStartDate(uint256 _tokenId)`: This function allows anyone to query the `startDate` attribute of a specific token by providing its token ID.
- `getIdNumber(uint256 _tokenId)`: This function allows anyone to query the `idNumber` attribute of a specific token by providing its token ID.

## Ownership Management

The contract is also inherited from `Ownable`, which grants the contract owner exclusive rights to execute certain functions, such as minting tokens.

## Reentrancy Protection

The contract uses the `ReentrancyGuard` to protect against reentrancy attacks during token minting.

## Note

This contract uses the OpenZeppelin library to implement the ERC-721 standard and security features. The contract provides a basic ERC-721 implementation with the additional attributes `startDate` and `idNumber`. It can be customized and expanded further to meet the requirements of specific use cases and applications.

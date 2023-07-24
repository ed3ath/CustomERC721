const { ethers } = require("hardhat");
const { TOKEN_NAME, TOKEN_SYMBOL } = process.env

async function main() {
  const ERC721 = await ethers.getContractFactory("CustomERC721");
  const erc721 = await ERC721.deploy(TOKEN_NAME, TOKEN_SYMBOL);

  await erc721.deployed();

  console.log("CustomERC721 contract deployed to:", erc721.address);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});

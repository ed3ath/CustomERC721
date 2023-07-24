const { expect } = require("chai");
const { TOKEN_NAME, TOKEN_SYMBOL } = process.env

describe("CustomERC721", function () {
  let CustomERC721;
  let customERC721;
  let owner;
  let addr1;
  let addr2;

  it("Should deploy the contract correctly", async function () {    
    [owner, addr1, addr2] = await ethers.getSigners();

    // Deploy the contract
    CustomERC721 = await ethers.getContractFactory("CustomERC721");
    customERC721 = await CustomERC721.deploy(TOKEN_NAME, TOKEN_SYMBOL);
    await customERC721.deployed();

    expect(await customERC721.name()).to.equal(TOKEN_NAME);
    expect(await customERC721.symbol()).to.equal(TOKEN_SYMBOL);
  });

  it("Should mint tokens with start_date and ID_number", async function () {
    const startDate1 = 1679836800; // Replace with your desired start date in Unix timestamp format
    const idNumber1 = "ABC123"; // Replace with your desired ID number

    await customERC721.connect(addr1).mint(startDate1, idNumber1);

    expect(await customERC721.ownerOf(1)).to.equal(addr1.address);
    expect(await customERC721.getStartDate(1)).to.equal(startDate1);
    expect(await customERC721.getIdNumber(1)).to.equal(idNumber1);
  });

  it("Should transfer tokens", async function () {
    const startDate2 = 1679836801; // Replace with another start date in Unix timestamp format
    const idNumber2 = "XYZ456"; // Replace with another ID number

    await customERC721.connect(addr1).mint(startDate2, idNumber2);

    // Transfer token from addr1 to addr2
    await customERC721.connect(addr1).transferFrom(addr1.address, addr2.address, 2);

    expect(await customERC721.ownerOf(2)).to.equal(addr2.address);
    expect(await customERC721.getStartDate(2)).to.equal(startDate2);
    expect(await customERC721.getIdNumber(2)).to.equal(idNumber2);
  });
});

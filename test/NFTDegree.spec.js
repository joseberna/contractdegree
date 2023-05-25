/** @format */

const { expect } = require("chai");
const { ethers } = require("hardhat");

const toWei = (num) => ethers.utils.parseEther(num.toString());
const fromWei = (num) => ethers.utils.formatEther(num);

describe("NFTDegree", function () {
  let DegreeNFTSmartContract;
  let _DegreeNftSC;
  let deployer;
  let tokenID = 123456;
  let tokenID2 = 245741;
  let addr1;
  let addr2;
  let addrs;
  let feePercent = 1;
  let URI = "sample URI";
  let URI2 = "sample URI2";

  beforeEach(async function () {
    DegreeNFTSmartContract = await ethers.getContractFactory("NFTDegree");
    [deployer, addr1, addr2, ...addrs] = await ethers.getSigners();
    _DegreeNftSC = await DegreeNFTSmartContract.deploy();
  });

  describe("1. DESPLIEGUE ", function () {
    it("1.1 Despliega con el nombre y el simbolo del NFT en la colección", async function () {
      const nftName = "Degree";
      const nftSymbol = "DeeNFT";
      expect(await _DegreeNftSC.name()).to.equal(nftName);
      expect(await _DegreeNftSC.symbol()).to.equal(nftSymbol);
    });
  });

  describe("2. INTERACCIÓN CON EL NFT", function () {
    it("2.1 Lo crea bien", async function () {
      await _DegreeNftSC.createNFT(addr1.address, tokenID, "MyNFTDegree", URI);
      expect(await _DegreeNftSC.balanceOf(addr1.address)).to.equal(1);
    });

    it("2.2 Lo consulta bien", async function () {
      await _DegreeNftSC.createNFT(
        addr2.address,
        tokenID2,
        "MyNFTDegree2",
        URI2
      );
      expect(await _DegreeNftSC.balanceOf(addr2.address)).to.equal(1);
      let _nft = await _DegreeNftSC.getNFT(tokenID2);
      expect(await _nft[0]).to.equal("MyNFTDegree2");
      expect(await _nft[1]).to.equal(URI2);
    });
  });
});

import { ethers } from "hardhat";

async function main() {
    const erc721 = await ethers.deployContract("BaseERC721",
     ["0x1e94719A17031BeD035AbA6DA2EfC5F91752aE14", "Axiom NFT Collection", "ANC"]);

    await erc721.waitForDeployment();

    console.log(
        `ERC721 contract deployed to ${erc721.target}`
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
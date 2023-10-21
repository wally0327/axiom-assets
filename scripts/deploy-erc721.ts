import { ethers } from "hardhat";

import { promisify } from 'util';

const sleep = promisify(setTimeout);

async function main() {
    const erc721 = await ethers.deployContract("BaseERC721",
     ["0x1e94719A17031BeD035AbA6DA2EfC5F91752aE14", "Axiom NFT Collection", "ANC"]);

    await erc721.waitForDeployment();

    console.log(
        `ERC721 contract deployed to ${erc721.target}`
    );

    let to = "0x1e94719A17031BeD035AbA6DA2EfC5F91752aE14";
    let tx = await erc721.safeMint(to, 1, "");
    await tx.wait();

    let count = await erc721.balanceOf(to);
    console.log("count:", count);
    let addr = await erc721.ownerOf(1);
    console.log("addr:", addr);
    
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
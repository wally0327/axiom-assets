import { ethers } from "hardhat";

async function main() {
    const erc20 = await ethers.deployContract("BaseERC20", ["0x1e94719A17031BeD035AbA6DA2EfC5F91752aE14", "Wrapper ETH", "WETH", 10000]);

    await erc20.waitForDeployment();

    console.log(
        `ERC20 contract deployed to ${erc20.target}`
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
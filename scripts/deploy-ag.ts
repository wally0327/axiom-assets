import { ethers, upgrades } from "hardhat";

async function main() {
    const AxiomGenesis = await ethers.getContractFactory("AxiomGenesis");

    const ag = await upgrades.deployProxy(AxiomGenesis, ["0x1e94719A17031BeD035AbA6DA2EfC5F91752aE14"]);
    await ag.waitForDeployment();

    console.log("AxiomGenesis contract addr is :", await ag.getAddress());
    console.log("AxiomGenesis contract symbol is :", await ag.symbol());
}

main();

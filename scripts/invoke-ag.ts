import { ethers } from "hardhat";

async function main() {

    const ag = await ethers.getContractAt("AxiomGenesis", "0xD28deBE97F70aD2bEC9AF8f5e40103A1d63Dc54C");

    console.log("AxiomGenesis contract name is :", await ag.name());
    console.log("AxiomGenesis contract symbol is :", await ag.symbol());

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
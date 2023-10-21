import { expect } from "chai";
import { ethers } from "hardhat";
import { BaseERC721 } from "../src/contracts";

describe("BaseERC721", function () {

    let erc721: BaseERC721;

    this.beforeAll(async function () {
        erc721 = await deployERC721("0x1e94719A17031BeD035AbA6DA2EfC5F91752aE14", "Axiom NFT Collection", "ANC");
    })

    async function deployERC721(owner: string, name: string, symbol: string) {
        const erc721 = await ethers.deployContract("BaseERC721",
            [owner, name, symbol]);

        await erc721.waitForDeployment();
        return erc721;
    }

    describe("Safemint", async function () {
        it("Should mint successful", async function () {
            let to = "0x1e94719A17031BeD035AbA6DA2EfC5F91752aE14";
            let tx = await erc721.safeMint(to, 1, "https://i.seadn.io/s/raw/files/8f31ef98a60e8ab3d5510ad37c5f483a.png?auto=format&dpr=1&w=1000");
            await tx.wait();

            let addr = await erc721.ownerOf(1);
            expect(addr).to.equal(to);
        })
    })

})
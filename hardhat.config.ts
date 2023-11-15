import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// hardhat.config.ts
import '@openzeppelin/hardhat-upgrades';
import dotenv from "dotenv";

dotenv.config();

const ADMIN_PRIVATE_KEY = process.env.ADMIN_PRIVATE_KEY;

const adminPrivateKey = ADMIN_PRIVATE_KEY !== undefined ? ADMIN_PRIVATE_KEY.toString() : "0x00";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  defaultNetwork: "aries",
  networks: {
    hardhat: {
      accounts: [{ privateKey: adminPrivateKey, balance: "10000000000000000000000000000000" }],
    },
    aries: {
      url: "https://rpc1.aries.axiomesh.io",
      accounts: [adminPrivateKey]
    },
  },
  typechain: {
    outDir: "src/contracts",
    dontOverrideCompile: false,
  },
};

export default config;

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const ADMIN_PRIVATE_KEY = process.env.ADMIN_PRIVATE_KEY;

const adminPrivateKey = ADMIN_PRIVATE_KEY !== undefined ? ADMIN_PRIVATE_KEY.toString() : "0x00";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  defaultNetwork: "aries",
  networks: {
    hardhat: {
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

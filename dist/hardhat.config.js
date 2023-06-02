"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hardhatConfig = exports.compilerConfig = void 0;
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@tenderly/hardhat-tenderly");
require("@typechain/hardhat");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("hardhat-abi-exporter");
require("@nomiclabs/hardhat-etherscan");
require("ts-node/register");
require("tsconfig-paths/register");
// chainId?: number
// from?: string;
// gas: "auto" | number;
// gasPrice: "auto" | number;
// gasMultiplier: number;
// url: string;
// timeout: number;
// httpHeaders: { [name: string]: string };
// accounts: HttpNetworkAccountsConfig;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const compilerConfig = (version) => ({
    version,
    settings: {
        optimizer: {
            enabled: true,
            runs: 200,
        },
        outputSelection: {
            "*": {
                Masset: ["storageLayout"],
                FeederPool: ["storageLayout"],
                EmissionsController: ["storageLayout"],
                SavingsContract: ["storageLayout"],
            },
        },
    },
});
exports.compilerConfig = compilerConfig;
exports.hardhatConfig = {
    networks: {
        hardhat: {
            allowUnlimitedContractSize: false,
            initialBaseFeePerGas: 0,
        },
        local: { url: "http://localhost:8545" },
        // export the NODE_URL environment variable to use remote nodes like Alchemy or Infura. ge
        // export NODE_URL=https://eth-mainnet.alchemyapi.io/v2/yourApiKey
        ropsten: {
            url: process.env.NODE_URL || "",
        },
        polygon_testnet: {
            url: process.env.NODE_URL || "https://rpc-mumbai.maticvigil.com",
        },
        polygon_mainnet: {
            url: process.env.NODE_URL || "https://rpc-mainnet.matic.quiknode.pro",
        },
        mainnet: {
            url: process.env.NODE_URL || "https://main-light.eth.linkpool.io",
        },
    },
    solidity: {
        compilers: [{ ...exports.compilerConfig("0.8.6") }],
    },
    paths: { artifacts: "./build" },
    abiExporter: {
        path: "./abis",
        clear: true,
        flat: true,
    },
    gasReporter: {
        currency: "USD",
        gasPrice: 30,
    },
    mocha: {
        timeout: 240000, // 4 min timeout
    },
    typechain: {
        outDir: "types/generated",
        target: "ethers-v5",
    },
    tenderly: {
        username: "alsco77",
        project: "xZeno",
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_KEY,
    },
};
exports.default = exports.hardhatConfig;
//# sourceMappingURL=hardhat.config.js.map
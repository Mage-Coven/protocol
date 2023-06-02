import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@tenderly/hardhat-tenderly";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-abi-exporter";
import "@nomiclabs/hardhat-etherscan";
import "ts-node/register";
import "tsconfig-paths/register";
export declare const compilerConfig: (version: string) => {
    version: string;
    settings: {
        optimizer: {
            enabled: boolean;
            runs: number;
        };
        outputSelection: {
            "*": {
                Masset: string[];
                FeederPool: string[];
                EmissionsController: string[];
                SavingsContract: string[];
            };
        };
    };
};
export declare const hardhatConfig: {
    networks: {
        hardhat: {
            allowUnlimitedContractSize: boolean;
            initialBaseFeePerGas: number;
        };
        local: {
            url: string;
        };
        ropsten: {
            url: string;
        };
        polygon_testnet: {
            url: string;
        };
        polygon_mainnet: {
            url: string;
        };
        mainnet: {
            url: string;
        };
    };
    solidity: {
        compilers: {
            version: string;
            settings: {
                optimizer: {
                    enabled: boolean;
                    runs: number;
                };
                outputSelection: {
                    "*": {
                        Masset: string[];
                        FeederPool: string[];
                        EmissionsController: string[];
                        SavingsContract: string[];
                    };
                };
            };
        }[];
    };
    paths: {
        artifacts: string;
    };
    abiExporter: {
        path: string;
        clear: boolean;
        flat: boolean;
    };
    gasReporter: {
        currency: string;
        gasPrice: number;
    };
    mocha: {
        timeout: number;
    };
    typechain: {
        outDir: string;
        target: string;
    };
    tenderly: {
        username: string;
        project: string;
    };
    etherscan: {
        apiKey: string;
    };
};
export default hardhatConfig;

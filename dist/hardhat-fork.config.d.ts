declare const _default: {
    networks: {
        hardhat: {
            allowUnlimitedContractSize: boolean;
            forking: {
                url: string;
            };
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
export default _default;

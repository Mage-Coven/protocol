"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_config_1 = require("./hardhat.config");
exports.default = {
    ...hardhat_config_1.hardhatConfig,
    networks: {
        ...hardhat_config_1.hardhatConfig.networks,
        hardhat: {
            allowUnlimitedContractSize: false,
            blockGasLimit: 20000000,
            forking: {
                url: process.env.NODE_URL || "https://matic-mainnet-archive-rpc.bwarelabs.com",
            },
        },
    },
};
//# sourceMappingURL=hardhat-fork-polygon.config.js.map
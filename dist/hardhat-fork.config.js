"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_config_1 = require("./hardhat.config");
exports.default = {
    ...hardhat_config_1.hardhatConfig,
    networks: {
        ...hardhat_config_1.hardhatConfig.networks,
        hardhat: {
            allowUnlimitedContractSize: false,
            forking: {
                url: process.env.NODE_URL || "",
            },
        },
    },
};
//# sourceMappingURL=hardhat-fork.config.js.map
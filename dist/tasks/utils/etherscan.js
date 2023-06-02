"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyEtherscan = exports.sleep = void 0;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
exports.sleep = sleep;
const verifyEtherscan = async (hre, contract) => {
    if (hre.network.name !== "hardhat") {
        // wait for the Etherscan backend to pick up the deployed contract
        await exports.sleep(10000);
        console.log(`About to verify ${contract.address} on Etherscan`);
        await hre.run("verify:verify", contract);
    }
};
exports.verifyEtherscan = verifyEtherscan;
//# sourceMappingURL=etherscan.js.map
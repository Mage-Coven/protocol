"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("ts-node/register");
require("tsconfig-paths/register");
const config_1 = require("hardhat/config");
const generated_1 = require("types/generated");
const signerFactory_1 = require("./utils/signerFactory");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
const deploy_utils_1 = require("./utils/deploy-utils");
const tokens_1 = require("./utils/tokens");
const etherscan_1 = require("./utils/etherscan");
config_1.task("deploy-dud-contracts", "Deploys dud platform and integration contracts for migration zUSD migration from Iron Bank")
    .addParam("feeder", "Token symbol or address of the Feeder Pool.", undefined, config_1.types.string, false)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const nexusAddress = networkAddressFactory_1.resolveAddress("Nexus", chain);
    const feederPoolAddress = networkAddressFactory_1.resolveAddress(taskArgs.feeder, chain, "feederPool");
    const platformConstructorArgs = [nexusAddress, tokens_1.zUSD.address];
    const dudPlatform = await deploy_utils_1.deployContract(new generated_1.DudPlatform__factory(signer), "DudPlatform", platformConstructorArgs);
    await etherscan_1.verifyEtherscan(hre, {
        address: dudPlatform.address,
        constructorArguments: platformConstructorArgs,
        contract: "contracts/masset/peripheral/DudPlatform.sol:DudPlatform",
    });
    const integrationConstructorArgs = [nexusAddress, feederPoolAddress, tokens_1.zUSD.address, dudPlatform.address];
    const dudIntegration = await deploy_utils_1.deployContract(new generated_1.DudIntegration__factory(signer), "DudIntegration", integrationConstructorArgs);
    const tx1 = await dudIntegration["initialize()"]();
    await deploy_utils_1.logTxDetails(tx1, "DudIntegration.initialize");
    await etherscan_1.verifyEtherscan(hre, {
        address: dudIntegration.address,
        constructorArguments: integrationConstructorArgs,
        contract: "contracts/masset/peripheral/DudIntegration.sol:DudIntegration",
    });
    const tx2 = await dudPlatform.initialize(dudIntegration.address);
    await deploy_utils_1.logTxDetails(tx2, "DudPlatform.initialize");
});
module.exports = {};
//# sourceMappingURL=ironBankMigration.js.map
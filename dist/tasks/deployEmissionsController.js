"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("ts-node/register");
require("tsconfig-paths/register");
const config_1 = require("hardhat/config");
const generated_1 = require("types/generated");
const signerFactory_1 = require("./utils/signerFactory");
const emissions_utils_1 = require("./utils/emissions-utils");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
const deploy_utils_1 = require("./utils/deploy-utils");
const tokens_1 = require("./utils/tokens");
config_1.task("deploy-emissions-polly", "Deploys L2EmissionsController and L2 Bridge Recipients for Polygon zUSD Vault and FRAX Farm")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const l2EmissionsController = await emissions_utils_1.deployL2EmissionsController(signer, hre);
    console.log(`Set EmissionsController contract name in networkAddressFactory to ${l2EmissionsController.address}`);
    const bridgeRecipient = await emissions_utils_1.deployL2BridgeRecipients(signer, hre, l2EmissionsController.address);
    console.log(`Set PzUSD bridgeRecipient to ${bridgeRecipient.address}`);
    const disperseForwarder = await emissions_utils_1.deployDisperseForwarder(signer, hre);
    console.log(`Set PBAL bridgeRecipient to ${disperseForwarder.address}`);
});
config_1.task("deploy-emissions")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const emissionsController = await emissions_utils_1.deployEmissionsController(signer, hre);
    console.log(`Set EmissionsController in the networkAddressFactory to ${emissionsController.address}`);
});
config_1.task("deploy-bridge-forwarder", "Deploys a BridgeForwarder contract on mainnet for Polygon dials.")
    .addParam("token", "Token on the Polygon network that is configured with `bridgeRecipient`. eg zUSD, FRAX, BAL.", undefined, config_1.types.string)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const l2Chain = chain === tokens_1.Chain.mainnet ? tokens_1.Chain.polygon : tokens_1.Chain.mumbai;
    const bridgeRecipientAddress = networkAddressFactory_1.resolveAddress(taskArgs.token, l2Chain, "bridgeRecipient");
    await emissions_utils_1.deployBridgeForwarder(signer, hre, bridgeRecipientAddress);
});
config_1.task("deploy-basic-forwarder", "Deploys a basic rewards forwarder from the emissions controller.")
    .addParam("recipient", "Contract or EOA that will receive the ZENO rewards.", undefined, config_1.types.string)
    .addOptionalParam("owner", "Contract owner to transfer ownership to after deployment.", undefined, config_1.types.string)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const emissionsControllerAddress = networkAddressFactory_1.resolveAddress("EmissionsController", chain);
    await emissions_utils_1.deployBasicForwarder(signer, emissionsControllerAddress, taskArgs.recipient, hre, taskArgs.owner);
});
config_1.task("deploy-votium-forwarder", "Deploys a Votium forwarder from the emissions controller.")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const votiumBribeForwarder = await emissions_utils_1.deployVotiumBribeForwarder(signer, hre);
    console.log(`Set VotiumForwarder contract name in networkAddressFactory to ${votiumBribeForwarder.address}`);
});
config_1.task("deploy-revenue-buy-back")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const revenueRecipient = await emissions_utils_1.deployRevenueBuyBack(signer, hre);
    console.log(`Governor call SavingsManager.setRevenueRecipient to ${revenueRecipient.address} for zUSD and mBTC`);
    console.log(`Governor call setMassetConfig for zUSD and mBTC`);
});
config_1.task("deploy-mock-root-chain-manager", "Deploys a mocked Polygon PoS Bridge")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    await deploy_utils_1.deployContract(new generated_1.MockRootChainManager__factory(signer), "MockRootChainManager");
});
module.exports = {};
//# sourceMappingURL=deployEmissionsController.js.map
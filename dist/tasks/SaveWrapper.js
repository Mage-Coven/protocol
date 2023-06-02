"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("ts-node/register");
require("tsconfig-paths/register");
const config_1 = require("hardhat/config");
const generated_1 = require("../types/generated");
const signerFactory_1 = require("./utils/signerFactory");
const deploy_utils_1 = require("./utils/deploy-utils");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
const etherscan_1 = require("./utils/etherscan");
config_1.task("SaveWrapper.deploy", "Deploy a new SaveWrapper")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const nexusAddress = networkAddressFactory_1.resolveAddress("Nexus", chain);
    const constructorArguments = [nexusAddress];
    const wrapper = await deploy_utils_1.deployContract(new generated_1.SaveWrapper__factory(signer), "SaveWrapper", constructorArguments);
    await etherscan_1.verifyEtherscan(hre, {
        address: wrapper.address,
        contract: "contracts/savings/peripheral/SaveWrapper.sol:SaveWrapper",
        constructorArguments,
    });
});
config_1.task("SaveWrapper.approveMasset", "Sets approvals for a new mAsset")
    .addParam("masset", "Token symbol of the mAsset. eg zUSD or mBTC", undefined, config_1.types.string, false)
    .addParam("bassets", "Comma separated symbols of the base assets. eg USDC,DAI,USDT,sUSD", undefined, config_1.types.string, false)
    .addParam("fassets", "Comma separated symbols of the Feeder Pool assets. eg GUSD,BUSD,alUSD,FEI,HBTC", undefined, config_1.types.string, false)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const wrapperAddress = networkAddressFactory_1.resolveAddress("SaveWrapper", chain);
    const wrapper = generated_1.SaveWrapper__factory.connect(wrapperAddress, signer);
    const mAssetToken = networkAddressFactory_1.resolveToken(taskArgs.masset, chain);
    const bAssetSymbols = taskArgs.bassets.split(",");
    const bAssetAddresses = bAssetSymbols.map((symbol) => networkAddressFactory_1.resolveAddress(symbol, chain));
    const fAssetSymbols = taskArgs.fassets.split(",");
    const fAssetAddresses = fAssetSymbols.map((symbol) => networkAddressFactory_1.resolveAddress(symbol, chain, "address"));
    const feederPoolAddresses = fAssetSymbols.map((symbol) => networkAddressFactory_1.resolveAddress(symbol, chain, "feederPool"));
    const tx = await wrapper["approve(address,address[],address[],address[],address,address)"](mAssetToken.address, bAssetAddresses, feederPoolAddresses, fAssetAddresses, mAssetToken.savings, mAssetToken.vault);
    await deploy_utils_1.logTxDetails(tx, `SaveWrapper approve mAsset ${taskArgs.masset}, bAssets ${taskArgs.bassets} and feeder pools ${taskArgs.fassets}`);
});
config_1.task("SaveWrapper.approveMulti", "Sets approvals for multiple tokens/a single spender")
    .addParam("tokens", "Comma separated symbols of the tokens that is being approved. eg USDC,DAI,USDT,sUSD", undefined, config_1.types.string, false)
    .addParam("spender", "Token symbol of the mAsset or address type. eg zUSD, mBTC, feederPool, savings or vault", undefined, config_1.types.string, false)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const wrapperAddress = networkAddressFactory_1.resolveAddress("SaveWrapper", chain);
    const wrapper = generated_1.SaveWrapper__factory.connect(wrapperAddress, signer);
    const tokenSymbols = taskArgs.tokens.split(",");
    const tokenAddresses = tokenSymbols.map((symbol) => networkAddressFactory_1.resolveAddress(symbol, chain));
    const spenderAddress = ["feederPool", "savings", "vault"].includes(taskArgs.spender)
        ? networkAddressFactory_1.resolveAddress(taskArgs.token, chain, taskArgs.spender) // token is zUSD or mBTC
        : networkAddressFactory_1.resolveAddress(taskArgs.spender, chain); // spender is zUSD or mBTC
    const tx = await wrapper["approve(address[],address)"](tokenAddresses, spenderAddress);
    await deploy_utils_1.logTxDetails(tx, "Approve multiple tokens/single spender");
});
config_1.task("SaveWrapper.approve", "Sets approvals for a single token/spender")
    .addParam("token", "Symbol of the token that is being approved. eg USDC, WBTC, FEI, HBTC, zUSD, izUSD", undefined, config_1.types.string, false)
    .addParam("spender", "Token symbol of the mAsset or address type. eg zUSD, mBTC, feederPool, savings or vault", undefined, config_1.types.string, false)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    if (!taskArgs.spender) {
        throw Error(`spender must be a mAsset symbol, eg zUSD or mBTC, or an address type of a mAsset, eg feederPool, savings or vault`);
    }
    const chain = networkAddressFactory_1.getChain(hre);
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const wrapperAddress = networkAddressFactory_1.resolveAddress("SaveWrapper", chain);
    const wrapper = generated_1.SaveWrapper__factory.connect(wrapperAddress, signer);
    const tokenAddress = networkAddressFactory_1.resolveAddress(taskArgs.token, chain);
    const spenderAddress = ["feederPool", "savings", "vault"].includes(taskArgs.spender)
        ? networkAddressFactory_1.resolveAddress(taskArgs.token, chain, taskArgs.spender) // token is zUSD or mBTC
        : networkAddressFactory_1.resolveAddress(taskArgs.spender, chain); // spender is zUSD or mBTC
    const tx = await wrapper["approve(address,address)"](tokenAddress, spenderAddress);
    await deploy_utils_1.logTxDetails(tx, "Approve single token/spender");
});
//# sourceMappingURL=SaveWrapper.js.map
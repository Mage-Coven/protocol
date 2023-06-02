"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-restricted-syntax */
const math_1 = require("@utils/math");
const config_1 = require("hardhat/config");
const utils_1 = require("ethers/lib/utils");
const generated_1 = require("types/generated");
const Comptroller__factory_1 = require("types/generated/factories/Comptroller__factory");
const _20210817_json_1 = __importDefault(require("./balancer-zeno-rewards/20210817.json"));
const utils_2 = require("./utils");
const snap_utils_1 = require("./utils/snap-utils");
const signerFactory_1 = require("./utils/signerFactory");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
const flashbots_1 = require("./utils/flashbots");
config_1.task("sum-rewards", "Totals the rewards in a disperse json file")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async () => {
    let total = math_1.BN.from(0);
    let count = 0;
    const rewardsSorted = Object.fromEntries(Object.entries(_20210817_json_1.default).sort(([, a], [, b]) => parseFloat(a) - parseFloat(b)));
    for (const [address, amount] of Object.entries(rewardsSorted)) {
        total = total.add(math_1.simpleToExactAmount(amount));
        count += 1;
        console.log(`address ${address} ${amount}`);
    }
    console.log(`Total ${utils_2.usdFormatter(total)}`);
    console.log(`Count ${count}`);
});
config_1.subtask("rewards", "Get Compound and Aave platform reward tokens")
    .addOptionalParam("block", "Block number to compare rates at. (default: current block)", 0, config_1.types.int)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const block = await snap_utils_1.getBlock(hre.ethers, taskArgs.block);
    console.log(`\nGetting platform tokens at block ${block.blockNumber}, ${block.blockTime}`);
    await snap_utils_1.getCompTokens(signer, block);
    await snap_utils_1.getAaveTokens(signer, block);
    await snap_utils_1.getAlcxTokens(signer, block);
});
config_1.task("rewards").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("collect-interest-dist", "Collects and distributes mAsset interest").setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const collector = generated_1.Collector__factory.connect(networkAddressFactory_1.resolveAddress("Collector", chain), signer);
    const tx = await collector.distributeInterest([utils_2.zUSD.address, utils_2.mBTC.address], false);
    await utils_2.logTxDetails(tx, `collect fees from zUSD and mBTC`);
});
config_1.task("collect-interest-dist").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("liq-claim-comp", "Claimed COMP to the integration contract")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const compControllerAddress = networkAddressFactory_1.resolveAddress("CompController", chain);
    const compController = Comptroller__factory_1.Comptroller__factory.connect(compControllerAddress, signer);
    const tx = await compController["claimComp(address,address[])"](utils_2.USDC.integrator, [utils_2.USDC.liquidityProvider]);
    const receipt = await utils_2.logTxDetails(tx, "claim COMP");
    const event = receipt.events.find((e) => e.event === "DistributedSupplierComp");
    console.log(`Claimed ${utils_1.formatUnits(event.args[2])} COMP`);
});
config_1.task("liq-claim-comp").setAction(async (taskArgs, hre, runSuper) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    let block = await snap_utils_1.getBlock(hre.ethers, "latest");
    console.log(`\nGetting platform tokens at block ${block.blockNumber}, ${block.blockTime}`);
    await snap_utils_1.getCompTokens(signer, block);
    await runSuper();
    block = await snap_utils_1.getBlock(hre.ethers, "latest");
    console.log(`\nGetting platform tokens at block ${block.blockNumber}, ${block.blockTime}`);
    await snap_utils_1.getCompTokens(signer, block);
});
config_1.subtask("liq-trig", "Triggers a liquidation of a integration contract")
    .addOptionalParam("basset", "Token symbol of bAsset that is integrated to a platform. eg USDC, WBTC, GUSD, alUSD", "USDC", config_1.types.string)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const bAsset = await networkAddressFactory_1.resolveToken(taskArgs.basset, chain, "integrator");
    const liquidatorAddress = await networkAddressFactory_1.resolveAddress("Liquidator", chain);
    const liquidator = generated_1.Liquidator__factory.connect(liquidatorAddress, signer);
    let tx;
    if (hre.network.name === "hardhat") {
        tx = await liquidator.triggerLiquidation(bAsset.integrator);
    }
    else {
        // Send via Flashbots
        const populatedTx = await liquidator.populateTransaction.triggerLiquidation(bAsset.integrator);
        tx = await flashbots_1.sendPrivateTransaction(populatedTx, signer);
    }
    await utils_2.logTxDetails(tx, `trigger liquidation for ${taskArgs.basset}`);
});
config_1.task("liq-trig").setAction(async (_, hre, runSuper) => {
    await runSuper();
});
config_1.subtask("liq-trig-aave", "Triggers a liquidation of stkAAVE")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const liquidatorAddress = await networkAddressFactory_1.resolveAddress("Liquidator", chain);
    const liquidator = generated_1.Liquidator__factory.connect(liquidatorAddress, signer);
    let tx;
    if (hre.network.name === "hardhat") {
        tx = await liquidator.triggerLiquidationAave();
    }
    else {
        // Send via Flashbots
        const populatedTx = await liquidator.populateTransaction.triggerLiquidationAave();
        tx = await flashbots_1.sendPrivateTransaction(populatedTx, signer);
    }
    await utils_2.logTxDetails(tx, `trigger liquidation for Aave`);
});
config_1.task("liq-trig-aave").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("liq-claim-aave", "Call liquidator to claim stkAAVE")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const liquidatorAddress = await networkAddressFactory_1.resolveAddress("Liquidator", chain);
    const liquidator = generated_1.Liquidator__factory.connect(liquidatorAddress, signer);
    const tx = await liquidator.claimStakedAave();
    await utils_2.logTxDetails(tx, "claim Aave");
});
config_1.task("liq-claim-aave").setAction(async (_, __, runSuper) => {
    await runSuper();
});
//# sourceMappingURL=rewards.js.map
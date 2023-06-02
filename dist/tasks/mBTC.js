"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const btcConstants_1 = require("@utils/btcConstants");
const utils_1 = require("ethers/lib/utils");
const config_1 = require("hardhat/config");
const math_1 = require("@utils/math");
const ZusdEth__factory_1 = require("types/generated/factories/ZusdEth__factory");
const generated_1 = require("types/generated");
const storage_utils_1 = require("./utils/storage-utils");
const snap_utils_1 = require("./utils/snap-utils");
const tokens_1 = require("./utils/tokens");
const rates_utils_1 = require("./utils/rates-utils");
const signerFactory_1 = require("./utils/signerFactory");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
const bAssets = [tokens_1.renBTC, tokens_1.sBTC, tokens_1.WBTC];
const btcFormatter = (amount, decimals = 18, pad = 7, displayDecimals = 3) => {
    const string2decimals = parseFloat(utils_1.formatUnits(amount, decimals)).toFixed(displayDecimals);
    // Add thousands separator
    return string2decimals.replace(/\B(?=(\d{3})+(?!\d))/g, ",").padStart(pad);
};
const getMasset = (signer, contractAddress = tokens_1.mBTC.address) => ZusdEth__factory_1.ZusdEth__factory.connect(contractAddress, signer);
config_1.task("mBTC-storage", "Dumps mBTC's storage data")
    .addOptionalParam("block", "Block number to get storage from. (default: current block)", 0, config_1.types.int)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre);
    const toBlockNumber = taskArgs.block ? taskArgs.block : await hre.ethers.provider.getBlockNumber();
    console.log(`Block number ${toBlockNumber}`);
    const mAsset = getMasset(signer);
    await storage_utils_1.dumpTokenStorage(mAsset, toBlockNumber);
    await storage_utils_1.dumpBassetStorage(mAsset, toBlockNumber);
    await storage_utils_1.dumpConfigStorage(mAsset, toBlockNumber);
});
config_1.task("mBTC-snap", "Get the latest data from the mBTC contracts")
    .addOptionalParam("from", "Block to query transaction events from. (default: deployment block)", 12094461, config_1.types.int)
    .addOptionalParam("to", "Block to query transaction events to. (default: current block)", 0, config_1.types.int)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre);
    const chain = networkAddressFactory_1.getChain(hre);
    const { ethers, network } = hre;
    let exposedValidator;
    if (network.name === "hardhat") {
        const LogicFactory = await ethers.getContractFactory("MassetLogic");
        const logicLib = await LogicFactory.deploy();
        const linkedAddress = {
            libraries: {
                MassetLogic: logicLib.address,
            },
        };
        const massetFactory = await ethers.getContractFactory("ExposedMassetLogic", linkedAddress);
        exposedValidator = await massetFactory.deploy();
    }
    const mAsset = getMasset(signer);
    const savingsManagerAddress = networkAddressFactory_1.getChainAddress("SavingsManager", chain);
    const savingsManager = generated_1.SavingsManager__factory.connect(savingsManagerAddress, signer);
    const { fromBlock, toBlock } = await snap_utils_1.getBlockRange(ethers, taskArgs.from, taskArgs.to);
    const mintSummary = await snap_utils_1.getMints(bAssets, mAsset, fromBlock.blockNumber, toBlock.blockNumber, btcFormatter);
    const mintMultiSummary = await snap_utils_1.getMultiMints(bAssets, mAsset, fromBlock.blockNumber, toBlock.blockNumber, btcFormatter);
    const redeemSummary = await snap_utils_1.getRedemptions(bAssets, mAsset, fromBlock.blockNumber, toBlock.blockNumber, btcFormatter);
    const redeemMultiSummary = await snap_utils_1.getMultiRedemptions(bAssets, mAsset, fromBlock.blockNumber, toBlock.blockNumber, btcFormatter);
    const swapSummary = await snap_utils_1.getSwaps(bAssets, mAsset, fromBlock.blockNumber, toBlock.blockNumber, btcFormatter);
    const tvlConfig = {
        startingCap: btcConstants_1.startingCap,
        capFactor: btcConstants_1.capFactor,
        invariantValidatorAddress: btcConstants_1.contracts.mainnet.InvariantValidator,
    };
    await snap_utils_1.getBasket(mAsset, btcConstants_1.btcBassets.map((b) => b.symbol), "mBTC", btcFormatter, toBlock.blockNumber, tvlConfig, exposedValidator);
    await snap_utils_1.snapConfig(mAsset, toBlock.blockNumber);
    let accounts = [];
    if (chain === tokens_1.Chain.mainnet) {
        accounts = [
            {
                name: "imBTC",
                address: tokens_1.mBTC.savings,
            },
            {
                name: "tBTC Feeder Pool",
                address: tokens_1.TBTC.feederPool,
            },
            {
                name: "HBTC Feeder Pool",
                address: tokens_1.HBTC.feederPool,
            },
        ];
    }
    const balances = await snap_utils_1.getBalances(mAsset, accounts, btcFormatter, toBlock.blockNumber);
    await snap_utils_1.getCollectedInterest(bAssets, mAsset, savingsManager, fromBlock, toBlock, btcFormatter, balances.save);
    snap_utils_1.outputFees(mintSummary, mintMultiSummary, swapSummary, redeemSummary, redeemMultiSummary, balances, fromBlock.blockTime, toBlock.blockTime, btcFormatter);
});
config_1.task("mBTC-rates", "mBTC rate comparison to Curve")
    .addOptionalParam("block", "Block number to compare rates at. (default: current block)", 0, config_1.types.int)
    .addOptionalParam("swapSize", "Swap size to compare rates with Curve", 1, config_1.types.float)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre);
    const chain = networkAddressFactory_1.getChain(hre);
    const mAsset = await getMasset(signer);
    const block = await snap_utils_1.getBlock(hre.ethers, taskArgs.block);
    console.log(`\nGetting rates for mBTC at block ${block.blockNumber}, ${block.blockTime}`);
    console.log("      Qty Input     Output      Qty Out    Rate             Output    Rate   Diff      Arb$");
    await rates_utils_1.getSwapRates(bAssets, bAssets, mAsset, block.blockNumber, btcFormatter, math_1.BN.from(taskArgs.swapSize), chain);
    await snap_utils_1.snapConfig(mAsset, block.blockNumber);
});
module.exports = {};
//# sourceMappingURL=mBTC.js.map
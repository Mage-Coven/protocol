"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zusdUpgradeBlock = void 0;
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
require("ts-node/register");
require("tsconfig-paths/register");
const config_1 = require("hardhat/config");
const generated_1 = require("types/generated");
const math_1 = require("@utils/math");
const ZusdEth__factory_1 = require("types/generated/factories/ZusdEth__factory");
const ZusdLegacy__factory_1 = require("types/generated/factories/ZusdLegacy__factory");
const storage_utils_1 = require("./utils/storage-utils");
const snap_utils_1 = require("./utils/snap-utils");
const tokens_1 = require("./utils/tokens");
const quantity_formatters_1 = require("./utils/quantity-formatters");
const rates_utils_1 = require("./utils/rates-utils");
const utils_1 = require("./utils");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
const zUsdBassets = [tokens_1.sUSD, tokens_1.USDC, tokens_1.DAI, tokens_1.USDT];
const zUsdPolygonBassets = [tokens_1.PUSDC, tokens_1.PDAI, tokens_1.PUSDT];
// major zUSD upgrade to ZusdV3 that changes the ABI
exports.zusdUpgradeBlock = 12094376;
const getMasset = (signer, networkName, block) => {
    if (networkName === "polygon_mainnet") {
        return generated_1.Masset__factory.connect(tokens_1.PzUSD.address, signer);
    }
    if (networkName === "polygon_testnet") {
        return generated_1.Masset__factory.connect(tokens_1.MzUSD.address, signer);
    }
    if (networkName === "ropsten") {
        return ZusdEth__factory_1.ZusdEth__factory.connect(tokens_1.RzUSD.address, signer);
    }
    // The block zUSD was upgraded to the latest Masset with contract name (Zusdv3)
    if (block < exports.zusdUpgradeBlock) {
        return ZusdLegacy__factory_1.ZusdLegacy__factory.connect(tokens_1.zUSD.address, signer);
    }
    return ZusdEth__factory_1.ZusdEth__factory.connect(tokens_1.zUSD.address, signer);
};
config_1.task("zUSD-storage", "Dumps zUSD's storage data")
    .addOptionalParam("block", "Block number to get storage from. (default: current block)", 0, config_1.types.int)
    .addOptionalParam("type", "Type of storage to report. token, basset, config or all.", "all", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await utils_1.getSigner(hre);
    const blockNumber = taskArgs.block ? taskArgs.block : await hre.ethers.provider.getBlockNumber();
    console.log(`Block number ${blockNumber}`);
    const mAsset = getMasset(signer, hre.network.name, blockNumber);
    if (["token", "all"].includes(taskArgs.type))
        await storage_utils_1.dumpTokenStorage(mAsset, blockNumber);
    if (["basset", "all"].includes(taskArgs.type))
        await storage_utils_1.dumpBassetStorage(mAsset, blockNumber);
    if (["config", "all"].includes(taskArgs.type))
        await storage_utils_1.dumpConfigStorage(mAsset, blockNumber);
});
config_1.task("zUSD-snap", "Snaps zUSD")
    .addOptionalParam("from", "Block to query transaction events from. (default: deployment block)", 12094461, config_1.types.int)
    .addOptionalParam("to", "Block to query transaction events to. (default: current block)", 0, config_1.types.int)
    .setAction(async (taskArgs, hre) => {
    const signer = await utils_1.getSigner(hre);
    const chain = networkAddressFactory_1.getChain(hre);
    const { network, ethers } = hre;
    let exposedValidator;
    if (!["mainnet", "polygon_mainnet"].includes(network.name)) {
        console.log("Not a mainnet chain");
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
    const { fromBlock, toBlock } = await snap_utils_1.getBlockRange(hre.ethers, taskArgs.from, taskArgs.to);
    const mAsset = getMasset(signer, network.name, toBlock.blockNumber);
    const savingsManagerAddress = networkAddressFactory_1.getChainAddress("SavingsManager", chain);
    const savingsManager = generated_1.SavingsManager__factory.connect(savingsManagerAddress, signer);
    const bAssets = network.name.includes("polygon") ? zUsdPolygonBassets : zUsdBassets;
    let accounts = [];
    if (chain === tokens_1.Chain.mainnet) {
        accounts = [
            {
                name: "izUSD",
                address: tokens_1.zUSD.savings,
            },
            {
                name: "Iron Bank",
                address: "0xbe86e8918dfc7d3cb10d295fc220f941a1470c5c",
            },
            {
                name: "Curve zUSD",
                address: "0x8474ddbe98f5aa3179b3b3f5942d724afcdec9f6",
            },
            {
                name: "xZeno DAO",
                address: "0x3dd46846eed8D147841AE162C8425c08BD8E1b41",
            },
            {
                name: "Balancer ETH/zUSD 50/50 #2",
                address: "0xe036cce08cf4e23d33bc6b18e53caf532afa8513",
            },
        ];
    }
    else if (chain === tokens_1.Chain.polygon) {
        accounts = [
            {
                name: "izUSD",
                address: tokens_1.PzUSD.savings,
            },
        ];
    }
    const mintSummary = await snap_utils_1.getMints(bAssets, mAsset, fromBlock.blockNumber, toBlock.blockNumber, quantity_formatters_1.usdFormatter);
    const mintMultiSummary = await snap_utils_1.getMultiMints(bAssets, mAsset, fromBlock.blockNumber, toBlock.blockNumber, quantity_formatters_1.usdFormatter);
    const swapSummary = await snap_utils_1.getSwaps(bAssets, mAsset, fromBlock.blockNumber, toBlock.blockNumber, quantity_formatters_1.usdFormatter);
    const redeemSummary = await snap_utils_1.getRedemptions(bAssets, mAsset, fromBlock.blockNumber, toBlock.blockNumber, quantity_formatters_1.usdFormatter);
    const redeemMultiSummary = await snap_utils_1.getMultiRedemptions(bAssets, mAsset, fromBlock.blockNumber, toBlock.blockNumber, quantity_formatters_1.usdFormatter);
    await snap_utils_1.snapConfig(mAsset, toBlock.blockNumber);
    await snap_utils_1.getBasket(mAsset, bAssets.map((b) => b.symbol), "zUSD", quantity_formatters_1.usdFormatter, toBlock.blockNumber, undefined, exposedValidator);
    const balances = await snap_utils_1.getBalances(mAsset, accounts, quantity_formatters_1.usdFormatter, toBlock.blockNumber);
    await snap_utils_1.getCollectedInterest(bAssets, mAsset, savingsManager, fromBlock, toBlock, quantity_formatters_1.usdFormatter, balances.save);
    await snap_utils_1.snapSave("zUSD", signer, chain, toBlock.blockNumber);
    snap_utils_1.outputFees(mintSummary, mintMultiSummary, swapSummary, redeemSummary, redeemMultiSummary, balances, fromBlock.blockTime, toBlock.blockTime, quantity_formatters_1.usdFormatter);
});
config_1.task("zUSD-rates", "zUSD rate comparison to Curve")
    .addOptionalParam("block", "Block number to compare rates at. (default: current block)", 0, config_1.types.int)
    .addOptionalParam("swapSize", "Swap size to compare rates with Curve", 10000, config_1.types.float)
    .setAction(async (taskArgs, hre) => {
    const signer = await utils_1.getSigner(hre);
    const chain = networkAddressFactory_1.getChain(hre);
    const block = await snap_utils_1.getBlock(hre.ethers, taskArgs.block);
    const mAsset = await getMasset(signer, hre.network.name, block.blockNumber);
    console.log(`\nGetting rates for zUSD at block ${block.blockNumber}, ${block.blockTime}`);
    const bAssets = chain === tokens_1.Chain.polygon ? zUsdPolygonBassets : zUsdBassets;
    console.log("      Qty Input     Output      Qty Out    Rate             Output    Rate   Diff      Arb$");
    await rates_utils_1.getSwapRates(bAssets, bAssets, mAsset, block.blockNumber, quantity_formatters_1.usdFormatter, math_1.BN.from(taskArgs.swapSize), chain);
    await snap_utils_1.snapConfig(mAsset, block.blockNumber);
});
config_1.task("zUSD-BassetAdded", "Lists the BassetAdded events from a mAsset")
    .addOptionalParam("masset", "Token symbol of mAsset. eg zUSD or mBTC", "zUSD", config_1.types.string)
    .addOptionalParam("from", "Block to query transaction events from. (default: deployment block)", 10148031, config_1.types.int)
    .addOptionalParam("to", "Block to query transaction events to. (default: current block)", 0, config_1.types.int)
    .setAction(async (taskArgs, hre) => {
    const signer = await utils_1.getSigner(hre);
    const chain = await networkAddressFactory_1.getChain(hre);
    const { fromBlock, toBlock } = await snap_utils_1.getBlockRange(hre.ethers, taskArgs.from, taskArgs.to);
    const mAsset = await getMasset(signer, hre.network.name, toBlock.blockNumber);
    const massetManagerAddress = networkAddressFactory_1.getChainAddress("MassetManager", chain);
    const manager = generated_1.MassetManager__factory.connect(massetManagerAddress, signer);
    const filter = await manager.filters.BassetAdded();
    filter.address = mAsset.address;
    const logs = await mAsset.queryFilter(filter, fromBlock.blockNumber, toBlock.blockNumber);
    console.log(`${await mAsset.symbol()} ${mAsset.address}`);
    if (logs.length === 0)
        console.error(`Failed to find any BassetAdded events between blocks ${fromBlock.blockNumber} and ${toBlock.blockNumber}`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    logs.forEach((log) => {
        console.log(`Basset added at block ${log.blockNumber} in tx ${log.blockHash}`);
    });
});
module.exports = {};
//# sourceMappingURL=zUSD.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("ts-node/register");
require("tsconfig-paths/register");
const config_1 = require("hardhat/config");
const generated_1 = require("types/generated");
const math_1 = require("@utils/math");
const utils_1 = require("ethers/lib/utils");
const storage_utils_1 = require("./utils/storage-utils");
const snap_utils_1 = require("./utils/snap-utils");
const tokens_1 = require("./utils/tokens");
const quantity_formatters_1 = require("./utils/quantity-formatters");
const rates_utils_1 = require("./utils/rates-utils");
const signerFactory_1 = require("./utils/signerFactory");
const utils_2 = require("./utils");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
const params_1 = require("./utils/params");
const getBalances = async (feederPool, block, asset, quantityFormatter) => {
    const feederPoolBalance = await feederPool.totalSupply({
        blockTag: block,
    });
    const vaultBalance = await feederPool.balanceOf(asset.vault, {
        blockTag: block,
    });
    const otherBalances = feederPoolBalance.sub(vaultBalance);
    console.log("\nHolders");
    console.log(`Vault                      ${quantityFormatter(vaultBalance)} ${vaultBalance.mul(100).div(feederPoolBalance)}%`);
    console.log(`Others                     ${quantityFormatter(otherBalances)} ${otherBalances.mul(100).div(feederPoolBalance)}%`);
    console.log(`Total                      ${quantityFormatter(feederPoolBalance)}`);
    return {
        total: feederPoolBalance,
        save: vaultBalance,
        earn: math_1.BN.from(0),
    };
};
const getFeederPool = (signer, contractAddress, chain = tokens_1.Chain.mainnet) => {
    const linkedAddress = {
        "contracts/feeders/FeederLogic.sol:FeederLogic": networkAddressFactory_1.getChainAddress("FeederLogic", chain),
        "contracts/feeders/FeederManager.sol:FeederManager": networkAddressFactory_1.getChainAddress("FeederManager", chain),
    };
    const feederPoolFactory = new generated_1.FeederPool__factory(linkedAddress, signer);
    return feederPoolFactory.attach(contractAddress);
};
const getQuantities = (fAsset, _swapSize) => {
    let quantityFormatter;
    let swapSize;
    if (fAsset.quantityFormatter === "USD") {
        quantityFormatter = quantity_formatters_1.usdFormatter;
        swapSize = _swapSize || 10000;
    }
    else if (fAsset.quantityFormatter === "BTC") {
        quantityFormatter = quantity_formatters_1.btcFormatter;
        swapSize = _swapSize || 1;
    }
    return {
        quantityFormatter,
        swapSize,
    };
};
config_1.task("feeder-storage", "Dumps feeder contract storage data")
    .addOptionalParam("block", "Block number to get storage from. (default: current block)", 0, config_1.types.int)
    .addParam("fasset", "Token symbol of the feeder pool asset.  eg HBTC, TBTC, GUSD or BUSD", undefined, config_1.types.string, false)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const fAsset = tokens_1.tokens.find((t) => t.symbol === taskArgs.fasset);
    if (!fAsset) {
        console.error(`Failed to find feeder pool asset with token symbol ${taskArgs.fasset}`);
        process.exit(1);
    }
    const { blockNumber } = await snap_utils_1.getBlock(hre.ethers, taskArgs.block);
    const pool = getFeederPool(signer, fAsset.feederPool, chain);
    await storage_utils_1.dumpTokenStorage(pool, blockNumber);
    await storage_utils_1.dumpFassetStorage(pool, blockNumber);
    await storage_utils_1.dumpConfigStorage(pool, blockNumber);
});
config_1.task("feeder-snap", "Gets feeder transactions over a period of time")
    .addOptionalParam("from", "Block to query transaction events from. (default: deployment block)", 12146627, config_1.types.int)
    .addOptionalParam("to", "Block to query transaction events to. (default: current block)", 0, config_1.types.int)
    .addParam("fasset", "Token symbol of the feeder pool asset. eg HBTC, TBTC, GUSD or BUSD", undefined, config_1.types.string, false)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const { fromBlock, toBlock } = await snap_utils_1.getBlockRange(hre.ethers, taskArgs.from, taskArgs.to);
    const fAsset = tokens_1.tokens.find((t) => t.symbol === taskArgs.fasset);
    if (!fAsset) {
        console.error(`Failed to find feeder pool asset with token symbol ${taskArgs.fasset}`);
        process.exit(1);
    }
    console.log(`\nGetting snap for feeder pool ${fAsset.symbol} from block ${fromBlock.blockNumber}, to ${toBlock.blockNumber}`);
    const mAsset = tokens_1.tokens.find((t) => t.symbol === fAsset.parent);
    const fpAssets = [mAsset, fAsset];
    const feederPool = getFeederPool(signer, fAsset.feederPool);
    const savingsManagerAddress = networkAddressFactory_1.getChainAddress("SavingsManager", chain);
    const savingsManager = generated_1.SavingsManager__factory.connect(savingsManagerAddress, signer);
    const { quantityFormatter } = getQuantities(fAsset, taskArgs.swapSize);
    const mintSummary = await snap_utils_1.getMints(tokens_1.tokens, feederPool, fromBlock.blockNumber, toBlock.blockNumber, quantityFormatter);
    const mintMultiSummary = await snap_utils_1.getMultiMints(tokens_1.tokens, feederPool, fromBlock.blockNumber, toBlock.blockNumber, quantityFormatter);
    const swapSummary = await snap_utils_1.getSwaps(tokens_1.tokens, feederPool, fromBlock.blockNumber, toBlock.blockNumber, quantityFormatter);
    const redeemSummary = await snap_utils_1.getRedemptions(tokens_1.tokens, feederPool, fromBlock.blockNumber, toBlock.blockNumber, quantityFormatter);
    const redeemMultiSummary = await snap_utils_1.getMultiRedemptions(tokens_1.tokens, feederPool, fromBlock.blockNumber, toBlock.blockNumber, quantityFormatter);
    await snap_utils_1.snapConfig(feederPool, toBlock.blockNumber);
    await snap_utils_1.getBasket(feederPool, fpAssets.map((b) => b.symbol), mAsset.symbol, quantity_formatters_1.usdFormatter, toBlock.blockNumber);
    const balances = await getBalances(feederPool, toBlock.blockNumber, fAsset, quantityFormatter);
    await snap_utils_1.getCollectedInterest(fpAssets, feederPool, savingsManager, fromBlock, toBlock, quantityFormatter, balances.save);
    const data = await feederPool.data();
    console.log(`\nPending gov fees ${quantityFormatter(data.pendingFees)}`);
    snap_utils_1.outputFees(mintSummary, mintMultiSummary, swapSummary, redeemSummary, redeemMultiSummary, balances, fromBlock.blockTime, toBlock.blockTime, quantityFormatter);
});
config_1.task("feeder-rates", "Feeder rate comparison to Curve")
    .addOptionalParam("block", "Block number to compare rates at. (default: current block)", 0, config_1.types.int)
    .addOptionalParam("swapSize", "Swap size to compare rates with Curve", undefined, config_1.types.float)
    .addParam("fasset", "Token symbol of the feeder pool asset. eg HBTC, TBTC, GUSD or BUSD", undefined, config_1.types.string, false)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre);
    const chain = networkAddressFactory_1.getChain(hre);
    const block = await snap_utils_1.getBlock(hre.ethers, taskArgs.block);
    const fAsset = tokens_1.tokens.find((t) => t.symbol === taskArgs.fasset);
    if (!fAsset) {
        console.error(`Failed to find feeder pool asset with token symbol ${taskArgs.fasset}`);
        process.exit(1);
    }
    console.log(`\nGetting rates for feeder pool ${fAsset.symbol} at block ${block.blockNumber}, ${block.blockTime}`);
    const feederPool = getFeederPool(signer, fAsset.feederPool);
    const mAsset = tokens_1.tokens.find((t) => t.symbol === fAsset.parent);
    const fpAssets = [mAsset, fAsset];
    // Get the bAssets for the main pool. eg bAssets in zUSD or mBTC
    // These are the assets that are not feeder pools and parent matches the fAsset's parent
    const mpAssets = tokens_1.tokens.filter((t) => t.parent === fAsset.parent && !t.feederPool);
    const { quantityFormatter, swapSize } = getQuantities(fAsset, taskArgs.swapSize);
    console.log("      Qty Input     Output      Qty Out    Rate             Output    Rate   Diff      Arb$");
    await rates_utils_1.getSwapRates(fpAssets, fpAssets, feederPool, block.blockNumber, quantityFormatter, swapSize, chain);
    await rates_utils_1.getSwapRates([fAsset], mpAssets, feederPool, block.blockNumber, quantityFormatter, swapSize, chain);
    await rates_utils_1.getSwapRates(mpAssets, [fAsset], feederPool, block.blockNumber, quantityFormatter, swapSize, chain);
    await snap_utils_1.snapConfig(feederPool, block.blockNumber);
});
config_1.task("frax-post-deploy", "Mint FRAX Feeder Pool")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs);
    const frax = generated_1.ERC20__factory.connect(tokens_1.PFRAX.address, signer);
    const fraxFp = generated_1.FeederPool__factory.connect(tokens_1.PFRAX.feederPool, signer);
    const zusd = await generated_1.IERC20__factory.connect(tokens_1.PzUSD.address, signer);
    const approveAmount = math_1.simpleToExactAmount(100);
    const bAssetAmount = math_1.simpleToExactAmount(10);
    const minAmount = math_1.simpleToExactAmount(9);
    let tx = await frax.approve(tokens_1.PFRAX.feederPool, approveAmount);
    await utils_2.logTxDetails(tx, "approve FRAX");
    tx = await zusd.approve(tokens_1.PFRAX.feederPool, approveAmount);
    await utils_2.logTxDetails(tx, "approve zUSD");
    tx = await fraxFp.mintMulti([tokens_1.PFRAX.address, tokens_1.PzUSD.address], [bAssetAmount, bAssetAmount], minAmount, await signer.getAddress());
    await utils_2.logTxDetails(tx, "mint FRAX FP");
});
config_1.task("FeederWrapper-approveAll", "Sets approvals for a Feeder Pool")
    // TODO replace these params with Token symbol
    .addParam("feeder", "Feeder Pool address", undefined, params_1.params.address, false)
    .addParam("vault", "BoostedVault contract address", undefined, params_1.params.address, false)
    .addParam("assets", "Asset addresses", undefined, params_1.params.addressArray, false)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const deployer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const feederWrapperAddress = networkAddressFactory_1.getChainAddress("FeederWrapper", chain);
    const feederWrapper = generated_1.FeederWrapper__factory.connect(feederWrapperAddress, deployer);
    const tx = await feederWrapper["approve(address,address,address[])"](taskArgs.feeder, taskArgs.vault, taskArgs.assets);
    await utils_2.logTxDetails(tx, "Approve Feeder/Vault and other assets");
});
config_1.task("FeederWrapper-approveMulti", "Sets approvals for multiple tokens/a single spender")
    .addParam("tokens", "Token addresses", undefined, params_1.params.address, false)
    .addParam("spender", "Spender address", undefined, params_1.params.address, false)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const deployer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const feederWrapperAddress = networkAddressFactory_1.getChainAddress("FeederWrapper", chain);
    const feederWrapper = generated_1.FeederWrapper__factory.connect(feederWrapperAddress, deployer);
    const tx = await feederWrapper["approve(address[],address)"](taskArgs.tokens, taskArgs.spender);
    await utils_2.logTxDetails(tx, "Approve muliple tokens/single spender");
});
config_1.task("FeederWrapper-approve", "Sets approvals for a single token/spender")
    .addParam("feederWrapper", "FeederWrapper address", undefined, params_1.params.address, false)
    .addParam("token", "Token address", undefined, params_1.params.address, false)
    .addParam("spender", "Spender address", undefined, params_1.params.address, false)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const deployer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const feederWrapperAddress = networkAddressFactory_1.getChainAddress("FeederWrapper", chain);
    const feederWrapper = generated_1.FeederWrapper__factory.connect(feederWrapperAddress, deployer);
    const tx = await feederWrapper["approve(address,address)"](taskArgs.tokens, taskArgs.spender);
    await utils_2.logTxDetails(tx, "Approve single token/spender");
});
config_1.task("feeder-mint", "Mint some Feeder Pool tokens")
    .addOptionalParam("amount", "Amount of the mAsset and fAsset to deposit", undefined, config_1.types.float)
    .addParam("fasset", "Token symbol of the feeder pool asset. eg HBTC, GUSD, PFRAX or alUSD", undefined, config_1.types.string)
    .addOptionalParam("single", "Only mint using fasset. If false, does a multi mint using fasset and masset", false, config_1.types.boolean)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const signerAddress = await signer.getAddress();
    const fAssetSymbol = taskArgs.fasset;
    const feederPoolToken = tokens_1.tokens.find((t) => t.symbol === fAssetSymbol && t.chain === chain);
    if (!feederPoolToken)
        throw Error(`Could not find feeder pool asset token with symbol ${fAssetSymbol}`);
    if (!feederPoolToken.feederPool)
        throw Error(`No feeder pool configured for token ${fAssetSymbol}`);
    const mAssetSymbol = feederPoolToken.parent;
    if (!mAssetSymbol)
        throw Error(`No parent mAsset configured for feeder pool asset ${mAssetSymbol}`);
    const mAssetToken = tokens_1.tokens.find((t) => t.symbol === mAssetSymbol && t.chain === chain);
    if (!mAssetToken)
        throw Error(`Could not find mAsset token with symbol ${mAssetToken}`);
    const fp = generated_1.FeederPool__factory.connect(feederPoolToken.feederPool, signer);
    const fpSymbol = await fp.symbol();
    const mintAmount = math_1.simpleToExactAmount(taskArgs.amount);
    if (taskArgs.single) {
        // mint Feeder Pool tokens
        const tx = await fp.mint(feederPoolToken.address, mintAmount, 0, signerAddress);
        await utils_2.logTxDetails(tx, `Mint ${fpSymbol} from ${utils_1.formatUnits(mintAmount)} ${fAssetSymbol}`);
    }
    else {
        // multi mint Feeder Pool tokens
        const tx = await fp.mintMulti([mAssetToken.address, feederPoolToken.address], [mintAmount, mintAmount], 0, signerAddress);
        await utils_2.logTxDetails(tx, `Multi mint ${fpSymbol} from ${utils_1.formatUnits(mintAmount)} ${mAssetSymbol} and ${utils_1.formatUnits(mintAmount)} ${fAssetSymbol}`);
    }
});
config_1.task("feeder-redeem", "Redeem some Feeder Pool tokens")
    .addParam("fasset", "Token symbol of the feeder pool asset. eg HBTC, GUSD, PFRAX or alUSD", undefined, config_1.types.string)
    .addParam("amount", "Amount of the feeder pool liquidity tokens to proportionately redeem", undefined, config_1.types.float)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const signerAddress = await signer.getAddress();
    const fAssetSymbol = taskArgs.fasset;
    const feederPoolToken = tokens_1.tokens.find((t) => t.symbol === fAssetSymbol && t.chain === chain);
    if (!feederPoolToken)
        throw Error(`Could not find feeder pool asset token with symbol ${fAssetSymbol}`);
    if (!feederPoolToken.feederPool)
        throw Error(`No feeder pool configured for token ${fAssetSymbol}`);
    const fp = generated_1.FeederPool__factory.connect(feederPoolToken.feederPool, signer);
    const fpSymbol = await fp.symbol();
    const fpAmount = math_1.simpleToExactAmount(taskArgs.amount);
    const minBassetAmount = fpAmount.mul(40).div(100); // min 40% for each bAsset
    // redeem Feeder Pool tokens
    const tx = await fp.redeemProportionately(fpAmount, [minBassetAmount, minBassetAmount], signerAddress);
    await utils_2.logTxDetails(tx, `Redeem ${fpSymbol} from ${utils_1.formatUnits(fpAmount)}`);
});
config_1.task("feeder-swap", "Swap some Feeder Pool tokens")
    .addParam("input", "Token symbol of the input token to the swap. eg zUSD, mBTC, HBTC, GUSD, FRAX or alUSD", undefined, config_1.types.string)
    .addParam("output", "Token symbol of the output token from the swap. eg zUSD, mBTC, HBTC, GUSD, FRAX or alUSD", undefined, config_1.types.string)
    .addParam("amount", "Amount of input tokens to swap", undefined, config_1.types.float)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const signerAddress = await signer.getAddress();
    const inputSymbol = taskArgs.input;
    const inputToken = tokens_1.tokens.find((t) => t.symbol === inputSymbol && t.chain === chain);
    if (!inputToken)
        throw Error(`Could not find input asset token with symbol ${inputSymbol}`);
    const outputSymbol = taskArgs.output;
    const outputToken = tokens_1.tokens.find((t) => t.symbol === outputSymbol && t.chain === chain);
    if (!outputToken)
        throw Error(`Could not find output asset token with symbol ${outputSymbol}`);
    let fp;
    if (inputToken.feederPool && !outputToken.feederPool) {
        fp = generated_1.FeederPool__factory.connect(inputToken.feederPool, signer);
    }
    else if (!inputToken.feederPool && outputToken.feederPool) {
        fp = generated_1.FeederPool__factory.connect(outputToken.feederPool, signer);
    }
    else {
        throw Error(`Could not find Feeder Pool for input ${inputSymbol} and output ${outputSymbol}`);
    }
    const fpSymbol = await fp.symbol();
    const inputAmount = math_1.simpleToExactAmount(taskArgs.amount);
    const minOutputAmount = inputAmount.mul(90).div(100); // min 90% of the input
    const tx = await fp.swap(inputToken.address, outputToken.address, inputAmount, minOutputAmount, signerAddress);
    await utils_2.logTxDetails(tx, `swap ${utils_1.formatUnits(inputAmount)} ${inputSymbol} for ${outputSymbol} using ${fpSymbol} Feeder Pool`);
});
config_1.task("feeder-collect-interest", "Collects interest from feeder pools")
    .addOptionalParam("fasset", "Token symbol of feeder pool. eg HBTC, alUSD or PFRAX", undefined, config_1.types.string)
    .addOptionalParam("fassets", "Comma separated token symbols of feeder pools . eg HBTC,alUSD or PFRAX", "GUSD,BUSD,alUSD,RAI,FEI", config_1.types.string)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "average", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    let fassetAddresses;
    if (taskArgs.fasset) {
        fassetAddresses = [networkAddressFactory_1.resolveAddress(taskArgs.fasset, chain, "feederPool")];
    }
    else if (taskArgs.fassets) {
        const fassetSymbols = taskArgs.fassets.split(",");
        fassetAddresses = fassetSymbols.map((symbol) => networkAddressFactory_1.resolveAddress(symbol, chain, "feederPool"));
    }
    else
        throw Error(`Missing fasset or fassets command line option`);
    const interestValidatorAddress = networkAddressFactory_1.resolveAddress("FeederInterestValidator", chain);
    const validator = generated_1.InterestValidator__factory.connect(interestValidatorAddress, signer);
    const lastBatchCollected = await validator.lastBatchCollected(fassetAddresses[0]);
    const lastBatchDate = new Date(lastBatchCollected.mul(1000).toNumber());
    console.log(`The last interest collection was ${lastBatchDate}, epoch ${lastBatchCollected} seconds`);
    const currentEpoch = new Date().getTime() / 1000;
    if (currentEpoch - lastBatchCollected.toNumber() < 60 * 60 * 12) {
        console.error(`Can not run again as the last run was less then 12 hours ago`);
        process.exit(3);
    }
    const tx = await validator.collectAndValidateInterest(fassetAddresses);
    await utils_2.logTxDetails(tx, `collect interest from ${fassetAddresses} Feeder Pools`);
});
config_1.task("feeder-collect-fees", "Collects governance fees from feeder pools")
    .addParam("fasset", "Token symbol of feeder pool. eg HBTC, alUSD or PFRAX", undefined, config_1.types.string, false)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "average", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const fpAddress = networkAddressFactory_1.resolveAddress(taskArgs.fasset, chain, "feederPool");
    const interestValidatorAddress = networkAddressFactory_1.resolveAddress("FeederInterestValidator", chain);
    const validator = generated_1.InterestValidator__factory.connect(interestValidatorAddress, signer);
    const tx = await validator.collectGovFees([fpAddress]);
    await utils_2.logTxDetails(tx, `collect gov fees from ${taskArgs.fasset} FP`);
});
config_1.task("feeder-migrate-bassets", "Migrates bAssets in a Feeder Pool to its integration contract")
    .addParam("fasset", "Token symbol of feeder pool. eg HBTC, alUSD, FRAX or RAI", undefined, config_1.types.string, false)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "average", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const fpToken = networkAddressFactory_1.resolveToken(taskArgs.fasset, chain, "feederPool");
    const feederPool = generated_1.FeederPool__factory.connect(fpToken.feederPool, signer);
    const tx = await feederPool.migrateBassets([fpToken.address], fpToken.integrator);
    await utils_2.logTxDetails(tx, `migrate ${taskArgs.fasset} feeder pool bAssets`);
});
module.exports = {};
//# sourceMappingURL=feeder.js.map
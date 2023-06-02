"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dumpConfigStorage = exports.dumpFassetStorage = exports.dumpBassetStorage = exports.dumpTokenStorage = void 0;
const BasketManager__factory_1 = require("types/generated/factories/BasketManager__factory");
const networkAddressFactory_1 = require("./networkAddressFactory");
const snap_utils_1 = require("./snap-utils");
const tokens_1 = require("./tokens");
// Get mAsset token storage variables
const dumpTokenStorage = async (token, toBlock) => {
    const override = {
        blockTag: toBlock,
    };
    console.log("\nSymbol  : ", (await token.symbol(override)).toString());
    console.log("Name    : ", (await token.name(override)).toString());
    console.log("Decimals: ", (await token.decimals(override)).toString());
    console.log("Supply  : ", (await token.totalSupply(override)).toString());
};
exports.dumpTokenStorage = dumpTokenStorage;
// Get bAsset storage variables
const dumpBassetStorage = async (mAsset, block, chain = tokens_1.Chain.mainnet) => {
    const override = {
        blockTag: block,
    };
    console.log("\nbAssets");
    // After the zUSD upgrade to ZusdV3
    if (!snap_utils_1.isZusdLegacy(mAsset)) {
        const bAssets = await mAsset.getBassets(override);
        bAssets.personal.forEach(async (personal, i) => {
            console.log(`bAsset with index ${i}`);
            console.log(` Address    :`, personal.addr.toString());
            console.log(` Integration:`, personal.integrator.toString());
            console.log(` Tx fee     :`, personal.hasTxFee.toString());
            console.log(` Status     :`, personal.status.toString());
            console.log(` Ratio      :`, bAssets[1][i].ratio.toString());
            console.log(` Vault bal  :`, bAssets[1][i].vaultBalance.toString());
            console.log("\n");
        });
    }
    else {
        // Before the zUSD upgrade to ZusdV3 where the bAssets were in a separate Basket Manager contract
        const basketManagerAddress = networkAddressFactory_1.getChainAddress("BasketManager", chain);
        const basketManager = BasketManager__factory_1.BasketManager__factory.connect(basketManagerAddress, mAsset.signer);
        const basket = await basketManager.getBassets(override);
        let i = 0;
        for (const bAsset of basket.bAssets) {
            console.log(`bAsset with index ${i}`);
            console.log(` Address    :`, bAsset.addr.toString());
            const integrationAddress = await basketManager.integrations(i, override);
            console.log(` Integration:`, integrationAddress);
            console.log(` Tx fee     :`, bAsset.isTransferFeeCharged.toString());
            console.log(` Status     :`, bAsset.status.toString());
            console.log(` Ratio      :`, bAsset.ratio.toString());
            console.log(` Vault bal  :`, bAsset.vaultBalance.toString());
            console.log(` Max weight :`, bAsset.maxWeight.toString());
            console.log("\n");
            i += 1;
        }
    }
};
exports.dumpBassetStorage = dumpBassetStorage;
// Get fAsset storage variables
const dumpFassetStorage = async (pool, bock) => {
    const override = {
        blockTag: bock,
    };
    console.log("\nbAssets");
    const fAssets = await pool.getBassets(override);
    fAssets.forEach(async (_, i) => {
        console.log(`bAsset with index ${i}`);
        console.log(` Address    :`, fAssets[0][i].addr.toString());
        console.log(` Integration:`, fAssets[0][i].integrator.toString());
        console.log(` Tx fee     :`, fAssets[0][i].hasTxFee.toString());
        console.log(` Status     :`, fAssets[0][i].status.toString());
        console.log(` Ratio      :`, fAssets[1][i].ratio.toString());
        console.log(` Vault      :`, fAssets[1][i].vaultBalance.toString());
        console.log("\n");
    });
};
exports.dumpFassetStorage = dumpFassetStorage;
// Get Masset storage variables
const dumpConfigStorage = async (mAsset, block) => {
    const override = {
        blockTag: block,
    };
    if (!snap_utils_1.isZusdLegacy(mAsset)) {
        const invariantConfig = await mAsset.getConfig(override);
        console.log("A              : ", invariantConfig.a.toString());
        console.log("Min            : ", invariantConfig.limits.min.toString());
        console.log("Max            : ", invariantConfig.limits.max.toString());
    }
    if (!snap_utils_1.isZusdEth(mAsset) && !snap_utils_1.isZusdLegacy(mAsset)) {
        // Masset and FeederPool
        const data = await mAsset.data(override);
        console.log("\nCacheSize      : ", data.cacheSize.toString());
        console.log("\nSwapFee        : ", data.swapFee.toString());
        console.log("RedemptionFee  : ", data.redemptionFee.toString());
        if (snap_utils_1.isFeederPool(mAsset)) {
            // Only FeederPools
            console.log("GovFee         : ", data.govFee.toString());
            console.log("pendingFees    : ", data.pendingFees.toString());
        }
    }
    else {
        // zUSD or mBTC
        console.log("\nSwapFee        : ", (await mAsset.swapFee({
            blockTag: block,
        })).toString());
        console.log("RedemptionFee  : ", (await mAsset.redemptionFee({
            blockTag: block,
        })).toString());
        console.log("Surplus        : ", (await mAsset.surplus({
            blockTag: block,
        })).toString());
    }
};
exports.dumpConfigStorage = dumpConfigStorage;
//# sourceMappingURL=storage-utils.js.map
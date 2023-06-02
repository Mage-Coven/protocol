import { Signer } from "ethers";
import { BN } from "@utils/math";
import { ExposedMassetLogic, FeederPool, Masset, SavingsManager } from "types/generated";
import { ZusdEth } from "types/generated/ZusdEth";
import { ZusdLegacy } from "types/generated/ZusdLegacy";
import { QuantityFormatter } from "./quantity-formatters";
import { Chain, Token } from "./tokens";
export interface TxSummary {
    count: number;
    total: BN;
    fees: BN;
}
export interface Balances {
    total: BN;
    save: BN;
    earn: BN;
}
export interface BlockInfo {
    blockNumber: number;
    blockTime: Date;
}
export interface BlockRange {
    fromBlock: BlockInfo;
    toBlock: BlockInfo;
}
export interface SwapRate {
    inputToken: Token;
    inputAmountRaw: BN;
    outputToken: Token;
    mOutputRaw: BN;
    curveOutputRaw: BN;
    curveInverseOutputRaw: BN;
}
export interface SwapQuote {
    outAmount: BN;
    exchangeRate: BN;
}
export declare function isFeederPool(asset: Masset | ZusdEth | ZusdLegacy | FeederPool): asset is FeederPool;
export declare function isZusdEth(asset: Masset | ZusdEth | ZusdLegacy | FeederPool): asset is ZusdEth;
export declare function isZusdLegacy(asset: Masset | ZusdEth | ZusdLegacy | FeederPool): asset is ZusdLegacy;
export declare const getBlock: (ethers: any, _blockNumber?: number | string) => Promise<BlockInfo>;
export declare const getBlockRange: (ethers: any, fromBlockNumber: number, _toBlockNumber?: number) => Promise<BlockRange>;
export declare const snapConfig: (asset: Masset | ZusdEth | ZusdLegacy | FeederPool, toBlock: number) => Promise<void>;
export declare const snapSave: (symbol: string, signer: Signer, chain: Chain, toBlock: number) => Promise<void>;
export interface TvlConfig {
    startingCap: BN;
    capFactor: BN;
    invariantValidatorAddress: string;
}
export declare const getBasket: (asset: Masset | ZusdEth | ZusdLegacy | FeederPool, bAssetSymbols: string[], mAssetName: string, quantityFormatter: QuantityFormatter, toBlock: number, tvlConfig?: TvlConfig, exposedLogic?: ExposedMassetLogic) => Promise<void>;
export declare const getBalances: (mAsset: Masset | ZusdEth | ZusdLegacy, accounts: {
    name: string;
    address: string;
}[], quantityFormatter: QuantityFormatter, toBlock: number) => Promise<Balances>;
export declare const getMints: (bAssets: Token[], mAsset: Masset | ZusdEth | ZusdLegacy | FeederPool, fromBlock: number, toBlock: number, quantityFormatter: QuantityFormatter) => Promise<TxSummary>;
export declare const getMultiMints: (bAssets: Token[], mAsset: Masset | ZusdEth | ZusdLegacy | FeederPool, fromBlock: number, toBlock: number, quantityFormatter: QuantityFormatter) => Promise<TxSummary>;
export declare const getSwaps: (bAssets: Token[], mAsset: Masset | ZusdEth | ZusdLegacy | FeederPool, fromBlock: number, toBlock: number, quantityFormatter: QuantityFormatter) => Promise<TxSummary>;
export declare const getRedemptions: (bAssets: Token[], mAsset: Masset | ZusdEth | ZusdLegacy | FeederPool, fromBlock: number, toBlock: number, quantityFormatter: QuantityFormatter) => Promise<TxSummary>;
export declare const getMultiRedemptions: (bAssets: Token[], mAsset: Masset | ZusdEth | ZusdLegacy | FeederPool, fromBlock: number, toBlock: number, quantityFormatter: QuantityFormatter) => Promise<TxSummary>;
export declare const calcApy: (startTime: Date, endTime: Date, quantity: BN, saveBalance: BN) => BN;
export declare const outputFees: (mints: TxSummary, multiMints: TxSummary, swaps: TxSummary, redeems: TxSummary, multiRedeems: TxSummary, balances: Balances, startTime: Date, endTime: Date, quantityFormatter: QuantityFormatter) => void;
export declare const getLiquidatorInterest: (mAsset: Masset | ZusdEth | ZusdLegacy | FeederPool, savingsManager: SavingsManager, fromBlock: BlockInfo, toBlock: BlockInfo, quantityFormatter: QuantityFormatter) => Promise<{
    total: BN;
    count: number;
}>;
export declare const getCollectedInterest: (bAssets: Token[], mAsset: Masset | ZusdEth | ZusdLegacy | FeederPool, savingsManager: SavingsManager, fromBlock: BlockInfo, toBlock: BlockInfo, quantityFormatter: QuantityFormatter, savingsBalance: BN) => Promise<TxSummary>;
export declare const quoteSwap: (signer: Signer, from: Token, to: Token, inAmount: BN, toBlock: BlockInfo, path?: string[], fees?: number[]) => Promise<SwapQuote>;
export declare const getCompTokens: (signer: Signer, toBlock: BlockInfo, quantityFormatter?: QuantityFormatter, chain?: Chain) => Promise<void>;
export declare const getAaveTokens: (signer: Signer, toBlock: BlockInfo, quantityFormatter?: QuantityFormatter, chain?: Chain) => Promise<void>;
export declare const getAlcxTokens: (signer: Signer, toBlock: BlockInfo, quantityFormatter?: QuantityFormatter, chain?: Chain) => Promise<void>;

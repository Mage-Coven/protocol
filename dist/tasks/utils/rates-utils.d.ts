import { BN } from "@utils/math";
import { FeederPool, Masset } from "types/generated";
import { ZusdEth } from "types/generated/ZusdEth";
import { ZusdLegacy } from "types/generated/ZusdLegacy";
import { QuantityFormatter } from "./quantity-formatters";
import { Chain, Token } from "./tokens";
export interface Balances {
    total: BN;
    save: BN;
    earn: BN;
}
export interface BlockInfo {
    fromBlockNumber: number;
    toBlockNumber: number;
    startTime: Date;
    endTime: Date;
}
export interface SwapRate {
    inputToken: Token;
    inputAmountRaw: BN;
    inputDisplay: string;
    outputToken: Token;
    mOutputRaw: BN;
    curveOutputRaw: BN;
    curveInverseOutputRaw: BN;
}
export declare const outputSwapRate: (swap: SwapRate, quantityFormatter: QuantityFormatter) => void;
export declare const getSwapRates: (inputTokens: Token[], outputTokens: Token[], mAsset: Masset | ZusdEth | ZusdLegacy | FeederPool, toBlock: number, quantityFormatter: QuantityFormatter, inputAmount?: BN | number | string, chain?: Chain) => Promise<SwapRate[]>;

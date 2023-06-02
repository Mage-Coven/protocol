export declare enum Chain {
    mainnet = 0,
    polygon = 1,
    ropsten = 2,
    mumbai = 3
}
export declare enum Platform {
    Compound = 0,
    Aave = 1
}
export interface Token {
    symbol: string;
    address: string;
    chain: Chain;
    platform?: Platform;
    integrator?: string;
    liquidityProvider?: string;
    decimals: number;
    quantityFormatter: string;
    parent?: string;
    feederPool?: string;
    vault?: string;
    savings?: string;
    platformTokenVendor?: string;
    bridgeForwarder?: string;
    bridgeRecipient?: string;
    priceGetter?: string;
}
export declare function isToken(asset: unknown): asset is Token;
export declare const assetAddressTypes: readonly ["address", "savings", "vault", "feederPool", "integrator", "liquidityProvider", "platformTokenVendor", "bridgeForwarder", "bridgeRecipient"];
export declare type AssetAddressTypes = typeof assetAddressTypes[number];
export declare const zUSD: Token;
export declare const mBTC: Token;
export declare const PzUSD: Token;
export declare const MzUSD: Token;
export declare const RzUSD: Token;
export declare const RmBTC: Token;
export declare const sUSD: Token;
export declare const USDC: Token;
export declare const USDT: Token;
export declare const DAI: Token;
export declare const PUSDC: Token;
export declare const PUSDT: Token;
export declare const PDAI: Token;
export declare const GUSD: Token;
export declare const BUSD: Token;
export declare const RAI: Token;
export declare const FLX: Token;
export declare const FEI: Token;
export declare const TRIBE: Token;
export declare const FRAX: Token;
export declare const PFRAX: Token;
export declare const MFRAX: Token;
export declare const alUSD: Token;
export declare const ALCX: Token;
export declare const renBTC: Token;
export declare const sBTC: Token;
export declare const WBTC: Token;
export declare const HBTC: Token;
export declare const TBTC: Token;
export declare const TBTCv2: Token;
export declare const ZENO: Token;
export declare const PZENO: Token;
export declare const RZENO: Token;
export declare const vZENO: Token;
export declare const PWMATIC: Token;
export declare const AAVE: Token;
export declare const stkAAVE: Token;
export declare const COMP: Token;
export declare const CREAM: Token;
export declare const cyZUSD: Token;
export declare const BAL: Token;
export declare const PBAL: Token;
export declare const RBAL: Token;
export declare const mBPT: Token;
export declare const RmBPT: Token;
export declare const tokens: Token[];

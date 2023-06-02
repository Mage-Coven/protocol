import { FeederPool, Masset, MV1, MV2 } from "types/generated";
import { ZusdEth } from "types/generated/ZusdEth";
import { ZusdLegacy } from "types/generated/ZusdLegacy";
import { Chain } from "./tokens";
export declare const dumpTokenStorage: (token: Masset | ZusdEth | ZusdLegacy | FeederPool, toBlock: number) => Promise<void>;
export declare const dumpBassetStorage: (mAsset: Masset | ZusdEth | ZusdLegacy | MV1 | MV2, block: number, chain?: Chain) => Promise<void>;
export declare const dumpFassetStorage: (pool: FeederPool, bock: number) => Promise<void>;
export declare const dumpConfigStorage: (mAsset: Masset | ZusdEth | ZusdLegacy | FeederPool, block: number) => Promise<void>;

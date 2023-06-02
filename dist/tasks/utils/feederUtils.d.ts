import { BN } from "@utils/math";
import { Signer } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types/runtime";
import { FeederPool, BoostedVault, MockERC20, BoostedDualVault, StakingRewardsWithPlatformToken, StakingRewards } from "types/generated";
import { Token } from "./tokens";
interface Config {
    a: BN;
    limits: {
        min: BN;
        max: BN;
    };
}
export interface FeederData {
    mAsset: Token;
    fAsset: Token;
    fAssetRedemptionPriceGetter?: string;
    name: string;
    symbol: string;
    config: Config;
}
export interface VaultData {
    boosted: boolean;
    name: string;
    symbol: string;
    priceCoeff?: BN;
    stakingToken: string;
    rewardToken: string;
    dualRewardToken?: string;
    boostCoeff?: number;
}
export declare const deployFasset: (sender: Signer, name: string, symbol: string, decimals?: number, initialMint?: BN) => Promise<MockERC20>;
export declare const deployFeederPool: (signer: Signer, feederData: FeederData, hre: HardhatRuntimeEnvironment) => Promise<FeederPool>;
export declare const deployVault: (hre: HardhatRuntimeEnvironment, vaultData: VaultData) => Promise<BoostedDualVault | BoostedVault | StakingRewardsWithPlatformToken | StakingRewards>;
export {};

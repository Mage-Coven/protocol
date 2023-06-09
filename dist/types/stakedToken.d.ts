import { BN } from "@utils/math";
export interface UserBalance {
    raw: BN;
    weightedTimestamp: number;
    questMultiplier: number;
    timeMultiplier: number;
    cooldownTimestamp: number;
    cooldownUnits: BN;
}
export interface QuestBalance {
    lastAction: number;
    permMultiplier: number;
    seasonMultiplier: number;
}
export interface UserStakingData {
    scaledBalance: BN;
    votes: BN;
    earnedRewards: BN;
    numCheckpoints: number;
    rewardTokenBalance: BN;
    rawBalance: UserBalance;
    userPriceCoeff: BN;
    questBalance: QuestBalance;
    balData?: BalConfig;
}
export interface BalConfig {
    balRecipient: string;
    keeper: string;
    pendingBPTFees: BN;
    priceCoefficient: BN;
    lastPriceUpdateTime: BN;
}
export declare enum QuestType {
    PERMANENT = 0,
    SEASONAL = 1
}
export declare enum QuestStatus {
    ACTIVE = 0,
    EXPIRED = 1
}

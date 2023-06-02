import { BigNumberish } from "@ethersproject/bignumber";
import { Signer } from "ethers";
import { Account } from "types/common";
import { HardhatRuntimeEnvironment } from "hardhat/types/runtime";
import { L2BridgeRecipient, BridgeForwarder } from "types/generated";
export interface StakedTokenData {
    rewardsTokenSymbol: string;
    stakedTokenSymbol: string;
    balTokenSymbol?: string;
    cooldown: BigNumberish;
    unstakeWindow: BigNumberish;
    name: string;
    symbol: string;
}
export interface StakedTokenDeployAddresses {
    stakedToken?: string;
    questManager?: string;
    signatureVerifier?: string;
    platformTokenVendorFactory?: string;
    proxyAdminAddress?: string;
}
export declare const deployStakingToken: (stakedTokenData: StakedTokenData, deployer: Account, hre: HardhatRuntimeEnvironment, deployProxy?: boolean, overrides?: StakedTokenDeployAddresses, overrideSigner?: string) => Promise<StakedTokenDeployAddresses>;
export declare const deployBridgeForwarder: (signer: Signer, nexusAddress: string, rewardTokenAddress: string, bridgeTokenLockerAddress: string, rootChainManagerAddress: string, childRecipient1Address: string, emissionsController: string) => Promise<BridgeForwarder>;
export declare const deployL2BridgeRecipient: (signer: Signer, bridgedRewardTokenAddress: string, childEmissionsController: string) => Promise<L2BridgeRecipient>;

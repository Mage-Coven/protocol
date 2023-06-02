import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStakingRewardsWithPlatformToken, IStakingRewardsWithPlatformTokenInterface } from "../IStakingRewardsWithPlatformToken";
export declare class IStakingRewardsWithPlatformToken__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IStakingRewardsWithPlatformTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IStakingRewardsWithPlatformToken;
}

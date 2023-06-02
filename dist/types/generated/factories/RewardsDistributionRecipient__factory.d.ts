import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { RewardsDistributionRecipient, RewardsDistributionRecipientInterface } from "../RewardsDistributionRecipient";
export declare class RewardsDistributionRecipient__factory {
    static readonly abi: ({
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): RewardsDistributionRecipientInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RewardsDistributionRecipient;
}

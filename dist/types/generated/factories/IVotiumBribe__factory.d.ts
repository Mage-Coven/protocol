import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IVotiumBribe, IVotiumBribeInterface } from "../IVotiumBribe";
export declare class IVotiumBribe__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IVotiumBribeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IVotiumBribe;
}

import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IVotes, IVotesInterface } from "../IVotes";
export declare class IVotes__factory {
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
    static createInterface(): IVotesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IVotes;
}

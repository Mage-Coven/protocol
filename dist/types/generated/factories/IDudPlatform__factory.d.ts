import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IDudPlatform, IDudPlatformInterface } from "../IDudPlatform";
export declare class IDudPlatform__factory {
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
    static createInterface(): IDudPlatformInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDudPlatform;
}

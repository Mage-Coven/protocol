import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IDisperse, IDisperseInterface } from "../IDisperse";
export declare class IDisperse__factory {
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
    static createInterface(): IDisperseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDisperse;
}

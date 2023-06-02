import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IChildToken, IChildTokenInterface } from "../IChildToken";
export declare class IChildToken__factory {
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
    static createInterface(): IChildTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IChildToken;
}

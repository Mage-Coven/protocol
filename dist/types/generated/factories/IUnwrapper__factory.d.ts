import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IUnwrapper, IUnwrapperInterface } from "../IUnwrapper";
export declare class IUnwrapper__factory {
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
    static createInterface(): IUnwrapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUnwrapper;
}

import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IRedemptionPriceSnap, IRedemptionPriceSnapInterface } from "../IRedemptionPriceSnap";
export declare class IRedemptionPriceSnap__factory {
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
    static createInterface(): IRedemptionPriceSnapInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRedemptionPriceSnap;
}

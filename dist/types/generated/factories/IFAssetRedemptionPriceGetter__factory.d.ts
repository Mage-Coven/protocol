import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFAssetRedemptionPriceGetter, IFAssetRedemptionPriceGetterInterface } from "../IFAssetRedemptionPriceGetter";
export declare class IFAssetRedemptionPriceGetter__factory {
    static readonly abi: {
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IFAssetRedemptionPriceGetterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFAssetRedemptionPriceGetter;
}

import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IEmissionsController, IEmissionsControllerInterface } from "../IEmissionsController";
export declare class IEmissionsController__factory {
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
    static createInterface(): IEmissionsControllerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IEmissionsController;
}

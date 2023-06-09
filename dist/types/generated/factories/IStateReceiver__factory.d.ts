import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStateReceiver, IStateReceiverInterface } from "../IStateReceiver";
export declare class IStateReceiver__factory {
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
    static createInterface(): IStateReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IStateReceiver;
}

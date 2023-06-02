import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISavingsContractV3, ISavingsContractV3Interface } from "../ISavingsContractV3";
export declare class ISavingsContractV3__factory {
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
    static createInterface(): ISavingsContractV3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISavingsContractV3;
}

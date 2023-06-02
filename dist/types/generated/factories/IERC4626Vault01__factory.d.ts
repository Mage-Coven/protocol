import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERC4626Vault01, IERC4626Vault01Interface } from "../IERC4626Vault01";
export declare class IERC4626Vault01__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): IERC4626Vault01Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC4626Vault01;
}

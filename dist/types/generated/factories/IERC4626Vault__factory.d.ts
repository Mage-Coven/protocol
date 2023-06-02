import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERC4626Vault, IERC4626VaultInterface } from "../IERC4626Vault";
export declare class IERC4626Vault__factory {
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
    static createInterface(): IERC4626VaultInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC4626Vault;
}

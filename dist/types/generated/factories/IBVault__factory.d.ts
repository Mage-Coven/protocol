import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IBVault, IBVaultInterface } from "../IBVault";
export declare class IBVault__factory {
    static readonly abi: ({
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
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
    })[];
    static createInterface(): IBVaultInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBVault;
}

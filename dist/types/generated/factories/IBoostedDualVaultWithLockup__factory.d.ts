import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IBoostedDualVaultWithLockup, IBoostedDualVaultWithLockupInterface } from "../IBoostedDualVaultWithLockup";
export declare class IBoostedDualVaultWithLockup__factory {
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
    static createInterface(): IBoostedDualVaultWithLockupInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBoostedDualVaultWithLockup;
}

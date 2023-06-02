import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERC4626Vault00, IERC4626Vault00Interface } from "../IERC4626Vault00";
export declare class IERC4626Vault00__factory {
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
    static createInterface(): IERC4626Vault00Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC4626Vault00;
}

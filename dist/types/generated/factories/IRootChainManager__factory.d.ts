import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IRootChainManager, IRootChainManagerInterface } from "../IRootChainManager";
export declare class IRootChainManager__factory {
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
    static createInterface(): IRootChainManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRootChainManager;
}

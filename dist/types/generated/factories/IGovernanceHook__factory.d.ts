import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IGovernanceHook, IGovernanceHookInterface } from "../IGovernanceHook";
export declare class IGovernanceHook__factory {
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
    static createInterface(): IGovernanceHookInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGovernanceHook;
}

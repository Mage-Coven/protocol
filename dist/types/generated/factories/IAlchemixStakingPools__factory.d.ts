import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IAlchemixStakingPools, IAlchemixStakingPoolsInterface } from "../IAlchemixStakingPools";
export declare class IAlchemixStakingPools__factory {
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
    static createInterface(): IAlchemixStakingPoolsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAlchemixStakingPools;
}

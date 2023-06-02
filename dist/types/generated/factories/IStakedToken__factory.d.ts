import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStakedToken, IStakedTokenInterface } from "../IStakedToken";
export declare class IStakedToken__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
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
    static createInterface(): IStakedTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IStakedToken;
}

import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IXZenoVoterProxy, IXZenoVoterProxyInterface } from "../IXZenoVoterProxy";
export declare class IXZenoVoterProxy__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
    } | {
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): IXZenoVoterProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IXZenoVoterProxy;
}

import { Signer } from "ethers";
export declare type EthAddress = string;
export declare type Bytes32 = string;
export interface Account {
    signer: Signer;
    address: string;
}

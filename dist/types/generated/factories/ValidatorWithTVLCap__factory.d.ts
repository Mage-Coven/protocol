import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ValidatorWithTVLCap, ValidatorWithTVLCapInterface } from "../ValidatorWithTVLCap";
export declare class ValidatorWithTVLCap__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ValidatorWithTVLCap>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ValidatorWithTVLCap;
    connect(signer: Signer): ValidatorWithTVLCap__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b5060a18061001e6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80630b06528714604157806378e9792514605b578063ad45ed96146063575b600080fd5b604960025481565b60405190815260200160405180910390f35b604960005481565b60496001548156fea26469706673582212202d845ca2c6181677525361636aa32aadc1059f8e458ff099bc7c7eef5415de4a64736f6c63430008060033";
    static readonly abi: {
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ValidatorWithTVLCapInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ValidatorWithTVLCap;
}

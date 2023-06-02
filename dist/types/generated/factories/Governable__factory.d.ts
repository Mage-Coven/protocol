import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Governable, GovernableInterface } from "../Governable";
export declare class Governable__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Governable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Governable;
    connect(signer: Signer): Governable__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163390811782556040519091907fde4b3f61490b74c0ed6237523974fe299126bbbf8a8a7482fd220104c59b0c84908290a361021b8061005f6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630c340a2414610046578063c7af335214610066578063e4c0aaf414610084575b600080fd5b6000546040516001600160a01b0390911681526020015b60405180910390f35b6000546001600160a01b03163314604051901515815260200161005d565b6100976100923660046101b5565b610099565b005b6000546001600160a01b031633146100f85760405162461bcd60e51b815260206004820152601f60248201527f474f563a2063616c6c6572206973206e6f742074686520476f7665726e6f720060448201526064015b60405180910390fd5b61010181610104565b50565b6001600160a01b03811661015a5760405162461bcd60e51b815260206004820152601f60248201527f474f563a206e657720476f7665726e6f7220697320616464726573732830290060448201526064016100ef565b600080546040516001600160a01b03808516939216917fde4b3f61490b74c0ed6237523974fe299126bbbf8a8a7482fd220104c59b0c8491a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000602082840312156101c757600080fd5b81356001600160a01b03811681146101de57600080fd5b939250505056fea2646970667358221220adf01b67e0c647c2ae7f766391c1bbe8234267e1300569a9aab2d41850f42d5464736f6c63430008060033";
    static readonly abi: ({
        inputs: any[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
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
        anonymous?: undefined;
    })[];
    static createInterface(): GovernableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Governable;
}

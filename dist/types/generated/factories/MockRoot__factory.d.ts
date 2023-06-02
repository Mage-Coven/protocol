import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockRoot, MockRootInterface } from "../MockRoot";
export declare class MockRoot__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockRoot>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockRoot;
    connect(signer: Signer): MockRoot__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061027b806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063677342ce14610030575b600080fd5b61004361003e3660046101e4565b610055565b60405190815260200160405180910390f35b600061006082610066565b92915050565b60008161007557506000919050565b816001600160801b821061008e5760809190911c9060401b5b6801000000000000000082106100a95760409190911c9060201b5b64010000000082106100c05760209190911c9060101b5b6201000082106100d55760109190911c9060081b5b61010082106100e95760089190911c9060041b5b601082106100fc5760049190911c9060021b5b600882106101085760011b5b60016101148286610223565b61011e90836101fd565b901c9050600161012e8286610223565b61013890836101fd565b901c905060016101488286610223565b61015290836101fd565b901c905060016101628286610223565b61016c90836101fd565b901c9050600161017c8286610223565b61018690836101fd565b901c905060016101968286610223565b6101a090836101fd565b901c905060016101b08286610223565b6101ba90836101fd565b901c905060006101ca8286610223565b90508082106101d957806101db565b815b95945050505050565b6000602082840312156101f657600080fd5b5035919050565b6000821982111561021e57634e487b7160e01b600052601160045260246000fd5b500190565b60008261024057634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212204ba90f584580bcb53891769368bcb27e6a09f9145fc8dae293365ac910a1cc1d64736f6c63430008060033";
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
    static createInterface(): MockRootInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockRoot;
}
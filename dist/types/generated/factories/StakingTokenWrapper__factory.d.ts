import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StakingTokenWrapper, StakingTokenWrapperInterface } from "../StakingTokenWrapper";
export declare class StakingTokenWrapper__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_stakingToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<StakingTokenWrapper>;
    getDeployTransaction(_stakingToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): StakingTokenWrapper;
    connect(signer: Signer): StakingTokenWrapper__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5060405161034338038061034383398101604081905261002f91610044565b60601b6001600160601b031916608052610074565b60006020828403121561005657600080fd5b81516001600160a01b038116811461006d57600080fd5b9392505050565b60805160601c6102b2610091600039600060df01526102b26000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806306fdde031461006757806318160ddd14610085578063313ce5671461009757806370a08231146100b157806372f702f3146100da57806395d89b4114610119575b600080fd5b61006f610121565b60405161007c91906101ec565b60405180910390f35b6003545b60405190815260200161007c565b61009f601281565b60405160ff909116815260200161007c565b6100896100bf3660046101bc565b6001600160a01b031660009081526004602052604090205490565b6101017f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161007c565b61006f6101af565b6001805461012e90610241565b80601f016020809104026020016040519081016040528092919081815260200182805461015a90610241565b80156101a75780601f1061017c576101008083540402835291602001916101a7565b820191906000526020600020905b81548152906001019060200180831161018a57829003601f168201915b505050505081565b6002805461012e90610241565b6000602082840312156101ce57600080fd5b81356001600160a01b03811681146101e557600080fd5b9392505050565b600060208083528351808285015260005b81811015610219578581018301518582016040015282016101fd565b8181111561022b576000604083870101525b50601f01601f1916929092016040019392505050565b600181811c9082168061025557607f821691505b6020821081141561027657634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220b35df054b3bbede2b64b0eda936a252487a6547adffe8f869ab158ee77ecfe0264736f6c63430008060033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
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
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): StakingTokenWrapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StakingTokenWrapper;
}

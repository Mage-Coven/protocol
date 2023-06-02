import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BoostedTokenWrapper, BoostedTokenWrapperInterface } from "../BoostedTokenWrapper";
export declare class BoostedTokenWrapper__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_stakingToken: string, _boostDirector: string, _priceCoeff: BigNumberish, _boostCoeff: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BoostedTokenWrapper>;
    getDeployTransaction(_stakingToken: string, _boostDirector: string, _priceCoeff: BigNumberish, _boostCoeff: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BoostedTokenWrapper;
    connect(signer: Signer): BoostedTokenWrapper__factory;
    static readonly bytecode = "0x61010060405234801561001157600080fd5b5060405161054038038061054083398101604081905261003091610074565b6001600160601b0319606094851b81166080529290931b90911660a05260e05260c0526100b7565b80516001600160a01b038116811461006f57600080fd5b919050565b6000806000806080858703121561008a57600080fd5b61009385610058565b93506100a160208601610058565b6040860151606090960151949790965092505050565b60805160601c60a05160601c60c05160e05161044a6100f6600039600061011f015260006101f0015260006101c901526000610182015261044a6000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806367ba3d901161007157806367ba3d901461014157806370a082311461015457806372f702f31461017d57806395d89b41146101bc578063b43082ec146101c4578063f62aa975146101eb57600080fd5b806306fdde03146100ae57806312064c34146100cc57806318160ddd14610103578063313ce5671461010b57806338d3eb381461011a575b600080fd5b6100b6610212565b6040516100c39190610335565b60405180910390f35b6100f56100da36600461030c565b6001600160a01b031660009081526005602052604090205490565b6040519081526020016100c3565b6003546100f5565b604051601281526020016100c3565b6100f57f000000000000000000000000000000000000000000000000000000000000000081565b6100f561014f36600461030c565b6102a4565b6100f561016236600461030c565b6001600160a01b031660009081526004602052604090205490565b6101a47f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100c3565b6100b66102d7565b6101a47f000000000000000000000000000000000000000000000000000000000000000081565b6100f57f000000000000000000000000000000000000000000000000000000000000000081565b606060018054610221906103d9565b80601f016020809104026020016040519081016040528092919081815260200182805461024d906103d9565b801561029a5780601f1061026f5761010080835404028352916020019161029a565b820191906000526020600020905b81548152906001019060200180831161027d57829003601f168201915b5050505050905090565b6001600160a01b03811660009081526005602090815260408083205460049092528220546102d1916102e6565b92915050565b606060028054610221906103d9565b6000816102fb670de0b6b3a7640000856103ac565b610305919061038a565b9392505050565b60006020828403121561031e57600080fd5b81356001600160a01b038116811461030557600080fd5b600060208083528351808285015260005b8181101561036257858101830151858201604001528201610346565b81811115610374576000604083870101525b50601f01601f1916929092016040019392505050565b6000826103a757634e487b7160e01b600052601260045260246000fd5b500490565b60008160001904831182151516156103d457634e487b7160e01b600052601160045260246000fd5b500290565b600181811c908216806103ed57607f821691505b6020821081141561040e57634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212204dcd1798081c0abcbac7a3afc8e9e30f2266bdf54988d3829b8a94b45a93f3a964736f6c63430008060033";
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
    static createInterface(): BoostedTokenWrapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BoostedTokenWrapper;
}

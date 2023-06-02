import { Signer, BytesLike, ContractFactory, PayableOverrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1967Proxy, ERC1967ProxyInterface } from "../ERC1967Proxy";
export declare class ERC1967Proxy__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_logic: string, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ERC1967Proxy>;
    getDeployTransaction(_logic: string, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC1967Proxy;
    connect(signer: Signer): ERC1967Proxy__factory;
    static readonly bytecode = "0x608060405260405161078d38038061078d833981016040819052610022916102f5565b61004d60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd610412565b6000805160206107468339815191521461006957610069610463565b6100758282600061007c565b505061048f565b610085836100b2565b6000825111806100925750805b156100ad576100ab83836100f260201b6100291760201c565b505b505050565b6100bb8161011e565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606101178383604051806060016040528060278152602001610766602791396101de565b9392505050565b610131816102b360201b6100551760201c565b6101985760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101bd60008051602061074683398151915260001b6102b960201b61005b1760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060833b61023d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b606482015260840161018f565b600080856001600160a01b03168560405161025891906103c3565b600060405180830381855af49150503d8060008114610293576040519150601f19603f3d011682016040523d82523d6000602084013e610298565b606091505b5090925090506102a98282866102bc565b9695505050505050565b3b151590565b90565b606083156102cb575081610117565b8251156102db5782518084602001fd5b8160405162461bcd60e51b815260040161018f91906103df565b6000806040838503121561030857600080fd5b82516001600160a01b038116811461031f57600080fd5b60208401519092506001600160401b038082111561033c57600080fd5b818501915085601f83011261035057600080fd5b81518181111561036257610362610479565b604051601f8201601f19908116603f0116810190838211818310171561038a5761038a610479565b816040528281528860208487010111156103a357600080fd5b6103b4836020830160208801610437565b80955050505050509250929050565b600082516103d5818460208701610437565b9190910192915050565b60208152600082518060208401526103fe816040850160208701610437565b601f01601f19169190910160400192915050565b60008282101561043257634e487b7160e01b600052601160045260246000fd5b500390565b60005b8381101561045257818101518382015260200161043a565b838111156100ab5750506000910152565b634e487b7160e01b600052600160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6102a88061049e6000396000f3fe60806040523661001357610011610017565b005b6100115b61002761002261005e565b610096565b565b606061004e838360405180606001604052806027815260200161024c602791396100ba565b9392505050565b3b151590565b90565b60006100917f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100b5573d6000f35b3d6000fd5b6060833b61011e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b03168560405161013991906101cc565b600060405180830381855af49150503d8060008114610174576040519150601f19603f3d011682016040523d82523d6000602084013e610179565b606091505b5091509150610189828286610193565b9695505050505050565b606083156101a257508161004e565b8251156101b25782518084602001fd5b8160405162461bcd60e51b815260040161011591906101e8565b600082516101de81846020870161021b565b9190910192915050565b602081526000825180602084015261020781604085016020870161021b565b601f01601f19169190910160400192915050565b60005b8381101561023657818101518382015260200161021e565b83811115610245576000848401525b5050505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212203fac5601f2c76beab396fbce571cd3ae7e61c66373690fbe7c16b1cf4d0b67fc64736f6c63430008060033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";
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
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
    })[];
    static createInterface(): ERC1967ProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC1967Proxy;
}

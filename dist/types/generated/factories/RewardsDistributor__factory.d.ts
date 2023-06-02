import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RewardsDistributor, RewardsDistributorInterface } from "../RewardsDistributor";
export declare class RewardsDistributor__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_nexus: string, _fundManagers: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<RewardsDistributor>;
    getDeployTransaction(_nexus: string, _fundManagers: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): RewardsDistributor;
    connect(signer: Signer): RewardsDistributor__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200101f3803806200101f833981016040819052620000349162000217565b816001600160a01b038116620000915760405162461bcd60e51b815260206004820152601560248201527f4e657875732061646472657373206973207a65726f000000000000000000000060448201526064015b60405180910390fd5b60601b6001600160601b03191660805260005b8151811015620000f057620000db828281518110620000c757620000c762000331565b6020026020010151620000f960201b60201c565b80620000e78162000307565b915050620000a4565b5050506200035d565b6001600160a01b038116620001435760405162461bcd60e51b815260206004820152600f60248201526e41646472657373206973207a65726f60881b604482015260640162000088565b6001600160a01b03811660009081526020819052604090205460ff1615620001ae5760405162461bcd60e51b815260206004820152601460248201527f416c72656164792066756e64206d616e61676572000000000000000000000000604482015260640162000088565b6001600160a01b038116600081815260208190526040808220805460ff19166001179055517fbd86fc1ae387829c0b7f84e52ed8685721b367d8169f630a5ff878ef7750b25f9190a250565b80516001600160a01b03811681146200021257600080fd5b919050565b600080604083850312156200022b57600080fd5b6200023683620001fa565b602084810151919350906001600160401b03808211156200025657600080fd5b818601915086601f8301126200026b57600080fd5b81518181111562000280576200028062000347565b8060051b604051601f19603f83011681018181108582111715620002a857620002a862000347565b604052828152858101935084860182860187018b1015620002c857600080fd5b600095505b83861015620002f657620002e181620001fa565b855260019590950194938601938601620002cd565b508096505050505050509250929050565b60006000198214156200032a57634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60805160601c610c9d620003826000396000818160ae01526107710152610c9d6000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063179c40551461005c5780635d0bf74f14610071578063a3f5c1d2146100a9578063c533edb1146100e8578063d9b54946146100fb575b600080fd5b61006f61006a366004610aa2565b61010e565b005b61009461007f366004610aa2565b60006020819052908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6100d07f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100a0565b61006f6100f6366004610adc565b610209565b61006f610109366004610aa2565b61059b565b6101166105af565b6001600160a01b0381166101635760405162461bcd60e51b815260206004820152600f60248201526e41646472657373206973207a65726f60881b60448201526064015b60405180910390fd5b6001600160a01b03811660009081526020819052604090205460ff166101c05760405162461bcd60e51b81526020600482015260126024820152712737ba103090333ab7321036b0b730b3b2b960711b604482015260640161015a565b6001600160a01b038116600081815260208190526040808220805460ff19169055517fd5031334bc3e0470dfa530d3222eb2107f55f3b11fd4c07c008cdbef0d528ee79190a250565b3360009081526020819052604090205460ff1661025d5760405162461bcd60e51b81526020600482015260126024820152712737ba103090333ab7321036b0b730b3b2b960711b604482015260640161015a565b84806102a45760405162461bcd60e51b81526020600482015260166024820152754d7573742063686f6f736520726563697069656e747360501b604482015260640161015a565b8084146102e85760405162461bcd60e51b81526020600482015260126024820152714d69736d61746368696e6720696e7075747360701b604482015260640161015a565b80821461032c5760405162461bcd60e51b81526020600482015260126024820152714d69736d61746368696e6720696e7075747360701b604482015260640161015a565b60005b8181101561059157600086868381811061034b5761034b610c3c565b905060200201359050600089898481811061036857610368610c3c565b905060200201602081019061037d9190610aa2565b90506000816001600160a01b03166369940d796040518163ffffffff1660e01b815260040160206040518083038186803b1580156103ba57600080fd5b505afa1580156103ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f29190610abf565b90506104096001600160a01b038216338486610619565b600087878681811061041d5761041d610c3c565b9050602002013590506000808211156104bf576000846001600160a01b0316639ed374f76040518163ffffffff1660e01b815260040160206040518083038186803b15801561046b57600080fd5b505afa15801561047f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a39190610abf565b91508190506104bd6001600160a01b038216338786610619565b505b604051633c6b16ab60e01b8152600481018690526001600160a01b03851690633c6b16ab90602401600060405180830381600087803b15801561050157600080fd5b505af1158015610515573d6000803e3d6000fd5b5050604080513381526001600160a01b03888116602083015287811682840152606082018a90528516608082015260a0810186905290517f811c3d3b444e7a4c0015bb0ac2b2d16c91c3de8d09cd769f258e15c42048f6c793509081900360c0019150a15050505050808061058990610c13565b91505061032f565b5050505050505050565b6105a36105af565b6105ac81610679565b50565b6105b761076d565b6001600160a01b0316336001600160a01b0316146106175760405162461bcd60e51b815260206004820152601960248201527f4f6e6c7920676f7665726e6f722063616e206578656375746500000000000000604482015260640161015a565b565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052610673908590610805565b50505050565b6001600160a01b0381166106c15760405162461bcd60e51b815260206004820152600f60248201526e41646472657373206973207a65726f60881b604482015260640161015a565b6001600160a01b03811660009081526020819052604090205460ff16156107215760405162461bcd60e51b815260206004820152601460248201527320b63932b0b23c90333ab7321036b0b730b3b2b960611b604482015260640161015a565b6001600160a01b038116600081815260208190526040808220805460ff19166001179055517fbd86fc1ae387829c0b7f84e52ed8685721b367d8169f630a5ff878ef7750b25f9190a250565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b1580156107c857600080fd5b505afa1580156107dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108009190610abf565b905090565b600061085a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166108dc9092919063ffffffff16565b8051909150156108d757808060200190518101906108789190610b76565b6108d75760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161015a565b505050565b60606108eb84846000856108f5565b90505b9392505050565b6060824710156109565760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161015a565b843b6109a45760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161015a565b600080866001600160a01b031685876040516109c09190610b98565b60006040518083038185875af1925050503d80600081146109fd576040519150601f19603f3d011682016040523d82523d6000602084013e610a02565b606091505b5091509150610a12828286610a1d565b979650505050505050565b60608315610a2c5750816108ee565b825115610a3c5782518084602001fd5b8160405162461bcd60e51b815260040161015a9190610bb4565b60008083601f840112610a6857600080fd5b50813567ffffffffffffffff811115610a8057600080fd5b6020830191508360208260051b8501011115610a9b57600080fd5b9250929050565b600060208284031215610ab457600080fd5b81356108ee81610c52565b600060208284031215610ad157600080fd5b81516108ee81610c52565b60008060008060008060608789031215610af557600080fd5b863567ffffffffffffffff80821115610b0d57600080fd5b610b198a838b01610a56565b90985096506020890135915080821115610b3257600080fd5b610b3e8a838b01610a56565b90965094506040890135915080821115610b5757600080fd5b50610b6489828a01610a56565b979a9699509497509295939492505050565b600060208284031215610b8857600080fd5b815180151581146108ee57600080fd5b60008251610baa818460208701610be7565b9190910192915050565b6020815260008251806020840152610bd3816040850160208701610be7565b601f01601f19169190910160400192915050565b60005b83811015610c02578181015183820152602001610bea565b838111156106735750506000910152565b6000600019821415610c3557634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03811681146105ac57600080fdfea264697066735822122018145a2fcc3f8aec8eb8169772706932f910bee82aecd9428e2c48319fbc095e64736f6c63430008060033";
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
    static createInterface(): RewardsDistributorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RewardsDistributor;
}

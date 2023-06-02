import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { L2EmissionsController, L2EmissionsControllerInterface } from "../L2EmissionsController";
export declare class L2EmissionsController__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_nexus: string, _childRewardToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<L2EmissionsController>;
    getDeployTransaction(_nexus: string, _childRewardToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): L2EmissionsController;
    connect(signer: Signer): L2EmissionsController__factory;
    static readonly bytecode = "0x60c060405234801561001057600080fd5b50604051610d9a380380610d9a83398101604081905261002f91610123565b816001600160a01b03811661008b5760405162461bcd60e51b815260206004820152601560248201527f4e657875732061646472657373206973207a65726f000000000000000000000060448201526064015b60405180910390fd5b60601b6001600160601b0319166080526001600160a01b0381166100f15760405162461bcd60e51b815260206004820152601c60248201527f52657761726420746f6b656e2061646472657373206973207a65726f000000006044820152606401610082565b60601b6001600160601b03191660a05250610156565b80516001600160a01b038116811461011e57600080fd5b919050565b6000806040838503121561013657600080fd5b61013f83610107565b915061014d60208401610107565b90509250929050565b60805160601c60a05160601c610c0c61018e60003960008181610279015261032401526000818160c301526106870152610c0c6000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063154f50511461005c5780632d09a693146100a15780638129fc1c146100b6578063a3f5c1d2146100be578063c5a55152146100e5575b600080fd5b61008561006a366004610977565b6001602052600090815260409020546001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6100b46100af3660046109b1565b6100f8565b005b6100b461010e565b6100857f000000000000000000000000000000000000000000000000000000000000000081565b6100b46100f33660046109ea565b6101c6565b61010061044b565b61010a82826104b5565b5050565b600054610100900460ff1680610127575060005460ff16155b61018f5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b600054610100900460ff161580156101b1576000805461ffff19166101011790555b80156101c3576000805461ff00191690555b50565b805160005b81811015610446576000600160008584815181106101eb576101eb610b95565b6020908102919091018101516001600160a01b0390811683529082019290925260400160002054169050806102575760405162461bcd60e51b8152602060048201526012602482015271155b9b585c1c1959081c9958da5c1a595b9d60721b6044820152606401610186565b6040516370a0823160e01b81526001600160a01b0382811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906370a082319060240160206040518083038186803b1580156102bd57600080fd5b505afa1580156102d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f59190610ad8565b905080610303575050610434565b61035c8286858151811061031957610319610b95565b6020026020010151837f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610623909392919063ffffffff16565b84838151811061036e5761036e610b95565b60200260200101516001600160a01b0316633c6b16ab826040518263ffffffff1660e01b81526004016103a391815260200190565b600060405180830381600087803b1580156103bd57600080fd5b505af11580156103d1573d6000803e3d6000fd5b505050508483815181106103e7576103e7610b95565b60200260200101516001600160a01b03167fdf72051fd030d6527c405708cf7dd274525583218f86213d26aef85df16992058260405161042991815260200190565b60405180910390a250505b8061043e81610b6c565b9150506101cb565b505050565b610453610683565b6001600160a01b0316336001600160a01b0316146104b35760405162461bcd60e51b815260206004820152601960248201527f4f6e6c7920676f7665726e6f722063616e2065786563757465000000000000006044820152606401610186565b565b6001600160a01b03821661050b5760405162461bcd60e51b815260206004820181905260248201527f42726964676520726563697069656e742061646472657373206973207a65726f6044820152606401610186565b6001600160a01b0381166105615760405162461bcd60e51b815260206004820152601d60248201527f456e6420726563697069656e742061646472657373206973207a65726f0000006044820152606401610186565b6001600160a01b0381811660009081526001602052604090205416156105c95760405162461bcd60e51b815260206004820152601c60248201527f456e6420726563697069656e7420616c7265616479206d6170706564000000006044820152606401610186565b6001600160a01b0381811660008181526001602052604080822080546001600160a01b0319169487169485179055519192917fef40b73cae5afb599edd08a8bbeb964a4461aadc476c888d10c7be594bf506ed9190a35050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261067d90859061071b565b50505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b1580156106de57600080fd5b505afa1580156106f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107169190610994565b905090565b6000610770826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166107ed9092919063ffffffff16565b805190915015610446578080602001905181019061078e9190610ab6565b6104465760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610186565b60606107fc8484600085610806565b90505b9392505050565b6060824710156108675760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610186565b843b6108b55760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610186565b600080866001600160a01b031685876040516108d19190610af1565b60006040518083038185875af1925050503d806000811461090e576040519150601f19603f3d011682016040523d82523d6000602084013e610913565b606091505b509150915061092382828661092e565b979650505050505050565b6060831561093d5750816107ff565b82511561094d5782518084602001fd5b8160405162461bcd60e51b81526004016101869190610b0d565b803561097281610bc1565b919050565b60006020828403121561098957600080fd5b81356107ff81610bc1565b6000602082840312156109a657600080fd5b81516107ff81610bc1565b600080604083850312156109c457600080fd5b82356109cf81610bc1565b915060208301356109df81610bc1565b809150509250929050565b600060208083850312156109fd57600080fd5b823567ffffffffffffffff80821115610a1557600080fd5b818501915085601f830112610a2957600080fd5b813581811115610a3b57610a3b610bab565b8060051b604051601f19603f83011681018181108582111715610a6057610a60610bab565b604052828152858101935084860182860187018a1015610a7f57600080fd5b600095505b83861015610aa957610a9581610967565b855260019590950194938601938601610a84565b5098975050505050505050565b600060208284031215610ac857600080fd5b815180151581146107ff57600080fd5b600060208284031215610aea57600080fd5b5051919050565b60008251610b03818460208701610b40565b9190910192915050565b6020815260008251806020840152610b2c816040850160208701610b40565b601f01601f19169190910160400192915050565b60005b83811015610b5b578181015183820152602001610b43565b8381111561067d5750506000910152565b6000600019821415610b8e57634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146101c357600080fdfea2646970667358221220af6c6fc74dc9a6726eef4e497f549059ac1b9de209f95302a0fbeef360665a6a64736f6c63430008060033";
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
    static createInterface(): L2EmissionsControllerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): L2EmissionsController;
}

import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AlchemixIntegration, AlchemixIntegrationInterface } from "../AlchemixIntegration";
export declare class AlchemixIntegration__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_nexus: string, _lp: string, _rewardToken: string, _stakingPools: string, _bAsset: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AlchemixIntegration>;
    getDeployTransaction(_nexus: string, _lp: string, _rewardToken: string, _stakingPools: string, _bAsset: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AlchemixIntegration;
    connect(signer: Signer): AlchemixIntegration__factory;
    static readonly bytecode = "0x6101406040523480156200001257600080fd5b5060405162001e9f38038062001e9f833981016040819052620000359162000337565b846001600160a01b038116620000925760405162461bcd60e51b815260206004820152601560248201527f4e657875732061646472657373206973207a65726f000000000000000000000060448201526064015b60405180910390fd5b60601b6001600160601b031916608052600180556001600160a01b038416620000f35760405162461bcd60e51b8152602060048201526012602482015271496e76616c6964204c50206164647265737360701b604482015260640162000089565b6001600160a01b0383166200014b5760405162461bcd60e51b815260206004820152601460248201527f496e76616c69642072657761726420746f6b656e000000000000000000000000604482015260640162000089565b6001600160a01b038216620001a35760405162461bcd60e51b815260206004820152601560248201527f496e76616c6964207374616b696e6720706f6f6c730000000000000000000000604482015260640162000089565b6001600160a01b038116620001fb5760405162461bcd60e51b815260206004820152601660248201527f496e76616c696420624173736574206164647265737300000000000000000000604482015260640162000089565b6001600160601b0319606085811b821660a05284811b821660c05283811b821660e05282901b16610100526040516339664a3160e01b81526001600160a01b038083166004830152600091908416906339664a319060240160206040518083038186803b1580156200026c57600080fd5b505afa15801562000281573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002a79190620003a7565b90506001811015620002fc5760405162461bcd60e51b815260206004820152601860248201527f6241737365742063616e206e6f74206265206661726d65640000000000000000604482015260640162000089565b62000309600182620003c1565b6101205250620003e7945050505050565b80516001600160a01b03811681146200033257600080fd5b919050565b600080600080600060a086880312156200035057600080fd5b6200035b866200031a565b94506200036b602087016200031a565b93506200037b604087016200031a565b92506200038b606087016200031a565b91506200039b608087016200031a565b90509295509295909350565b600060208284031215620003ba57600080fd5b5051919050565b600082821015620003e257634e487b7160e01b600052601160045260246000fd5b500390565b60805160601c60a05160601c60c05160601c60e05160601c6101005160601c6101205161199d620005026000396000818160fe0152818161028c015281816104bb015281816105f60152818161077301528181610f7801526110af015260008181610221015281816103db0152818161070f01528181610a2401528181610c2c0152610dfe01526000818161014b015281816102b2015281816104eb01528181610623015281816106960152818161079901528181610c4d01528181610fa8015281816110dc015261116301526000818161025b0152610d880152600081816101c001528181610325015281816108e70152818161096e0152610b2a0152600081816101e701528181610ca90152611238015261199d6000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063934785b71161008c578063a4e2859511610066578063a4e2859514610209578063b8ab24bd1461021c578063c89fc72f14610243578063f7c618c11461025657600080fd5b8063934785b7146101a85780639b4dc8cc146101bb578063a3f5c1d2146101e257600080fd5b8063472e50d4116100c8578063472e50d4146101465780634f64ebf0146101855780635f5152261461018d5780638129fc1c146101a057600080fd5b8063372500ab146100ef5780633e0dc34e146100f95780633edd112814610133575b600080fd5b6100f761027d565b005b6101207f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b610120610141366004611796565b610318565b61016d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161012a565b6100f76106f9565b61012061019b366004611669565b61070b565b6100f7610821565b6100f76101b63660046116e4565b6108dc565b61016d7f000000000000000000000000000000000000000000000000000000000000000081565b61016d7f000000000000000000000000000000000000000000000000000000000000000081565b6100f76102173660046116a3565b610963565b61016d7f000000000000000000000000000000000000000000000000000000000000000081565b6100f7610251366004611737565b610b1f565b61016d7f000000000000000000000000000000000000000000000000000000000000000081565b60405163379607f560e01b81527f000000000000000000000000000000000000000000000000000000000000000060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063379607f590602401600060405180830381600087803b1580156102fe57600080fd5b505af1158015610312573d6000803e3d6000fd5b50505050565b6000336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461036b5760405162461bcd60e51b81526004016103629061185d565b60405180910390fd5b6002600154141561038e5760405162461bcd60e51b8152600401610362906118bc565b6002600155826103d95760405162461bcd60e51b81526020600482015260166024820152754d757374206465706f73697420736f6d657468696e6760501b6044820152606401610362565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316846001600160a01b03161461042a5760405162461bcd60e51b815260040161036290611894565b508181156105e757604051632fa8a91360e11b81526001600160a01b03851660048201526000903090635f5152269060240160206040518083038186803b15801561047457600080fd5b505afa158015610488573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ac91906117f5565b604051631c57762b60e31b81527f00000000000000000000000000000000000000000000000000000000000000006004820152602481018690529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063e2bbb15890604401600060405180830381600087803b15801561053757600080fd5b505af115801561054b573d6000803e3d6000fd5b5050604051632fa8a91360e11b81526001600160a01b038816600482015260009250309150635f5152269060240160206040518083038186803b15801561059157600080fd5b505afa1580156105a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c991906117f5565b90506105de836105d984846118f3565b610ba7565b92505050610688565b604051631c57762b60e31b81527f00000000000000000000000000000000000000000000000000000000000000006004820152602481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063e2bbb15890604401600060405180830381600087803b15801561066f57600080fd5b505af1158015610683573d6000803e3d6000fd5b505050505b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081168252602082018490528616917f5548c837ab068cf56a2c2479df0882a4922fd203edb7517321831d95078c5f62910160405180910390a2600180559392505050565b610701610bbf565b610709610c27565b565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b03161461075e5760405162461bcd60e51b815260040161036290611894565b60405163acfc5b6d60e01b81523060048201527f000000000000000000000000000000000000000000000000000000000000000060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063acfc5b6d9060440160206040518083038186803b1580156107e357600080fd5b505afa1580156107f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081b91906117f5565b92915050565b600054610100900460ff168061083a575060005460ff16155b61089d5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610362565b600054610100900460ff161580156108bf576000805461ffff19166101011790555b6108c7610c27565b80156108d9576000805461ff00191690555b50565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146109245760405162461bcd60e51b81526004016103629061185d565b600260015414156109475760405162461bcd60e51b8152600401610362906118bc565b60026001556109598484848085610dad565b5050600180555050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146109ab5760405162461bcd60e51b81526004016103629061185d565b600260015414156109ce5760405162461bcd60e51b8152600401610362906118bc565b60026001556001600160a01b038316610a225760405162461bcd60e51b8152602060048201526016602482015275135d5cdd081cdc1958da599e481c9958da5c1a595b9d60521b6044820152606401610362565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614610a735760405162461bcd60e51b815260040161036290611894565b60008111610abd5760405162461bcd60e51b81526020600482015260176024820152764d75737420776974686472617720736f6d657468696e6760481b6044820152606401610362565b610ad16001600160a01b03831684836111cc565b6040805160008152602081018390526001600160a01b038416917f2717ead6b9200dd235aad468c9809ea400fe33ac69b5bfaa6d3e90fc922b6398910160405180910390a250506001805550565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610b675760405162461bcd60e51b81526004016103629061185d565b60026001541415610b8a5760405162461bcd60e51b8152600401610362906118bc565b6002600155610b9c8585858585610dad565b505060018055505050565b6000818311610bb65782610bb8565b815b9392505050565b610bc7611234565b6001600160a01b0316336001600160a01b0316146107095760405162461bcd60e51b815260206004820152601960248201527f4f6e6c7920676f7665726e6f722063616e2065786563757465000000000000006044820152606401610362565b610c717f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006112cc565b6040516385acd64160e01b81527f1e9cb14d7560734a61fa5ff9273953e971ff3cd9283c03d8346e3264617933d460048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906385acd6419060240160206040518083038186803b158015610cf357600080fd5b505afa158015610d07573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2b9190611686565b90506001600160a01b038116610d835760405162461bcd60e51b815260206004820152601a60248201527f4c697175696461746f722061646472657373206973207a65726f0000000000006044820152606401610362565b6108d97f0000000000000000000000000000000000000000000000000000000000000000826112cc565b6001600160a01b038516610dfc5760405162461bcd60e51b8152602060048201526016602482015275135d5cdd081cdc1958da599e481c9958da5c1a595b9d60521b6044820152606401610362565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316846001600160a01b031614610e4d5760405162461bcd60e51b815260040161036290611894565b60008211610e975760405162461bcd60e51b81526020600482015260176024820152764d75737420776974686472617720736f6d657468696e6760481b6044820152606401610362565b8281156110a057828414610eed5760405162461bcd60e51b815260206004820152601a60248201527f436163686520696e6163746976652077697468207478206665650000000000006044820152606401610362565b6040516370a0823160e01b815230600482015285906000906001600160a01b038316906370a082319060240160206040518083038186803b158015610f3157600080fd5b505afa158015610f45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f6991906117f5565b604051630441a3e760e41b81527f00000000000000000000000000000000000000000000000000000000000000006004820152602481018890529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063441a3e7090604401600060405180830381600087803b158015610ff457600080fd5b505af1158015611008573d6000803e3d6000fd5b50506040516370a0823160e01b8152306004820152600092506001600160a01b03851691506370a082319060240160206040518083038186803b15801561104e57600080fd5b505afa158015611062573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061108691906117f5565b9050611096846105d984846118f3565b9350505050611141565b604051630441a3e760e41b81527f00000000000000000000000000000000000000000000000000000000000000006004820152602481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063441a3e7090604401600060405180830381600087803b15801561112857600080fd5b505af115801561113c573d6000803e3d6000fd5b505050505b6111556001600160a01b03861687836111cc565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116825260208201869052918101869052908616907fb925ac01b9c34cc156a17a1e3da718f364df34eec9d0c9dc4e59c2bb1e7ba54b9060600160405180910390a2505050505050565b6040516001600160a01b03831660248201526044810182905261122f90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526112fb565b505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b15801561128f57600080fd5b505afa1580156112a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c79190611686565b905090565b6112e16001600160a01b0383168260006113cd565b6112f76001600160a01b038316826000196113cd565b5050565b6000611350826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166114f19092919063ffffffff16565b80519091501561122f578080602001905181019061136e91906117d8565b61122f5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610362565b8015806114565750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b15801561141c57600080fd5b505afa158015611430573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061145491906117f5565b155b6114c15760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608401610362565b6040516001600160a01b03831660248201526044810182905261122f90849063095ea7b360e01b906064016111f8565b60606115008484600085611508565b949350505050565b6060824710156115695760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610362565b843b6115b75760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610362565b600080866001600160a01b031685876040516115d3919061180e565b60006040518083038185875af1925050503d8060008114611610576040519150601f19603f3d011682016040523d82523d6000602084013e611615565b606091505b5091509150611625828286611630565b979650505050505050565b6060831561163f575081610bb8565b82511561164f5782518084602001fd5b8160405162461bcd60e51b8152600401610362919061182a565b60006020828403121561167b57600080fd5b8135610bb881611944565b60006020828403121561169857600080fd5b8151610bb881611944565b6000806000606084860312156116b857600080fd5b83356116c381611944565b925060208401356116d381611944565b929592945050506040919091013590565b600080600080608085870312156116fa57600080fd5b843561170581611944565b9350602085013561171581611944565b925060408501359150606085013561172c81611959565b939692955090935050565b600080600080600060a0868803121561174f57600080fd5b853561175a81611944565b9450602086013561176a81611944565b93506040860135925060608601359150608086013561178881611959565b809150509295509295909350565b6000806000606084860312156117ab57600080fd5b83356117b681611944565b92506020840135915060408401356117cd81611959565b809150509250925092565b6000602082840312156117ea57600080fd5b8151610bb881611959565b60006020828403121561180757600080fd5b5051919050565b60008251611820818460208701611918565b9190910192915050565b6020815260008251806020840152611849816040850160208701611918565b601f01601f19169190910160400192915050565b60208082526017908201527f4f6e6c7920746865204c502063616e2065786563757465000000000000000000604082015260600190565b6020808252600e908201526d125b9d985b1a590818905cdcd95d60921b604082015260600190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b60008282101561191357634e487b7160e01b600052601160045260246000fd5b500390565b60005b8381101561193357818101518382015260200161191b565b838111156103125750506000910152565b6001600160a01b03811681146108d957600080fd5b80151581146108d957600080fdfea2646970667358221220b6038b8b363f806434be7c0b573720ac1cf084d62a6e5d1cf4f77aae961995bb64736f6c63430008060033";
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
    static createInterface(): AlchemixIntegrationInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AlchemixIntegration;
}

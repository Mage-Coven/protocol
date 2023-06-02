import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ZusdV2Rebalance, ZusdV2RebalanceInterface } from "../ZusdV2Rebalance";
export declare class ZusdV2Rebalance__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ZusdV2Rebalance>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ZusdV2Rebalance;
    connect(signer: Signer): ZusdV2Rebalance__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506000602081905260017f2a11cb67ca5c7e99dba99b50e02c11472d0f19c22ed5af42a1599a7f57e1c7a45560027f70cfd5e45bda79ec08cf51b1938a36ea6a53e22bc2d92dc7d6aa23f7c40714275560037fc6521c8ea4247e8beb499344e591b9401fb2807ff9997dd598fd9e56c73a264d55736b175474e89094c44da98b954eedeac495271d0f905260047f5306b8fbe80b30a74098357ee8e26fad8dc069da9011cca5f0870a0a5982e541556100c8336100cd565b61011f565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b611d6c8061012e6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b146100f0578063929272f61461010b578063b82687881461011e578063f2fde38b1461013157600080fd5b80632856b9621461008d5780636036cba3146100a2578063715018a6146100d55780638b418713146100dd575b600080fd5b6100a061009b366004611838565b610144565b005b6100c26100b036600461181b565b60006020819052908152604090205481565b6040519081526020015b60405180910390f35b6100a0610188565b6100a06100eb3660046118a4565b6101be565b6001546040516001600160a01b0390911681526020016100cc565b6100a0610119366004611940565b61036a565b6100c261012c36600461181b565b6103e0565b6100a061013f36600461181b565b610458565b6001546001600160a01b031633146101775760405162461bcd60e51b815260040161016e90611be8565b60405180910390fd5b6101828483836104f3565b50505050565b6001546001600160a01b031633146101b25760405162461bcd60e51b815260040161016e90611be8565b6101bc60006105f0565b565b33731e0447b19bb6ecfdae1e4ae1694b0c3659614e4e1461022d5760405162461bcd60e51b815260206004820152602360248201527f466c6173684c6f616e3a206f6e6c792063616c6c6564206279204479447820706044820152621bdbdb60ea1b606482015260840161016e565b600080808061023e85870187611838565b6040516370a0823160e01b8152306004820152939750919550935091506000906001600160a01b038616906370a082319060240160206040518083038186803b15801561028a57600080fd5b505afa15801561029e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c291906119a4565b9050816001815181106102d7576102d7611ce5565b6020026020010151826000815181106102f2576102f2611ce5565b60200260200101516103049190611c1d565b61030e8583611c76565b146103545760405162461bcd60e51b81526020600482015260166024820152753234b2103737ba1033b2ba10333630b9b4103637b0b760511b604482015260640161016e565b61035f858484610642565b505050505050505050565b6001546001600160a01b031633146103945760405162461bcd60e51b815260040161016e90611be8565b60408051600280825260608201835260009260208301908036833701905050905082816000815181106103c9576103c9611ce5565b6020026020010181815250506101828483836104f3565b6001600160a01b038116600090815260208190526040812054806104465760405162461bcd60e51b815260206004820152601c60248201527f466c6173684c6f616e3a20556e737570706f7274656420746f6b656e00000000604482015260640161016e565b610451600182611c76565b9392505050565b6001546001600160a01b031633146104825760405162461bcd60e51b815260040161016e90611be8565b6001600160a01b0381166104e75760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161016e565b6104f0816105f0565b50565b6040516370a0823160e01b81523060048201526000906001600160a01b038516906370a082319060240160206040518083038186803b15801561053557600080fd5b505afa158015610549573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056d91906119a4565b90506000848285856040516020016105889493929190611a3c565b60405160208183030381529060405290506000836001815181106105ae576105ae611ce5565b6020026020010151846000815181106105c9576105c9611ce5565b60200260200101516105db9190611c1d565b90506105e8868284610c96565b505050505050565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60008160018151811061065757610657611ce5565b60200260200101518260008151811061067257610672611ce5565b60200260200101516106849190611c1d565b90508160018151811061069957610699611ce5565b6020026020010151826000815181106106b4576106b4611ce5565b60200260200101516106c69190611c1d565b8110156107155760405162461bcd60e51b815260206004820152601d60248201527f666c617368206c6f616e206e6f74203e3d207377617020696e70757473000000604482015260640161016e565b61073d6001600160a01b03851673e2f2a5c287993345a840db3b0845fbc70f5935a583610fb8565b60008260008151811061075257610752611ce5565b60200260200101511115610a5e57600073e2f2a5c287993345a840db3b0845fbc70f5935a56001600160a01b0316636e81221c866e085d4780b73119b644ae5ecd22b376866000815181106107a9576107a9611ce5565b60209081029190910101516040516001600160e01b031960e086901b1681526001600160a01b0393841660048201529290911660248301526044820152306064820152608401602060405180830381600087803b15801561080957600080fd5b505af115801561081d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084191906119a4565b90506000610850600283611c35565b90506108806e085d4780b73119b644ae5ecd22b3767345f783cce6b7ff23b2ab2d70e416cdb7d6055f5183610fb8565b6000606461088f836063611c57565b6108999190611c35565b905060006001600160a01b03881673a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4814156108d7575060016108d464e8d4a5100083611c35565b91505b604051635320bf6b60e11b815260036004820152600f82900b602482015260448101849052606481018390527345f783cce6b7ff23b2ab2d70e416cdb7d6055f519063a6417ed690608401600060405180830381600087803b15801561093c57600080fd5b505af1158015610950573d6000803e3d6000fd5b5061098592506e085d4780b73119b644ae5ecd22b376915073ecd5e75afb02efa118af914515d6521aabd189f1905085610fb8565b6064610992846063611c57565b61099c9190611c35565b9150600190506001600160a01b03881673a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4814156109dc575060026109d964e8d4a5100083611c35565b91505b604051635320bf6b60e11b815260006004820152600f82900b6024820152604481018490526064810183905273ecd5e75afb02efa118af914515d6521aabd189f19063a6417ed690608401600060405180830381600087803b158015610a4157600080fd5b505af1158015610a55573d6000803e3d6000fd5b50505050505050505b600082600181518110610a7357610a73611ce5565b60200260200101511115610c8b57600073e2f2a5c287993345a840db3b0845fbc70f5935a56001600160a01b0316636e81221c8673dac17f958d2ee523a2206206994597c13d831ec786600181518110610acf57610acf611ce5565b60209081029190910101516040516001600160e01b031960e086901b1681526001600160a01b0393841660048201529290911660248301526044820152306064820152608401602060405180830381600087803b158015610b2f57600080fd5b505af1158015610b43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6791906119a4565b9050610b9c73dac17f958d2ee523a2206206994597c13d831ec773bebc44782c7db0a1a60cb6fe97d0b483032ff1c783610fb8565b60006064610bab836063611c57565b610bb59190611c35565b905060016001600160a01b038716736b175474e89094c44da98b954eedeac495271d0f1415610c0a575060006064610bee836063611c57565b610bf89190611c35565b610c079064e8d4a51000611c57565b91505b604051630f7c084960e21b815260026004820152600f82900b6024820152604481018490526064810183905273bebc44782c7db0a1a60cb6fe97d0b483032ff1c790633df0212490608401600060405180830381600087803b158015610c6f57600080fd5b505af1158015610c83573d6000803e3d6000fd5b505050505050505b610182848285611114565b6001600160a01b03831663095ea7b3731e0447b19bb6ecfdae1e4ae1694b0c3659614e4e610cc5856001611c1d565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381600087803b158015610d0b57600080fd5b505af1158015610d1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d439190611982565b50604080516001808252818301909252600091816020015b6040805180820190915260008082526020820152815260200190600190039081610d5b5750506040805160038082526080820190925291925060009190602082015b610da5611704565b815260200190600190039081610d9d5790505090506040518060400160405280306001600160a01b03168152602001600081525082600081518110610dec57610dec611ce5565b602002602001018190525060006040518060800160405280600015158152602001600080811115610e1f57610e1f611ccf565b8152602001600081526020018690529050610e38611704565b600181526000602082015260408101829052610e53876103e0565b60608201523060a0820152825181908490600090610e7357610e73611ce5565b6020026020010181905250610e86611704565b60088152600060208201523060a082015260e081018690528351819085906001908110610eb557610eb5611ce5565b6020026020010181905250610ec8611704565b6040805160808101909152600181526000906020810182815260200160008152602001610ef68b6001611c1d565b905260008084526020840152604083018190529050610f148a6103e0565b60608301523060a08301528551829087906002908110610f3657610f36611ce5565b602090810291909101015260405163a67a6a4560e01b8152731e0447b19bb6ecfdae1e4ae1694b0c3659614e4e9063a67a6a4590610f7a908a908a90600401611aa4565b600060405180830381600087803b158015610f9457600080fd5b505af1158015610fa8573d6000803e3d6000fd5b5050505050505050505050505050565b8015806110415750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b15801561100757600080fd5b505afa15801561101b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061103f91906119a4565b155b6110ac5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b606482015260840161016e565b6040516001600160a01b03831660248201526044810182905261110f90849063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611482565b505050565b6040516370a0823160e01b81523060048201526000906001600160a01b038516906370a082319060240160206040518083038186803b15801561115657600080fd5b505afa15801561116a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061118e91906119a4565b905060008161119e85600a611c1d565b111561142a57816111b285620f4240611c1d565b6111bc9190611c76565b604051636eb1769f60e11b81526001600160a01b03858116600483015230602483015291925060009187169063dd62ed3e9060440160206040518083038186803b15801561120957600080fd5b505afa15801561121d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061124191906119a4565b90508181116112925760405162461bcd60e51b815260206004820152601c60248201527f66756e64657220616c6c6f77616e6365203c2073686f727466616c6c00000000604482015260640161016e565b6040516370a0823160e01b81526001600160a01b038581166004830152600091908816906370a082319060240160206040518083038186803b1580156112d757600080fd5b505afa1580156112eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061130f91906119a4565b90508281116113605760405162461bcd60e51b815260206004820152601a60248201527f66756e6465722062616c616e6365203c2073686f727466616c6c000000000000604482015260640161016e565b60006001600160a01b038816736b175474e89094c44da98b954eedeac495271d0f1415611394575069065a4da25d3016c000005b6001600160a01b03881673a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4814156113c157506406fc23ac005b808411156114115760405162461bcd60e51b815260206004820152601a60248201527f666c6173684c6f616e53686f727466616c6c20746f6f20626967000000000000604482015260640161016e565b6114266001600160a01b038916873087611554565b5050505b604080516001600160a01b038781168252602082018790528516818301526060810183905290517fed17e8a4c060e0fc8d8a57a12336e0f718e5018f8377fadbe64c6b5645ea13689181900360800190a15050505050565b60006114d7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661158c9092919063ffffffff16565b80519091501561110f57808060200190518101906114f59190611982565b61110f5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161016e565b6040516001600160a01b03808516602483015283166044820152606481018290526101829085906323b872dd60e01b906084016110d8565b606061159b84846000856115a3565b949350505050565b6060824710156116045760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161016e565b843b6116525760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161016e565b600080866001600160a01b0316858760405161166e9190611a20565b60006040518083038185875af1925050503d80600081146116ab576040519150601f19603f3d011682016040523d82523d6000602084013e6116b0565b606091505b50915091506116c08282866116cb565b979650505050505050565b606083156116da575081610451565b8251156116ea5782518084602001fd5b8160405162461bcd60e51b815260040161016e9190611bd5565b604080516101008101825260008082526020820152908101611748604080516080810190915260008082526020820190815260200160008152602001600081525090565b8152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001606081525090565b600082601f83011261178b57600080fd5b8135602067ffffffffffffffff808311156117a8576117a8611cfb565b8260051b604051601f19603f830116810181811084821117156117cd576117cd611cfb565b604052848152838101925086840182880185018910156117ec57600080fd5b600092505b8583101561180f5780358452928401926001929092019184016117f1565b50979650505050505050565b60006020828403121561182d57600080fd5b813561045181611d21565b6000806000806080858703121561184e57600080fd5b843561185981611d21565b935060208501359250604085013561187081611d21565b9150606085013567ffffffffffffffff81111561188c57600080fd5b6118988782880161177a565b91505092959194509250565b60008060008084860360808112156118bb57600080fd5b85356118c681611d21565b94506040601f19820112156118da57600080fd5b50602085019250606085013567ffffffffffffffff808211156118fc57600080fd5b818701915087601f83011261191057600080fd5b81358181111561191f57600080fd5b88602082850101111561193157600080fd5b95989497505060200194505050565b60008060006060848603121561195557600080fd5b833561196081611d21565b925060208401359150604084013561197781611d21565b809150509250925092565b60006020828403121561199457600080fd5b8151801515811461045157600080fd5b6000602082840312156119b657600080fd5b5051919050565b600081518084526119d5816020860160208601611c8d565b601f01601f19169290920160200192915050565b80511515825260208101516119fd81611d11565b60208301526040810151611a1081611d11565b6040830152606090810151910152565b60008251611a32818460208701611c8d565b9190910192915050565b6001600160a01b0385811682526020808301869052908416604083015260806060830181905283519083018190526000918481019160a085019190845b81811015611a9557845184529382019392820192600101611a79565b50919998505050505050505050565b6040808252835182820181905260009190606090818501906020808901865b83811015611af157815180516001600160a01b03168652830151838601529386019390820190600101611ac3565b50508683038188015287518084528184019250600581901b8401820189830160005b83811015611bc457601f198784030186528151610160815160098110611b3b57611b3b611ccf565b855281870151878601528a820151611b558c8701826119e9565b508982015160c081818801526080840151915060e0828189015260a08501519250611b8c6101008901846001600160a01b03169052565b908401516101208801529092015161014086018290529150611bb0818601836119bd565b978701979450505090840190600101611b13565b50909b9a5050505050505050505050565b60208152600061045160208301846119bd565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60008219821115611c3057611c30611cb9565b500190565b600082611c5257634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615611c7157611c71611cb9565b500290565b600082821015611c8857611c88611cb9565b500390565b60005b83811015611ca8578181015183820152602001611c90565b838111156101825750506000910152565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600181106104f0576104f0611ccf565b6001600160a01b03811681146104f057600080fdfea2646970667358221220802f616a72d93caef2751f21ec4a1c01090691149e638f6be0d1c71f87b458ad64736f6c63430008060033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
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
    static createInterface(): ZusdV2RebalanceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ZusdV2Rebalance;
}

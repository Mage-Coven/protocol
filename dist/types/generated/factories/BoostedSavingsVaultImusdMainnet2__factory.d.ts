import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BoostedSavingsVaultIzusdMainnet2, BoostedSavingsVaultIzusdMainnet2Interface } from "../BoostedSavingsVaultIzusdMainnet2";
export declare class BoostedSavingsVaultIzusdMainnet2__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BoostedSavingsVaultIzusdMainnet2>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BoostedSavingsVaultIzusdMainnet2;
    connect(signer: Signer): BoostedSavingsVaultIzusdMainnet2__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50612ac1806100206000396000f3fe608060405234801561001057600080fd5b506004361061023c5760003560e01c80637b0a47ee1161013b578063c8910913116100b8578063df136d651161007c578063df136d6514610612578063e1278df31461061a578063e9fad8ee14610664578063ebe2b12b1461066c578063f62aa975146106745761023c565b8063c891091314610573578063c8f33c91146105d4578063cd3daf9d146105dc578063cf7bf6b7146105e4578063d1af0c7d1461060a5761023c565b8063a694fc3a116100ff578063a694fc3a146104f4578063adc9772e14610511578063b43082ec1461053d578063b88a802f14610545578063c4d66de81461054d5761023c565b80637b0a47ee1461049057806380faa57d14610498578063845aef4b146104a0578063949813b8146104a8578063a3f5c1d2146104ec5761023c565b806338d3eb38116101c957806363c2a20a1161018d57806363c2a20a146103d557806367ba3d901461043457806369940d791461045a57806370a082311461046257806372f702f3146104885761023c565b806338d3eb38146103615780633c6b16ab146103695780633f2a554014610386578063523993da146103aa578063594dd432146103b25761023c565b8063197621431161021057806319762143146102e95780631be05289146103115780632af9cc41146103195780632e1a7d4d1461033c578063372500ab146103595761023c565b80628cc262146102415780630a6b433f1461027957806312064c34146102bb57806318160ddd146102e1575b600080fd5b6102676004803603602081101561025757600080fd5b50356001600160a01b031661067c565b60408051918252519081900360200190f35b61029f6004803603602081101561028f57600080fd5b50356001600160a01b0316610710565b604080516001600160401b039092168252519081900360200190f35b610267600480360360208110156102d157600080fd5b50356001600160a01b031661072b565b610267610746565b61030f600480360360208110156102ff57600080fd5b50356001600160a01b031661074c565b005b61029f6107db565b61030f6004803603604081101561032f57600080fd5b50803590602001356107e2565b61030f6004803603602081101561035257600080fd5b5035610817565b61030f610839565b61026761086d565b61030f6004803603602081101561037f57600080fd5b5035610879565b61038e6109fe565b604080516001600160a01b039092168252519081900360200190f35b61029f610a0d565b61030f600480360360408110156103c857600080fd5b5080359060200135610a19565b610401600480360360408110156103eb57600080fd5b506001600160a01b038135169060200135610a2e565b604080516001600160401b0394851681529290931660208301526001600160801b03168183015290519081900360600190f35b6102676004803603602081101561044a57600080fd5b50356001600160a01b0316610a7d565b61038e610aa6565b6102676004803603602081101561047857600080fd5b50356001600160a01b0316610abe565b61038e610ad9565b610267610af1565b610267610af7565b610267610b0a565b6104ce600480360360208110156104be57600080fd5b50356001600160a01b0316610b11565b60408051938452602084019290925282820152519081900360600190f35b61038e610b57565b61030f6004803603602081101561050a57600080fd5b5035610b6f565b61030f6004803603604081101561052757600080fd5b506001600160a01b038135169060200135610b84565b61038e610b99565b61030f610bb1565b61030f6004803603602081101561056357600080fd5b50356001600160a01b0316610c4e565b6105996004803603602081101561058957600080fd5b50356001600160a01b0316610d01565b604080516001600160801b0395861681529390941660208401526001600160401b039182168385015216606082015290519081900360800190f35b610267610d43565b610267610d49565b61030f600480360360208110156105fa57600080fd5b50356001600160a01b0316610d5b565b61038e610da4565b610267610dbc565b610267600480360360c081101561063057600080fd5b508035906020810135906001600160a01b03604082013581169160608101358216916080820135169060a001351515610dc2565b61030f610f27565b610267610f4a565b610267610f50565b6001600160a01b0381166000908152603b602052604081205481906106b39084906001600160801b03166106ae610d49565b610f55565b905060006106cf826702c68af0bb14000063ffffffff610fa016565b6001600160a01b0385166000908152603b6020526040902054909150610706908290600160801b90046001600160801b0316610fb5565b925050505b919050565b603d602052600090815260409020546001600160401b031681565b6001600160a01b031660009081526036602052604090205490565b60345490565b61075461100f565b6001600160a01b0316336001600160a01b0316146107b9576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920676f7665726e6f722063616e206578656375746500000000000000604482015290519081900360640190fd5b603380546001600160a01b0319166001600160a01b0392909216919091179055565b62093a8081565b336107ec8161108f565b336107fe6107f93361072b565b61154e565b61080884846115d9565b610811816116b0565b50505050565b336108218161108f565b3361082b8361154e565b610834816116b0565b505050565b336108438161108f565b33600080610850336117f4565b9150915061085e82826115d9565b5050610869816116b0565b5050565b67016345785d8a000081565b6033546001600160a01b031633146108d8576040805162461bcd60e51b815260206004820181905260248201527f43616c6c6572206973206e6f7420726577617264206469737472696275746f72604482015290519081900360640190fd5b60006108e38161108f565b69d3c21bcecceda1000000821061092b5760405162461bcd60e51b815260040180806020018281038252602c81526020018061296d602c913960400191505060405180910390fd5b60375442908110610951576109498362093a8063ffffffff61183d16565b6038556109ab565b603754600090610967908363ffffffff61187f16565b90506000610980603854836118c190919063ffffffff16565b90506109a562093a80610999878463ffffffff610fb516565b9063ffffffff61183d16565b60385550505b60398190556109c38162093a8063ffffffff610fb516565b6037556040805184815290517fde88a922e0d3b88b24e9623efeb464919c6bf9f66857a65e2bfcf2ce87a9433d9181900360200190a1505050565b6033546001600160a01b031681565b6702c68af0bb14000081565b33610a238161108f565b3361080884846115d9565b603c6020528160005260406000208181548110610a4757fe5b6000918252602090912001546001600160401b038082169350600160401b8204169150600160801b90046001600160801b031683565b6000610aa0610a8b8361072b565b610a9484610abe565b9063ffffffff61191a16565b92915050565b73a3bed4e1c75d00fa6f4e5e6922db7261b5e9acd290565b6001600160a01b031660009081526035602052604090205490565b7330647a72dc82d7fbb1123ea74716ab8a317eac1981565b60385481565b6000610b054260375461194f565b905090565b62eff10081565b6000806000610b1f846117f4565b90925090506000610b31858484611964565b509050610b4d610b408661067c565b829063ffffffff610fb516565b9350509193909250565b73afce80b19a8ce13dec0739a1aab7a028d6845eb381565b33610b798161108f565b3361082b3384611ca2565b81610b8e8161108f565b826108088484611ca2565b73ba05fd2f20ae15b0d3f20ddc6870feca6acd359281565b33610bbb8161108f565b336000818152603b6020526040902080546001600160801b03808216909255600160801b9004168015610c4457610c0d73a3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2338363ffffffff611d9316565b60408051828152905133917fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486919081900360200190a25b50610869816116b0565b600054610100900460ff1680610c675750610c67611de5565b80610c75575060005460ff16155b610cb05760405162461bcd60e51b815260040180806020018281038252602e815260200180612a35602e913960400191505060405180910390fd5b600054610100900460ff16158015610cdb576000805460ff1961ff0019909116610100171660011790555b610ce4826107b9565b610cec611deb565b8015610869576000805461ff00191690555050565b603b60205260009081526040902080546001909101546001600160801b0380831692600160801b900416906001600160401b0380821691600160401b90041684565b60395481565b600080610d54611df5565b5091505090565b80610d658161108f565b60405182906001600160a01b038216907fa31b3b303c759fa7ee31d89a1a6fb7eb704d8fe5c87aa4f60f54468ff121bee890600090a2610834816116b0565b73a3bed4e1c75d00fa6f4e5e6922db7261b5e9acd281565b603a5481565b600033610dce8161108f565b3360008911610e18576040805162461bcd60e51b8152602060048201526011602482015270043616e6e6f74207769746864726177203607c1b604482015290519081900360640190fd5b610e2189611eaa565b6040805163f25816b560e01b8152600481018b905260016024820152604481018a90526001600160a01b0389811660648301528881166084830152871660a482015285151560c482015290517330647a72dc82d7fbb1123ea74716ab8a317eac199163f25816b59160e48083019260609291908290030181600087803b158015610eaa57600080fd5b505af1158015610ebe573d6000803e3d6000fd5b505050506040513d6060811015610ed457600080fd5b5060409081015181518b8152915190945033917f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5919081900360200190a2610f1b816116b0565b50509695505050505050565b33610f318161108f565b33610f3e6107f93361072b565b600080610850336117f4565b60375481565b600981565b600080610f68838563ffffffff61187f16565b905080610f79576000915050610f99565b6000610f9482610f8888610abe565b9063ffffffff610fa016565b925050505b9392505050565b6000610f998383670de0b6b3a7640000611f5b565b600082820183811015610f99576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600073afce80b19a8ce13dec0739a1aab7a028d6845eb36001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b15801561105e57600080fd5b505afa158015611072573d6000803e3d6000fd5b505050506040513d602081101561108857600080fd5b5051905090565b42600061109b82611f89565b90506000806110a8611df5565b9092509050811561150257603a82905560398190556001600160a01b038516156114fd576110d4612925565b506001600160a01b0385166000908152603b60209081526040808320815160808101835281546001600160801b03808216808452600160801b90920416948201949094526001909101546001600160401b0380821693830193909352600160401b90049091166060820152919061114d90889086610f55565b9050801561141d57600061116f826702c68af0bb14000063ffffffff610fa016565b90506000611183838363ffffffff61187f16565b9050603c60008a6001600160a01b03166001600160a01b0316815260200190815260200160002060405180606001604052806111e06111db88604001516001600160401b031662eff100610fb590919063ffffffff16565b611f89565b6001600160401b031681526020016112046111db62eff1008d63ffffffff610fb516565b6001600160401b0316815260200161124a61124561123889604001516001600160401b03168e61187f90919063ffffffff16565b869063ffffffff61183d16565b611fd1565b6001600160801b0390811690915282546001810184556000938452602093849020835191018054948401516040948501518416600160801b026001600160401b03918216600160401b0267ffffffffffffffff60401b199290941667ffffffffffffffff1990971696909617169190911790911692909217909155805160808101909152806112d888611fd1565b6001600160801b0316815260200161130961124587602001516001600160801b031686610fb590919063ffffffff16565b6001600160801b03168152602001886001600160401b0316815260200185606001516001016001600160401b0316815250603b60008b6001600160a01b03166001600160a01b0316815260200190815260200160002060008201518160000160006101000a8154816001600160801b0302191690836001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010160006101000a8154816001600160401b0302191690836001600160401b0316021790555060608201518160010160086101000a8154816001600160401b0302191690836001600160401b0316021790555090505050506114fa565b604051806080016040528061143186611fd1565b6001600160801b0390811682526020858101518216818401526001600160401b03808a166040808601919091526060808901518316958101959095526001600160a01b038d166000908152603b845281902086518154948801518616600160801b029086166fffffffffffffffffffffffffffffffff1990951694909417909416929092178355908401516001909201805494909301518116600160401b0267ffffffffffffffff60401b199290911667ffffffffffffffff1990941693909317169190911790555b50505b611547565b6001600160a01b03851615611547576001600160a01b0385166000908152603b60205260409020600101805467ffffffffffffffff19166001600160401b0385161790555b5050505050565b60008111611597576040805162461bcd60e51b8152602060048201526011602482015270043616e6e6f74207769746864726177203607c1b604482015290519081900360640190fd5b6115a081612015565b60408051828152905133917f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5919081900360200190a250565b6000806115e7338585611964565b336000908152603d60209081526040808320805467ffffffffffffffff19166001600160401b038616179055603b909152812080546001600160801b03808216909255939550919350600160801b90920416906116448483610fb5565b905080156116a85761167173a3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2338363ffffffff611d9316565b60408051828152905133917fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486919081900360200190a25b505050505050565b6001600160a01b038116600090815260366020908152604080832054603590925290912054670de0b6b3a764000067016345785d8a0000830281900481841061178e576040805163f8b2cb4f60e01b81526001600160a01b0387166004820152905160009173ba05fd2f20ae15b0d3f20ddc6870feca6acd35929163f8b2cb4f9160248082019260209290919082900301818787803b15801561175257600080fd5b505af1158015611766573d6000803e3d6000fd5b505050506040513d602081101561177c57600080fd5b5051905061178a82826120ef565b9250505b60006117a0858463ffffffff610fa016565b90508381146116a8576117ce816117c28660345461187f90919063ffffffff16565b9063ffffffff610fb516565b6034556001600160a01b0386166000908152603560205260409020819055505050505050565b6001600160a01b0381166000908152603d602052604081205481906001600160401b0316816118238286612194565b905060006118308661226e565b9194509092505050915091565b6000610f9983836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250612343565b6000610f9983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506123e5565b6000826118d057506000610aa0565b828202828482816118dd57fe5b0414610f995760405162461bcd60e51b81526004018080602001828103825260218152602001806129ee6021913960400191505060405180910390fd5b60008061193584670de0b6b3a764000063ffffffff6118c116565b9050611947818463ffffffff61183d16565b949350505050565b600081831161195e5782610f99565b50919050565b6001600160a01b0383166000908152603d6020908152604080832054603c909252822054829142916001600160401b0390911690861580156119a4575085155b15611a01578015806119ed57506001600160a01b0388166000908152603c6020526040812080549091906119d457fe5b6000918252602090912001546001600160401b03168311155b15611a01575060009350909150611c9a9050565b8615611a98576001600160a01b0388166000908152603c60205260409020611a3088600163ffffffff61187f16565b81548110611a3a57fe5b6000918252602090912001546001600160401b03600160401b90910481169083161015611a985760405162461bcd60e51b815260040180806020018281038252602e815260200180612999602e913960400191505060405180910390fd5b6000611aaf60016117c2898b63ffffffff61187f16565b905060005b81811015611c47576000611ace8a8363ffffffff610fb516565b9050611ad861294c565b6001600160a01b038c166000908152603c60205260409020805483908110611afc57fe5b60009182526020918290206040805160608101825292909101546001600160401b03808216808552600160401b830490911694840194909452600160801b90046001600160801b03169082015291508710801590611b70575080602001516001600160401b0316866001600160401b031611155b611bb1576040805162461bcd60e51b815260206004820152600d60248201526c092dcecc2d8d2c840cae0dec6d609b1b604482015290519081900360640190fd5b6000611bca82602001516001600160401b03168961194f565b90506000611bee83600001516001600160401b0316896001600160401b031661243f565b90506000611c2284604001516001600160801b0316611c16848661187f90919063ffffffff16565b9063ffffffff6118c116565b9050611c348c8263ffffffff610fb516565b9b505060019094019350611ab492505050565b506001600160a01b0389166000908152603c602052604090208054611c939186918a908110611c7257fe5b600091825260209091200154600160401b90046001600160401b031661194f565b9450505050505b935093915050565b60008111611ce8576040805162461bcd60e51b815260206004820152600e60248201526d043616e6e6f74207374616b6520360941b604482015290519081900360640190fd5b6001600160a01b038216611d43576040805162461bcd60e51b815260206004820152601b60248201527f496e76616c69642062656e656669636961727920616464726573730000000000604482015290519081900360640190fd5b611d4d8282612455565b6040805182815233602082015281516001600160a01b038516927f9f9e4044c5742cca66ca090b21552bac14645e68bad7a92364a9d9ff18111a1c928290030190a25050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261083490849061253f565b303b1590565b611df36126f7565b565b6000806000611e02610af7565b90506000611e1b6039548361187f90919063ffffffff16565b905080611e2f5750603a5492509050611ea6565b603854600090611e45908363ffffffff6118c116565b90506000611e51610746565b9050801580611e5e575081155b15611e7457603a54849550955050505050611ea6565b6000611e86838363ffffffff61191a16565b603a54909150611e9c908263ffffffff610fb516565b9650939450505050505b9091565b603354600160a01b900460ff16611f08576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6033805460ff60a01b1916905533600090815260366020526040902054611f35908263ffffffff61187f16565b33600090815260366020526040902055506033805460ff60a01b1916600160a01b179055565b600080611f6e858563ffffffff6118c116565b9050611f80818463ffffffff61183d16565b95945050505050565b6000600160401b8210611fcd5760405162461bcd60e51b8152600401808060200182810382526026815260200180612a0f6026913960400191505060405180910390fd5b5090565b6000600160801b8210611fcd5760405162461bcd60e51b81526004018080602001828103825260278152602001806129c76027913960400191505060405180910390fd5b603354600160a01b900460ff16612073576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6033805460ff60a01b19169055336000908152603660205260409020546120a0908263ffffffff61187f16565b336000818152603660205260409020919091556120d9907330647a72dc82d7fbb1123ea74716ab8a317eac19908363ffffffff611d9316565b506033805460ff60a01b1916600160a01b179055565b6000816121055750670de0b6b3a7640000610aa0565b600061211584620f42400261270c565b905060006121228261270c565b905081810280600a600961214088697f0e10af47c1c700000061194f565b028161214857fe5b04670de0b6b3a7640000028161215a57fe5b04935061218a6729a2241af62c0000612185670de0b6b3a764000087670d99a8cec7e200000161243f565b61194f565b9695505050505050565b6001600160a01b0381166000908152603c6020526040812054806121bc576000915050610aa0565b60006000198201815b6080811015612263578183106121da57612263565b60006121f6600261099960016117c2888863ffffffff610fb516565b6001600160a01b0388166000908152603c602052604090208054919250908290811061221e57fe5b6000918252602090912001546001600160401b0390811690891611156122465780935061225a565b61225781600163ffffffff61187f16565b92505b506001016121c5565b509095945050505050565b6001600160a01b0381166000908152603c60205260408120548061229657600091505061070b565b60006000198201815b6080811015612339578183106122b457612339565b60006122d0600261099960016117c2888863ffffffff610fb516565b6001600160a01b0388166000908152603c60205260409020805491925090829081106122f857fe5b6000918252602090912001546001600160401b031642111561231c57809350612330565b61232d81600163ffffffff61187f16565b92505b5060010161229f565b5090949350505050565b600081836123cf5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561239457818101518382015260200161237c565b50505050905090810190601f1680156123c15780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816123db57fe5b0495945050505050565b600081848411156124375760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561239457818101518382015260200161237c565b505050900390565b600081831161244e5781610f99565b5090919050565b603354600160a01b900460ff166124b3576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6033805460ff60a01b191690556001600160a01b0382166000908152603660205260409020546124e9908263ffffffff610fb516565b6001600160a01b0383166000908152603660205260409020556125287330647a72dc82d7fbb1123ea74716ab8a317eac1933308463ffffffff61289216565b50506033805460ff60a01b1916600160a01b179055565b612551826001600160a01b03166128ec565b6125a2576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b602083106125e05780518252601f1990920191602091820191016125c1565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612642576040519150601f19603f3d011682016040523d82523d6000602084013e612647565b606091505b50915091508161269e576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b805115610811578080602001905160208110156126ba57600080fd5b50516108115760405162461bcd60e51b815260040180806020018281038252602a815260200180612a63602a913960400191505060405180910390fd5b6033805460ff60a01b1916600160a01b179055565b60008161271b5750600061070b565b816001600160801b82106127345760809190911c9060401b5b600160401b821061274a5760409190911c9060201b5b64010000000082106127615760209190911c9060101b5b6201000082106127765760109190911c9060081b5b610100821061278a5760089190911c9060041b5b6010821061279d5760049190911c9060021b5b600882106127a95760011b5b60016127cb6127be868463ffffffff61183d16565b839063ffffffff610fb516565b901c905060016127e46127be868463ffffffff61183d16565b901c905060016127fd6127be868463ffffffff61183d16565b901c905060016128166127be868463ffffffff61183d16565b901c9050600161282f6127be868463ffffffff61183d16565b901c905060016128486127be868463ffffffff61183d16565b901c905060016128616127be868463ffffffff61183d16565b901c90506000612877858363ffffffff61183d16565b90508082106128865780612888565b815b935050505061070b565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261081190859061253f565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590610706575050151592915050565b60408051608081018252600080825260208201819052918101829052606081019190915290565b60408051606081018252600080825260208201819052918101919091529056fe43616e6e6f74206e6f746966792077697468206d6f7265207468616e2061206d696c6c696f6e20756e697473496e76616c6964205f6669727374206172673a204d75737420636c61696d206561726c69657220656e747269657353616665436173743a2076616c756520646f65736e27742066697420696e203132382062697473536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7753616665436173743a2076616c756520646f65736e27742066697420696e2036342062697473436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a65645361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a265627a7a72315820d8ce96dc82fb8ae4c480bf5b50fb5eae53bafb5e86c57a38ce17cf9a485af3bf64736f6c63430005100032";
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
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    } | {
        constant: boolean;
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
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): BoostedSavingsVaultIzusdMainnet2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): BoostedSavingsVaultIzusdMainnet2;
}

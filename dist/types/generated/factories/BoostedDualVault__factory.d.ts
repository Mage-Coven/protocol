import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BoostedDualVault, BoostedDualVaultInterface } from "../BoostedDualVault";
export declare class BoostedDualVault__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_nexus: string, _stakingToken: string, _boostDirector: string, _priceCoeff: BigNumberish, _boostCoeff: BigNumberish, _rewardsToken: string, _platformToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BoostedDualVault>;
    getDeployTransaction(_nexus: string, _stakingToken: string, _boostDirector: string, _priceCoeff: BigNumberish, _boostCoeff: BigNumberish, _rewardsToken: string, _platformToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BoostedDualVault;
    connect(signer: Signer): BoostedDualVault__factory;
    static readonly bytecode = "0x6101606040523480156200001257600080fd5b5060405162004249380380620042498339810160408190526200003591620000fd565b858585858a806001600160a01b038116620000965760405162461bcd60e51b815260206004820152601560248201527f4e657875732061646472657373206973207a65726f0000000000000000000000604482015260640160405180910390fd5b6001600160601b0319606091821b811660805295811b861660a05293841b851660c052506101009190915260e05292831b811661012052911b166101405250620001809350505050565b80516001600160a01b0381168114620000f857600080fd5b919050565b600080600080600080600060e0888a0312156200011957600080fd5b6200012488620000e0565b96506200013460208901620000e0565b95506200014460408901620000e0565b945060608801519350608088015192506200016260a08901620000e0565b91506200017260c08901620000e0565b905092959891949750929550565b60805160601c60a05160601c60c05160601c60e051610100516101205160601c6101405160601c613ff6620002536000396000818161060c015281816107cd01528181610ba901528181610c4a01528181610f630152612385015260008181610519015281816107a5015281816110da0152611abd01526000818161042c0152611b6f01526000818161083401526127c301526000818161068d0152611bd50152600081816105700152818161126e0152818161272c0152612bef01526000818161063701526125520152613ff66000f3fe60806040523480156200001157600080fd5b5060043610620002d85760003560e01c8063845aef4b1162000185578063c8f33c9111620000df578063e1278df31162000092578063e1278df314620007f9578063e882025a1462000810578063e9fad8ee146200081a578063ebe2b12b1462000824578063f62aa975146200082e578063f9ce7d47146200085657600080fd5b8063c8f33c911462000774578063cd3daf9d146200077e578063cf7bf6b71462000788578063d1af0c7d146200079f578063d1b812cd14620007c7578063df136d6514620007ef57600080fd5b8063a694fc3a1162000138578063a694fc3a1462000659578063adc9772e1462000670578063b43082ec1462000687578063b88a802f14620006af578063c5869a0614620006b9578063c891091314620006c357600080fd5b8063845aef4b14620005a65780639065714714620005b1578063949813b814620005c857806395d89b4114620006005780639ed374f7146200060a578063a3f5c1d2146200063157600080fd5b806338d3eb38116200023757806367ba3d9011620001ea57806367ba3d90146200050057806369940d79146200051757806370a08231146200053e57806372f702f3146200056a5780637b0a47ee146200059257806380faa57d146200059c57600080fd5b806338d3eb3814620004265780633c6b16ab146200044e5780633f2a55401462000465578063523993da1462000492578063594dd43214620004a257806363c2a20a14620004b957600080fd5b80631be0528911620002905780631be0528914620003c95780632056797114620003d45780632af9cc4114620003de5780632e1a7d4d14620003f5578063313ce567146200040c578063372500ab146200041c57600080fd5b80628cc26214620002dd57806306fdde03146200030e5780630a6b433f146200032757806312064c34146200036c57806318160ddd14620003a75780631976214314620003b0575b600080fd5b620002f4620002ee36600462003007565b6200086a565b604080519283526020830191909152015b60405180910390f35b6200031862000946565b6040516200030591906200323e565b620003536200033836600462003007565b6043602052600090815260409020546001600160401b031681565b6040516001600160401b03909116815260200162000305565b620003986200037d36600462003007565b6001600160a01b031660009081526038602052604090205490565b60405190815260200162000305565b60365462000398565b620003c7620003c136600462003007565b620009e0565b005b6200035362093a8081565b62000398603a5481565b620003c7620003ef36600462003155565b62000a0c565b620003c76200040636600462003121565b62000a50565b6040516012815260200162000305565b620003c762000a78565b620003987f000000000000000000000000000000000000000000000000000000000000000081565b620003c76200045f36600462003121565b62000ab4565b60335462000479906001600160a01b031681565b6040516001600160a01b03909116815260200162000305565b62000353670494654067e1000081565b620003c7620004b336600462003155565b62000d7e565b620004d0620004ca366004620030d2565b62000d97565b604080516001600160401b0394851681529390921660208401526001600160801b03169082015260600162000305565b620003986200051136600462003007565b62000dea565b7f000000000000000000000000000000000000000000000000000000000000000062000479565b620003986200054f36600462003007565b6001600160a01b031660009081526037602052604090205490565b620004797f000000000000000000000000000000000000000000000000000000000000000081565b62000398603c5481565b6200039862000e1f565b6200039862eff10081565b620003c7620005c236600462003047565b62000e34565b620005df620005d936600462003007565b62000ff9565b60408051948552602085019390935291830152606082015260800162000305565b620003186200104f565b7f000000000000000000000000000000000000000000000000000000000000000062000479565b620004797f000000000000000000000000000000000000000000000000000000000000000081565b620003c76200066a36600462003121565b62001060565b620003c762000681366004620030d2565b62001079565b620004797f000000000000000000000000000000000000000000000000000000000000000081565b620003c762001092565b6200039860405481565b62000728620006d436600462003007565b6041602052600090815260409020805460018201546002909201546001600160801b0380831693600160801b93849004821693818316939104909116906001600160401b0380821691600160401b90041686565b604080516001600160801b039788168152958716602087015293861693850193909352931660608301526001600160401b0392831660808301529190911660a082015260c00162000305565b62000398603e5481565b620002f462001159565b620003c76200079936600462003007565b62001175565b620004797f000000000000000000000000000000000000000000000000000000000000000081565b620004797f000000000000000000000000000000000000000000000000000000000000000081565b62000398603f5481565b620003986200080a36600462003178565b620011c2565b62000398603d5481565b620003c76200133f565b62000398603b5481565b620003987f000000000000000000000000000000000000000000000000000000000000000081565b60395462000479906001600160a01b031681565b6000806000806200087a62001159565b6001600160a01b03871660009081526041602052604081205492945090925090620008b29087906001600160801b0316858462001374565b90506000620008ca82670494654067e10000620013f2565b6001600160a01b0388166000908152604160205260409020549091506200090290600160801b90046001600160801b031682620032d8565b6001600160a01b038816600090815260416020526040902060019081015462000939918a916001600160801b031690879062001374565b9550955050505050915091565b6060603480546200095790620033a6565b80601f01602080910402602001604051908101604052809291908181526020018280546200098590620033a6565b8015620009d65780601f10620009aa57610100808354040283529160200191620009d6565b820191906000526020600020905b815481529060010190602001808311620009b857829003601f168201915b5050505050905090565b620009ea62001410565b603380546001600160a01b0319166001600160a01b0392909216919091179055565b3362000a18816200147e565b3360008181526038602052604090205462000a339062001995565b62000a3f848462001a37565b62000a4a8162001b38565b50505050565b3362000a5c816200147e565b3362000a688362001995565b62000a738162001b38565b505050565b3362000a84816200147e565b3360008062000a933362001d67565b9150915062000aa3828262001a37565b505062000ab08162001b38565b5050565b6033546001600160a01b0316331462000b145760405162461bcd60e51b815260206004820181905260248201527f43616c6c6572206973206e6f7420726577617264206469737472696275746f7260448201526064015b60405180910390fd5b600062000b21816200147e565b69d3c21bcecceda1000000821062000b915760405162461bcd60e51b815260206004820152602c60248201527f43616e6e6f74206e6f746966792077697468206d6f7265207468616e2061206d60448201526b696c6c696f6e20756e69747360a01b606482015260840162000b0b565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b15801562000bf457600080fd5b505afa15801562000c09573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000c2f91906200313b565b9050801562000c745760395462000c74906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811691168362001db4565b603b544290811062000caa5762000c8f62093a808562003318565b603c5562000ca162093a808362003318565b603d5562000d28565b600081603b5462000cbc91906200335d565b90506000603c548262000cd091906200333b565b905062093a8062000ce28288620032d8565b62000cee919062003318565b603c55603d5460009062000d0390846200333b565b905062093a8062000d158287620032d8565b62000d21919062003318565b603d555050505b603e81905562000d3c62093a8082620032d8565b603b5560408051858152602081018490527f6c07ee05dcf262f13abf9d87b846ee789d2f90fe991d495acd7d7fc109ee1f55910160405180910390a150505050565b3362000d8a816200147e565b3362000a3f848462001a37565b6042602052816000526040600020818154811062000db457600080fd5b6000918252602090912001546001600160401b038082169350600160401b8204169150600160801b90046001600160801b031683565b6001600160a01b038116600090815260386020908152604080832054603790925282205462000e199162001e19565b92915050565b600062000e2f42603b5462001e3c565b905090565b600054610100900460ff168062000e4a5750303b155b8062000e59575060005460ff16155b62000ebe5760405162461bcd60e51b815260206004820152602e60248201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560448201526d195b881a5b9a5d1a585b1a5e995960921b606482015260840162000b0b565b600054610100900460ff1615801562000ee1576000805461ffff19166101011790555b62000eec86620009ea565b62000f6185858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8901819004810282018101909252878152925087915086908190840183828082843760009201919091525062001e5392505050565b7f000000000000000000000000000000000000000000000000000000000000000060405162000f909062002f12565b6001600160a01b039091168152602001604051809103906000f08015801562000fbd573d6000803e3d6000fd5b50603980546001600160a01b0319166001600160a01b0392909216919091179055801562000ff1576000805461ff00191690555b505050505050565b6000806000806200100a8562001d67565b909350915060006200101e86858562001e97565b5090506000806200102f886200086a565b9092509050620010408284620032d8565b96508093505050509193509193565b6060603580546200095790620033a6565b336200106c816200147e565b3362000a68338462002223565b8162001085816200147e565b8262000a3f848462002223565b336200109e816200147e565b33600081815260416020526040902080546001600160801b03808216909255600160801b90041680156200110257620011026001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016338362001db4565b60006200110e6200232a565b604080518481526020810183905291925033917fd6f2c8500df5b44f11e9e48b91ff9f1b9d81bc496d55570c2b1b75bf65243f51910160405180910390a2505062000ab08162001b38565b60008060008062001169620023b5565b50909590945092505050565b8062001181816200147e565b60405182906001600160a01b038216907fa31b3b303c759fa7ee31d89a1a6fb7eb704d8fe5c87aa4f60f54468ff121bee890600090a262000a738162001b38565b600033620011d0816200147e565b3360008911620012175760405162461bcd60e51b8152602060048201526011602482015270043616e6e6f74207769746864726177203607c1b604482015260640162000b0b565b6200122289620024be565b60405163f25816b560e01b8152600481018a905260016024820152604481018990526001600160a01b038881166064830152878116608483015286811660a483015285151560c48301527f0000000000000000000000000000000000000000000000000000000000000000169063f25816b59060e401606060405180830381600087803b158015620012b357600080fd5b505af1158015620012c8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620012ee9190620031f1565b6040518c81529095503392507f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5915060200160405180910390a2620013338162001b38565b50509695505050505050565b336200134b816200147e565b33600081815260386020526040902054620013669062001995565b60008062000a933362001d67565b6000806200138385856200335d565b90508062001396576000915050620013ea565b600083620013bd576001600160a01b038716600090815260376020526040902054620013d7565b6001600160a01b0387166000908152603860205260409020545b9050620013e58183620013f2565b925050505b949350505050565b6000620014098383670de0b6b3a764000062002533565b9392505050565b6200141a6200254e565b6001600160a01b0316336001600160a01b0316146200147c5760405162461bcd60e51b815260206004820152601960248201527f4f6e6c7920676f7665726e6f722063616e206578656375746500000000000000604482015260640162000b0b565b565b4260006200148c82620025e5565b905060008060006200149d620023b5565b9250925092506000831180620014b35750600082115b156200194657603f8390556040829055603e8190556001600160a01b0386161562001940576001600160a01b0386166000908152604160209081526040808320815160c08101835281546001600160801b03808216808452600160801b9283900482169684019690965260018401548082169584019590955293049092166060830152600201546001600160401b038082166080840152600160401b9091041660a0820152919062001569908990878462001374565b90506000620015898984604001516001600160801b031687600162001374565b9050811562001827576000620015a883670494654067e10000620013f2565b90506000620015b882856200335d565b9050604260008c6001600160a01b03166001600160a01b0316815260200190815260200160002060405180606001604052806200161288608001516001600160401b031662eff1006200160c9190620032d8565b620025e5565b6001600160401b03168152602001620016336200160c8e62eff100620032d8565b6001600160401b031681526020016200167288608001516001600160401b03168e6200166091906200335d565b6200166c908662003318565b62002653565b6001600160801b0390811690915282546001810184556000938452602093849020835191018054948401516040948501518416600160801b026001600160401b03918216600160401b026001600160801b031990971691909316179490941790911617909155805160c0810190915280620016ed8a62002653565b6001600160801b031681526020016200171a87602001516001600160801b0316856200166c9190620032d8565b6001600160801b03168152602001620017338962002653565b6001600160801b031681526020016200174c8562002653565b87606001516200175d9190620032aa565b6001600160801b031681526020018a6001600160401b031681526020018660a0015160016200178d9190620032f3565b6001600160401b039081169091526001600160a01b038d166000908152604160209081526040918290208451918501516001600160801b03928316600160801b9184168202178255928501516060860151908316921690920217600182015560808301516002909101805460a0909401519183166001600160801b031990941693909317600160401b9190921602179055506200193c9050565b6040518060c001604052806200183d8862002653565b6001600160801b0316815260200184602001516001600160801b03168152602001620018698762002653565b6001600160801b03168152602001620018828362002653565b8560600151620018939190620032aa565b6001600160801b0390811682526001600160401b03808b1660208085019190915260a08089015183166040958601526001600160a01b038f166000908152604183528590208651928701518516600160801b90810293861693909317815594860151606087015185169092029190931617600184015560808401516002909301805494909201518116600160401b026001600160801b0319949094169216919091179190911790555b5050505b62000ff1565b6001600160a01b0386161562000ff1576001600160a01b038616600090815260416020526040902060020180546001600160401b03861667ffffffffffffffff19909116179055505050505050565b60008111620019db5760405162461bcd60e51b8152602060048201526011602482015270043616e6e6f74207769746864726177203607c1b604482015260640162000b0b565b620019e681620026be565b80603a6000828254620019fa91906200335d565b909155505060405181815233907f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d59060200160405180910390a250565b60008062001a4733858562001e97565b336000908152604360209081526040808320805467ffffffffffffffff19166001600160401b0386161790556041909152812080546001600160801b03808216909255939550919350600160801b909204169062001aa68285620032d8565b9050801562001ae55762001ae56001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016338362001db4565b600062001af16200232a565b604080518481526020810183905291925033917fd6f2c8500df5b44f11e9e48b91ff9f1b9d81bc496d55570c2b1b75bf65243f51910160405180910390a250505050505050565b6001600160a01b03811660009081526038602090815260408083205460379092528220549091670de0b6b3a7640000908162001b957f0000000000000000000000000000000000000000000000000000000000000000866200333b565b62001ba1919062003318565b9050670de0b6b3a7640000811062001c695760405163f8b2cb4f60e01b81526001600160a01b0386811660048301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063f8b2cb4f90602401602060405180830381600087803b15801562001c1c57600080fd5b505af115801562001c31573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001c5791906200313b565b905062001c6582826200276a565b9250505b600062001c778584620013f2565b905083811462000ff157808460365462001c9291906200335d565b62001c9e9190620032d8565b6036556001600160a01b03861660009081526037602052604090208190558381111562001d15576001600160a01b03861660007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef62001cfe87856200335d565b60405190815260200160405180910390a362000ff1565b60006001600160a01b0387167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef62001d4e84886200335d565b60405190815260200160405180910390a3505050505050565b6001600160a01b03811660009081526043602052604081205481906001600160401b03168162001d98828662002876565b9050600062001da78662002982565b9196919550909350505050565b6040516001600160a01b03831660248201526044810182905262000a7390849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915262002a87565b60008162001e30670de0b6b3a7640000856200333b565b62001409919062003318565b600081831162001e4d578262001409565b50919050565b62001e6c6033805460ff60a01b1916600160a01b179055565b815162001e8190603490602085019062002f20565b50805162000a7390603590602084019062002f20565b6001600160a01b0383166000908152604360209081526040808320546042909252822054829142916001600160401b03909116908615801562001ed8575085155b1562001f425780158062001f2c57506001600160a01b0388166000908152604260205260408120805490919062001f135762001f1362003411565b6000918252602090912001546001600160401b03168311155b1562001f4257600083945094505050506200221b565b861562002009576001600160a01b038816600090815260426020526040902062001f6e6001896200335d565b8154811062001f815762001f8162003411565b6000918252602090912001546001600160401b03600160401b90910481169083161015620020095760405162461bcd60e51b815260206004820152602e60248201527f496e76616c6964205f6669727374206172673a204d75737420636c61696d206560448201526d61726c69657220656e747269657360901b606482015260840162000b0b565b60006200201788886200335d565b62002024906001620032d8565b905060005b81811015620021bd57600062002040828b620032d8565b6001600160a01b038c166000908152604260205260408120805492935090918390811062002072576200207262003411565b60009182526020918290206040805160608101825292909101546001600160401b03808216808552600160401b830490911694840194909452600160801b90046001600160801b03169082015291508710801590620020e7575080602001516001600160401b0316866001600160401b031611155b620021255760405162461bcd60e51b815260206004820152600d60248201526c092dcecc2d8d2c840cae0dec6d609b1b604482015260640162000b0b565b60006200214082602001516001600160401b03168962001e3c565b905060006200216683600001516001600160401b0316896001600160401b031662002b60565b9050600083604001516001600160801b031682846200218691906200335d565b6200219291906200333b565b9050620021a0818d620032d8565b9b5050505050508080620021b490620033dd565b91505062002029565b506001600160a01b03891660009081526042602052604090208054620022149186918a908110620021f257620021f262003411565b600091825260209091200154600160401b90046001600160401b031662001e3c565b9450505050505b935093915050565b60008111620022665760405162461bcd60e51b815260206004820152600e60248201526d043616e6e6f74207374616b6520360941b604482015260640162000b0b565b6001600160a01b038216620022be5760405162461bcd60e51b815260206004820152601b60248201527f496e76616c69642062656e656669636961727920616464726573730000000000604482015260640162000b0b565b620022ca828262002b78565b80603a6000828254620022de9190620032d8565b9091555050604080518281523360208201526001600160a01b038416917f9f9e4044c5742cca66ca090b21552bac14645e68bad7a92364a9d9ff18111a1c910160405180910390a25050565b33600090815260416020526040812060010154600160801b90046001600160801b03168015620023b05733600081815260416020526040902060010180546001600160801b03169055603954620023b0916001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169216908462002c2f565b919050565b600080600080620023c562000e1f565b90506000603e5482620023d991906200335d565b905080620023f45750603f5460405490959094509092509050565b600081603c546200240691906200333b565b9050600082603d546200241a91906200333b565b90506200242660365490565b15806200243b5750811580156200243b575080155b156200245757603f546040548596509650965050505050909192565b60006200246f6200246760365490565b849062001e19565b905060006200248a603a548462001e1990919063ffffffff16565b905081603f546200249c9190620032d8565b81604054620024ac9190620032d8565b87985098509850505050505050909192565b603354600160a01b900460ff16620024ea5760405162461bcd60e51b815260040162000b0b9062003273565b6033805460ff60a01b191690553360009081526038602052604081208054839290620025189084906200335d565b90915550506033805460ff60a01b1916600160a01b17905550565b6000816200254284866200333b565b620013ea919062003318565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b158015620025aa57600080fd5b505afa158015620025bf573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000e2f919062003027565b60006001600160401b038211156200264f5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203660448201526534206269747360d01b606482015260840162000b0b565b5090565b60006001600160801b038211156200264f5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20316044820152663238206269747360c81b606482015260840162000b0b565b603354600160a01b900460ff16620026ea5760405162461bcd60e51b815260040162000b0b9062003273565b6033805460ff60a01b191690553360009081526038602052604081208054839290620027189084906200335d565b909155506200275490506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016338362001db4565b506033805460ff60a01b1916600160a01b179055565b600081620027825750670de0b6b3a764000062000e19565b60006200279d6200279785620f42406200333b565b62002c69565b90506000620027ac8262002c69565b90506000620027bc82846200333b565b905080600a7f0000000000000000000000000000000000000000000000000000000000000000620027f888697f0e10af47c1c700000062001e3c565b6200280491906200333b565b62002810919062003318565b6200282490670de0b6b3a76400006200333b565b62002830919062003318565b93506200286c6729a2241af62c000062002866670de0b6b3a76400006200286088670d99a8cec7e20000620032d8565b62002b60565b62001e3c565b9695505050505050565b6001600160a01b03811660009081526042602052604081205480620028a057600091505062000e19565b600080620028b06001846200335d565b905060005b60808110156200297757818310620028cd5762002977565b60006002620028dd8486620032d8565b620028ea906001620032d8565b620028f6919062003318565b6001600160a01b03881660009081526042602052604090208054919250908290811062002927576200292762003411565b6000918252602090912001546001600160401b039081169089161115620029515780935062002961565b6200295e6001826200335d565b92505b50806200296e81620033dd565b915050620028b5565b509095945050505050565b6001600160a01b03811660009081526042602052604081205480620029aa5750600092915050565b600080620029ba6001846200335d565b905060005b608081101562002a7d57818310620029d75762002a7d565b60006002620029e78486620032d8565b620029f4906001620032d8565b62002a00919062003318565b6001600160a01b03881660009081526042602052604090208054919250908290811062002a315762002a3162003411565b6000918252602090912001546001600160401b031642111562002a575780935062002a67565b62002a646001826200335d565b92505b508062002a7481620033dd565b915050620029bf565b5090949350505050565b600062002ade826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031662002e0a9092919063ffffffff16565b80519091501562000a73578080602001905181019062002aff919062003101565b62000a735760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840162000b0b565b600081831162002b71578162001409565b5090919050565b603354600160a01b900460ff1662002ba45760405162461bcd60e51b815260040162000b0b9062003273565b6033805460ff60a01b191690556001600160a01b0382166000908152603860205260408120805483929062002bdb908490620032d8565b9091555062002c1890506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633308462002c2f565b50506033805460ff60a01b1916600160a01b179055565b6040516001600160a01b038085166024830152831660448201526064810182905262000a4a9085906323b872dd60e01b9060840162001de1565b60008162002c7957506000919050565b816001600160801b821062002c935760809190911c9060401b5b600160401b821062002caa5760409190911c9060201b5b640100000000821062002cc25760209190911c9060101b5b62010000821062002cd85760109190911c9060081b5b610100821062002ced5760089190911c9060041b5b6010821062002d015760049190911c9060021b5b6008821062002d0e5760011b5b600162002d1c828662003318565b62002d289083620032d8565b901c9050600162002d3a828662003318565b62002d469083620032d8565b901c9050600162002d58828662003318565b62002d649083620032d8565b901c9050600162002d76828662003318565b62002d829083620032d8565b901c9050600162002d94828662003318565b62002da09083620032d8565b901c9050600162002db2828662003318565b62002dbe9083620032d8565b901c9050600162002dd0828662003318565b62002ddc9083620032d8565b901c9050600062002dee828662003318565b905080821062002dff578062002e01565b815b95945050505050565b6060620013ea848460008585843b62002e665760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640162000b0b565b600080866001600160a01b0316858760405162002e84919062003220565b60006040518083038185875af1925050503d806000811462002ec3576040519150601f19603f3d011682016040523d82523d6000602084013e62002ec8565b606091505b5091509150620013e58282866060831562002ee557508162001409565b82511562002ef65782518084602001fd5b8160405162461bcd60e51b815260040162000b0b91906200323e565b610b71806200345083390190565b82805462002f2e90620033a6565b90600052602060002090601f01602090048101928262002f52576000855562002f9d565b82601f1062002f6d57805160ff191683800117855562002f9d565b8280016001018555821562002f9d579182015b8281111562002f9d57825182559160200191906001019062002f80565b506200264f9291505b808211156200264f576000815560010162002fa6565b60008083601f84011262002fcf57600080fd5b5081356001600160401b0381111562002fe757600080fd5b6020830191508360208285010111156200300057600080fd5b9250929050565b6000602082840312156200301a57600080fd5b8135620014098162003427565b6000602082840312156200303a57600080fd5b8151620014098162003427565b6000806000806000606086880312156200306057600080fd5b85356200306d8162003427565b945060208601356001600160401b03808211156200308a57600080fd5b6200309889838a0162002fbc565b90965094506040880135915080821115620030b257600080fd5b50620030c18882890162002fbc565b969995985093965092949392505050565b60008060408385031215620030e657600080fd5b8235620030f38162003427565b946020939093013593505050565b6000602082840312156200311457600080fd5b8151620014098162003440565b6000602082840312156200313457600080fd5b5035919050565b6000602082840312156200314e57600080fd5b5051919050565b600080604083850312156200316957600080fd5b50508035926020909101359150565b60008060008060008060c087890312156200319257600080fd5b86359550602087013594506040870135620031ad8162003427565b93506060870135620031bf8162003427565b92506080870135620031d18162003427565b915060a0870135620031e38162003440565b809150509295509295509295565b6000806000606084860312156200320757600080fd5b8351925060208401519150604084015190509250925092565b600082516200323481846020870162003377565b9190910192915050565b60208152600082518060208401526200325f81604085016020870162003377565b601f01601f19169190910160400192915050565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b60006001600160801b03808316818516808303821115620032cf57620032cf620033fb565b01949350505050565b60008219821115620032ee57620032ee620033fb565b500190565b60006001600160401b03808316818516808303821115620032cf57620032cf620033fb565b6000826200333657634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615620033585762003358620033fb565b500290565b600082821015620033725762003372620033fb565b500390565b60005b83811015620033945781810151838201526020016200337a565b8381111562000a4a5750506000910152565b600181811c90821680620033bb57607f821691505b6020821081141562001e4d57634e487b7160e01b600052602260045260246000fd5b6000600019821415620033f457620033f4620033fb565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03811681146200343d57600080fd5b50565b80151581146200343d57600080fdfe60c06040523480156200001157600080fd5b5060405162000b7138038062000b718339810160408190526200003491620004af565b33606081811b60a05282901b6001600160601b031916608052620000669082906200006d602090811b6200010617901c565b506200057a565b62000093816000846001600160a01b0316620000be60201b62000135179092919060201c565b620000ba81600019846001600160a01b0316620000be60201b62000135179092919060201c565b5050565b8015806200014c5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b1580156200010f57600080fd5b505afa15801562000124573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200014a9190620004da565b155b620001c45760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084015b60405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200021c9185916200022116565b505050565b60006200027d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316620002ff60201b62000285179092919060201c565b8051909150156200021c57808060200190518101906200029e91906200048b565b6200021c5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401620001bb565b60606200031084846000856200031a565b90505b9392505050565b6060824710156200037d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401620001bb565b843b620003cd5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401620001bb565b600080866001600160a01b03168587604051620003eb9190620004f4565b60006040518083038185875af1925050503d80600081146200042a576040519150601f19603f3d011682016040523d82523d6000602084013e6200042f565b606091505b509092509050620004428282866200044d565b979650505050505050565b606083156200045e57508162000313565b8251156200046f5782518084602001fd5b8160405162461bcd60e51b8152600401620001bb919062000512565b6000602082840312156200049e57600080fd5b815180151581146200031357600080fd5b600060208284031215620004c257600080fd5b81516001600160a01b03811681146200031357600080fd5b600060208284031215620004ed57600080fd5b5051919050565b600082516200050881846020870162000547565b9190910192915050565b60208152600082518060208401526200053381604085016020870162000547565b601f01601f19169190910160400192915050565b60005b83811015620005645781810151838201526020016200054a565b8381111562000574576000848401525b50505050565b60805160601c60a05160601c6105c1620005b060003960008181604b015260e0015260008181608e015260bf01526105c16000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063488a49e314610046578063d1b812cd14610089578063d8245bb9146100b0575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b6100b86100ba565b005b6101047f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610106565b565b61011b6001600160a01b038316826000610135565b6101316001600160a01b03831682600019610135565b5050565b8015806101be5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b15801561018457600080fd5b505afa158015610198573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101bc91906104f3565b155b61022e5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084015b60405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261028090849061029e565b505050565b60606102948484600085610370565b90505b9392505050565b60006102f3826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166102859092919063ffffffff16565b805190915015610280578080602001905181019061031191906104d1565b6102805760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610225565b6060824710156103d15760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610225565b843b61041f5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610225565b600080866001600160a01b0316858760405161043b919061050c565b60006040518083038185875af1925050503d8060008114610478576040519150601f19603f3d011682016040523d82523d6000602084013e61047d565b606091505b509150915061048d828286610498565b979650505050505050565b606083156104a7575081610297565b8251156104b75782518084602001fd5b8160405162461bcd60e51b81526004016102259190610528565b6000602082840312156104e357600080fd5b8151801515811461029757600080fd5b60006020828403121561050557600080fd5b5051919050565b6000825161051e81846020870161055b565b9190910192915050565b602081526000825180602084015261054781604085016020870161055b565b601f01601f19169190910160400192915050565b60005b8381101561057657818101518382015260200161055e565b83811115610585576000848401525b5050505056fea2646970667358221220c9d86f13adf5bf81a5ce95c24520a33da218e6862a5b4ae8f22e4d9da6b9856664736f6c63430008060033a264697066735822122012af9e037b19f7166153014c42dd60293ed6be819befe8ea3e299591e975f00a64736f6c63430008060033";
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
    static createInterface(): BoostedDualVaultInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BoostedDualVault;
}

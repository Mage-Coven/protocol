import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Liquidator, LiquidatorInterface } from "../Liquidator";
export declare class Liquidator__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_nexus: string, _stkAave: string, _aaveToken: string, _uniswapRouter: string, _uniswapQuoter: string, _compToken: string, _alchemixToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Liquidator>;
    getDeployTransaction(_nexus: string, _stkAave: string, _aaveToken: string, _uniswapRouter: string, _uniswapQuoter: string, _compToken: string, _alchemixToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Liquidator;
    connect(signer: Signer): Liquidator__factory;
    static readonly bytecode = "0x61016060405262093a80603f553480156200001957600080fd5b5060405162004029380380620040298339810160408190526200003c9162000350565b866001600160a01b038116620000995760405162461bcd60e51b815260206004820152601560248201527f4e657875732061646472657373206973207a65726f000000000000000000000060448201526064015b60405180910390fd5b60601b6001600160601b0319166080526001600160a01b038616620001015760405162461bcd60e51b815260206004820152601760248201527f496e76616c69642073746b414156452061646472657373000000000000000000604482015260640162000090565b6001600160601b0319606087901b1660a0526001600160a01b0385166200016b5760405162461bcd60e51b815260206004820152601460248201527f496e76616c696420414156452061646472657373000000000000000000000000604482015260640162000090565b6001600160601b0319606086901b1660c0526001600160a01b038416620001d55760405162461bcd60e51b815260206004820152601e60248201527f496e76616c696420556e697377617020526f7574657220616464726573730000604482015260640162000090565b6001600160601b0319606085901b1660e0526001600160a01b0383166200023f5760405162461bcd60e51b815260206004820152601e60248201527f496e76616c696420556e69737761702051756f74657220616464726573730000604482015260640162000090565b6001600160601b0319606084901b16610100526001600160a01b038216620002aa5760405162461bcd60e51b815260206004820152601460248201527f496e76616c696420434f4d502061646472657373000000000000000000000000604482015260640162000090565b6001600160601b0319606083901b16610120526001600160a01b038116620003155760405162461bcd60e51b815260206004820152601460248201527f496e76616c696420414c43582061646472657373000000000000000000000000604482015260640162000090565b60601b6001600160601b0319166101405250620003e5945050505050565b80516001600160a01b03811681146200034b57600080fd5b919050565b600080600080600080600060e0888a0312156200036c57600080fd5b620003778862000333565b9650620003876020890162000333565b9550620003976040890162000333565b9450620003a76060890162000333565b9350620003b76080890162000333565b9250620003c760a0890162000333565b9150620003d760c0890162000333565b905092959891949750929550565b60805160601c60a05160601c60c05160601c60e05160601c6101005160601c6101205160601c6101405160601c613b48620004e1600039600081816103fc015261261a0152600081816102d00152610cd00152600081816101f701526112ba01526000818161030a01528181610c9c01528181610cf20152818161147501528181612307015261263c01526000818161016201528181610c7a01528181611f490152818161243801526125950152600081816101d00152818161173501528181611a1501528181611aa501528181611b290152611ece01526000818161038701528181612a6e01528181612b3a0152612e6d0152613b486000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c80637f05f8c2116100c3578063c5a0d0bf1161007c578063c5a0d0bf146103c4578063cab56c35146103d7578063d05e0120146103f7578063d5040a0e1461041e578063d55ec69714610426578063f528ffe51461042e57600080fd5b80637f05f8c21461033f5780638129fc1c14610352578063937d4c421461035a578063a3f5c1d214610382578063b350df5d146103a9578063b9589ceb146103bc57600080fd5b80635fbc88a3116101155780635fbc88a31461022c57806361d31c2c146102b65780636605dfa7146102cb57806371bc59db146102f2578063735de9f7146103055780637e9fd2221461032c57600080fd5b806306a3fe591461015d5780631dac133e146101a15780633f813318146101b8578063476062a4146101cb5780634db4a352146101f2578063516c83a514610219575b600080fd5b6101847f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6101aa60445481565b604051908152602001610198565b603e54610184906001600160a01b031681565b6101847f000000000000000000000000000000000000000000000000000000000000000081565b6101847f000000000000000000000000000000000000000000000000000000000000000081565b603d54610184906001600160a01b031681565b61027a61023a366004613485565b604060208190526000918252902080546001820154600283015460048401546005909401546001600160a01b03938416949390921692600f9190910b9185565b604080516001600160a01b039687168152959094166020860152600f9290920b928401929092526060830191909152608082015260a001610198565b6102c96102c43660046134bf565b610441565b005b6101847f000000000000000000000000000000000000000000000000000000000000000081565b603c54610184906001600160a01b031681565b6101847f000000000000000000000000000000000000000000000000000000000000000081565b6102c961033a366004613485565b6108be565b61018461034d36600461365f565b610b9b565b6102c9610bc5565b61036d610368366004613485565b610d2e565b6040516101989998979695949392919061370c565b6101847f000000000000000000000000000000000000000000000000000000000000000081565b6102c96103b7366004613485565b610e9d565b6102c9611717565b6102c96103d2366004613485565b611bd7565b6101aa6103e5366004613485565b60416020526000908152604090205481565b6101847f000000000000000000000000000000000000000000000000000000000000000081565b6102c9611e22565b6102c961260d565b6102c961043c36600461359e565b612665565b610449612a6a565b6001600160a01b0316336001600160a01b03161480610480575061046b612b02565b6001600160a01b0316336001600160a01b0316145b6104a55760405162461bcd60e51b815260040161049c906137d4565b60405180910390fd5b6001600160a01b038b8116600090815260426020526040902054161561050d5760405162461bcd60e51b815260206004820152601a60248201527f4c69717569646174696f6e20616c726561647920657869737473000000000000604482015260640161049c565b6001600160a01b038b161580159061052d57506001600160a01b038a1615155b801561054157506001600160a01b03891615155b801561054d5750600083115b61058a5760405162461bcd60e51b815260206004820152600e60248201526d496e76616c696420696e7075747360901b604482015260640161049c565b6105968a8a8a8a612b85565b6105d95760405162461bcd60e51b8152602060048201526014602482015273092dcecc2d8d2c840eadcd2e6eec2e040e0c2e8d60631b604482015260640161049c565b6105e5898b8888612b85565b6106315760405162461bcd60e51b815260206004820152601d60248201527f496e76616c696420756e69737761702070617468207265766572736564000000604482015260640161049c565b6040518061012001604052808b6001600160a01b031681526020018a6001600160a01b0316815260200189898080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505090825250604080516020601f8a0181900481028201810190925288815291810191908990899081908401838280828437600092018290525093855250505060208083018290526040808401899052606084018890526001600160a01b03808816608086015260a09094018390528f841683526042825291829020845181549085166001600160a01b0319918216178255858301516001830180549190961691161790935590830151805161074a92600285019201906132da565b50606082015180516107669160038401916020909101906132da565b506080820151600482015560a0820151600582015560c0820151600682015560e08201516007820180546001600160a01b0319166001600160a01b0390921691909117905561010090910151600890910155801561080a57604380546001810182556000919091527f9690ad99d6ce244efa8a0f6c2d04036d3b33a9474db32a71b71135c6951027930180546001600160a01b0319166001600160a01b038d161790555b6001600160a01b0382161561087d5761082e6001600160a01b038a16836000612cd9565b6108446001600160a01b038a1683600019612cd9565b600061084e612e35565b90506108656001600160a01b038416826000612cd9565b61087b6001600160a01b03841682600019612cd9565b505b6040516001600160a01b038c16907f52f63ab5789c9a266379c35974b035fb9f7079ec0effab1b31e7ad82fadb488a90600090a25050505050505050505050565b6108c6612a6a565b6001600160a01b0316336001600160a01b031614806108fd57506108e8612b02565b6001600160a01b0316336001600160a01b0316145b6109195760405162461bcd60e51b815260040161049c906137d4565b6001600160a01b0380821660009081526042602090815260408083208151610120810183528154861681526001820154909516928501929092526002820180549394939184019161096990613a4d565b80601f016020809104026020016040519081016040528092919081815260200182805461099590613a4d565b80156109e25780601f106109b7576101008083540402835291602001916109e2565b820191906000526020600020905b8154815290600101906020018083116109c557829003601f168201915b505050505081526020016003820180546109fb90613a4d565b80601f0160208091040260200160405190810160405280929190818152602001828054610a2790613a4d565b8015610a745780601f10610a4957610100808354040283529160200191610a74565b820191906000526020600020905b815481529060010190602001808311610a5757829003601f168201915b50505091835250506004820154602080830191909152600583015460408301526006830154606083015260078301546001600160a01b03908116608084015260089093015460a09092019190915282015191925016610ae55760405162461bcd60e51b815260040161049c9061380b565b6001600160a01b038216600090815260426020526040812080546001600160a01b03199081168255600182018054909116905590610b26600283018261335e565b610b3460038301600061335e565b5060006004820181905560058201819055600682018190556007820180546001600160a01b031916905560089091018190556040516001600160a01b038416917fe513b42585b0ceec0d56d56fe3a23861c15a2f74eb4c32c94334d63d68ff4dcf91a25050565b60438181548110610bab57600080fd5b6000918252602090912001546001600160a01b0316905081565b600054610100900460ff1680610bda5750303b155b80610be8575060005460ff16155b610c4b5760405162461bcd60e51b815260206004820152602e60248201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560448201526d195b881a5b9a5d1a585b1a5e995960921b606482015260840161049c565b600054610100900460ff16158015610c6d576000805461ffff19166101011790555b610cc36001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f0000000000000000000000000000000000000000000000000000000000000000600019612cd9565b610d196001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f0000000000000000000000000000000000000000000000000000000000000000600019612cd9565b8015610d2b576000805461ff00191690555b50565b6042602052600090815260409020805460018201546002830180546001600160a01b03938416949290931692610d6390613a4d565b80601f0160208091040260200160405190810160405280929190818152602001828054610d8f90613a4d565b8015610ddc5780601f10610db157610100808354040283529160200191610ddc565b820191906000526020600020905b815481529060010190602001808311610dbf57829003601f168201915b505050505090806003018054610df190613a4d565b80601f0160208091040260200160405190810160405280929190818152602001828054610e1d90613a4d565b8015610e6a5780601f10610e3f57610100808354040283529160200191610e6a565b820191906000526020600020905b815481529060010190602001808311610e4d57829003601f168201915b50505050600483015460058401546006850154600786015460089096015494959294919350916001600160a01b03169089565b6001600160a01b03808216600090815260426020908152604080832081516101208101835281548616815260018201549095169285019290925260028201805493949391840191610eed90613a4d565b80601f0160208091040260200160405190810160405280929190818152602001828054610f1990613a4d565b8015610f665780601f10610f3b57610100808354040283529160200191610f66565b820191906000526020600020905b815481529060010190602001808311610f4957829003601f168201915b50505050508152602001600382018054610f7f90613a4d565b80601f0160208091040260200160405190810160405280929190818152602001828054610fab90613a4d565b8015610ff85780601f10610fcd57610100808354040283529160200191610ff8565b820191906000526020600020905b815481529060010190602001808311610fdb57829003601f168201915b50505091835250506004820154602080830191909152600583015460408301526006830154606083015260078301546001600160a01b03908116608084015260089093015460a090920191909152820151919250811661106a5760405162461bcd60e51b815260040161049c9061380b565b608082015161107c9062093a806138c4565b42116110c35760405162461bcd60e51b8152602060048201526016602482015275135d5cdd081dd85a5d08199bdc881a5b9d195c9d985b60521b604482015260640161049c565b6001600160a01b0383811660008181526042602052604080822042600491820155865191516370a0823160e01b815290810193909352929091908316906370a082319060240160206040518083038186803b15801561112157600080fd5b505afa158015611135573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111599190613678565b90508015611176576111766001600160a01b038316863084612ea4565b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a082319060240160206040518083038186803b1580156111b857600080fd5b505afa1580156111cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f09190613678565b9050600081116112425760405162461bcd60e51b815260206004820152601b60248201527f4e6f2073656c6c20746f6b656e7320746f206c69717569646174650000000000604482015260640161049c565b60008560a00151116112965760405162461bcd60e51b815260206004820152601b60248201527f4c69717569646174696f6e20686173206265656e207061757365640000000000604482015260640161049c565b606085015160a0860151604051632f80bb1d60e01b81526000926001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001692632f80bb1d926112ef92919060040161379f565b602060405180830381600087803b15801561130957600080fd5b505af115801561131d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113419190613678565b90508082101561134e5750805b6000846001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561138957600080fd5b505afa15801561139d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113c19190613691565b60ff16905060006113d382600a613941565b60c08901516113e290856139eb565b6113ec91906138dc565b90506000811161143e5760405162461bcd60e51b815260206004820152601a60248201527f4d757374206861766520736f6d6520707269636520666c6f6f72000000000000604482015260640161049c565b6040805160a08101825289820151815230602082015242818301526060810185905260808101839052905163c04b8d5960e01b81527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c04b8d59906114b2908490600401613842565b602060405180830381600087803b1580156114cc57600080fd5b505af11580156114e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115049190613678565b5060e08901516001600160a01b038116156115d15760006115258a83612edc565b90506000611531612e35565b6040516313e8da7160e21b81526001600160a01b0385811660048301526024820185905291925090821690634fa369c490604401600060405180830381600087803b15801561157f57600080fd5b505af1158015611593573d6000803e3d6000fd5b50505050896001600160a01b0316600080516020613af383398151915284848e6040516115c29392919061377c565b60405180910390a2505061170a565b6040516370a0823160e01b815230600482015289906000906001600160a01b038316906370a082319060240160206040518083038186803b15801561161557600080fd5b505afa158015611629573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061164d9190613678565b60405163a9059cbb60e01b81526001600160a01b038f81166004830152602482018390529192509083169063a9059cbb90604401602060405180830381600087803b15801561169b57600080fd5b505af11580156116af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116d39190613642565b50896001600160a01b0316600080516020613af383398151915284838e6040516116ff9392919061377c565b60405180910390a250505b5050505050505050505050565b604454801561196e5760405163091030c360e01b81523060048201527f0000000000000000000000000000000000000000000000000000000000000000906000906001600160a01b0383169063091030c390602401602060405180830381600087803b15801561178657600080fd5b505af115801561179a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117be9190613678565b90506000826001600160a01b03166372b49d636040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156117fd57600080fd5b505af1158015611811573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118359190613678565b90506000836001600160a01b031663359c4a966040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561187457600080fd5b505af1158015611888573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118ac9190613678565b90506118b882846138c4565b42116119065760405162461bcd60e51b815260206004820152601d60248201527f4c61737420636c61696d20636f6f6c646f776e206e6f7420656e646564000000604482015260640161049c565b8061191183856138c4565b61191b91906138c4565b42116119695760405162461bcd60e51b815260206004820152601960248201527f4d757374206c6971756964617465206c61737420636c61696d00000000000000604482015260640161049c565b505050505b60435460005b81811015611b1f5760006043828154811061199157611991613ab9565b60009182526020822001546040805163372500ab60e01b815290516001600160a01b039092169350839263372500ab9260048084019382900301818387803b1580156119dc57600080fd5b505af11580156119f0573d6000803e3d6000fd5b50506040516370a0823160e01b81526001600160a01b038481166004830152600093507f00000000000000000000000000000000000000000000000000000000000000001691506370a082319060240160206040518083038186803b158015611a5857600080fd5b505afa158015611a6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a909190613678565b90508015611acd57611acd6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016833084612ea4565b6001600160a01b03821660009081526042602052604081206008018054839290611af89084906138c4565b90915550611b08905081866138c4565b945050508080611b1790613a88565b915050611974565b50816044819055507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663787a08a66040518163ffffffff1660e01b8152600401600060405180830381600087803b158015611b8257600080fd5b505af1158015611b96573d6000803e3d6000fd5b505050507f2ada1795ab109068346c223dd1a476de05b9cc47b9ecc5724f702ee6a1850b8882604051611bcb91815260200190565b60405180910390a15050565b6001600160a01b03808216600090815260426020908152604080832081516101208101835281548616815260018201549095169285019290925260028201805493949391840191611c2790613a4d565b80601f0160208091040260200160405190810160405280929190818152602001828054611c5390613a4d565b8015611ca05780601f10611c7557610100808354040283529160200191611ca0565b820191906000526020600020905b815481529060010190602001808311611c8357829003601f168201915b50505050508152602001600382018054611cb990613a4d565b80601f0160208091040260200160405190810160405280929190818152602001828054611ce590613a4d565b8015611d325780601f10611d0757610100808354040283529160200191611d32565b820191906000526020600020905b815481529060010190602001808311611d1557829003601f168201915b50505091835250506004820154602080830191909152600583015460408301526006830154606083015260078301546001600160a01b03908116608084015260089093015460a0909201919091528201519192508116611da45760405162461bcd60e51b815260040161049c9061380b565b60e08201516001600160a01b03811615611e1c57611dcd6001600160a01b038316826000612cd9565b611de36001600160a01b03831682600019612cd9565b6000611ded612e35565b9050611e046001600160a01b038316826000612cd9565b611e1a6001600160a01b03831682600019612cd9565b505b50505050565b323314611e5f5760405162461bcd60e51b815260206004820152600b60248201526a4d75737420626520454f4160a81b604482015260640161049c565b600060445411611eb15760405162461bcd60e51b815260206004820152601d60248201527f4d75737420636c61696d206265666f7265206c69717569646174696f6e000000604482015260640161049c565b6040516301e9a69560e41b815230600482015260001960248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631e9a695090604401600060405180830381600087803b158015611f1a57600080fd5b505af1158015611f2e573d6000803e3d6000fd5b50506040516370a0823160e01b8152306004820152600092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031691506370a082319060240160206040518083038186803b158015611f9457600080fd5b505afa158015611fa8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fcc9190613678565b90506000811161201e5760405162461bcd60e51b815260206004820152601d60248201527f4e6f20416176652072656465656d65642066726f6d2073746b41617665000000604482015260640161049c565b60435460005b818110156126035760006043828154811061204157612041613ab9565b60009182526020808320909101546001600160a01b039081168084526042835260408085208151610120810183528154851681526001820154909416948401949094526002840180549296509293929084019161209d90613a4d565b80601f01602080910402602001604051908101604052809291908181526020018280546120c990613a4d565b80156121165780601f106120eb57610100808354040283529160200191612116565b820191906000526020600020905b8154815290600101906020018083116120f957829003601f168201915b5050505050815260200160038201805461212f90613a4d565b80601f016020809104026020016040519081016040528092919081815260200182805461215b90613a4d565b80156121a85780601f1061217d576101008083540402835291602001916121a8565b820191906000526020600020905b81548152906001019060200180831161218b57829003601f168201915b505050918352505060048201546020820152600582015460408201526006820154606082015260078201546001600160a01b0316608082015260089091015460a0909101526044546101008201519192506000916122079088906139eb565b61221191906138dc565b602083015190915081158061222d57506001600160a01b038116155b1561223b57505050506125f1565b6001600160a01b038416600090815260426020526040812060080181905560c0840151670de0b6b3a76400009061227290856139eb565b61227c91906138dc565b9050600081116122ce5760405162461bcd60e51b815260206004820152601a60248201527f4d757374206861766520736f6d6520707269636520666c6f6f72000000000000604482015260640161049c565b6040805160a08101825285820151815230602082015260009181016122f44260016138c4565b81526020018581526020018381525090507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c04b8d59826040518263ffffffff1660e01b81526004016123519190613842565b602060405180830381600087803b15801561236b57600080fd5b505af115801561237f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123a39190613678565b5060e08501516001600160a01b038116156124905760006123c48583612edc565b905060006123d0612e35565b6040516313e8da7160e21b81526001600160a01b0385811660048301526024820185905291925090821690634fa369c490604401600060405180830381600087803b15801561241e57600080fd5b505af1158015612432573d6000803e3d6000fd5b505050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316600080516020613af38339815191528484896040516124819392919061377c565b60405180910390a250506125e9565b6040516370a0823160e01b815230600482015284906000906001600160a01b038316906370a082319060240160206040518083038186803b1580156124d457600080fd5b505afa1580156124e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061250c9190613678565b60405163a9059cbb60e01b81526001600160a01b038b81166004830152602482018390529192509083169063a9059cbb90604401602060405180830381600087803b15801561255a57600080fd5b505af115801561256e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125929190613642565b507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316600080516020613af38339815191528483896040516125de9392919061377c565b60405180910390a250505b505050505050505b806125fb81613a88565b915050612024565b5050600060445550565b6126636001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f0000000000000000000000000000000000000000000000000000000000000000600019612cd9565b565b61266d612a6a565b6001600160a01b0316336001600160a01b031614806126a4575061268f612b02565b6001600160a01b0316336001600160a01b0316145b6126c05760405162461bcd60e51b815260040161049c906137d4565b6001600160a01b0380891660009081526042602090815260408083208151610120810183528154861681526001820154909516928501929092526002820180549394939184019161271090613a4d565b80601f016020809104026020016040519081016040528092919081815260200182805461273c90613a4d565b80156127895780601f1061275e57610100808354040283529160200191612789565b820191906000526020600020905b81548152906001019060200180831161276c57829003601f168201915b505050505081526020016003820180546127a290613a4d565b80601f01602080910402602001604051908101604052809291908181526020018280546127ce90613a4d565b801561281b5780601f106127f05761010080835404028352916020019161281b565b820191906000526020600020905b8154815290600101906020018083116127fe57829003601f168201915b50505091835250506004820154602080830191909152600583015460408301526006830154606083015260078301546001600160a01b03908116608084015260089093015460a090920191909152820151919250811661288d5760405162461bcd60e51b815260040161049c9061380b565b600083116128dd5760405162461bcd60e51b815260206004820152601b60248201527f4d7573742073657420736f6d65206d696e696d756d2076616c75650000000000604482015260640161049c565b6001600160a01b0389166129245760405162461bcd60e51b815260206004820152600e60248201526d125b9d985b1a590818905cdcd95d60921b604482015260640161049c565b8151612932908a8a8a612b85565b6129755760405162461bcd60e51b8152602060048201526014602482015273092dcecc2d8d2c840eadcd2e6eec2e040e0c2e8d60631b604482015260640161049c565b6129858983600001518888612b85565b6129d15760405162461bcd60e51b815260206004820152601d60248201527f496e76616c696420756e69737761702070617468207265766572736564000000604482015260640161049c565b6001600160a01b038a811660009081526042602052604090206001810180546001600160a01b031916928c1692909217909155612a12906002018989613398565b506001600160a01b038a1660008181526042602052604080822060058101889055600601869055517f52f63ab5789c9a266379c35974b035fb9f7079ec0effab1b31e7ad82fadb488a9190a250505050505050505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b158015612ac557600080fd5b505afa158015612ad9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612afd91906134a2565b905090565b6040516385acd64160e01b81527f9409903de1e6fd852dfc61c9dacb48196c48535b60e25abf92acc92dd689078d60048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906385acd641906024015b60206040518083038186803b158015612ac557600080fd5b600081602b811015612bd25760405162461bcd60e51b8152602060048201526016602482015275155b9a5cddd85c081c185d1a081d1bdbc81cda1bdc9d60521b604482015260640161049c565b612be060146000858761389a565b604051602001612bf19291906136e0565b6040516020818303038152906040528051906020012086604051602001612c30919060609190911b6bffffffffffffffffffffffff1916815260140190565b60405160208183030381529060405280519060200120148015612ccf57508383612c5b601484613a0a565b612c679284929061389a565b604051602001612c789291906136e0565b6040516020818303038152906040528051906020012085604051602001612cb7919060609190911b6bffffffffffffffffffffffff1916815260140190565b60405160208183030381529060405280519060200120145b9695505050505050565b801580612d625750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b158015612d2857600080fd5b505afa158015612d3c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d609190613678565b155b612dcd5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b606482015260840161049c565b6040516001600160a01b038316602482015260448101829052612e3090849063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261308e565b505050565b6040516385acd64160e01b81527f12fe936c77a1e196473c4314f3bed8eeac1d757b319abb85bdda70df35511bf160048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906385acd64190602401612b6d565b6040516001600160a01b0380851660248301528316604482015260648101829052611e1c9085906323b872dd60e01b90608401612df9565b6040516370a0823160e01b815230600482015260009081906001600160a01b038516906370a082319060240160206040518083038186803b158015612f2057600080fd5b505afa158015612f34573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f589190613678565b90506000846001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015612f9557600080fd5b505afa158015612fa9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612fcd9190613691565b60ff1690506000612fdf82600a613941565b612ff184670c7d713b49da00006139eb565b612ffb91906138dc565b604051637ba5ff4760e11b81526001600160a01b03888116600483015260248201869052604482018390523060648301529192509086169063f74bfe8e90608401602060405180830381600087803b15801561305657600080fd5b505af115801561306a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ccf9190613678565b60006130e3826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166131609092919063ffffffff16565b805190915015612e3057808060200190518101906131019190613642565b612e305760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161049c565b606061316f8484600085613179565b90505b9392505050565b6060824710156131da5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161049c565b843b6132285760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161049c565b600080866001600160a01b0316858760405161324491906136f0565b60006040518083038185875af1925050503d8060008114613281576040519150601f19603f3d011682016040523d82523d6000602084013e613286565b606091505b50915091506132968282866132a1565b979650505050505050565b606083156132b0575081613172565b8251156132c05782518084602001fd5b8160405162461bcd60e51b815260040161049c91906137c1565b8280546132e690613a4d565b90600052602060002090601f016020900481019282613308576000855561334e565b82601f1061332157805160ff191683800117855561334e565b8280016001018555821561334e579182015b8281111561334e578251825591602001919060010190613333565b5061335a92915061340c565b5090565b50805461336a90613a4d565b6000825580601f1061337a575050565b601f016020900490600052602060002090810190610d2b919061340c565b8280546133a490613a4d565b90600052602060002090601f0160209004810192826133c6576000855561334e565b82601f106133df5782800160ff1982351617855561334e565b8280016001018555821561334e579182015b8281111561334e5782358255916020019190600101906133f1565b5b8082111561335a576000815560010161340d565b803561342c81613acf565b919050565b803561342c81613ae4565b60008083601f84011261344e57600080fd5b50813567ffffffffffffffff81111561346657600080fd5b60208301915083602082850101111561347e57600080fd5b9250929050565b60006020828403121561349757600080fd5b813561317281613acf565b6000602082840312156134b457600080fd5b815161317281613acf565b60008060008060008060008060008060006101208c8e0312156134e157600080fd5b6134eb8c35613acf565b8b359a5060208c01356134fd81613acf565b995061350b60408d01613421565b985067ffffffffffffffff8060608e0135111561352757600080fd5b6135378e60608f01358f0161343c565b909950975060808d013581101561354d57600080fd5b5061355e8d60808e01358e0161343c565b909650945060a08c0135935060c08c0135925061357d60e08d01613421565b915061358c6101008d01613431565b90509295989b509295989b9093969950565b60008060008060008060008060c0898b0312156135ba57600080fd5b88356135c581613acf565b975060208901356135d581613acf565b9650604089013567ffffffffffffffff808211156135f257600080fd5b6135fe8c838d0161343c565b909850965060608b013591508082111561361757600080fd5b506136248b828c0161343c565b999c989b5096999598969760808701359660a0013595509350505050565b60006020828403121561365457600080fd5b815161317281613ae4565b60006020828403121561367157600080fd5b5035919050565b60006020828403121561368a57600080fd5b5051919050565b6000602082840312156136a357600080fd5b815160ff8116811461317257600080fd5b600081518084526136cc816020860160208601613a21565b601f01601f19169290920160200192915050565b8183823760009101908152919050565b60008251613702818460208701613a21565b9190910192915050565b6001600160a01b038a8116825289811660208301526101206040830181905260009161373a8483018c6136b4565b9150838203606085015261374e828b6136b4565b608085019990995260a0840197909752505060c0810193909352921660e08201526101000152949350505050565b6001600160a01b0393841681526020810192909252909116604082015260600190565b6040815260006137b260408301856136b4565b90508260208301529392505050565b60208152600061317260208301846136b4565b6020808252601b908201527f4f6e6c7920676f7665726e616e63652063616e20657865637574650000000000604082015260600190565b6020808252601a908201527f4c69717569646174696f6e20646f6573206e6f74206578697374000000000000604082015260600190565b602081526000825160a0602084015261385e60c08401826136b4565b905060018060a01b0360208501511660408401526040840151606084015260608401516080840152608084015160a08401528091505092915050565b600080858511156138aa57600080fd5b838611156138b757600080fd5b5050820193919092039150565b600082198211156138d7576138d7613aa3565b500190565b6000826138f957634e487b7160e01b600052601260045260246000fd5b500490565b600181815b8085111561393957816000190482111561391f5761391f613aa3565b8085161561392c57918102915b93841c9390800290613903565b509250929050565b60006131728383600082613957575060016139e5565b81613964575060006139e5565b816001811461397a5760028114613984576139a0565b60019150506139e5565b60ff84111561399557613995613aa3565b50506001821b6139e5565b5060208310610133831016604e8410600b84101617156139c3575081810a6139e5565b6139cd83836138fe565b80600019048211156139e1576139e1613aa3565b0290505b92915050565b6000816000190483118215151615613a0557613a05613aa3565b500290565b600082821015613a1c57613a1c613aa3565b500390565b60005b83811015613a3c578181015183820152602001613a24565b83811115611e1c5750506000910152565b600181811c90821680613a6157607f821691505b60208210811415613a8257634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415613a9c57613a9c613aa3565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0381168114610d2b57600080fd5b8015158114610d2b57600080fdfebf8c93ffab42c7a8745e30d00eef080c6704962d26f0b42a0e9d9589b7417af1a264697066735822122046ecdec4021902bb5623e21362e73c331facb5a9649a0b17aa97c9e44de5e76e64736f6c63430008060033";
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
    static createInterface(): LiquidatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Liquidator;
}

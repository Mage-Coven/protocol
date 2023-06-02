import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockBVault, MockBVaultInterface } from "../MockBVault";
export declare class MockBVault__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockBVault>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockBVault;
    connect(signer: Signer): MockBVault__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506116d5806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638bdb39131161005b5780638bdb3913146100da578063b5217bb4146100ed578063d4175be214610116578063f94d46681461014457600080fd5b806324ba432814610082578063512644ef146100b257806376993089146100c7575b600080fd5b610095610090366004611294565b610166565b6040516001600160a01b0390911681526020015b60405180910390f35b6100c56100c0366004611167565b61019e565b005b6100c56100d5366004611244565b6104dd565b6100c56100e83660046112f6565b610a93565b6100956100fb3660046112dd565b6000602081905290815260409020546001600160a01b031681565b610136610124366004611143565b60016020526000908152604090205481565b6040519081526020016100a9565b6101576101523660046112dd565b610da2565b6040516100a9939291906114b9565b6002602052816000526040600020818154811061018257600080fd5b6000918252602090912001546001600160a01b03169150829050565b826000806101ad600143611605565b408152602081019190915260400160002080546001600160a01b0319166001600160a01b03929092169190911790556101e7600143611605565b6001600160a01b0384166000818152600160209081526040808320944090945583516318160ddd60e01b8152935191936318160ddd9260048083019392829003018186803b15801561023857600080fd5b505afa15801561024c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610270919061144e565b9050683635c9adc5dea0000081116102c25760405162461bcd60e51b815260206004820152601060248201526f4d757374206861766520746f6b656e7360801b60448201526064015b60405180910390fd5b81516002146103035760405162461bcd60e51b815260206004820152600d60248201526c496e76616c696420726174696f60981b60448201526064016102b9565b6001600160a01b0384166000908152600260209081526040909120845161032c92860190610fd7565b50826000815181106103405761034061164d565b60200260200101516001600160a01b03166323b872dd3330670de0b6b3a764000085876000815181106103755761037561164d565b602002602001015161038791906115e6565b61039191906115c4565b6040518463ffffffff1660e01b81526004016103af93929190611495565b602060405180830381600087803b1580156103c957600080fd5b505af11580156103dd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040191906112c0565b50826001815181106104155761041561164d565b60200260200101516001600160a01b03166323b872dd3330670de0b6b3a7640000858760018151811061044a5761044a61164d565b602002602001015161045c91906115e6565b61046691906115c4565b6040518463ffffffff1660e01b815260040161048493929190611495565b602060405180830381600087803b15801561049e57600080fd5b505af11580156104b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d691906112c0565b5050505050565b6001600160a01b03821660009081526002602090815260408083208054825181850281018501909352808352919290919083018282801561054757602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610529575b5050505050905080518251146105905760405162461bcd60e51b815260206004820152600e60248201526d092dcecc2d8d2c840d8cadccee8d60931b60448201526064016102b9565b6000836001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156105cb57600080fd5b505afa1580156105df573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610603919061144e565b905060008260008151811061061a5761061a61164d565b60209081029190910101516040516370a0823160e01b81523060048201526001600160a01b03909116906370a082319060240160206040518083038186803b15801561066557600080fd5b505afa158015610679573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069d919061144e565b90506000836001815181106106b4576106b461164d565b60209081029190910101516040516370a0823160e01b81523060048201526001600160a01b03909116906370a082319060240160206040518083038186803b1580156106ff57600080fd5b505afa158015610713573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610737919061144e565b90506000670de0b6b3a764000084876000815181106107585761075861164d565b602002602001015161076a91906115e6565b61077491906115c4565b90506000670de0b6b3a764000085886001815181106107955761079561164d565b60200260200101516107a791906115e6565b6107b191906115c4565b90508184111561087557856000815181106107ce576107ce61164d565b60200260200101516001600160a01b031663a9059cbb3384876107f19190611605565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381600087803b15801561083757600080fd5b505af115801561084b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086f91906112c0565b5061091e565b856000815181106108885761088861164d565b60200260200101516001600160a01b03166323b872dd333087866108ac9190611605565b6040518463ffffffff1660e01b81526004016108ca93929190611495565b602060405180830381600087803b1580156108e457600080fd5b505af11580156108f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091c91906112c0565b505b808311156109e057856001815181106109395761093961164d565b60200260200101516001600160a01b031663a9059cbb33838661095c9190611605565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381600087803b1580156109a257600080fd5b505af11580156109b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109da91906112c0565b50610a89565b856001815181106109f3576109f361164d565b60200260200101516001600160a01b03166323b872dd33308685610a179190611605565b6040518463ffffffff1660e01b8152600401610a3593929190611495565b602060405180830381600087803b158015610a4f57600080fd5b505af1158015610a63573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8791906112c0565b505b5050505050505050565b6000848152602081905260409020546001600160a01b031680610ae75760405162461bcd60e51b815260206004820152600c60248201526b24b73b30b634b21030b2323960a11b60448201526064016102b9565b60008260000151600081518110610b0057610b0061164d565b6020026020010151905060008360200151600081518110610b2357610b2361164d565b6020026020010151905060008460400151806020019051810190610b479190611467565b5060405163487a87bd60e01b81526001600160a01b038a8116600483015260248201839052919350908616915063487a87bd90604401600060405180830381600087803b158015610b9757600080fd5b505af1158015610bab573d6000803e3d6000fd5b505050506000846001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610bea57600080fd5b505afa158015610bfe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c22919061144e565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038616906370a082319060240160206040518083038186803b158015610c6757600080fd5b505afa158015610c7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9f919061144e565b90506000606483610cb086856115e6565b610cba91906115c4565b610cc590607d6115e6565b610ccf91906115c4565b9050848111610d125760405162461bcd60e51b815260206004820152600f60248201526e135a5b881bdd5d081b9bdd081b595d608a1b60448201526064016102b9565b60405163a9059cbb60e01b81526001600160a01b038a811660048301526024820183905287169063a9059cbb90604401602060405180830381600087803b158015610d5c57600080fd5b505af1158015610d70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9491906112c0565b505050505050505050505050565b600081815260208181526040808320546001600160a01b031680845260028352818420805483518186028101860190945280845260609586959094859390929091830182828015610e1c57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610dfe575b50508351939450839250505067ffffffffffffffff811115610e4057610e40611663565b604051908082528060200260200182016040528015610e69578160200160208202803683370190505b5095508067ffffffffffffffff811115610e8557610e85611663565b604051908082528060200260200182016040528015610eae578160200160208202803683370190505b50945060005b81811015610fcc57828181518110610ece57610ece61164d565b6020026020010151878281518110610ee857610ee861164d565b60200260200101906001600160a01b031690816001600160a01b031681525050828181518110610f1a57610f1a61164d565b60209081029190910101516040516370a0823160e01b81523060048201526001600160a01b03909116906370a082319060240160206040518083038186803b158015610f6557600080fd5b505afa158015610f79573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f9d919061144e565b868281518110610faf57610faf61164d565b602090810291909101015280610fc48161161c565b915050610eb4565b505050509193909250565b82805482825590600052602060002090810192821561102c579160200282015b8281111561102c57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190610ff7565b5061103892915061103c565b5090565b5b80821115611038576000815560010161103d565b600082601f83011261106257600080fd5b81356020611077611072836115a0565b61156f565b80838252828201915082860187848660051b890101111561109757600080fd5b60005b858110156110b65781358452928401929084019060010161109a565b5090979650505050505050565b80356110ce81611691565b919050565b600082601f8301126110e457600080fd5b813567ffffffffffffffff8111156110fe576110fe611663565b611111601f8201601f191660200161156f565b81815284602083860101111561112657600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561115557600080fd5b813561116081611679565b9392505050565b60008060006060848603121561117c57600080fd5b833561118781611679565b925060208481013567ffffffffffffffff808211156111a557600080fd5b818701915087601f8301126111b957600080fd5b81356111c7611072826115a0565b8082825285820191508585018b878560051b88010111156111e757600080fd5b600095505b838610156112135780356111ff81611679565b8352600195909501949186019186016111ec565b5096505050604087013592508083111561122c57600080fd5b505061123a86828701611051565b9150509250925092565b6000806040838503121561125757600080fd5b823561126281611679565b9150602083013567ffffffffffffffff81111561127e57600080fd5b61128a85828601611051565b9150509250929050565b600080604083850312156112a757600080fd5b82356112b281611679565b946020939093013593505050565b6000602082840312156112d257600080fd5b815161116081611691565b6000602082840312156112ef57600080fd5b5035919050565b6000806000806080858703121561130c57600080fd5b8435935060208086013561131f81611679565b9350604086013561132f81611679565b9250606086013567ffffffffffffffff8082111561134c57600080fd5b908701906080828a03121561136057600080fd5b611368611546565b82358281111561137757600080fd5b8301601f81018b1361138857600080fd5b8035611396611072826115a0565b8082825287820191508784018e898560051b87010111156113b657600080fd5b600094505b838510156113e25780356113ce81611679565b8352600194909401939188019188016113bb565b50845250505082840135828111156113f957600080fd5b6114058b828601611051565b8583015250604083013593508184111561141e57600080fd5b61142a8a8585016110d3565b604082015261143b606084016110c3565b6060820152969995985093965050505050565b60006020828403121561146057600080fd5b5051919050565b60008060006060848603121561147c57600080fd5b8351925060208401519150604084015190509250925092565b6001600160a01b039384168152919092166020820152604081019190915260600190565b606080825284519082018190526000906020906080840190828801845b828110156114fb5781516001600160a01b0316845292840192908401906001016114d6565b5050508381038285015285518082528683019183019060005b8181101561153057835183529284019291840191600101611514565b5050809350505050826040830152949350505050565b6040516080810167ffffffffffffffff8111828210171561156957611569611663565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561159857611598611663565b604052919050565b600067ffffffffffffffff8211156115ba576115ba611663565b5060051b60200190565b6000826115e157634e487b7160e01b600052601260045260246000fd5b500490565b600081600019048311821515161561160057611600611637565b500290565b60008282101561161757611617611637565b500390565b600060001982141561163057611630611637565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461168e57600080fd5b50565b801515811461168e57600080fdfea264697066735822122025bf958aef33c45383f4f664b937483e0efd34a300c2709772514062327fe47a64736f6c63430008060033";
    static readonly abi: ({
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
    })[];
    static createInterface(): MockBVaultInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockBVault;
}

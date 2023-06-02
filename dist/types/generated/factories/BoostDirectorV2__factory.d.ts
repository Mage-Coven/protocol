import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BoostDirectorV2, BoostDirectorV2Interface } from "../BoostDirectorV2";
export declare class BoostDirectorV2__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_nexus: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BoostDirectorV2>;
    getDeployTransaction(_nexus: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BoostDirectorV2;
    connect(signer: Signer): BoostDirectorV2__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5060405161117c38038061117c83398101604081905261002f916100a5565b806001600160a01b03811661008a5760405162461bcd60e51b815260206004820152601560248201527f4e657875732061646472657373206973207a65726f0000000000000000000000604482015260640160405180910390fd5b60601b6001600160601b03191660805250600c6004556100d5565b6000602082840312156100b757600080fd5b81516001600160a01b03811681146100ce57600080fd5b9392505050565b60805160601c6110826100fa600039600081816101710152610d7801526110826000f3fe608060405234801561001057600080fd5b50600436106100a85760003560e01c8063a224cee711610071578063a224cee714610159578063a3f5c1d21461016c578063dc633cf014610193578063e85a89fd146101a6578063f8b2cb4f146101db578063fcb248f9146101fc57600080fd5b8062b38b75146100ad5780630225a9e3146100f357806326603afc146101085780637818d79a1461011b5780637da873941461012e575b600080fd5b6100d66100bb366004610e0c565b6003602052600090815260409020546001600160801b031681565b6040516001600160801b0390911681526020015b60405180910390f35b610106610101366004610e0c565b61020f565b005b610106610116366004610e4d565b61033f565b610106610129366004610f12565b61058b565b61014161013c366004610f12565b61065b565b6040516001600160a01b0390911681526020016100ea565b610106610167366004610e9d565b610685565b6101417f000000000000000000000000000000000000000000000000000000000000000081565b6101066101a1366004610e0c565b6106dc565b6101c96101b4366004610e0c565b60026020526000908152604090205460ff1681565b60405160ff90911681526020016100ea565b6101ee6101e9366004610e0c565b610827565b6040519081526020016100ea565b61010661020a366004610e9d565b610a17565b610217610a1b565b60008054905b818110156102bc57826001600160a01b03166000828154811061024257610242611021565b6000918252602090912001546001600160a01b031614156102aa5760405162461bcd60e51b815260206004820152601960248201527f5374616b6564546f6b656e20616c72656164792061646465640000000000000060448201526064015b60405180910390fd5b806102b481610fba565b91505061021d565b50600080546001810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630180546001600160a01b0319166001600160a01b0384169081179091556040519081527f1ab37e38fb95e40871c2e285fd1dabd08cd4e55da04f886768ff20a435ea28829060200160405180910390a15050565b6001600160a01b0380841660009081526002602052604080822054928516825290205460ff9182169116811580159061037b575060008160ff16115b6103c05760405162461bcd60e51b815260206004820152601660248201527515985d5b1d1cc81b9bdd081dda1a5d195b1a5cdd195960521b60448201526064016102a1565b336000908152600360205260408120546001600160801b03169080806103e68487610a85565b9250925092508280156103fd575060068260ff1610155b6104425760405162461bcd60e51b8152602060048201526016602482015275139bc81b995959081d1bc81c995c1b1858d9481bdb1960521b60448201526064016102a1565b61044d848287610afa565b336000818152600360205260409081902080546001600160801b0319166001600160801b039490941693909317909255905163cf7bf6b760e01b815260048101919091526001600160a01b038a169063cf7bf6b790602401600060405180830381600087803b1580156104bf57600080fd5b505af11580156104d3573d6000803e3d6000fd5b5050505086156105375760405163cf7bf6b760e01b81523360048201526001600160a01b0389169063cf7bf6b790602401600060405180830381600087803b15801561051e57600080fd5b505af1158015610532573d6000803e3d6000fd5b505050505b604080513381526001600160a01b038a811660208301528b168183015290517f96e457192e990ea428b6f1ec9774dec2368ee81910ce56c3fdc51a65536d58bd9181900360600190a1505050505050505050565b610593610a1b565b6004548114156105dc5760405162461bcd60e51b815260206004820152601460248201527327379031b430b733b29034b7103234bb34b9b7b960611b60448201526064016102a1565b600f81106106205760405162461bcd60e51b815260206004820152601160248201527044697669736f7220746f6f206c6172676560781b60448201526064016102a1565b60048190556040518181527f5ee855ebd62fa659dbd0e634b89a39740ee09c6a1998896619b6a442ff48a7859060200160405180910390a150565b6000818154811061066b57600080fd5b6000918252602090912001546001600160a01b0316905081565b60015460ff16156106ce5760405162461bcd60e51b8152602060048201526013602482015272105b1c9958591e481a5b9a5d1a585b1a5e9959606a1b60448201526064016102a1565b6106d88282610b64565b5050565b6106e4610a1b565b60008054905b8181101561082157826001600160a01b03166000828154811061070f5761070f611021565b6000918252602090912001546001600160a01b0316141561080f576000610737600184610fa3565b8154811061074757610747611021565b600091825260208220015481546001600160a01b0390911691908390811061077157610771611021565b6000918252602082200180546001600160a01b0319166001600160a01b0393909316929092179091558054806107a9576107a961100b565b6000828152602090819020600019908301810180546001600160a01b03191690559091019091556040516001600160a01b03851681527f038f6b7bcf7cd726054ec32349e5e1844848fc852e887b0bb87787e08733469e910160405180910390a1505050565b8061081981610fba565b9150506106ea565b50505b50565b3360009081526002602052604081205460ff16806108485750600092915050565b6001600160a01b03831660009081526003602052604081205481546001600160801b03909116915b8181101561092f576000818154811061088b5761088b611021565b6000918252602090912001546040516370a0823160e01b81526001600160a01b038881166004830152909116906370a082319060240160206040518083038186803b1580156108d957600080fd5b505afa1580156108ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109119190610f2b565b61091b9086610f44565b94508061092781610fba565b915050610870565b5060045461093d9085610f81565b935060008061094c8486610a85565b50915091508115610961575050505050919050565b60068160ff1610156109f557610978848287610afa565b6001600160a01b03881660008181526003602090815260409182902080546001600160801b0319166001600160801b039590951694909417909355805191825233928201929092527fa9422dd63708544dd1d6bab7030a79821296b3ccfc25d7bffa7c4cc63eae4927910160405180910390a15050505050919050565b60068160ff1610610a0d575060009695505050505050565b5050505050919050565b6106ce5b610a23610d74565b6001600160a01b0316336001600160a01b031614610a835760405162461bcd60e51b815260206004820152601960248201527f4f6e6c7920676f7665726e6f722063616e20657865637574650000000000000060448201526064016102a1565b565b60008060008060005b60068160ff161015610af1578060080260ff16876001600160801b0316901c915060008260ff161115610ac957610ac6600185610f5c565b93505b8560ff168260ff161415610adf57600194508092505b80610ae981610fd5565b915050610a8e565b50509250925092565b60008080805b60068160ff161015610b5a578060ff168660ff1614610b30576001600160801b03871660ff60088302161c610b32565b845b60ff818116600884029091161b94851794909350915080610b5281610fd5565b915050610b00565b5050509392505050565b8080610bb25760405162461bcd60e51b815260206004820152601a60248201527f4d757374206265206174206c65617374206f6e65207661756c7400000000000060448201526064016102a1565b60005b81811015610d6e57600060026000868685818110610bd557610bd5611021565b9050602002016020810190610bea9190610e0c565b6001600160a01b0316815260208101919091526040016000205460ff1690508015610c575760405162461bcd60e51b815260206004820152601960248201527f5661756c7420616c72656164792077686974656c69737465640000000000000060448201526064016102a1565b600180548190600090610c6e90839060ff16610f5c565b92506101000a81548160ff021916908360ff160217905550600160009054906101000a900460ff1660026000878786818110610cac57610cac611021565b9050602002016020810190610cc19190610e0c565b6001600160a01b031681526020810191909152604001600020805460ff191660ff929092169190911790557fc7bf79a3be1a40b7b3c72951d6f8e32eb2e537c58d2947c91af23897388ef825858584818110610d1f57610d1f611021565b9050602002016020810190610d349190610e0c565b600154604080516001600160a01b03909316835260ff90911660208301520160405180910390a15080610d6681610fba565b915050610bb5565b50505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b158015610dcf57600080fd5b505afa158015610de3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e079190610e30565b905090565b600060208284031215610e1e57600080fd5b8135610e2981611037565b9392505050565b600060208284031215610e4257600080fd5b8151610e2981611037565b600080600060608486031215610e6257600080fd5b8335610e6d81611037565b92506020840135610e7d81611037565b915060408401358015158114610e9257600080fd5b809150509250925092565b60008060208385031215610eb057600080fd5b823567ffffffffffffffff80821115610ec857600080fd5b818501915085601f830112610edc57600080fd5b813581811115610eeb57600080fd5b8660208260051b8501011115610f0057600080fd5b60209290920196919550909350505050565b600060208284031215610f2457600080fd5b5035919050565b600060208284031215610f3d57600080fd5b5051919050565b60008219821115610f5757610f57610ff5565b500190565b600060ff821660ff84168060ff03821115610f7957610f79610ff5565b019392505050565b600082610f9e57634e487b7160e01b600052601260045260246000fd5b500490565b600082821015610fb557610fb5610ff5565b500390565b6000600019821415610fce57610fce610ff5565b5060010190565b600060ff821660ff811415610fec57610fec610ff5565b60010192915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6001600160a01b038116811461082457600080fdfea2646970667358221220ac55216505b3a3f0218f537b5683ffe04bfcec65125ab5f02c1a6e94d0a7ab8264736f6c63430008060033";
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
    static createInterface(): BoostDirectorV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): BoostDirectorV2;
}

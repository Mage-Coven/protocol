import { Signer, BytesLike, ContractFactory, PayableOverrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VaultProxy, VaultProxyInterface } from "../VaultProxy";
export declare class VaultProxy__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_logic: string, admin_: string, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<VaultProxy>;
    getDeployTransaction(_logic: string, admin_: string, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): VaultProxy;
    connect(signer: Signer): VaultProxy__factory;
    static readonly bytecode = "0x608060405260405162000f3f38038062000f3f8339810160408190526200002691620004c8565b82828282816200005860017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd620005fb565b60008051602062000ef88339815191521462000078576200007862000650565b6200008682826000620000ed565b50620000b6905060017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6104620005fb565b60008051602062000ed883398151915214620000d657620000d662000650565b620000e1826200012a565b5050505050506200067c565b620000f88362000185565b600082511180620001065750805b156200012557620001238383620001c760201b620002601760201c565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f62000155620001f6565b604080516001600160a01b03928316815291841660208301520160405180910390a162000182816200022f565b50565b6200019081620002e4565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060620001ef838360405180606001604052806027815260200162000f186027913962000387565b9392505050565b60006200022060008051602062000ed883398151915260001b6200046460201b620002081760201c565b546001600160a01b0316919050565b6001600160a01b0381166200029a5760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b80620002c360008051602062000ed883398151915260001b6200046460201b620002081760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b620002fa816200046760201b6200028c1760201c565b6200035e5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840162000291565b80620002c360008051602062000ef883398151915260001b6200046460201b620002081760201c565b6060833b620003e85760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b606482015260840162000291565b600080856001600160a01b031685604051620004059190620005a8565b600060405180830381855af49150503d806000811462000442576040519150601f19603f3d011682016040523d82523d6000602084013e62000447565b606091505b5090925090506200045a8282866200046d565b9695505050505050565b90565b3b151590565b606083156200047e575081620001ef565b8251156200048f5782518084602001fd5b8160405162461bcd60e51b8152600401620002919190620005c6565b80516001600160a01b0381168114620004c357600080fd5b919050565b600080600060608486031215620004de57600080fd5b620004e984620004ab565b9250620004f960208501620004ab565b60408501519092506001600160401b03808211156200051757600080fd5b818601915086601f8301126200052c57600080fd5b81518181111562000541576200054162000666565b604051601f8201601f19908116603f011681019083821181831017156200056c576200056c62000666565b816040528281528960208487010111156200058657600080fd5b6200059983602083016020880162000621565b80955050505050509250925092565b60008251620005bc81846020870162000621565b9190910192915050565b6020815260008251806020840152620005e781604085016020870162000621565b601f01601f19169190910160400192915050565b6000828210156200061c57634e487b7160e01b600052601160045260246000fd5b500390565b60005b838110156200063e57818101518382015260200162000624565b83811115620001235750506000910152565b634e487b7160e01b600052600160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b61084c806200068c6000396000f3fe60806040526004361061004e5760003560e01c80633659cfe6146100655780634f1ef286146100855780635c60da1b146100985780638f283970146100c9578063f851a440146100e95761005d565b3661005d5761005b6100fe565b005b61005b6100fe565b34801561007157600080fd5b5061005b6100803660046106d6565b610118565b61005b6100933660046106f1565b61015f565b3480156100a457600080fd5b506100ad6101d0565b6040516001600160a01b03909116815260200160405180910390f35b3480156100d557600080fd5b5061005b6100e43660046106d6565b61020b565b3480156100f557600080fd5b506100ad610235565b610106610292565b610116610111610331565b61033b565b565b61012061035f565b6001600160a01b0316336001600160a01b031614156101575761015481604051806020016040528060008152506000610392565b50565b6101546100fe565b61016761035f565b6001600160a01b0316336001600160a01b031614156101c8576101c38383838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525060019250610392915050565b505050565b6101c36100fe565b60006101da61035f565b6001600160a01b0316336001600160a01b03161415610200576101fb610331565b905090565b6102086100fe565b90565b61021361035f565b6001600160a01b0316336001600160a01b0316141561015757610154816103bd565b600061023f61035f565b6001600160a01b0316336001600160a01b03161415610200576101fb61035f565b606061028583836040518060600160405280602781526020016107f060279139610411565b9392505050565b3b151590565b61029a61035f565b6001600160a01b0316336001600160a01b031614156101165760405162461bcd60e51b815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f78792074617267606482015261195d60f21b608482015260a4015b60405180910390fd5b60006101fb6104e5565b3660008037600080366000845af43d6000803e80801561035a573d6000f35b3d6000fd5b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b546001600160a01b0316919050565b61039b8361050d565b6000825111806103a85750805b156101c3576103b78383610260565b50505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6103e661035f565b604080516001600160a01b03928316815291841660208301520160405180910390a16101548161054d565b6060833b6104705760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610328565b600080856001600160a01b03168560405161048b9190610774565b600060405180830381855af49150503d80600081146104c6576040519150601f19603f3d011682016040523d82523d6000602084013e6104cb565b606091505b50915091506104db8282866105f6565b9695505050505050565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc610383565b6105168161062f565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6001600160a01b0381166105b25760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b6064820152608401610328565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b80546001600160a01b0319166001600160a01b039290921691909117905550565b60608315610605575081610285565b8251156106155782518084602001fd5b8160405162461bcd60e51b81526004016103289190610790565b803b6106935760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610328565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc6105d5565b80356001600160a01b03811681146106d157600080fd5b919050565b6000602082840312156106e857600080fd5b610285826106ba565b60008060006040848603121561070657600080fd5b61070f846106ba565b9250602084013567ffffffffffffffff8082111561072c57600080fd5b818601915086601f83011261074057600080fd5b81358181111561074f57600080fd5b87602082850101111561076157600080fd5b6020830194508093505050509250925092565b600082516107868184602087016107c3565b9190910192915050565b60208152600082518060208401526107af8160408501602087016107c3565b601f01601f19169190910160400192915050565b60005b838110156107de5781810151838201526020016107c6565b838111156103b7575050600091015256fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122084f3082efe723f959282224013adcc184f42c1785ac253fe282284a2faa13a9664736f6c63430008060033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";
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
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
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
        outputs: any[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): VaultProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): VaultProxy;
}

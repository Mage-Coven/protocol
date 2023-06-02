import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GaugeBriber, GaugeBriberInterface } from "../GaugeBriber";
export declare class GaugeBriber__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_nexus: string, _zusd: string, _keeper: string, _briber: string, _childRecipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<GaugeBriber>;
    getDeployTransaction(_nexus: string, _zusd: string, _keeper: string, _briber: string, _childRecipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): GaugeBriber;
    connect(signer: Signer): GaugeBriber__factory;
    static readonly bytecode = "0x60e060405234801561001057600080fd5b50604051610e49380380610e4983398101604081905261002f916100fd565b846001600160a01b03811661008a5760405162461bcd60e51b815260206004820152601560248201527f4e657875732061646472657373206973207a65726f0000000000000000000000604482015260640160405180910390fd5b6001600160601b0319606091821b811660805294811b851660a0529290921b90921660c052600080546001600160a01b039384166001600160a01b0319918216179091556001805492909316911617905550610162565b80516001600160a01b03811681146100f857600080fd5b919050565b600080600080600060a0868803121561011557600080fd5b61011e866100e1565b945061012c602087016100e1565b935061013a604087016100e1565b9250610148606087016100e1565b9150610156608087016100e1565b90509295509295909350565b60805160601c60a05160601c60c05160601c610c8c6101bd600039600081816101700152610429015260008181610197015281816101d6015281816104d3015261051f01526000818161011e01526106ab0152610c8c6000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063a3f5c1d211610071578063a3f5c1d214610119578063a9e2d3ee14610158578063aced16611461016b578063cab666d014610192578063d264e05e146101b9578063dc1df9bd146101c157600080fd5b80636373ea69146100ae578063706d0186146100ca5780637bf30539146100df578063902835f6146100f357806396e494e814610106575b600080fd5b6100b760025481565b6040519081526020015b60405180910390f35b6100dd6100d8366004610a6a565b6101d4565b005b6100dd6100ed366004610a96565b50505050565b6100dd610101366004610a29565b610333565b6100b7610114366004610b24565b610407565b6101407f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100c1565b600054610140906001600160a01b031681565b6101407f000000000000000000000000000000000000000000000000000000000000000081565b6101407f000000000000000000000000000000000000000000000000000000000000000081565b6100dd61041e565b600154610140906001600160a01b031681565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b03161461025a5760405162461bcd60e51b815260206004820152601f60248201527f5468697320526563697069656e74206973206f6e6c7920666f72206d5553440060448201526064015b60405180910390fd5b61026f6001600160a01b0383163330846105d2565b670de0b6b3a7640000600254670de0b6b3a764000061028e9190610be5565b6102989083610bc6565b6102a29190610ba4565b600380546000906102b4908490610b8c565b9091555050600254670de0b6b3a7640000906102d09083610bc6565b6102da9190610ba4565b600480546000906102ec908490610b8c565b90915550506040518181526001600160a01b038316907f10221063d064b7f08df50a7b688426682343e6067582ebc0802467b91b9ac7419060200160405180910390a25050565b61033b61063d565b6706f05b59d3b2000081111561038b5760405162461bcd60e51b81526020600482015260156024820152744d757374206265206c657373207468616e2035302560581b6044820152606401610251565b6001600160a01b0383166103d25760405162461bcd60e51b815260206004820152600e60248201526d24b73b30b634b210313934b132b960911b6044820152606401610251565b600080546001600160a01b039485166001600160a01b0319918216179091556001805493909416921691909117909155600255565b6003816002811061041757600080fd5b0154905081565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148061046d57506104586106a7565b6001600160a01b0316336001600160a01b0316145b6104b95760405162461bcd60e51b815260206004820152601760248201527f4f6e6c79206b6565706572206f7220676f7665726e6f720000000000000000006044820152606401610251565b6003805460009182905590546104fc906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811691168361073f565b600454801561059557600060036001015560015460405163383680c360e11b81527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b039081166004830152602482018490529091169063706d018690604401600060405180830381600087803b15801561057c57600080fd5b505af1158015610590573d6000803e3d6000fd5b505050505b60408051838152602081018390527f0c875c8d391179c5cf7ad8303d268efd50b8beb78b671f85cd54bfb91eb8ef40910160405180910390a15050565b6040516001600160a01b03808516602483015283166044820152606481018290526100ed9085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610774565b6106456106a7565b6001600160a01b0316336001600160a01b0316146106a55760405162461bcd60e51b815260206004820152601960248201527f4f6e6c7920676f7665726e6f722063616e2065786563757465000000000000006044820152606401610251565b565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b15801561070257600080fd5b505afa158015610716573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073a9190610a0c565b905090565b6040516001600160a01b03831660248201526044810182905261076f90849063a9059cbb60e01b90606401610606565b505050565b60006107c9826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166108469092919063ffffffff16565b80519091501561076f57808060200190518101906107e79190610b02565b61076f5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610251565b6060610855848460008561085f565b90505b9392505050565b6060824710156108c05760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610251565b843b61090e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610251565b600080866001600160a01b0316858760405161092a9190610b3d565b60006040518083038185875af1925050503d8060008114610967576040519150601f19603f3d011682016040523d82523d6000602084013e61096c565b606091505b509150915061097c828286610987565b979650505050505050565b60608315610996575081610858565b8251156109a65782518084602001fd5b8160405162461bcd60e51b81526004016102519190610b59565b60008083601f8401126109d257600080fd5b50813567ffffffffffffffff8111156109ea57600080fd5b6020830191508360208260051b8501011115610a0557600080fd5b9250929050565b600060208284031215610a1e57600080fd5b815161085881610c3e565b600080600060608486031215610a3e57600080fd5b8335610a4981610c3e565b92506020840135610a5981610c3e565b929592945050506040919091013590565b60008060408385031215610a7d57600080fd5b8235610a8881610c3e565b946020939093013593505050565b60008060008060408587031215610aac57600080fd5b843567ffffffffffffffff80821115610ac457600080fd5b610ad0888389016109c0565b90965094506020870135915080821115610ae957600080fd5b50610af6878288016109c0565b95989497509550505050565b600060208284031215610b1457600080fd5b8151801515811461085857600080fd5b600060208284031215610b3657600080fd5b5035919050565b60008251610b4f818460208701610bfc565b9190910192915050565b6020815260008251806020840152610b78816040850160208701610bfc565b601f01601f19169190910160400192915050565b60008219821115610b9f57610b9f610c28565b500190565b600082610bc157634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615610be057610be0610c28565b500290565b600082821015610bf757610bf7610c28565b500390565b60005b83811015610c17578181015183820152602001610bff565b838111156100ed5750506000910152565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114610c5357600080fd5b5056fea264697066735822122091542b0e66d8d22ac49b220d4893e18c469b50b43f4f6655b6a5d7d2f741fc5664736f6c63430008060033";
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
    static createInterface(): GaugeBriberInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GaugeBriber;
}
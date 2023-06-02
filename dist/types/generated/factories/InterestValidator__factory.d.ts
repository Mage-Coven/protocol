import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { InterestValidator, InterestValidatorInterface } from "../InterestValidator";
export declare class InterestValidator__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_nexus: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<InterestValidator>;
    getDeployTransaction(_nexus: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): InterestValidator;
    connect(signer: Signer): InterestValidator__factory;
    static readonly bytecode = "0x60a06040526000805460ff1916905534801561001a57600080fd5b50604051610d72380380610d72833981016040819052610039916100b6565b80806001600160a01b0381166100955760405162461bcd60e51b815260206004820152601560248201527f4e657875732061646472657373206973207a65726f0000000000000000000000604482015260640160405180910390fd5b60601b6001600160601b03191660805250506000805460ff191690556100e6565b6000602082840312156100c857600080fd5b81516001600160a01b03811681146100df57600080fd5b9392505050565b60805160601c610c616101116000396000818160f50152818161080c01526108bd0152610c616000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80635c975abb1161005b5780635c975abb146100d25780638456cb59146100e8578063a3f5c1d2146100f0578063a600f0dd1461012f57600080fd5b80631cf743271461008257806333bda1f7146100975780633f4ba83a146100ca575b600080fd5b610095610090366004610ac2565b610142565b005b6100b76100a5366004610a81565b60016020526000908152604090205481565b6040519081526020015b60405180910390f35b6100956103f8565b60005460ff1660405190151581526020016100c1565b61009561048e565b6101177f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100c1565b61009561013d366004610ac2565b610519565b61014a61076a565b8060006101556107d4565b905060005b828110156103f157600085858381811061017657610176610bfd565b905060200201602081019061018b9190610a81565b9050806001600160a01b03166398fec3af6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156101c857600080fd5b505af11580156101dc573d6000803e3d6000fd5b50506040516370a0823160e01b8152306004820152600092506001600160a01b03841691506370a082319060240160206040518083038186803b15801561022257600080fd5b505afa158015610236573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025a9190610b37565b905080156103dc576000826001600160a01b031663178d341f6040518163ffffffff1660e01b815260040160206040518083038186803b15801561029d57600080fd5b505afa1580156102b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d59190610aa5565b905060006001600160a01b0384166343bcfab68385600a6102f7826007610b96565b6103019190610b74565b6040516001600160e01b031960e086901b1681526001600160a01b039384166004820152602481019290925260448201529089166064820152608401602060405180830381600087803b15801561035757600080fd5b505af115801561036b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038f9190610b37565b604080516001600160a01b03858116825260208201849052929350918616917f24b98558c8051808230c888e96f8352b78e39de78fc2300c4e922c9b48e9d176910160405180910390a250505b505080806103e990610bcc565b91505061015a565b5050505050565b61040061076a565b60005460ff1661044e5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064015b60405180910390fd5b6000805460ff191690556040513381527f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa906020015b60405180910390a1565b61049661076a565b60005460ff16156104dc5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610445565b6000805460ff191660011790556040513381527f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25890602001610484565b60005460ff161561055f5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610445565b428160005b818110156103f157600085858381811061058057610580610bfd565b90506020020160208101906105959190610a81565b6001600160a01b0381166000908152600160205260408120549192506105bb8287610bb5565b905061a8c0811161060e5760405162461bcd60e51b815260206004820181905260248201527f43616e6e6f7420636f6c6c65637420747769636520696e20313220686f7572736044820152606401610445565b6001600160a01b0383166000818152600160205260408082208990558051633f4480f560e11b81528151929384939092637e8901ea926004808201939182900301818787803b15801561066057600080fd5b505af1158015610674573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106989190610b50565b909250905081156107055760006106b0828486610893565b60408051858152602081018590529081018290529091506001600160a01b038716907f0abcfa9ece819bcdcfa052a818ce11f0b9fad8b3e3ccd98f120c40be689b690f9060600160405180910390a250610752565b604080518381526020810183905260008183015290516001600160a01b038716917f0abcfa9ece819bcdcfa052a818ce11f0b9fad8b3e3ccd98f120c40be689b690f919081900360600190a25b5050505050808061076290610bcc565b915050610564565b6107726108b9565b6001600160a01b0316336001600160a01b0316146107d25760405162461bcd60e51b815260206004820152601960248201527f4f6e6c7920676f7665726e6f722063616e2065786563757465000000000000006044820152606401610445565b565b6040516385acd64160e01b81527f12fe936c77a1e196473c4314f3bed8eeac1d757b319abb85bdda70df35511bf160048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906385acd6419060240160206040518083038186803b15801561085657600080fd5b505afa15801561086a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088e9190610aa5565b905090565b60006108b184848467d02ab486cedc000066038d7ea4c68000610914565b949350505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b15801561085657600080fd5b60008084156109235784610926565b60015b905060006109348789610bb5565b905060008161094b89670de0b6b3a7640000610b96565b6109559190610b74565b905060006301e1338061097085670de0b6b3a7640000610b96565b61097a9190610b74565b90508061098f83670de0b6b3a7640000610b96565b6109999190610b74565b9450610708841115610a0f57868510610a0a5760405162461bcd60e51b815260206004820152602d60248201527f496e7465726573742070726f7465637465642066726f6d20696e666c6174696e60448201526c672070617374206d617841505960981b6064820152608401610445565b610a74565b858210610a745760405162461bcd60e51b815260206004820152602d60248201527f496e7465726573742070726f7465637465642066726f6d20696e666c6174696e60448201526c6720706173742031302042707360981b6064820152608401610445565b5050505095945050505050565b600060208284031215610a9357600080fd5b8135610a9e81610c13565b9392505050565b600060208284031215610ab757600080fd5b8151610a9e81610c13565b60008060208385031215610ad557600080fd5b823567ffffffffffffffff80821115610aed57600080fd5b818501915085601f830112610b0157600080fd5b813581811115610b1057600080fd5b8660208260051b8501011115610b2557600080fd5b60209290920196919550909350505050565b600060208284031215610b4957600080fd5b5051919050565b60008060408385031215610b6357600080fd5b505080516020909101519092909150565b600082610b9157634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615610bb057610bb0610be7565b500290565b600082821015610bc757610bc7610be7565b500390565b6000600019821415610be057610be0610be7565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0381168114610c2857600080fd5b5056fea2646970667358221220af9a75da088595fb25acbcc3ccc3ff80aabdecb02f5c3a649e61b635cc2c06d664736f6c63430008060033";
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
    static createInterface(): InterestValidatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): InterestValidator;
}

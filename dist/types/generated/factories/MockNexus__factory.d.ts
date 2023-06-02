import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockNexus, MockNexusInterface } from "../MockNexus";
export declare class MockNexus__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_governorAddr: string, _savingsManager: string, _interestValidator: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockNexus>;
    getDeployTransaction(_governorAddr: string, _savingsManager: string, _interestValidator: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockNexus;
    connect(signer: Signer): MockNexus__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161056638038061056683398101604081905261002f91610104565b6000805460016020527f7b0bc268032209bf552b77f1d94ce34772f16bd5cfdccd99a27dc662c0e5518580546001600160a01b039586166001600160a01b0319918216179091557fc10a28f028c7f7282a03c90608e38a4a646e136e614e4b07d119280c5f7f839f83527fe7dc3cb2a4a095f2b1c5598977b63617b54108bb02ae83a00c045074ac65fa4e805494861694909116939093179092556001600160a81b03199091169190921617600160a01b179055610147565b80516001600160a01b03811681146100ff57600080fd5b919050565b60008060006060848603121561011957600080fd5b610122846100e8565b9250610130602085016100e8565b915061013e604085016100e8565b90509250925092565b610410806101566000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063748747e611610066578063748747e6146101d757806385acd6411461024f578063998468ec14610278578063b0b6cc1a146102f0578063dcc990c01461031957600080fd5b806301c76f81146100985780630c340a2414610112578063158ef93e146101425780637358e8541461015f575b600080fd5b6101106100a6366004610391565b7f1e9cb14d7560734a61fa5ff9273953e971ff3cd9283c03d8346e3264617933d460005260016020527fbcb19ab2f562258c7b09617ba5e1160a8c4a7c83d65bf9e98dfe672f54b6ea0280546001600160a01b0319166001600160a01b0392909216919091179055565b005b600054610125906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b600054600160a01b900460ff166040519015158152602001610139565b61011061016d366004610391565b7f12fe936c77a1e196473c4314f3bed8eeac1d757b319abb85bdda70df35511bf160005260016020527f7b0bc268032209bf552b77f1d94ce34772f16bd5cfdccd99a27dc662c0e5518580546001600160a01b0319166001600160a01b0392909216919091179055565b6101106101e5366004610391565b7f4f78afe9dfc9a0cb0441c27b9405070cd2a48b490636a7bdd09f355e33a5d7de60005260016020527f027638e9f073376e1c41b87313c65597afa9d2eb07dcf55621929acbdc9fdd7b80546001600160a01b0319166001600160a01b0392909216919091179055565b61012561025d3660046103c1565b6000908152600160205260409020546001600160a01b031690565b610110610286366004610391565b7fc10a28f028c7f7282a03c90608e38a4a646e136e614e4b07d119280c5f7f839f60005260016020527fe7dc3cb2a4a095f2b1c5598977b63617b54108bb02ae83a00c045074ac65fa4e80546001600160a01b0319166001600160a01b0392909216919091179055565b6101256102fe3660046103c1565b6001602052600090815260409020546001600160a01b031681565b610110610327366004610391565b7f39e3ed1fc335ce346a8cbe3e64dd525cf22b37f1e2104a755e761c3c1eb4734f60005260016020527ff30cfd3975e480d1ca4a2b2ac8412dcc08401f1a57a0c9ccd34cfdd11046fead80546001600160a01b0319166001600160a01b0392909216919091179055565b6000602082840312156103a357600080fd5b81356001600160a01b03811681146103ba57600080fd5b9392505050565b6000602082840312156103d357600080fd5b503591905056fea264697066735822122054a9bd196df9cb5fd0d8caf3401cab60cdb085bcec38be76a193fa7852caac1864736f6c63430008060033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
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
    })[];
    static createInterface(): MockNexusInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockNexus;
}

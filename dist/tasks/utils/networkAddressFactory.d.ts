import { AssetAddressTypes, Chain, Token } from "./tokens";
export declare const contractNames: readonly ["Nexus", "DelayedProxyAdmin", "ProxyAdmin", "ProtocolDAO", "Governor", "FundManager", "xZenoDAO", "BadgerSafe", "SavingsManager", "Liquidator", "RewardsDistributor", "EmissionsController", "PolygonPoSBridge", "PolygonRootChainManager", "PolygonChildChainManager", "BoostDirector", "VoterProxy", "Collector", "Ejector", "Poker", "SaveWrapper", "RevenueRecipient", "RevenueBuyBack", "MassetManager", "FeederManager", "FeederLogic", "FeederWrapper", "FeederInterestValidator", "BasketManager", "SignatureVerifier", "QuestManager", "QuestMaster", "QuestSigner", "StakedTokenZENO", "StakedTokenBPT", "PlatformTokenVendorFactory", "BalancerVault", "BalancerRecipient", "BalancerStakingPoolId", "AaveIncentivesController", "AaveLendingPoolAddressProvider", "AlchemixStakingPool", "CompController", "CurveRegistryExchange", "Disperse", "DisperseForwarder", "QuickSwapRouter", "UniswapRouterV3", "UniswapQuoterV3", "UniswapEthToken", "UniswapV2-ZENO/WETH", "XZenoYieldSource", "OperationsSigner", "ENSRegistrarController", "ENSResolver", "FraxVault", "Unwrapper", "VisorRouter", "VotiumBribe", "VotiumForwarder"];
export declare type ContractNames = typeof contractNames[number];
export interface HardhatRuntime {
    ethers?: any;
    hardhatArguments?: {
        config?: string;
    };
    network?: {
        name: string;
    };
}
export declare const getChainAddress: (contractName: ContractNames, chain: Chain) => string;
export declare const getChain: (hre?: HardhatRuntime) => Chain;
export declare const getNetworkAddress: (contractName: ContractNames, hre?: HardhatRuntime) => string;
export declare const resolveAddress: (addressContractNameSymbol: string, chain?: Chain, tokenType?: AssetAddressTypes) => string;
export declare const resolveToken: (symbol: string, chain?: Chain, tokenType?: AssetAddressTypes) => Token;

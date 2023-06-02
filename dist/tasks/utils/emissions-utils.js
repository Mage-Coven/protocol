"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployRevenueBuyBack = exports.deployBridgeForwarder = exports.deployVotiumBribeForwarder = exports.deployDisperseForwarder = exports.deployL2BridgeRecipients = exports.deployL2EmissionsController = exports.deployBasicForwarder = exports.deployEmissionsController = void 0;
const generated_1 = require("types/generated");
const deploy_utils_1 = require("./deploy-utils");
const etherscan_1 = require("./etherscan");
const networkAddressFactory_1 = require("./networkAddressFactory");
const tokens_1 = require("./tokens");
const deployEmissionsController = async (signer, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const nexusAddress = networkAddressFactory_1.resolveAddress("Nexus", chain);
    const proxyAdminAddress = networkAddressFactory_1.resolveAddress("DelayedProxyAdmin", chain);
    const zenoAddress = networkAddressFactory_1.resolveAddress("ZENO", chain);
    const zenoStakingAddress = networkAddressFactory_1.resolveAddress("StakedTokenZENO", chain);
    const mbptStakingAddress = networkAddressFactory_1.resolveAddress("StakedTokenBPT", chain);
    let dialRecipients;
    let caps;
    let notifies;
    if (chain === tokens_1.Chain.mainnet) {
        dialRecipients = [
            zenoStakingAddress,
            mbptStakingAddress,
            networkAddressFactory_1.resolveAddress("zUSD", chain, "vault"),
            networkAddressFactory_1.resolveAddress("mBTC", chain, "vault"),
            networkAddressFactory_1.resolveAddress("GUSD", chain, "vault"),
            networkAddressFactory_1.resolveAddress("BUSD", chain, "vault"),
            networkAddressFactory_1.resolveAddress("alUSD", chain, "vault"),
            networkAddressFactory_1.resolveAddress("RAI", chain, "vault"),
            networkAddressFactory_1.resolveAddress("FEI", chain, "vault"),
            networkAddressFactory_1.resolveAddress("HBTC", chain, "vault"),
            networkAddressFactory_1.resolveAddress("tBTCv2", chain, "vault"), // 10
        ];
        caps = dialRecipients.map((_, i) => {
            if (i < 2)
                return 10;
            return 0;
        });
        notifies = dialRecipients.map(() => true);
    }
    else if (chain === tokens_1.Chain.ropsten) {
        dialRecipients = [
            zenoStakingAddress,
            mbptStakingAddress,
            networkAddressFactory_1.resolveAddress("zUSD", chain, "vault"),
            networkAddressFactory_1.resolveAddress("mBTC", chain, "vault"),
        ];
        caps = [10, 10, 0, 0];
        notifies = [true, true, true, true];
    }
    else {
        throw Error("Chain must be mainnet or Ropsten");
    }
    const defaultConfig = {
        A: -166000000000000,
        B: 168479942061125,
        C: -168479942061125,
        D: 166000000000000,
        EPOCHS: 312,
    };
    // Deploy logic contract
    const constructorArguments = [nexusAddress, zenoAddress, defaultConfig];
    const emissionsControllerImpl = await deploy_utils_1.deployContract(new generated_1.EmissionsController__factory(signer), "EmissionsController Implementation", constructorArguments);
    // Deploy proxy and initialize
    const initializeData = emissionsControllerImpl.interface.encodeFunctionData("initialize", [
        dialRecipients,
        caps,
        notifies,
        [zenoStakingAddress, mbptStakingAddress],
    ]);
    const proxy = await deploy_utils_1.deployContract(new generated_1.AssetProxy__factory(signer), "AssetProxy", [
        emissionsControllerImpl.address,
        proxyAdminAddress,
        initializeData,
    ]);
    const emissionsController = new generated_1.EmissionsController__factory(signer).attach(proxy.address);
    await etherscan_1.verifyEtherscan(hre, {
        address: emissionsControllerImpl.address,
        constructorArguments,
        contract: "contracts/emissions/EmissionsController.sol:EmissionsController",
    });
    return emissionsController;
};
exports.deployEmissionsController = deployEmissionsController;
const deployBasicForwarder = async (signer, emissionsControllerAddress, recipient, hre, owner) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const nexusAddress = networkAddressFactory_1.resolveAddress("Nexus", chain);
    const rewardsAddress = networkAddressFactory_1.resolveAddress("ZENO", chain);
    const recipientAddress = networkAddressFactory_1.resolveAddress(recipient, chain);
    const ownerAddress = owner ? networkAddressFactory_1.resolveAddress(owner, chain) : undefined;
    const constructorArguments = [nexusAddress, rewardsAddress];
    const forwarder = await deploy_utils_1.deployContract(new generated_1.BasicRewardsForwarder__factory(signer), "BasicRewardsForwarder", [
        nexusAddress,
        rewardsAddress,
    ]);
    const tx1 = await forwarder.initialize(emissionsControllerAddress, recipientAddress);
    await deploy_utils_1.logTxDetails(tx1, "initialize");
    if (ownerAddress) {
        const tx2 = await forwarder.transferOwnership(ownerAddress);
        await deploy_utils_1.logTxDetails(tx2, "transferOwnership");
    }
    await etherscan_1.verifyEtherscan(hre, {
        address: forwarder.address,
        constructorArguments,
        contract: "contracts/emissions/BasicRewardsForwarder.sol:BasicRewardsForwarder",
    });
    return forwarder;
};
exports.deployBasicForwarder = deployBasicForwarder;
const deployL2EmissionsController = async (signer, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const nexusAddress = networkAddressFactory_1.resolveAddress("Nexus", chain);
    const proxyAdminAddress = networkAddressFactory_1.resolveAddress("DelayedProxyAdmin", chain);
    const zenoAddress = networkAddressFactory_1.resolveAddress("ZENO", chain);
    // Deploy logic contract
    const constructorArguments = [nexusAddress, zenoAddress];
    const l2EmissionsControllerImpl = await deploy_utils_1.deployContract(new generated_1.L2EmissionsController__factory(signer), "L2EmissionsController Implementation", constructorArguments);
    // Deploy proxy and initialize
    const initializeData = l2EmissionsControllerImpl.interface.encodeFunctionData("initialize", []);
    const proxy = await deploy_utils_1.deployContract(new generated_1.AssetProxy__factory(signer), "AssetProxy", [
        l2EmissionsControllerImpl.address,
        proxyAdminAddress,
        initializeData,
    ]);
    const l2EmissionsController = new generated_1.L2EmissionsController__factory(signer).attach(proxy.address);
    await etherscan_1.verifyEtherscan(hre, {
        address: l2EmissionsControllerImpl.address,
        constructorArguments,
        contract: "contracts/emissions/L2EmissionsController.sol:L2EmissionsController",
    });
    return l2EmissionsController;
};
exports.deployL2EmissionsController = deployL2EmissionsController;
const deployL2BridgeRecipients = async (signer, hre, l2EmissionsControllerAddress) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const zenoAddress = networkAddressFactory_1.resolveAddress("ZENO", chain);
    const constructorArguments = [zenoAddress, l2EmissionsControllerAddress];
    const bridgeRecipient = await deploy_utils_1.deployContract(new generated_1.L2BridgeRecipient__factory(signer), "L2BridgeRecipient", [
        zenoAddress,
        l2EmissionsControllerAddress,
    ]);
    await etherscan_1.verifyEtherscan(hre, {
        address: bridgeRecipient.address,
        constructorArguments,
        contract: "contracts/emissions/L2BridgeRecipient.sol:L2BridgeRecipient",
    });
    return bridgeRecipient;
};
exports.deployL2BridgeRecipients = deployL2BridgeRecipients;
const deployDisperseForwarder = async (signer, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const nexusAddress = networkAddressFactory_1.resolveAddress("Nexus", chain);
    const disperseAddress = networkAddressFactory_1.resolveAddress("Disperse", chain);
    const zenoAddress = networkAddressFactory_1.resolveAddress("ZENO", chain);
    const constructorArguments = [nexusAddress, zenoAddress, disperseAddress];
    const disperseForwarder = await deploy_utils_1.deployContract(new generated_1.DisperseForwarder__factory(signer), "DisperseForwarder", constructorArguments);
    await etherscan_1.verifyEtherscan(hre, {
        address: disperseForwarder.address,
        constructorArguments,
        contract: "contracts/emissions/DisperseForwarder.sol:DisperseForwarder",
    });
    return disperseForwarder;
};
exports.deployDisperseForwarder = deployDisperseForwarder;
const deployVotiumBribeForwarder = async (signer, hre) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const nexusAddress = networkAddressFactory_1.resolveAddress("Nexus", chain);
    const votiumBribeAddress = networkAddressFactory_1.resolveAddress("VotiumBribe", chain);
    const zenoAddress = networkAddressFactory_1.resolveAddress("ZENO", chain);
    const constructorArguments = [nexusAddress, zenoAddress, votiumBribeAddress];
    const votiumBribeForwarder = await deploy_utils_1.deployContract(new generated_1.VotiumBribeForwarder__factory(signer), "VotiumBribeForwarder", constructorArguments);
    await etherscan_1.verifyEtherscan(hre, {
        address: votiumBribeForwarder.address,
        constructorArguments,
        contract: "contracts/emissions/VotiumBribeForwarder.sol:VotiumBribeForwarder",
    });
    return votiumBribeForwarder;
};
exports.deployVotiumBribeForwarder = deployVotiumBribeForwarder;
const deployBridgeForwarder = async (signer, hre, bridgeRecipientAddress, _emissionsControllerAddress) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const nexusAddress = networkAddressFactory_1.resolveAddress("Nexus", chain);
    const zenoAddress = networkAddressFactory_1.resolveAddress("ZENO", chain);
    const proxyAdminAddress = networkAddressFactory_1.resolveAddress("DelayedProxyAdmin", chain);
    const tokenBridgeAddress = networkAddressFactory_1.resolveAddress("PolygonPoSBridge", chain);
    const rootChainManagerAddress = networkAddressFactory_1.resolveAddress("PolygonRootChainManager", chain);
    const emissionsControllerAddress = _emissionsControllerAddress || networkAddressFactory_1.resolveAddress("EmissionsController", chain);
    const constructorArguments = [nexusAddress, zenoAddress, tokenBridgeAddress, rootChainManagerAddress, bridgeRecipientAddress];
    const bridgeForwarderImpl = await deploy_utils_1.deployContract(new generated_1.BridgeForwarder__factory(signer), "Vault Bridge Forwarder", constructorArguments);
    // Deploy proxy and initialize
    const initializeData = bridgeForwarderImpl.interface.encodeFunctionData("initialize", [emissionsControllerAddress]);
    const proxy = await deploy_utils_1.deployContract(new generated_1.AssetProxy__factory(signer), "AssetProxy", [
        bridgeForwarderImpl.address,
        proxyAdminAddress,
        initializeData,
    ]);
    const bridgeForwarder = new generated_1.BridgeForwarder__factory(signer).attach(proxy.address);
    console.log(`\nSet bridgeForwarder to ${bridgeForwarder.address}`);
    console.log(`Governor calls EmissionsController.addDial ${emissionsControllerAddress} with params:`);
    console.log(`recipient ${bridgeForwarder.address}, cap 0, notify true`);
    await etherscan_1.verifyEtherscan(hre, {
        address: bridgeForwarderImpl.address,
        constructorArguments,
        contract: "contracts/emissions/BridgeForwarder.sol:BridgeForwarder",
    });
    return bridgeForwarder;
};
exports.deployBridgeForwarder = deployBridgeForwarder;
const deployRevenueBuyBack = async (signer, hre, _emissionsControllerAddress) => {
    const chain = networkAddressFactory_1.getChain(hre);
    const nexusAddress = networkAddressFactory_1.resolveAddress("Nexus", chain);
    const zenoAddress = networkAddressFactory_1.resolveAddress("ZENO", chain);
    const uniswapRouterAddress = networkAddressFactory_1.resolveAddress("UniswapRouterV3", chain);
    const emissionsControllerAddress = _emissionsControllerAddress || networkAddressFactory_1.resolveAddress("EmissionsController", chain);
    // Deploy RevenueBuyBack
    const constructorArguments = [
        nexusAddress,
        zenoAddress,
        uniswapRouterAddress,
        emissionsControllerAddress,
    ];
    const revenueBuyBack = await deploy_utils_1.deployContract(new generated_1.RevenueBuyBack__factory(signer), "RevenueBuyBack", constructorArguments);
    const tx = await revenueBuyBack.initialize([0, 1]);
    await deploy_utils_1.logTxDetails(tx, "RevenueBuyBack.initialize");
    await etherscan_1.verifyEtherscan(hre, {
        address: revenueBuyBack.address,
        constructorArguments,
        contract: "contracts/buy-and-make/RevenueBuyBack.sol:RevenueBuyBack",
    });
    return revenueBuyBack;
};
exports.deployRevenueBuyBack = deployRevenueBuyBack;
//# sourceMappingURL=emissions-utils.js.map
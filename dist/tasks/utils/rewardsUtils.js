"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployL2BridgeRecipient = exports.deployBridgeForwarder = exports.deployStakingToken = void 0;
const strings_1 = require("@ethersproject/strings");
const generated_1 = require("types/generated");
const deploy_utils_1 = require("./deploy-utils");
const etherscan_1 = require("./etherscan");
const networkAddressFactory_1 = require("./networkAddressFactory");
const deployStakingToken = async (stakedTokenData, deployer, hre, deployProxy = false, overrides, overrideSigner) => {
    var _a, _b, _c, _d;
    const chain = networkAddressFactory_1.getChain(hre);
    const nexusAddress = networkAddressFactory_1.resolveAddress("Nexus", chain);
    const rewardsDistributorAddress = networkAddressFactory_1.resolveAddress("RewardsDistributor", chain);
    const rewardsTokenAddress = networkAddressFactory_1.resolveAddress(stakedTokenData.rewardsTokenSymbol, chain);
    const stakedTokenAddress = networkAddressFactory_1.resolveAddress(stakedTokenData.stakedTokenSymbol, chain);
    const questMasterAddress = networkAddressFactory_1.resolveAddress("QuestMaster", chain);
    const questSignerAddress = overrideSigner !== null && overrideSigner !== void 0 ? overrideSigner : networkAddressFactory_1.resolveAddress("QuestSigner", chain);
    const delayedProxyAdminAddress = networkAddressFactory_1.resolveAddress("DelayedProxyAdmin", chain);
    let proxyAdminAddress = (_a = overrides === null || overrides === void 0 ? void 0 : overrides.proxyAdminAddress) !== null && _a !== void 0 ? _a : networkAddressFactory_1.getChainAddress("ProxyAdmin", chain);
    if (!proxyAdminAddress) {
        const proxyAdmin = await deploy_utils_1.deployContract(new generated_1.InstantProxyAdmin__factory(deployer.signer), "InstantProxyAdmin");
        await proxyAdmin.transferOwnership(networkAddressFactory_1.resolveAddress("ProtocolDAO", chain));
        proxyAdminAddress = proxyAdmin.address;
    }
    let signatureVerifierAddress = (_b = overrides === null || overrides === void 0 ? void 0 : overrides.signatureVerifier) !== null && _b !== void 0 ? _b : networkAddressFactory_1.getChainAddress("SignatureVerifier", chain);
    if (!signatureVerifierAddress) {
        const signatureVerifier = await deploy_utils_1.deployContract(new generated_1.SignatureVerifier__factory(deployer.signer), "SignatureVerifier");
        signatureVerifierAddress = signatureVerifier.address;
        await etherscan_1.verifyEtherscan(hre, {
            address: signatureVerifierAddress,
            contract: "contracts/governance/staking/deps/SignatureVerifier.sol:SignatureVerifier",
        });
    }
    let questManagerAddress = (_c = overrides === null || overrides === void 0 ? void 0 : overrides.questManager) !== null && _c !== void 0 ? _c : networkAddressFactory_1.getChainAddress("QuestManager", chain);
    if (!questManagerAddress) {
        const questManagerLibraryAddresses = {
            "contracts/governance/staking/deps/SignatureVerifier.sol:SignatureVerifier": signatureVerifierAddress,
        };
        const questManagerImpl = await deploy_utils_1.deployContract(new generated_1.QuestManager__factory(questManagerLibraryAddresses, deployer.signer), "QuestManager", [nexusAddress]);
        const data = questManagerImpl.interface.encodeFunctionData("initialize", [questMasterAddress, questSignerAddress]);
        await etherscan_1.verifyEtherscan(hre, {
            address: questManagerImpl.address,
            contract: "contracts/governance/staking/QuestManager.sol:QuestManager",
            constructorArguments: [nexusAddress],
            libraries: {
                SignatureVerifier: signatureVerifierAddress,
            },
        });
        const constructorArguments = [questManagerImpl.address, delayedProxyAdminAddress, data];
        const questManagerProxy = await deploy_utils_1.deployContract(new generated_1.AssetProxy__factory(deployer.signer), "AssetProxy", constructorArguments);
        questManagerAddress = questManagerProxy.address;
    }
    let platformTokenVendorFactoryAddress = (_d = overrides === null || overrides === void 0 ? void 0 : overrides.platformTokenVendorFactory) !== null && _d !== void 0 ? _d : networkAddressFactory_1.getChainAddress("PlatformTokenVendorFactory", chain);
    if (!platformTokenVendorFactoryAddress) {
        const platformTokenVendorFactory = await deploy_utils_1.deployContract(new generated_1.PlatformTokenVendorFactory__factory(deployer.signer), "PlatformTokenVendorFactory");
        platformTokenVendorFactoryAddress = platformTokenVendorFactory.address;
        await etherscan_1.verifyEtherscan(hre, {
            address: platformTokenVendorFactoryAddress,
            constructorArguments: [],
        });
    }
    const stakedTokenLibraryAddresses = {
        "contracts/rewards/staking/PlatformTokenVendorFactory.sol:PlatformTokenVendorFactory": platformTokenVendorFactoryAddress,
    };
    let constructorArguments;
    let stakedTokenImpl;
    let data;
    if (rewardsTokenAddress === stakedTokenAddress) {
        constructorArguments = [
            nexusAddress,
            rewardsTokenAddress,
            questManagerAddress,
            rewardsTokenAddress,
            stakedTokenData.cooldown,
            stakedTokenData.unstakeWindow,
        ];
        stakedTokenImpl = await deploy_utils_1.deployContract(new generated_1.StakedTokenZENO__factory(stakedTokenLibraryAddresses, deployer.signer), "StakedTokenZENO", constructorArguments);
        data = stakedTokenImpl.interface.encodeFunctionData("initialize", [
            strings_1.formatBytes32String(stakedTokenData.name),
            strings_1.formatBytes32String(stakedTokenData.symbol),
            rewardsDistributorAddress,
        ]);
    }
    else {
        const balAddress = networkAddressFactory_1.resolveAddress(stakedTokenData.balTokenSymbol, chain);
        const balPoolId = networkAddressFactory_1.resolveAddress("BalancerStakingPoolId", chain);
        const balancerVaultAddress = networkAddressFactory_1.resolveAddress("BalancerVault", chain);
        const balancerRecipientAddress = networkAddressFactory_1.resolveAddress("BalancerRecipient", chain);
        constructorArguments = [
            nexusAddress,
            rewardsTokenAddress,
            questManagerAddress,
            stakedTokenAddress,
            stakedTokenData.cooldown,
            stakedTokenData.unstakeWindow,
            [balAddress, balancerVaultAddress],
            balPoolId,
        ];
        console.log(`Staked Token BPT contract size ${generated_1.StakedTokenBPT__factory.bytecode.length / 2} bytes`);
        stakedTokenImpl = await deploy_utils_1.deployContract(new generated_1.StakedTokenBPT__factory(stakedTokenLibraryAddresses, deployer.signer), "StakedTokenBPT", constructorArguments);
        const priceCoeff = 42550;
        data = stakedTokenImpl.interface.encodeFunctionData("initialize", [
            strings_1.formatBytes32String(stakedTokenData.name),
            strings_1.formatBytes32String(stakedTokenData.symbol),
            rewardsDistributorAddress,
            balancerRecipientAddress,
            priceCoeff,
        ]);
    }
    await etherscan_1.verifyEtherscan(hre, {
        address: stakedTokenImpl.address,
        constructorArguments,
        libraries: {
            PlatformTokenVendorFactory: platformTokenVendorFactoryAddress,
        },
    });
    let proxy;
    if (deployProxy) {
        proxy = await deploy_utils_1.deployContract(new generated_1.AssetProxy__factory(deployer.signer), "AssetProxy", [
            stakedTokenImpl.address,
            proxyAdminAddress,
            data,
        ]);
    }
    return {
        stakedToken: proxy === null || proxy === void 0 ? void 0 : proxy.address,
        questManager: questManagerAddress,
        signatureVerifier: signatureVerifierAddress,
        platformTokenVendorFactory: platformTokenVendorFactoryAddress,
        proxyAdminAddress,
    };
};
exports.deployStakingToken = deployStakingToken;
const deployBridgeForwarder = async (signer, nexusAddress, rewardTokenAddress, bridgeTokenLockerAddress, rootChainManagerAddress, childRecipient1Address, emissionsController) => {
    const impl = await deploy_utils_1.deployContract(new generated_1.BridgeForwarder__factory(signer), "BridgeForwarder", [
        nexusAddress,
        rewardTokenAddress,
        bridgeTokenLockerAddress,
        rootChainManagerAddress,
        childRecipient1Address,
    ]);
    // Proxy
    const data = impl.interface.encodeFunctionData("initialize", [emissionsController]);
    const delayedProxyAdminAddress = networkAddressFactory_1.resolveAddress("DelayedProxyAdmin");
    const proxy = await deploy_utils_1.deployContract(new generated_1.AssetProxy__factory(signer), "AssetProxy", [impl.address, delayedProxyAdminAddress, data]);
    const rootRecipient = new generated_1.BridgeForwarder__factory(signer).attach(proxy.address);
    return rootRecipient;
};
exports.deployBridgeForwarder = deployBridgeForwarder;
const deployL2BridgeRecipient = async (signer, bridgedRewardTokenAddress, childEmissionsController) => {
    const childRecipient = await deploy_utils_1.deployContract(new generated_1.L2BridgeRecipient__factory(signer), "L2BridgeRecipient", [
        bridgedRewardTokenAddress,
        childEmissionsController,
    ]);
    return childRecipient;
};
exports.deployL2BridgeRecipient = deployL2BridgeRecipient;
//# sourceMappingURL=rewardsUtils.js.map
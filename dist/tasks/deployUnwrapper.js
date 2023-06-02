"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("ts-node/register");
require("tsconfig-paths/register");
const config_1 = require("hardhat/config");
const generated_1 = require("types/generated");
const deploy_utils_1 = require("./utils/deploy-utils");
const signerFactory_1 = require("./utils/signerFactory");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
const tokens_1 = require("./utils/tokens");
const etherscan_1 = require("./utils/etherscan");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const approveUnwrapperTokens = async (chain, unwrapper, governor) => {
    // Mainnet and Polygon
    const fraxFeederPool = networkAddressFactory_1.resolveAddress("FRAX", chain, "feederPool");
    const zusdAddress = networkAddressFactory_1.resolveAddress("zUSD", chain);
    let routers = [];
    let tokens = [];
    if (chain === tokens_1.Chain.polygon) {
        routers = [fraxFeederPool];
        tokens = [zusdAddress];
    }
    else {
        const alusdFeederPool = networkAddressFactory_1.resolveAddress("alUSD", chain, "feederPool");
        const gusdFeederPool = networkAddressFactory_1.resolveAddress("GUSD", chain, "feederPool");
        const busdFeederPool = networkAddressFactory_1.resolveAddress("BUSD", chain, "feederPool");
        const raiFeederPool = networkAddressFactory_1.resolveAddress("RAI", chain, "feederPool");
        const feiFeederPool = networkAddressFactory_1.resolveAddress("FEI", chain, "feederPool");
        const hbtcFeederPool = networkAddressFactory_1.resolveAddress("HBTC", chain, "feederPool");
        const tbtcv2FeederPool = networkAddressFactory_1.resolveAddress("tBTCv2", chain, "feederPool");
        const mbtcAddress = networkAddressFactory_1.resolveAddress("mBTC", chain);
        routers = [
            zusdAddress,
            alusdFeederPool,
            gusdFeederPool,
            busdFeederPool,
            raiFeederPool,
            feiFeederPool,
            mbtcAddress,
            hbtcFeederPool,
            tbtcv2FeederPool,
        ];
        tokens = [zusdAddress, zusdAddress, zusdAddress, zusdAddress, zusdAddress, zusdAddress, mbtcAddress, mbtcAddress, mbtcAddress];
    }
    // approve tokens for router
    await unwrapper.connect(governor).approve(routers, tokens);
};
config_1.task("deploy-unwrapper-single", "Deploy Unwrapper without a proxy")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const nexus = networkAddressFactory_1.resolveAddress("Nexus", chain);
    const constructorArguments = [nexus];
    // Deploy step 1 - Deploy Unwrapper
    const unwrapper = await deploy_utils_1.deployContract(new generated_1.Unwrapper__factory(signer), "Unwrapper", constructorArguments);
    await etherscan_1.verifyEtherscan(hre, {
        address: unwrapper.address,
        contract: "contracts/savings/peripheral/Unwrapper.sol:Unwrapper",
        constructorArguments,
    });
    // Deploy step 2 - Approve tokens
    // approveUnwrapperTokens(chain, unwrapper, signer)
});
config_1.task("deploy-unwrapper-proxy", "Deploy Unwrapper as a proxy on mainnet")
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const chain = networkAddressFactory_1.getChain(hre);
    const nexus = networkAddressFactory_1.resolveAddress("Nexus", chain);
    const proxyAdminAddress = networkAddressFactory_1.resolveAddress("DelayedProxyAdmin", chain);
    const constructorArguments = [nexus];
    // Deploy step 1 - Deploy Unwrapper
    const unwrapperImpl = await deploy_utils_1.deployContract(new generated_1.Unwrapper__factory(signer), "Unwrapper", constructorArguments);
    const initializeData = [];
    const proxy = await deploy_utils_1.deployContract(new generated_1.AssetProxy__factory(signer), "AssetProxy", [
        unwrapperImpl.address,
        proxyAdminAddress,
        initializeData,
    ]);
    const unwrapper = new generated_1.Unwrapper__factory(signer).attach(proxy.address);
    await etherscan_1.verifyEtherscan(hre, {
        address: unwrapperImpl.address,
        contract: "contracts/savings/peripheral/Unwrapper.sol:Unwrapper",
        constructorArguments,
    });
    console.log(`Set Unwrapper in the networkAddressFactory to ${unwrapper.address}`);
    // Deploy step 2 - Approve tokens
    // approveUnwrapperTokens(chain, unwrapper, signer)
});
module.exports = {};
//# sourceMappingURL=deployUnwrapper.js.map
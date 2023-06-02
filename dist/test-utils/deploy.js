"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upgradeContract = void 0;
const constants_1 = require("@utils/constants");
const time_1 = require("@utils/time");
const upgradeContract = async (contractFactory, implementation, proxyAddress, signer, delayedProxyAdmin, upgradeData = []) => {
    await delayedProxyAdmin.proposeUpgrade(proxyAddress, implementation.address, upgradeData);
    const proposeUpgradeData = delayedProxyAdmin.interface.encodeFunctionData("proposeUpgrade", [
        proxyAddress,
        implementation.address,
        upgradeData,
    ]);
    console.log(`\ndelayedProxyAdmin.proposeUpgrade to ${delayedProxyAdmin.address}, data:\n${proposeUpgradeData}`);
    await time_1.increaseTime(constants_1.ONE_WEEK.add(60));
    // check request is correct
    const request = await delayedProxyAdmin.requests(proxyAddress);
    if (request.implementation !== implementation.address)
        throw new Error("Upgrade request incorrect");
    // accept upgrade
    await delayedProxyAdmin.acceptUpgradeRequest(proxyAddress);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const proxyUpgraded = contractFactory.connect(proxyAddress, signer);
    return proxyUpgraded;
};
exports.upgradeContract = upgradeContract;
//# sourceMappingURL=deploy.js.map
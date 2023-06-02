"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logTxDetails = exports.logger = exports.deployContract = void 0;
const units_1 = require("@ethersproject/units");
const debug_1 = __importDefault(require("debug"));
const deployContract = async (contractFactory, contractName = "Contract", constructorArgs = [], overrides = {}) => {
    const contract = (await contractFactory.deploy(...constructorArgs, overrides));
    console.log(`Deploying ${contractName} contract with hash ${contract.deployTransaction.hash} from ${contract.deployTransaction.from} with gas price ${contract.deployTransaction.gasPrice.toNumber() / 1e9} Gwei`);
    const receipt = await contract.deployTransaction.wait();
    const txCost = receipt.gasUsed.mul(contract.deployTransaction.gasPrice);
    const abiEncodedConstructorArgs = contract.interface.encodeDeploy(constructorArgs);
    console.log(`Deployed ${contractName} to ${contract.address} in block ${receipt.blockNumber}, using ${receipt.gasUsed} gas costing ${units_1.formatUnits(txCost)} ETH`);
    console.log(`ABI encoded args: ${abiEncodedConstructorArgs.slice(2)}`);
    return contract;
};
exports.deployContract = deployContract;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const logger = (...args) => debug_1.default(`xzeno:${args.join(":")}`);
exports.logger = logger;
const logTxDetails = async (tx, method) => {
    var _a, _b;
    console.log(`Sent ${method} transaction with hash ${tx.hash} from ${tx.from} with gas price ${((_a = tx.gasPrice) === null || _a === void 0 ? void 0 : _a.toNumber()) / 1e9} Gwei`);
    const receipt = await tx.wait();
    // Calculate tx cost in Wei
    const txCost = receipt.gasUsed.mul((_b = tx.gasPrice) !== null && _b !== void 0 ? _b : 0);
    console.log(`Processed ${method} tx in block ${receipt.blockNumber}, using ${receipt.gasUsed} gas costing ${units_1.formatUnits(txCost)} ETH`);
    return receipt;
};
exports.logTxDetails = logTxDetails;
//# sourceMappingURL=deploy-utils.js.map
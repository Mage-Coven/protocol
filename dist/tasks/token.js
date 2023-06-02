"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("hardhat/config");
const generated_1 = require("types/generated");
const math_1 = require("@utils/math");
const utils_1 = require("ethers/lib/utils");
const constants_1 = require("@utils/constants");
const signerFactory_1 = require("./utils/signerFactory");
const deploy_utils_1 = require("./utils/deploy-utils");
const networkAddressFactory_1 = require("./utils/networkAddressFactory");
config_1.subtask("token-approve", "Approve address or contract to spend (transferFrom) an amount of tokens from the signer's account")
    .addParam("asset", "Symbol of the asset being approved. eg zUSD, izUSD, GUSD, alUSD, ZENO", undefined, config_1.types.string)
    .addOptionalParam("tokenType", "Asset token type: address, savings, vault or feederPool.", "address", config_1.types.string)
    .addParam("spender", "Address or contract name that will send the transferFrom transaction.", undefined, config_1.types.string)
    .addOptionalParam("spenderTokenType", "If spender is a token, then either address, savings, vault or feederPool.", "address", config_1.types.string)
    .addOptionalParam("amount", "Amount to approve. Default is max unit128", undefined, config_1.types.float)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const { asset, tokenType, spender, spenderTokenType, amount } = taskArgs;
    const chain = networkAddressFactory_1.getChain(hre);
    const signer = await signerFactory_1.getSigner(hre, taskArgs.speed);
    const signerAddress = await signer.getAddress();
    const assetToken = networkAddressFactory_1.resolveToken(asset, chain, tokenType);
    const token = generated_1.ERC20__factory.connect(assetToken[tokenType], signer);
    const spenderAddress = networkAddressFactory_1.resolveAddress(spender, chain, spenderTokenType);
    const amountBN = Number.isInteger(amount) ? math_1.simpleToExactAmount(amount, assetToken.decimals) : constants_1.MAX_INT128;
    const tx = await token.approve(spenderAddress, amountBN);
    await deploy_utils_1.logTxDetails(tx, `${signerAddress} approves ${spenderAddress} to transfer ${utils_1.formatUnits(amountBN, assetToken.decimals)} ${asset}`);
});
config_1.task("token-approve").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("token-transfer", "Transfer an amount of tokens from the signer to the recipient")
    .addParam("asset", "Symbol of the asset being approved. eg zUSD, izUSD, PzUSD, GUSD, alUSD, ZENO", undefined, config_1.types.string)
    .addOptionalParam("tokenType", "Asset token type: address, savings, vault or feederPool.", "address", config_1.types.string)
    .addParam("recipient", "Address or contract name the tokens will be sent to.", undefined, config_1.types.string)
    .addOptionalParam("recipientTokenType", "If recipient is a token, then either address, savings, vault or feederPool.", "address", config_1.types.string)
    .addParam("amount", "Amount to of token to be sent without the token decimals.", undefined, config_1.types.float)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const { speed, tokenType, recipient, recipientTokenType, amount } = taskArgs;
    const chain = networkAddressFactory_1.getChain(hre);
    const signer = await signerFactory_1.getSigner(hre, speed);
    const signerAddress = await signer.getAddress();
    const assetToken = networkAddressFactory_1.resolveToken(taskArgs.asset, chain, tokenType);
    const token = generated_1.ERC20__factory.connect(assetToken[tokenType], signer);
    const recipientAddress = networkAddressFactory_1.resolveAddress(recipient, chain, recipientTokenType);
    const amountBN = math_1.simpleToExactAmount(amount, assetToken.decimals);
    const desc = `${signerAddress} transfers ${utils_1.formatUnits(amountBN, assetToken.decimals)} ${taskArgs.asset} to ${recipientAddress}`;
    console.log(`About to send tx ${desc}`);
    const tx = await token.transfer(recipientAddress, amountBN);
    await deploy_utils_1.logTxDetails(tx, desc);
});
config_1.task("token-transfer").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("token-transfer-from", "Transfer an amount of tokens from the sender to the recipient")
    .addParam("asset", "Symbol of the asset being approved. eg zUSD, izUSD, GUSD, alUSD, ZENO", undefined, config_1.types.string)
    .addOptionalParam("tokenType", "Asset token type: address, savings, vault or feederPool.", "address", config_1.types.string)
    .addParam("sender", "Address or contract name the tokens will be sent from.", undefined, config_1.types.string)
    .addOptionalParam("senderTokenType", "If sender is a token, then either address, savings, vault or feederPool.", "address", config_1.types.string)
    .addParam("recipient", "Address or contract name the tokens will be sent to.", undefined, config_1.types.string)
    .addOptionalParam("recipientTokenType", "If recipient is a token, then either address, savings, vault or feederPool.", "address", config_1.types.string)
    .addParam("amount", "Amount to of token to be sent without the token decimals.", undefined, config_1.types.float)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const { speed, tokenType, sender, senderTokenType, recipient, recipientTokenType, amount } = taskArgs;
    const chain = networkAddressFactory_1.getChain(hre);
    const signer = await signerFactory_1.getSigner(hre, speed);
    const signerAddress = await signer.getAddress();
    const assetToken = networkAddressFactory_1.resolveToken(taskArgs.asset, chain, tokenType);
    const token = generated_1.ERC20__factory.connect(assetToken[tokenType], signer);
    const senderAddress = networkAddressFactory_1.resolveAddress(sender, chain, senderTokenType);
    const recipientAddress = networkAddressFactory_1.resolveAddress(recipient, chain, recipientTokenType);
    const amountBN = math_1.simpleToExactAmount(amount, assetToken.decimals);
    const tx = await token.transferFrom(senderAddress, recipientAddress, amountBN);
    await deploy_utils_1.logTxDetails(tx, `${signerAddress} transfers ${utils_1.formatUnits(amountBN, assetToken.decimals)} ${taskArgs.asset} to ${recipientAddress}`);
});
config_1.task("token-transfer-from").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("token-allowance", "Logs the amount of tokens a spender can transfer from an owner")
    .addParam("token", "Symbol of the token. eg zUSD, izUSD, GUSD, alUSD, ZENO", undefined, config_1.types.string)
    .addOptionalParam("tokenType", "Token address, savings, vault or feederPool.", "address", config_1.types.string)
    .addParam("owner", "Address or contract name where the tokens are held.", undefined, config_1.types.string)
    .addOptionalParam("ownerTokenType", "If owner is a token, then either address, savings, vault or feederPool.", "address", config_1.types.string)
    .addParam("spender", "Address or contract name that can transferFrom.", undefined, config_1.types.string)
    .addOptionalParam("spenderTokenType", "If spender is a token, then either address, savings, vault or feederPool.", "address", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const { tokenType, owner, ownerTokenType, spender, spenderTokenType } = taskArgs;
    const chain = networkAddressFactory_1.getChain(hre);
    const signer = await signerFactory_1.getSigner(hre);
    const assetSymbol = taskArgs.token;
    const assetToken = networkAddressFactory_1.resolveToken(taskArgs.token, chain, tokenType);
    const token = generated_1.ERC20__factory.connect(assetToken[tokenType], signer);
    const ownerAddress = networkAddressFactory_1.resolveAddress(owner, chain, ownerTokenType);
    const spenderAddress = networkAddressFactory_1.resolveAddress(spender, chain, spenderTokenType);
    const amount = await token.allowance(ownerAddress, spenderAddress);
    console.log(`Spender ${spenderAddress} can transfer ${utils_1.formatUnits(amount, assetToken.decimals)} ${assetSymbol} from ${spenderAddress}`);
});
config_1.task("token-allowance").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("token-balance", "Logs the token balance of an owner")
    .addParam("token", "Symbol of the token. eg zUSD, izUSD, GUSD, alUSD, ZENO", undefined, config_1.types.string)
    .addOptionalParam("tokenType", "Token address, savings, vault or feederPool.", "address", config_1.types.string)
    .addParam("owner", "Address or contract name where the tokens are held.", undefined, config_1.types.string)
    .addOptionalParam("ownerTokenType", "If owner is a token, then either address, savings, vault or feederPool.", "address", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const { tokenType, owner, ownerTokenType } = taskArgs;
    const chain = networkAddressFactory_1.getChain(hre);
    const signer = await signerFactory_1.getSigner(hre);
    const assetToken = networkAddressFactory_1.resolveToken(taskArgs.token, chain, tokenType);
    const token = generated_1.ERC20__factory.connect(assetToken[tokenType], signer);
    const ownerAddress = networkAddressFactory_1.resolveAddress(owner, chain, ownerTokenType);
    const amount = await token.balanceOf(ownerAddress);
    console.log(`Balance of ${ownerAddress} is ${utils_1.formatUnits(amount, assetToken.decimals)} ${taskArgs.token}`);
});
config_1.task("token-balance").setAction(async (_, __, runSuper) => {
    await runSuper();
});
config_1.subtask("token-deploy", "Deploys a new mock ERC20 token")
    .addParam("name", "Token name", undefined, config_1.types.string)
    .addParam("symbol", "Token symbol", undefined, config_1.types.string)
    .addOptionalParam("decimals", "Token decimal places", 18, config_1.types.int)
    .addOptionalParam("recipient", "Initial mint recipient", undefined, config_1.types.string)
    .addOptionalParam("supply", "Initial mint amount", 1000000, config_1.types.int)
    .addOptionalParam("speed", "Defender Relayer speed param: 'safeLow' | 'average' | 'fast' | 'fastest'", "fast", config_1.types.string)
    .setAction(async (taskArgs, hre) => {
    const { name, symbol, decimals, supply } = taskArgs;
    const signer = await signerFactory_1.getSigner(hre);
    const signerAddress = await signer.getAddress();
    const recipient = taskArgs.recipient || signerAddress;
    await deploy_utils_1.deployContract(new generated_1.MockERC20__factory(signer), `Token ${name} (${symbol})`, [name, symbol, decimals, recipient, supply]);
});
config_1.task("token-deploy").setAction(async (_, __, runSuper) => {
    await runSuper();
});
module.exports = {};
//# sourceMappingURL=token.js.map
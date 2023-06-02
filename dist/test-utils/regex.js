"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.privateKey = exports.transactionHash = exports.ethereumAddress = exports.bytes32 = exports.bytesFixed = exports.bytes = void 0;
exports.bytes = /^0x([A-Fa-f0-9]{1,})$/;
const bytesFixed = (x) => new RegExp(`^0x([A-Fa-f0-9]{${x * 2}})$`);
exports.bytesFixed = bytesFixed;
exports.bytes32 = exports.bytesFixed(32);
exports.ethereumAddress = exports.bytesFixed(20);
exports.transactionHash = exports.bytes32;
exports.privateKey = /^[A-Fa-f0-9]{1,64}$/;
//# sourceMappingURL=regex.js.map
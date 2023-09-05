"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processors = exports.createRemarkProcessor = void 0;
const tslib_1 = require("tslib");
const remark_1 = require("./remark");
tslib_1.__exportStar(require("./helpers"), exports);
tslib_1.__exportStar(require("./options"), exports);
var remark_2 = require("./remark");
Object.defineProperty(exports, "createRemarkProcessor", { enumerable: true, get: function () { return remark_2.createRemarkProcessor; } });
tslib_1.__exportStar(require("./types"), exports);
exports.processors = { remark: remark_1.remark };
//# sourceMappingURL=index.js.map
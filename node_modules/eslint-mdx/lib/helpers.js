"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextCharOffsetFactory = exports.prevCharOffsetFactory = exports.normalizePosition = exports.getPositionAtFactory = exports.loadEsmModule = exports.getPhysicalFilename = exports.arrayify = exports.last = void 0;
const tslib_1 = require("tslib");
const node_fs_1 = tslib_1.__importDefault(require("node:fs"));
const node_path_1 = tslib_1.__importDefault(require("node:path"));
const last = (items) => items && items[items.length - 1];
exports.last = last;
const arrayify = (...args) => args.reduce((arr, curr) => {
    arr.push(...(Array.isArray(curr) ? curr : curr == null ? [] : [curr]));
    return arr;
}, []);
exports.arrayify = arrayify;
const getPhysicalFilename = (filename, child) => {
    try {
        if (node_fs_1.default.statSync(filename).isDirectory()) {
            return child || filename;
        }
    }
    catch (err) {
        const { code } = err;
        if (code === 'ENOTDIR' || code === 'ENOENT') {
            return (0, exports.getPhysicalFilename)(node_path_1.default.dirname(filename), filename);
        }
    }
    return filename;
};
exports.getPhysicalFilename = getPhysicalFilename;
const loadEsmModule = (modulePath) => new Function('modulePath', `return import(modulePath);`)(modulePath);
exports.loadEsmModule = loadEsmModule;
const getPositionAtFactory = (text) => {
    const lines = text.split('\n');
    return (offset) => {
        let currOffset = 0;
        for (const [index, line_] of lines.entries()) {
            const line = index + 1;
            const nextOffset = currOffset + line_.length;
            if (nextOffset >= offset) {
                return {
                    line,
                    column: offset - currOffset,
                    offset,
                };
            }
            currOffset = nextOffset + 1;
        }
    };
};
exports.getPositionAtFactory = getPositionAtFactory;
const normalizePosition = ({ start, end, text, }) => {
    const startOffset = start.offset;
    const endOffset = end.offset;
    const range = [startOffset, endOffset];
    const getPositionAt = text == null
        ? null
        : (0, exports.getPositionAtFactory)(text);
    return {
        start: startOffset,
        end: endOffset,
        loc: {
            start: 'line' in start
                ? start
                : getPositionAt(startOffset),
            end: 'line' in end
                ? end
                : getPositionAt(endOffset),
        },
        range,
    };
};
exports.normalizePosition = normalizePosition;
const prevCharOffsetFactory = (text) => (offset) => {
    for (let i = offset; i >= 0; i--) {
        const char = text[i];
        if (/^\S$/.test(char)) {
            return i;
        }
    }
};
exports.prevCharOffsetFactory = prevCharOffsetFactory;
const nextCharOffsetFactory = (text) => {
    const total = text.length;
    return (offset) => {
        for (let i = offset; i <= total; i++) {
            const char = text[i];
            if (/^\S$/.test(char)) {
                return i;
            }
        }
    };
};
exports.nextCharOffsetFactory = nextCharOffsetFactory;
//# sourceMappingURL=helpers.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatCodeBlocks = exports.flat = void 0;
const tslib_1 = require("tslib");
const eslintMdx = tslib_1.__importStar(require("eslint-mdx"));
const mdx = tslib_1.__importStar(require(".."));
const code_blocks_1 = require("./code-blocks");
exports.flat = {
    files: ['**/*.{md,mdx}'],
    languageOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        parser: eslintMdx,
        globals: {
            React: false,
        },
    },
    plugins: {
        mdx,
    },
    rules: {
        'mdx/remark': 'warn',
        'no-unused-expressions': 'error',
        'react/react-in-jsx-scope': 0,
    },
};
const { parserOptions } = code_blocks_1.codeBlocks, restConfig = tslib_1.__rest(code_blocks_1.codeBlocks, ["parserOptions"]);
exports.flatCodeBlocks = Object.assign({ files: ['**/*.{md,mdx}/*'], languageOptions: {
        parserOptions,
    } }, restConfig);
//# sourceMappingURL=flat.js.map
import { base } from './base';
import { codeBlocks } from './code-blocks';
import { flat, flatCodeBlocks } from './flat';
import { overrides } from './overrides';
import { recommended } from './recommended';
export { base, codeBlocks, flat, flatCodeBlocks, overrides, recommended };
export declare const configs: {
    base: import("eslint").Linter.Config<import("eslint").Linter.RulesRecord, import("eslint").Linter.RulesRecord>;
    'code-blocks': {
        parserOptions: {
            ecmaFeatures: {
                impliedStrict: true;
            };
        };
        rules: {
            'eol-last': "off";
            'no-undef': "off";
            'no-unused-expressions': "off";
            'no-unused-vars': "off";
            'padded-blocks': "off";
            strict: "off";
            'unicode-bom': "off";
        };
    };
    codeBlocks: {
        parserOptions: {
            ecmaFeatures: {
                impliedStrict: true;
            };
        };
        rules: {
            'eol-last': "off";
            'no-undef': "off";
            'no-unused-expressions': "off";
            'no-unused-vars': "off";
            'padded-blocks': "off";
            strict: "off";
            'unicode-bom': "off";
        };
    };
    flat: import("eslint").Linter.FlatConfig;
    flatCodeBlocks: import("eslint").Linter.FlatConfig;
    overrides: import("eslint").Linter.Config<import("eslint").Linter.RulesRecord, import("eslint").Linter.RulesRecord>;
    recommended: import("eslint").Linter.Config<import("eslint").Linter.RulesRecord, import("eslint").Linter.RulesRecord>;
};

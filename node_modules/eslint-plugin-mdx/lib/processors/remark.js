"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remark = exports.createRemarkProcessor = void 0;
const eslint_plugin_markdown_1 = require("eslint-plugin-markdown");
const meta_1 = require("../meta");
const helpers_1 = require("./helpers");
const options_1 = require("./options");
const createRemarkProcessor = (processorOptions = options_1.processorOptions) => ({
    meta: {
        name: 'mdx/remark',
        version: meta_1.meta.version,
    },
    supportsAutofix: true,
    preprocess(text, filename) {
        if (!processorOptions.lintCodeBlocks) {
            return [text];
        }
        return [
            text,
            ...eslint_plugin_markdown_1.processors.markdown
                .preprocess(text, filename)
                .map(({ text, filename }) => ({
                text,
                filename: filename.slice(0, filename.lastIndexOf('.')) +
                    '.' +
                    (0, helpers_1.getShortLang)(filename, processorOptions.languageMapper),
            })),
        ];
    },
    postprocess([mdxMessages, ...markdownMessages], filename) {
        return [
            ...mdxMessages,
            ...eslint_plugin_markdown_1.processors.markdown.postprocess(markdownMessages, filename),
        ]
            .sort((a, b) => a.line - b.line || a.column - b.column)
            .map(lintMessage => {
            const { message, ruleId: eslintRuleId, severity: eslintSeverity, } = lintMessage;
            if (eslintRuleId !== 'mdx/remark') {
                return lintMessage;
            }
            const { source, ruleId, reason, severity } = JSON.parse(message);
            return Object.assign(Object.assign({}, lintMessage), { ruleId: `${source}-${ruleId}`, message: reason, severity: Math.max(eslintSeverity, severity) });
        });
    },
});
exports.createRemarkProcessor = createRemarkProcessor;
exports.remark = (0, exports.createRemarkProcessor)();
//# sourceMappingURL=remark.js.map
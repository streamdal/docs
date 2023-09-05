export * from './helpers';
export * from './options';
export { createRemarkProcessor } from './remark';
export * from './types';
export declare const processors: {
    remark: import("eslint").Linter.Processor<string | import("eslint").Linter.ProcessorFile>;
};

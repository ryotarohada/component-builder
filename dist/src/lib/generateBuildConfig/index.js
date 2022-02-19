"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBuildConfig = void 0;
const searchConfig_1 = require("../searchConfig");
const parseCommands_1 = require("../parseCommands");
// 指定可能な拡張子
const VALID_EXTENSION_TYPES = [
    'stories',
    'test',
    'types',
    'presenter',
];
// 使用不可の拡張子が含まれていた場合は除外
const extensionFilter = (outExtensions) => {
    const invalidExtensionFilter = outExtensions.flatMap((extension) => {
        return VALID_EXTENSION_TYPES.filter((validExtension) => {
            if (extension === validExtension)
                return extension;
        });
    });
    return invalidExtensionFilter;
};
// ファイル生成用のconfigオブジェクトを生成
const generateBuildConfig = () => {
    const { componentName, filePath } = (0, parseCommands_1.parseUserCommand)();
    const { rootDir, outExtensions } = (0, searchConfig_1.searchConfig)();
    return {
        outPath: rootDir + filePath + componentName + '/',
        componentName,
        outExtensions: extensionFilter(outExtensions),
    };
};
exports.generateBuildConfig = generateBuildConfig;

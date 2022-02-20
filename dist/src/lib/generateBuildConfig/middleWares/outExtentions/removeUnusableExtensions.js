"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUnusableExtensions = exports.VALID_EXTENSION_TYPES = void 0;
// 指定可能な拡張子
exports.VALID_EXTENSION_TYPES = [
    'index',
    'presenter',
    'types',
    'stories',
    'test',
];
/**
 * 使用不可の拡張子が含まれていた場合は除外する
 */
const removeUnusableExtensions = (outExtensions) => {
    const invalidExtensionFilter = outExtensions.flatMap((extension) => {
        return exports.VALID_EXTENSION_TYPES.filter((validExtension) => {
            if (extension === validExtension)
                return extension;
        });
    });
    return invalidExtensionFilter;
};
exports.removeUnusableExtensions = removeUnusableExtensions;

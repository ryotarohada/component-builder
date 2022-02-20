"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBuildMaterial = void 0;
const parseCommands_1 = require("../parseCommands");
const searchConfig_1 = require("../searchConfig");
const middleWares_1 = require("./middleWares");
/**
 * コマンド引数とconfigファイルの内容からbuildMaterialオブジェクト（ファイル生成に使用する情報が入っている）を生成
 */
const generateBuildMaterial = () => {
    const { componentName, filePath } = (0, parseCommands_1.parseUserCommand)();
    const { rootDir, outExtensions } = (0, searchConfig_1.searchConfig)();
    const { outPathMiddleWare, outExtentionsMiddleWare } = (0, middleWares_1.buildMaterialMiddleWares)();
    const buildMaterial = {
        outPath: outPathMiddleWare({ componentName, filePath, rootDir }),
        componentName,
        outExtensions: outExtentionsMiddleWare(outExtensions),
    };
    return buildMaterial;
};
exports.generateBuildMaterial = generateBuildMaterial;

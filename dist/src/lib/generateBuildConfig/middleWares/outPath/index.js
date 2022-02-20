"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outPathMiddleWare = void 0;
/**
 * outPath設定の例外を解決するミドルウェア関数
 */
const outPathMiddleWare = ({ componentName, filePath, rootDir, }) => {
    filePathInspect(filePath, rootDir);
    return rootDir + filePath + componentName + '/';
};
exports.outPathMiddleWare = outPathMiddleWare;
/**
 * filePathの最後の文字がスラッシュか判定
 */
const filePathInspect = (filePath, rootDir) => {
    const filePathInspect = () => {
        if (!filePath)
            return true;
        const lastStr = filePath.slice(-1);
        const regex = /\//g;
        const result = regex.test(lastStr);
        return result;
    };
    const rootDirInspect = () => {
        const lastStr = rootDir.slice(-1);
        const regex = /\//g;
        const result = regex.test(lastStr);
        return result;
    };
    if (!filePathInspect() || !rootDirInspect())
        throw Error('filePathはスラッシュ（/）で終了する必要があります');
};

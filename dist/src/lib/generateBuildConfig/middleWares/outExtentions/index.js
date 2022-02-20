"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outExtentionsMiddleWare = void 0;
const indexPresenterConflictResove_1 = require("./indexPresenterConflictResove");
const removeUnusableExtensions_1 = require("./removeUnusableExtensions");
/**
 * outExtentions設定の例外を解決するミドルウェア関数
 */
const outExtentionsMiddleWare = (outExtensions) => {
    let extentions = outExtensions;
    extentions = (0, removeUnusableExtensions_1.removeUnusableExtensions)(extentions);
    extentions = (0, indexPresenterConflictResove_1.indexPresenterConflictResove)(extentions);
    return extentions;
};
exports.outExtentionsMiddleWare = outExtentionsMiddleWare;

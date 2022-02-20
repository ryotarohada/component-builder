"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMaterialMiddleWares = void 0;
const outExtentions_1 = require("./outExtentions");
const outPath_1 = require("./outPath");
const buildMaterialMiddleWares = () => {
    return {
        outPathMiddleWare: outPath_1.outPathMiddleWare,
        outExtentionsMiddleWare: outExtentions_1.outExtentionsMiddleWare,
    };
};
exports.buildMaterialMiddleWares = buildMaterialMiddleWares;

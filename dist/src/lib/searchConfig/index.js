"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchConfig = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const CONFIG_FILE_PATH = './component-builder.json';
const searchConfig = () => {
    let file;
    try {
        file = fs_extra_1.default.readFileSync(CONFIG_FILE_PATH, {
            encoding: 'utf-8',
        });
        return JSON.parse(file);
    }
    catch (_a) {
        throw Error('configファイルは必須です');
    }
};
exports.searchConfig = searchConfig;

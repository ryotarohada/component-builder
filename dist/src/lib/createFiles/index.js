"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFiles = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const createFiles = (buildMaterial) => {
    const { outPath, componentName, outExtensions } = buildMaterial;
    outExtensions.forEach((extension) => {
        switch (extension) {
            case 'index':
                createIndexFile({ outPath });
                break;
            case 'presenter':
                createPresenterFile({ outPath });
                break;
            case 'test':
                createTestFile({ outPath, componentName });
                break;
            case 'stories':
                createStoriesFile({ outPath, componentName });
                break;
            case 'types':
                createTypesFile({ outPath, componentName });
                break;
        }
    });
};
exports.createFiles = createFiles;
const createIndexFile = ({ outPath }) => {
    fs_extra_1.default.createFileSync(outPath + 'index.tsx');
    console.log('index File: Done! 🔧');
};
const createPresenterFile = ({ outPath }) => {
    fs_extra_1.default.createFileSync(outPath + 'index.tsx');
    console.log('container File: Done! 🔧');
    fs_extra_1.default.createFileSync(outPath + 'presenter.tsx');
    console.log('Presenter File: Done! 🔧');
};
const createTestFile = ({ outPath, componentName, }) => {
    fs_extra_1.default.createFileSync(outPath + componentName + '.test.tsx');
    console.log('Test File: Done! 🔧');
};
const createStoriesFile = ({ outPath, componentName, }) => {
    fs_extra_1.default.createFileSync(outPath + componentName + '.stories.tsx');
    console.log('Stories File: Done! 🔧');
};
const createTypesFile = ({ outPath, componentName, }) => {
    fs_extra_1.default.createFileSync(outPath + componentName + '.types.ts');
    console.log('Types File: Done! 🔧');
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateBuildConfig_1 = require("./lib/generateBuildConfig");
const createFiles_1 = require("./lib/createFiles");
const buildConfig = (0, generateBuildConfig_1.generateBuildConfig)();
(0, createFiles_1.createFiles)(buildConfig);

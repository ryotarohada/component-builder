"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateBuildConfig_1 = require("./lib/generateBuildConfig");
const createFiles_1 = require("./lib/createFiles");
const buildMaterial = (0, generateBuildConfig_1.generateBuildMaterial)();
(0, createFiles_1.createFiles)(buildMaterial);

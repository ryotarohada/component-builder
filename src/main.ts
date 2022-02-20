import { generateBuildMaterial } from './lib/generateBuildConfig'
import { createFiles } from './lib/createFiles'

const buildMaterial = generateBuildMaterial()
createFiles(buildMaterial)

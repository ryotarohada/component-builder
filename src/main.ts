import { generateBuildConfig } from './lib/generateBuildConfig'
import { createFiles } from './lib/createFiles'

const buildConfig = generateBuildConfig()
createFiles(buildConfig)

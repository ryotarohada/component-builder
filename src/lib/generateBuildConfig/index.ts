import { searchConfig } from '../searchConfig'
import { parseUserCommand } from '../parseCommands'
import { BuildConfig, OutExtensionsType, UserConfig } from '../../types'

// 指定可能な拡張子
const VALID_EXTENSION_TYPES: OutExtensionsType[] = [
  'stories',
  'test',
  'types',
  'presenter',
]

// 使用不可の拡張子が含まれていた場合は除外
const extensionFilter = (outExtensions: UserConfig['outExtensions']) => {
  const invalidExtensionFilter = outExtensions.flatMap(
    (extension): OutExtensionsType[] => {
      return VALID_EXTENSION_TYPES.filter((validExtension) => {
        if (extension === validExtension) return extension
      })
    },
  )
  return invalidExtensionFilter
}

// ファイル生成用のconfigオブジェクトを生成
export const generateBuildConfig = (): BuildConfig => {
  const { componentName, filePath } = parseUserCommand()
  const { rootDir, outExtensions } = searchConfig()

  return {
    outPath: rootDir + filePath + componentName + '/',
    componentName,
    outExtensions: extensionFilter(outExtensions),
  }
}

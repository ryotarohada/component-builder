import { searchConfig } from '../searchConfig'
import { parseUserCommand } from '../parseCommands'
import { BuildConfig, OutExtensionsType, UserConfig } from '../../types'

// 指定可能な拡張子
const VALID_EXTENSION_TYPES: OutExtensionsType[] = [
  'index',
  'presenter',
  'types',
  'stories',
  'test',
]

// ファイル生成用のconfigオブジェクトを生成
export const generateBuildConfig = (): BuildConfig => {
  const { componentName, filePath } = parseUserCommand()
  const { rootDir, outExtensions } = searchConfig()

  return {
    outPath: rootDir + filePath + componentName + '/',
    componentName,
    outExtensions: outExtentionsMiddleWares(outExtensions),
  }
}

// outExtentions設定の例外を解決するミドルウェア関数
const outExtentionsMiddleWares = (
  outExtensions: BuildConfig['outExtensions'],
): BuildConfig['outExtensions'] => {
  let extentions = outExtensions
  extentions = removeUnusableExtensions(extentions)
  extentions = indexPresenterConflictResove(extentions)
  return extentions
}

// 使用不可の拡張子が含まれていた場合は除外
const removeUnusableExtensions = (
  outExtensions: UserConfig['outExtensions'],
) => {
  const invalidExtensionFilter = outExtensions.flatMap(
    (extension): OutExtensionsType[] => {
      return VALID_EXTENSION_TYPES.filter((validExtension) => {
        if (extension === validExtension) return extension
      })
    },
  )
  return invalidExtensionFilter
}

// indexとpresenter同時に設定時の競合解決
const indexPresenterConflictResove = (
  outExtensions: BuildConfig['outExtensions'],
): BuildConfig['outExtensions'] => {
  let indexFlg: boolean = false
  let presenterFlg: boolean = false
  outExtensions.forEach((extension) => {
    if (extension === 'presenter') presenterFlg = true
    if (extension === 'index') indexFlg = true
  })

  if (indexFlg && presenterFlg) {
    const removeIndexExtension = outExtensions.filter((extension) => {
      if (extension !== 'index') return extension
    })
    return removeIndexExtension
  }
  return outExtensions
}

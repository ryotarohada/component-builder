import { OutExtensionsType, UserConfig, BuildMaterial } from '../../../../types'

// 指定可能な拡張子
export const VALID_EXTENSION_TYPES: OutExtensionsType[] = [
  'index',
  'presenter',
  'types',
  'stories',
  'test',
]

/**
 * 使用不可の拡張子が含まれていた場合は除外する
 */
export const removeUnusableExtensions = (
  outExtensions: UserConfig['outExtensions'],
): BuildMaterial['outExtensions'] => {
  const invalidExtensionFilter = outExtensions.flatMap(
    (extension): OutExtensionsType[] => {
      return VALID_EXTENSION_TYPES.filter((validExtension) => {
        if (extension === validExtension) return extension
      })
    },
  )
  return invalidExtensionFilter
}

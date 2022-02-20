import { UserConfig, BuildMaterial } from '../../../../types'

/**
 * outExtentionsが空配列の場合はindexを適用する
 */
export const emptyExtentionsFilter = (
  outExtensions: UserConfig['outExtensions'],
): BuildMaterial['outExtensions'] => {
  if (outExtensions.length !== 0) return outExtensions
  let extentions = outExtensions
  extentions.push('index')
  return extentions
}

import { indexPresenterConflictResove } from './indexPresenterConflictResove'
import { removeUnusableExtensions } from './removeUnusableExtensions'
import { UserConfig, BuildMaterial } from '../../../../types'

/**
 * outExtentions設定の例外を解決するミドルウェア関数
 */
export const outExtentionsMiddleWare = (
  outExtensions: UserConfig['outExtensions'],
): BuildMaterial['outExtensions'] => {
  let extentions = outExtensions
  extentions = removeUnusableExtensions(extentions)
  extentions = indexPresenterConflictResove(extentions)
  return extentions
}

import { UserConfig, BuildMaterial } from '../../../../types'

/**
 * indexとpresenter同時に設定時の競合解決
 */
export const indexPresenterConflictResove = (
  outExtensions: UserConfig['outExtensions'],
): BuildMaterial['outExtensions'] => {
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

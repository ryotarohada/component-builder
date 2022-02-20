import { BuildMaterial, UserCommand, UserConfig } from '@/types'

type OutPathMiddleWareArg = {
  componentName: UserCommand['componentName']
  filePath: UserCommand['filePath']
  rootDir: UserConfig['rootDir']
}

/**
 * outPath設定の例外を解決するミドルウェア関数
 */
export const outPathMiddleWare = ({
  componentName,
  filePath,
  rootDir,
}: OutPathMiddleWareArg): BuildMaterial['outPath'] => {
  filePathInspect(filePath, rootDir)
  return rootDir + filePath + componentName + '/'
}

/**
 * filePathの最後の文字がスラッシュか判定
 */
const filePathInspect = (
  filePath: UserCommand['filePath'],
  rootDir: UserConfig['rootDir'],
) => {
  const filePathInspect = () => {
    if (!filePath) return true
    const lastStr = filePath.slice(-1)
    const regex = /\//g
    const result = regex.test(lastStr)
    return result
  }

  const rootDirInspect = () => {
    const lastStr = rootDir.slice(-1)
    const regex = /\//g
    const result = regex.test(lastStr)
    return result
  }

  if (!filePathInspect() || !rootDirInspect())
    throw Error('filePathはスラッシュ（/）で終了する必要があります')
}

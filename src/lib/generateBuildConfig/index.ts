import { parseUserCommand } from '../parseCommands'
import { searchConfig } from '../searchConfig'
import { buildMaterialMiddleWares } from './middleWares'
import { BuildMaterial } from '../../types'

/**
 * コマンド引数とconfigファイルの内容からbuildMaterialオブジェクト（ファイル生成に使用する情報が入っている）を生成
 */
export const generateBuildMaterial = (): BuildMaterial => {
  const { componentName, filePath } = parseUserCommand()
  const { rootDir, outExtensions } = searchConfig()
  const { outPathMiddleWare, outExtentionsMiddleWare } = buildMaterialMiddleWares()

  const buildMaterial = {
    outPath: outPathMiddleWare({ componentName, filePath, rootDir }),
    componentName,
    outExtensions: outExtentionsMiddleWare(outExtensions),
  }

  return buildMaterial
}

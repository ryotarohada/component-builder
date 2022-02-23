import fs from 'fs-extra'
import { createFileSuccessMessage } from '../../messages'
import { BuildMaterial } from '../../../types'
import { generateReactFcTsCode } from '../codes'

const FILE_TYPE = 'index'

export const createIndexFile = ({
  outPath,
  componentName,
}: Pick<BuildMaterial, 'outPath' | 'componentName'>) => {
  const path = outPath + 'index.tsx'
  const code = generateReactFcTsCode(componentName)
  fs.createFileSync(path)
  fs.writeFileSync(path, code)
  createFileSuccessMessage(FILE_TYPE)
}

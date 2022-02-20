import fs from 'fs-extra'
import { createFileSuccessMessage } from '../../messages'
import { BuildMaterial } from '../../../types'

const FILE_TYPE = 'index'

export const createIndexFile = ({ outPath }: Pick<BuildMaterial, 'outPath'>) => {
  fs.createFileSync(outPath + 'index.tsx')
  createFileSuccessMessage(FILE_TYPE)
}

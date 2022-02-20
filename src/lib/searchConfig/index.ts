import fs from 'fs-extra'
import { UserConfig } from '../../types'

const CONFIG_FILE_PATH = './component-builder.json'

export const searchConfig = (): UserConfig => {
  let file: string
  try {
    file = fs.readFileSync(CONFIG_FILE_PATH, {
      encoding: 'utf-8',
    })
    return JSON.parse(file)
  } catch {
    throw Error('configファイルは必須です')
  }
}

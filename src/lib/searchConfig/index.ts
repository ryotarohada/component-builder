import fs from 'fs-extra'
import { UserConfig } from '../../types'

export const searchConfig = (): UserConfig => {
  let file: string
  try {
    file = fs.readFileSync('./.wavyrc', {
      encoding: 'utf-8',
    })
    return JSON.parse(file)
  } catch {
    throw Error('configファイルは必須です')
  }
}

import { program } from 'commander'
import { UserCommand } from '../../types'

export const parseUserCommand = (): UserCommand => {
  program.parse(process.argv)

  const componentName = program.args[0]
  let filePath = program.args[1] ?? ''

  if (!componentName) throw Error('コマンド引数の指定が不十分です')

  return { componentName, filePath }
}

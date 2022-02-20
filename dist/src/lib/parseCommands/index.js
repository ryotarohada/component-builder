'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.parseUserCommand = void 0
const commander_1 = require('commander')
const parseUserCommand = () => {
  var _a
  commander_1.program.parse(process.argv)
  const componentName = commander_1.program.args[0]
  let filePath =
    (_a = commander_1.program.args[1]) !== null && _a !== void 0 ? _a : ''
  if (!componentName) throw Error('コマンド引数の指定が不十分です')
  return { componentName, filePath }
}
exports.parseUserCommand = parseUserCommand

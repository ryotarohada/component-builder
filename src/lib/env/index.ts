import dotenv, { DotenvConfigOptions } from 'dotenv'

const envOptions: DotenvConfigOptions = { debug: true }
const envConfig = dotenv.config(envOptions)

export const genParsedEnv = (): NodeJS.ProcessEnv => {
  if (!envConfig.parsed) throw new Error('env error.')
  const parsedEnv = envConfig.parsed as NodeJS.ProcessEnv
  return {
    ...parsedEnv,
    TZ: process.env.TZ,
  }
}

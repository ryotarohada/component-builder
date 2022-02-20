export type UserConfig = {
  rootDir: string
  outExtensions: OutExtensionsType[]
}

export type OutExtensionsType =
  | 'index'
  | 'presenter'
  | 'types'
  | 'test'
  | 'stories'
export type BuildConfig = {
  outPath: string
  componentName: string
  outExtensions: OutExtensionsType[]
}

export type UserCommand = {
  componentName: string
  filePath: string
}

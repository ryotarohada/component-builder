export type UserConfig = {
  rootDir: string
  outExtensions: OutExtensionsType[]
}

export type OutExtensionsType = 'stories' | 'test' | 'types' | 'presenter'
export type BuildConfig = {
  outPath: string
  componentName: string
  outExtensions: OutExtensionsType[]
}

export type UserCommand = {
  componentName: string
  filePath: string
}

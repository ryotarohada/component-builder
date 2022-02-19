import fs from 'fs-extra'
import { BuildConfig } from '../../types'

export const createFiles = (config: BuildConfig) => {
  const { outPath, componentName, outExtensions } = config

  outExtensions.forEach((extension) => {
    switch (extension) {
      case 'presenter':
        createPresenterFile({ outPath, componentName })
        break
      case 'test':
        createTestFile({ outPath, componentName })
        break
      case 'stories':
        createStoriesFile({ outPath, componentName })
        break
      case 'types':
        createTypesFile({ outPath, componentName })
        break
    }
  })
}

const createPresenterFile = ({
  outPath,
  componentName,
}: Omit<BuildConfig, 'outExtensions'>) => {
  fs.createFileSync(outPath + 'index.tsx')
  console.log('container File: Done! 🔧')
  fs.createFileSync(outPath + 'presenter.tsx')
  console.log('Presenter File: Done! 🔧')
}

const createTestFile = ({
  outPath,
  componentName,
}: Omit<BuildConfig, 'outExtensions'>) => {
  fs.createFileSync(outPath + componentName + '.test.tsx')
  console.log('Test File: Done! 🔧')
}

const createStoriesFile = ({
  outPath,
  componentName,
}: Omit<BuildConfig, 'outExtensions'>) => {
  fs.createFileSync(outPath + componentName + '.stories.tsx')
  console.log('Stories File: Done! 🔧')
}

const createTypesFile = ({
  outPath,
  componentName,
}: Omit<BuildConfig, 'outExtensions'>) => {
  fs.createFileSync(outPath + componentName + '.types.ts')
  console.log('Types File: Done! 🔧')
}

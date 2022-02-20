import fs from 'fs-extra'
import { BuildMaterial } from '../../types'
import { createIndexFile } from './createIndexFile'

export const createFiles = (buildMaterial: BuildMaterial) => {
  const { outPath, componentName, outExtensions } = buildMaterial

  outExtensions.forEach((extension) => {
    switch (extension) {
      case 'index':
        createIndexFile({ outPath })
        break
      case 'presenter':
        createPresenterFile({ outPath })
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

const createPresenterFile = ({ outPath }: Pick<BuildMaterial, 'outPath'>) => {
  fs.createFileSync(outPath + 'index.tsx')
  console.log('container File: Done! 🔧')
  fs.createFileSync(outPath + 'presenter.tsx')
  console.log('Presenter File: Done! 🔧')
}

const createTestFile = ({
  outPath,
  componentName,
}: Omit<BuildMaterial, 'outExtensions'>) => {
  fs.createFileSync(outPath + componentName + '.test.tsx')
  console.log('Test File: Done! 🔧')
}

const createStoriesFile = ({
  outPath,
  componentName,
}: Omit<BuildMaterial, 'outExtensions'>) => {
  fs.createFileSync(outPath + componentName + '.stories.tsx')
  console.log('Stories File: Done! 🔧')
}

const createTypesFile = ({
  outPath,
  componentName,
}: Omit<BuildMaterial, 'outExtensions'>) => {
  fs.createFileSync(outPath + componentName + '.types.ts')
  console.log('Types File: Done! 🔧')
}

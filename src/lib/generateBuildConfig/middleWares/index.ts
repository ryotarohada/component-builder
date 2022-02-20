import { outExtentionsMiddleWare } from './outExtentions'
import { outPathMiddleWare } from './outPath'

export const buildMaterialMiddleWares = () => {
  return {
    outPathMiddleWare,
    outExtentionsMiddleWare,
  }
}

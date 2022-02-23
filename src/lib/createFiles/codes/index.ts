import { BuildMaterial } from '@/types'

export const generateReactFcTsCode = (
  componentName: BuildMaterial['componentName'],
) =>
  `import React from "react";

type Props = {};

export const ${componentName}: React.FC<Props> = () => {
  return ();
};
`

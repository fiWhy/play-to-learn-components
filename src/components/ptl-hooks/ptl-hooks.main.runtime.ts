import { MainRuntime } from '@teambit/cli';
import {
  GeneratorMain,
  GeneratorAspect,
  ComponentContext,
} from '@teambit/generator';
import { PtlHooksAspect } from './ptl-hooks.aspect';

export class PtlHooksMain {
  static slots = [];
  static dependencies = [GeneratorAspect];
  static runtime = MainRuntime;
  static async provider([generator]: [GeneratorMain]) {
    /**
     * Array of templates. Add as many templates as you want
     * Separate the templates to multiple files if you prefer
     * Modify, add or remove files as needed
     * See the docs file of this component for more info
     */

    generator.registerComponentTemplate([
      {
        name: 'ptl-hook',
        description: 'Hook module',
        generateFiles: (context: ComponentContext) => {
          return [
            // index file
            {
              relativePath: 'index.ts',
              isMain: true,
              content: `export { ${context.nameCamelCase} } from './${context.name}';
`,
            },

            // interfaces file
            {
              relativePath: 'interfaces.ts',
              content: `export type ${context.namePascalCase.slice(
                3
              )}Hook = () => null;
`,
            },

            // component file
            {
              relativePath: `${context.name}.tsx`,
              content: `import { ${context.namePascalCase.slice(
                3
              )}Hook } from './interfaces';

export const ${context.nameCamelCase}: ${context.namePascalCase.slice(
                3
              )}Hook = () => {
  return null;
}`,
            },

            // docs file
            {
              relativePath: `${context.name}.docs.mdx`,
              content: `---
description: 'A ${context.namePascalCase.slice(3)} hook.'
labels: ['label1', 'label2', 'label3']
---

import { ${context.nameCamelCase} } from './${context.name}';
`,
            },

            // test file
            {
              relativePath: `${context.name}.spec.tsx`,
              content: `import { renderHook } from '@testing-library/react-hooks';
import { ${context.nameCamelCase} } from './${context.name}';

it('should return some value', () => {
  const { result } = renderHook(() => ${context.nameCamelCase}());
  expect(result.current).toBe(null);
});
`,
            },
            // add more files here such as css/sass
          ];
        },
      },
    ]);

    return new PtlHooksMain();
  }
}

PtlHooksAspect.addRuntime(PtlHooksMain);

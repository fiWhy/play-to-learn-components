import { MainRuntime } from '@teambit/cli';
import {
  GeneratorMain,
  GeneratorAspect,
  ComponentContext,
} from '@teambit/generator';
import { PtlComponentsAspect } from './ptl-components.aspect';

export class PtlComponentsMain {
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
        name: 'ptl-component',
        description: 'Functional component module',
        generateFiles: (context: ComponentContext) => {
          return [
            // index file
            {
              relativePath: 'index.ts',
              isMain: true,
              content: `export { default as ${context.namePascalCase} } from './${context.name}';
export * from './interfaces';
`,
            },

            // interfaces file
            {
              relativePath: 'interfaces.ts',
              content: `export interface ${context.namePascalCase}Props {
/**
  * a text to be rendered in the component.
*/
};
`,
            },

            // styles file
            {
              relativePath: 'styles.ts',
              content: `import { styled } from '@play-to-learn/components.theme.palette';

export const ${context.namePascalCase}Wrapper = styled.div\`\`;`,
            },

            // component file
            {
              relativePath: `${context.name}.tsx`,
              content: `import React, { FC } from 'react';
import { ${context.namePascalCase}Props } from './interfaces';
import { ${context.namePascalCase}Wrapper } from './styles';

const ${context.namePascalCase}: FC<${context.namePascalCase}Props> = ({ children }) => {
  return (
    <${context.namePascalCase}Wrapper>
      {children}
    </${context.namePascalCase}Wrapper>
  );
}

export default ${context.namePascalCase};`,
            },

            // docs file
            {
              relativePath: `${context.name}.docs.mdx`,
              content: `---
description: 'A ${context.namePascalCase} component.'
labels: ['label1', 'label2', 'label3']
---

import ${context.namePascalCase} from './${context.name}';
`,
            },

            // composition file
            {
              relativePath: `${context.name}.composition.tsx`,
              content: `import React from 'react';
import ${context.namePascalCase} from './${context.name}';
import { ThemeProvider } from 'styled-components';
import theme from '@play-to-learn/components.theme.palette';

export const Basic${context.namePascalCase} = () => (
  <ThemeProvider theme={theme.dark}>
    <${context.namePascalCase}>hello from ${context.namePascalCase}</${context.namePascalCase}>
  </ThemeProvider>
);
`,
            },

            // test file
            {
              relativePath: `${context.name}.spec.tsx`,
              content: `import React from 'react';
import { render } from '@testing-library/react';
import { Basic${context.namePascalCase} } from './${context.name}.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<Basic${context.namePascalCase} />);
  const rendered = getByText('hello from ${context.namePascalCase}');
  expect(rendered).toBeTruthy();
});
`,
            },
            // add more files here such as css/sass
          ];
        },
      },
    ]);

    return new PtlComponentsMain();
  }
}

PtlComponentsAspect.addRuntime(PtlComponentsMain);

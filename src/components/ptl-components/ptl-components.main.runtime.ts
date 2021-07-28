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
          const potentialNamespace = context.name.split('/')[0];
          const componentNamespace =
            !potentialNamespace || potentialNamespace === context.name
              ? 'ui'
              : potentialNamespace;
          return [
            // index file
            {
              relativePath: 'index.ts',
              isMain: true,
              content: `export { default } from './${context.name}';
export * from './interfaces';
`,
            },

            // story
            {
              relativePath: `${context.name}.stories.tsx`,
              content: `import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme, {
  GlobalStyle,
  Fonts,
} from '@play-to-learn/components.theme.palette';


import ${context.namePascalCase}, { ${context.namePascalCase}Props }  from './';

export default {
  title: '${componentNamespace}/${context.namePascalCase}',
  component: ${context.namePascalCase},
} as Meta;

const Template: Story<${context.namePascalCase}Props> = (args) => (
  <ThemeProvider theme={theme.dark}>
    <Fonts />
    <GlobalStyle />
    <${context.namePascalCase} {...args}>Hello from ${context.namePascalCase}</${context.namePascalCase}>
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = { };`,
            },

            // interfaces file
            {
              relativePath: 'interfaces.ts',
              content: `import { AutomationEnchancementProps } from '@play-to-learn/components.hocs.automation-enchancement';
              
export interface ${context.namePascalCase}Props extends AutomationEnchancementProps { };
`,
            },

            // styles file
            {
              relativePath: 'styles.ts',
              content: `import { styled } from '@play-to-learn/components.theme.palette';
import FlexBox from '@play-to-learn/components.ui.flex-box';

export const ${context.namePascalCase}WrapperStyled = styled(FlexBox)\`\`;`,
            },

            // component file
            {
              relativePath: `${context.name}.tsx`,
              content: `import React, { FC } from 'react';
import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';

import { ${context.namePascalCase}Props } from './interfaces';
import { ${context.namePascalCase}WrapperStyled } from './styles';

const ${context.namePascalCase}: FC<${context.namePascalCase}Props> = ({ children, className, elementId }) => {
  return (
    <${context.namePascalCase}WrapperStyled elementId={elementId} className={className}>
      {children}
    </${context.namePascalCase}WrapperStyled>
  );
}

export default automationEnchancement<${context.namePascalCase}Props>(${context.namePascalCase}, '${context.name}');`,
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

import { Default } from './${context.name}.stories';

export const ${context.namePascalCase}Default = () => <Default />;
`,
            },

            // test file
            {
              relativePath: `${context.name}.spec.tsx`,
              content: `import React from 'react';
import { render } from '@testing-library/react';

import { ${context.namePascalCase}Default } from './${context.name}.composition';

it('should be rendered', () => {
  const { getByTestId } = render(<${context.namePascalCase}Default />);
  const rendered = getByTestId('${context.name}-component-1');
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

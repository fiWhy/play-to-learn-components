import { MainRuntime } from '@teambit/cli';
import {
  GeneratorMain,
  GeneratorAspect,
  ComponentContext,
} from '@teambit/generator';
import { PtlHocsAspect } from './ptl-hocs.aspect';

export class PtlHocsMain {
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
        name: 'ptl-hoc',
        description: 'HOC module',
        generateFiles: (context: ComponentContext) => {
          return [
            // index file
            {
              relativePath: 'index.ts',
              isMain: true,
              content: `export { ${context.nameCamelCase} } from './${context.name}';
export * from './interfaces';
`,
            },

            // interfaces file
            {
              relativePath: 'interfaces.ts',
              content: `export interface ${context.namePascalCase}Props { 
  innerRef?: any;
}
`,
            },

            // hoc  file
            {
              relativePath: `${context.name}.tsx`,
              content: `import React from 'react';
import { ${context.namePascalCase}Props } from './interfaces';

export const ${context.nameCamelCase} = <P extends ${context.namePascalCase}Props>(
  Component: React.ComponentType<P>
) => {
  const displayName = Component.displayName || Component.name || 'Component';
              
  const WrappedComponent = (props: P) => {
    const { innerRef, ...otherProps } = props;
    return <Component {...(otherProps as P)} ref={innerRef} />;
  };
              
  WrappedComponent.displayName = \`${context.nameCamelCase}(\${displayName})\`;
  return WrappedComponent;
};
              `,
            },

            // docs file
            {
              relativePath: `${context.name}.docs.mdx`,
              content: `---
description: 'A ${context.nameCamelCase} HOC.'
labels: []
---

import { ${context.nameCamelCase} } from './${context.name}';
`,
            },

            // test file
            {
              relativePath: `${context.name}.spec.tsx`,
              content: `import React from 'react';
import { render } from '@testing-library/react';
import { ${context.nameCamelCase} } from './${context.name}';

it('should render with the correct text', () => {
  const ComponentExample = () => <div>hello from ${context.nameCamelCase}</div>;
  const ComponentWithHOC = ${context.nameCamelCase}(ComponentExample);
  const { getByText } = render(<ComponentWithHOC />);
  const rendered = getByText('hello from ${context.nameCamelCase}');
  expect(rendered).toBeTruthy();
});
`,
            },
            // add more files here such as css/sass
          ];
        },
      },
    ]);

    return new PtlHocsMain();
  }
}

PtlHocsAspect.addRuntime(PtlHocsMain);

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme, {
  GlobalStyle,
  Fonts,
} from '@play-to-learn/components.theme.palette';

import Layout, { LayoutProps } from './';

export default {
  title: 'ui/Layout',
  component: Layout,
} as Meta;

const Template: Story<LayoutProps> = (args) => (
  <ThemeProvider theme={theme.dark}>
    <Fonts />
    <GlobalStyle />
    <Layout
      {...args}
      renderHeader={() => <div>Hello from header</div>}
      renderSidebar={() => <div>Hello from sidebar</div>}
    >
      Hello from Layout
    </Layout>
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {};

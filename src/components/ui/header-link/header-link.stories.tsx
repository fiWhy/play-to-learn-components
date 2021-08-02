import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme, {
  GlobalStyle,
  Fonts,
} from '@play-to-learn/components.theme.palette';

import HeaderLink, { HeaderLinkProps } from './';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'ui/HeaderLink',
  component: HeaderLink,
} as Meta;

const Template: Story<HeaderLinkProps> = (args) => (
  <ThemeProvider theme={theme.dark}>
    <Router>
      <Fonts />
      <GlobalStyle />
      <HeaderLink {...args} to={'/test'}>
        Hello from HeaderLink
      </HeaderLink>
    </Router>
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  icon: 'RiHome2Fill',
};

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme, {
  GlobalStyle,
  Fonts,
} from '@play-to-learn/components.theme.palette';

import Button, { ButtonProps } from './';

export default {
  title: 'ui/Button',
  component: Button,
} as Meta;

const Template: Story = (args: ButtonProps) => (
  <ThemeProvider theme={theme.dark}>
    <Fonts />
    <GlobalStyle />
    <Button {...args}>Hello from Button</Button>
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {};

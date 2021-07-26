import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme, {
  GlobalStyle,
  Fonts,
} from '@play-to-learn/components.theme.palette';

import ProgressBar, { ProgressBarProps } from './';

export default {
  title: 'ui/ProgressBar',
  component: ProgressBar,
} as Meta;

const Template: Story<ProgressBarProps> = (args) => (
  <ThemeProvider theme={theme.dark}>
    <Fonts />
    <GlobalStyle />
    <ProgressBar {...args}>Hello from ProgressBar</ProgressBar>
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  total: 200,
  actual: 75,
  color: '#EB4D4D',
};

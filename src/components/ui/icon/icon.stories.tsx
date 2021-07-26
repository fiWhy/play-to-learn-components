import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme, { GlobalStyle } from '@play-to-learn/components.theme.palette';

import Icon, { IconProps } from './';

export default {
  title: 'ui/Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => (
  <ThemeProvider theme={theme.dark}>
    <GlobalStyle />
    <Icon {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  name: 'ColoredTreasureBox',
};

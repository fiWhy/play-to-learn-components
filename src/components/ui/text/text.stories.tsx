import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme, {
  GlobalStyle,
  Fonts,
} from '@play-to-learn/components.theme.palette';

import Text, { TextProps } from '.';

export default {
  title: 'ui/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => (
  <ThemeProvider theme={theme.dark}>
    <Fonts />
    <GlobalStyle />
    <Text {...args}>Hello from Text</Text>
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  type: 'Body-Default',
};

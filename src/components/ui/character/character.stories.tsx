import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme, {
  GlobalStyle,
  Fonts,
} from '@play-to-learn/components.theme.palette';

import Character, { CharacterProps } from './';

export default {
  title: 'ui/Character',
  component: Character,
} as Meta;

const Template: Story<CharacterProps> = (args) => (
  <ThemeProvider theme={theme.dark}>
    <Fonts />
    <GlobalStyle />
    <Character {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  type: 'robot',
  size: 100,
};

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme, {
  GlobalStyle,
  Fonts,
} from '@play-to-learn/components.theme.palette';

import Avatar, { AvatarProps } from '.';

export default {
  title: 'ui/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => (
  <ThemeProvider theme={theme.dark}>
    <GlobalStyle />
    <Fonts />
    <Avatar {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  src: 'https://cs5-1.4pda.to/16630063.png',
  type: 'big',
  placeholder: 'DB',
};

export const WithPlaceholder = Template.bind({});

WithPlaceholder.args = {
  type: 'big',
  placeholder: 'DB',
};

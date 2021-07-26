import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme, {
  GlobalStyle,
  Fonts,
} from '@play-to-learn/components.theme.palette';

import UserInfo, { UserInfoProps } from './';

export default {
  title: 'ui/UserInfo',
  component: UserInfo,
} as Meta;

const Template: Story<UserInfoProps> = (args) => (
  <ThemeProvider theme={theme.dark}>
    <Fonts />
    <GlobalStyle />
    <UserInfo {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  image: 'https://via.placeholder.com/150',
  placeholder: 'AU',
  name: 'Anonymous User',
  healthTotal: 200,
  healthActual: 120,
  staminaTotal: 100,
  staminaActual: 89,
};

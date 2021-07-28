import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme, {
  GlobalStyle,
  Fonts,
} from '@play-to-learn/components.theme.palette';

import UsersList, { UsersListProps } from './';
import { users } from './mocks';

export default {
  title: 'ui/UsersList',
  component: UsersList,
} as Meta;

const Template: Story<UsersListProps> = (args) => (
  <ThemeProvider theme={theme.dark}>
    <Fonts />
    <GlobalStyle />
    <UsersList {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  data: users,
};

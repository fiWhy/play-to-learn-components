import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '@play-to-learn/components.theme.palette';

import Avatar, { AvatarProps } from '.';

export default {
  title: 'ui/Avatar',
  component: Avatar,
} as Meta;

const Template: Story = (args: AvatarProps) => (
  <ThemeProvider theme={theme.dark}>
    <Avatar {...args} />;
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  'data-elementId': 'avatar-component',
};

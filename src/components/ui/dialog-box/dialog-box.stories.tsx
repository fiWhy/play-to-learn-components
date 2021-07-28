import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme, {
  GlobalStyle,
  Fonts,
} from '@play-to-learn/components.theme.palette';

import DialogBox, { DialogBoxProps } from './';

export default {
  title: 'ui/DialogBox',
  component: DialogBox,
} as Meta;

const Template: Story<DialogBoxProps> = (args) => (
  <ThemeProvider theme={theme.dark}>
    <Fonts />
    <GlobalStyle />
    <DialogBox {...args}>Hello from DialogBox</DialogBox>
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {};

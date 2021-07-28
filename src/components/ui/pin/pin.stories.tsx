import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme, {
  GlobalStyle,
  Fonts,
} from '@play-to-learn/components.theme.palette';
import Text from '@play-to-learn/components.ui.text';

import Pin, { PinProps } from './';

export default {
  title: 'ui/Pin',
  component: Pin,
} as Meta;

const Template: Story<PinProps> = (args) => (
  <ThemeProvider theme={theme.dark}>
    <Fonts />
    <GlobalStyle />
    <Pin {...args}>
      <Text type={'Body-Default'}>Hello there!</Text>
    </Pin>
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {};

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme, {
  GlobalStyle,
  Fonts,
} from '@play-to-learn/components.theme.palette';
import FlexBox from '@play-to-learn/components.ui.flex-box';

import Main, { MainProps } from './';

export default {
  title: 'ui/card/Main',
  component: Main,
} as Meta;

const Template: Story<MainProps> = (args) => (
  <ThemeProvider theme={theme.dark}>
    <Fonts />
    <GlobalStyle />
    <Main {...args} />
  </ThemeProvider>
);

export const Horizontal = Template.bind({});

Horizontal.args = {
  fallbackColor: '#2846B1',
  position: 'x',
  size: 'l',
};

const VerticalTemplate: Story<MainProps> = (args) => (
  <ThemeProvider theme={theme.dark}>
    <Fonts />
    <GlobalStyle />
    <FlexBox direction={'row'}>
      <Main position={'vertical'} size={'l'} fallbackColor={'#2757FF'} />
      <Main position={'vertical'} size={'m'} fallbackColor={'#2846B1'} />
      <Main
        position={'vertical'}
        size={'s'}
        fallbackColor={'#535B70'}
        image={'https://via.placeholder.com/150'}
      />
    </FlexBox>
  </ThemeProvider>
);

export const Vertical = VerticalTemplate.bind({});

Vertical.args = {};

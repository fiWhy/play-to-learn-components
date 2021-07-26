import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme, { GlobalStyle } from '@play-to-learn/components.theme.palette';

import FlexBox, { FlexBoxProps } from '.';

export default {
  title: 'ui/FlexBox',
  component: FlexBox,
} as Meta;

const Template: Story<FlexBoxProps> = (args) => (
  <ThemeProvider theme={theme.dark}>
    <GlobalStyle />
    <FlexBox {...args} direction={'column'}>
      <FlexBox direction={'row'} colSpace={`15pt`}>
        <FlexBox>Hello</FlexBox>
        <FlexBox>From</FlexBox>
        <FlexBox>Flex</FlexBox>
      </FlexBox>
      <FlexBox direction={'column'}>
        <FlexBox>And</FlexBox>
        <FlexBox>Again</FlexBox>
      </FlexBox>
    </FlexBox>
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {};

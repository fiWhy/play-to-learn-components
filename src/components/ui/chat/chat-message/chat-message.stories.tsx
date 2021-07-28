import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme, {
  GlobalStyle,
  Fonts,
} from '@play-to-learn/components.theme.palette';
import Character from '@play-to-learn/components.ui.character';

import ChatMessage, { ChatMessageProps } from './';

export default {
  title: 'ui/chat/ChatMessage',
  component: ChatMessage,
} as Meta;

const Template: Story<ChatMessageProps> = (args) => (
  <ThemeProvider theme={theme.dark}>
    <Fonts />
    <GlobalStyle />
    <ChatMessage {...args}>
      Hello from ChatMessage Hello from ChatMessage Hello from ChatMessage
    </ChatMessage>
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  from: () => <Character type={'robot'} size={50} />,
  date: new Date(),
  position: 'right',
};

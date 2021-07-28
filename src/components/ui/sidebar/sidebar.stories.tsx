import React, { FC } from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme, {
  GlobalStyle,
  Fonts,
} from '@play-to-learn/components.theme.palette';
import ChatMessage from '@play-to-learn/components.ui.chat.chat-message';
import FlexBox from '@play-to-learn/components.ui.flex-box';
import Pin from '@play-to-learn/components.ui.pin';
import Character from '@play-to-learn/components.ui.character';
import Button from '@play-to-learn/components.ui.button';
import Icon from '@play-to-learn/components.ui.icon';

import Sidebar, { SidebarProps } from '.';
import { HeaderComponent } from './mocks';

export default {
  title: 'ui/Sidebar',
  component: Sidebar,
} as Meta;

const Template: Story<SidebarProps> = (args) => (
  <ThemeProvider theme={theme.dark}>
    <Fonts />
    <GlobalStyle />
    <Sidebar {...args} header={() => <HeaderComponent />}>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
      amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
      minima veniam, quis nostrum exercitationem ullam corporis suscipit
      laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
      iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
      consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
      amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
      minima veniam, quis nostrum exercitationem ullam corporis suscipit
      laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
      iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
      consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
      amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
      minima veniam, quis nostrum exercitationem ullam corporis suscipit
      laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
      iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
      consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
      amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
      minima veniam, quis nostrum exercitationem ullam corporis suscipit
      laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
      iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
      consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </Sidebar>
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {};

const ChatTemplate: Story<SidebarProps> = (args) => (
  <ThemeProvider theme={theme.dark}>
    <Fonts />
    <GlobalStyle />
    <Sidebar {...args} header={() => <HeaderComponent />}>
      <FlexBox
        style={{
          marginBottom: '20px',
        }}
        flex={1}
        align={'center'}
      >
        <Pin>Сегодня</Pin>
      </FlexBox>
      <FlexBox direction={'column'} rowSpace={20} flex={1}>
        <ChatMessage
          from={() => <Character type={'robot'} size={50} />}
          date={new Date()}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
          facilisis commodo, vulputate quam sit lacus, risus.{' '}
        </ChatMessage>
        <ChatMessage
          from={() => <Character type={'robot'} size={50} />}
          date={new Date()}
          position={'right'}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
          facilisis commodo, vulputate quam sit lacus, risus.{' '}
        </ChatMessage>
      </FlexBox>
      <Button
        style={{
          position: 'fixed',
          bottom: '60px',
          right: '47px',
        }}
        tip={2}
        btnType={'circle'}
      >
        <Icon size={30} name={'RiArrowDownSLine'} />
      </Button>
    </Sidebar>
  </ThemeProvider>
);

export const Chat = ChatTemplate.bind({});

Chat.args = {};

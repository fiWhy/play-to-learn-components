import React from 'react';
import Avatar from './avatar';
import { ThemeProvider } from 'styled-components';
import theme from '@play-to-learn/components.theme.palette';

export const BasicAvatar = () => (
  <ThemeProvider theme={theme.dark}>
    <Avatar>hello from Avatar</Avatar>
  </ThemeProvider>
);

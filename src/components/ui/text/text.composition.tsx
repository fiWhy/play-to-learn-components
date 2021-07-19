import React from 'react';
import Text from './text';
import { ThemeProvider } from 'styled-components';
import theme from '@play-to-learn/components.theme.palette';

export const BasicText = () => (
  <ThemeProvider theme={theme.dark}>
    <Text>hello from Text</Text>
  </ThemeProvider>
);

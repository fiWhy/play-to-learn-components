import React from 'react';
import Button from './button';
import { ThemeProvider } from 'styled-components';
import theme from '@play-to-learn/components.theme.palette';

export const BasicButton = () => (
  <ThemeProvider theme={theme.dark}>
    <Button>hello from Button</Button>
  </ThemeProvider>
);

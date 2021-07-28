import theme, {
  Fonts,
  GlobalStyle,
} from '@play-to-learn/components.theme.palette';
import Icon from '@play-to-learn/components.ui.icon';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Inventory, { InventoryProps } from './';

export default {
  title: 'ui/Inventory',
  component: Inventory,
} as Meta;

const Template: Story<InventoryProps> = (args) => (
  <ThemeProvider theme={theme.dark}>
    <GlobalStyle />
    <Fonts />
    <Inventory {...args}>Hello from Inventory</Inventory>
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  perPage: 10,
  items: [
    ...Array(15)
      .fill(1)
      .map(() => ({
        description: 'Test',
        view: () => <Icon secondary name={'RiPinterestFill'} />,
      })),
  ],
};

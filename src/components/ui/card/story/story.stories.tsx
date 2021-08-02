import theme, {
  Fonts,
  GlobalStyle,
} from '@play-to-learn/components.theme.palette';
import { Meta, Story as StoryBookStory } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import AdventureStory, { StoryProps } from './';
import { Footer } from './mocks';

export default {
  title: 'ui/card/Story',
  component: AdventureStory,
} as Meta;

const Template: StoryBookStory<StoryProps> = (args) => (
  <ThemeProvider theme={theme.dark}>
    <Fonts />
    <GlobalStyle />
    <AdventureStory {...args}>Hello from Story</AdventureStory>
  </ThemeProvider>
);

export const Adventure = Template.bind({});

Adventure.args = {
  title: 'Example adventure',
  type: 'adventure',
  fallbackColor: '#2846B1',
};

export const Story = Template.bind({});

Story.args = {
  title: 'Example story',
  type: 'story',
  fallbackColor: '#4E4E4E',
  footer: () => <Footer />,
};

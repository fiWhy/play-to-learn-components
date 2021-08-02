import React from 'react';
import { Footer } from './mocks';

import { Adventure, Story } from './story.stories';

export const StoryDefault = () => (
  <Story
    title={'Пример истории'}
    type={'adventure'}
    fallbackColor={'#2846B1'}
    footer={() => <Footer />}
  />
);
export const AdventureDefault = () => (
  <Adventure
    title={'Пример приключения'}
    type={'adventure'}
    fallbackColor={'#2846B1'}
  />
);

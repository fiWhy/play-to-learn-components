import React from 'react';

import { Vertical, Horizontal } from './main.stories';

export const VerticalDefault = () => (
  <Vertical
    size={'s'}
    fallbackColor={'#535B70'}
    image={'https://via.placeholder.com/150'}
  />
);

export const HorizontalDefault = () => (
  <Horizontal size={'s'} fallbackColor={'#535B70'} />
);

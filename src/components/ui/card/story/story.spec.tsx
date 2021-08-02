import React from 'react';
import { render } from '@testing-library/react';

import { StoryDefault, AdventureDefault } from './story.composition';

it('story should be rendered', () => {
  const { getByTestId } = render(<StoryDefault />);
  const rendered = getByTestId('story-component-1');
  expect(rendered).toBeTruthy();
});

it('adventure should be rendered', () => {
  const { getByTestId } = render(<AdventureDefault />);
  const rendered = getByTestId('story-component-1');
  expect(rendered).toBeTruthy();
});

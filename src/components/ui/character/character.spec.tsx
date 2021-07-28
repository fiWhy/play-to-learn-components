import React from 'react';
import { render } from '@testing-library/react';

import { CharacterDefault } from './character.composition';

it('should be rendered', () => {
  const { getByTestId } = render(<CharacterDefault />);
  const rendered = getByTestId('character-component-1');
  expect(rendered).toBeTruthy();
});

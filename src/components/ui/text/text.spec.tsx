import React from 'react';
import { render } from '@testing-library/react';

import { TextDefault } from './text.composition';

it('should render with the correct text', () => {
  const { getByTestId } = render(<TextDefault />);
  const rendered = getByTestId('text-component-1');
  expect(rendered).toBeTruthy();
});

import React from 'react';
import { render } from '@testing-library/react';

import { IconDefault } from './icon.composition';

it('should be rendered', () => {
  const { getByTestId } = render(<IconDefault />);
  const rendered = getByTestId('icon-component-1');
  expect(rendered).toBeTruthy();
});

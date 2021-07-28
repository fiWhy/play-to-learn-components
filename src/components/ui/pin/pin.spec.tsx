import React from 'react';
import { render } from '@testing-library/react';

import { PinDefault } from './pin.composition';

it('should be rendered', () => {
  const { getByTestId } = render(<PinDefault />);
  const rendered = getByTestId('pin-component-1');
  expect(rendered).toBeTruthy();
});

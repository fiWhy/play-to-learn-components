import React from 'react';
import { render } from '@testing-library/react';

import { InventoryDefault } from './inventory.composition';

it('should render with the correct text', () => {
  const { getByTestId } = render(<InventoryDefault />);
  const rendered = getByTestId('inventory-component-1');
  expect(rendered).toBeTruthy();
});

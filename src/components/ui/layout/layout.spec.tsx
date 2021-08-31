import React from 'react';
import { render } from '@testing-library/react';

import { LayoutDefault } from './layout.composition';

it('should be rendered', () => {
  const { getByTestId } = render(<LayoutDefault />);
  const rendered = getByTestId('layout-component-1');
  expect(rendered).toBeTruthy();
});

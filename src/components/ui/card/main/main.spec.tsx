import React from 'react';
import { render } from '@testing-library/react';

import { VerticalDefault, HorizontalDefault } from './main.composition';

it('vertical should be rendered', () => {
  const { getByTestId } = render(<VerticalDefault />);
  const rendered = getByTestId('main-component-1');
  expect(rendered).toBeTruthy();
});

it('horizontal should be rendered', () => {
  const { getByTestId } = render(<HorizontalDefault />);
  const rendered = getByTestId('main-component-1');
  expect(rendered).toBeTruthy();
});

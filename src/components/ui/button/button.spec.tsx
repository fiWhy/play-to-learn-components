import React from 'react';
import { render } from '@testing-library/react';

import { ButtonDefault, ButtonCircleWithTip } from './button.composition';

it('should render with the correct text', () => {
  const { getByTestId } = render(<ButtonDefault />);
  const rendered = getByTestId('button-component-1');
  expect(rendered).toBeTruthy();
});

it('should render tip with content', () => {
  const { getByTestId } = render(<ButtonCircleWithTip />);
  const rendered = getByTestId('text-component-1');
  expect(rendered).toBeTruthy();
});

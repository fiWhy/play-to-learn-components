import React from 'react';
import { render } from '@testing-library/react';

import { ButtonDefault } from './button.composition';

it('should render with the correct text', () => {
  const { getByTestId } = render(<ButtonDefault />);
  const rendered = getByTestId('button-component-1');
  expect(rendered).toBeTruthy();
});

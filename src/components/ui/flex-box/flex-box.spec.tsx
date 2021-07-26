import React from 'react';
import { render } from '@testing-library/react';

import { FlexDefault } from './flex-box.composition';

it('should render with the correct text', () => {
  const { getByTestId } = render(<FlexDefault />);
  const rendered = getByTestId('flex-box-component-1');
  expect(rendered).toBeTruthy();
});

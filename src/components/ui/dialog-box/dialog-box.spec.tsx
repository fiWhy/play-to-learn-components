import React from 'react';
import { render } from '@testing-library/react';

import { DialogBoxDefault } from './dialog-box.composition';

it('should be rendered', () => {
  const { getByTestId } = render(<DialogBoxDefault />);
  const rendered = getByTestId('dialog-box-component-1');
  expect(rendered).toBeTruthy();
});

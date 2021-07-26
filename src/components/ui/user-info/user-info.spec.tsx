import React from 'react';
import { render } from '@testing-library/react';

import { UserInfoDefault } from './user-info.composition';

it('should be rendered', () => {
  const { getByTestId } = render(<UserInfoDefault />);
  const rendered = getByTestId('user-info-component-1');
  expect(rendered).toBeTruthy();
});

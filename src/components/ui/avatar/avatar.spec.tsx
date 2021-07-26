import React from 'react';
import { render } from '@testing-library/react';

import { AvatarDefault } from './avatar.composition';

it('should render with the correct text', () => {
  const { getByTestId } = render(<AvatarDefault />);
  const rendered = getByTestId('avatar-component-1');
  expect(rendered).toBeTruthy();
});

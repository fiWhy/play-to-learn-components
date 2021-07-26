import React from 'react';
import { render } from '@testing-library/react';

import { AvatarDefault, AvatarWithPlaceholder } from './avatar.composition';

it('should be rendered', () => {
  const { getByTestId } = render(<AvatarDefault />);
  const rendered = getByTestId('avatar-component-1');
  expect(rendered).toBeTruthy();
});

it('should render text if no image source', () => {
  const { getByTestId } = render(<AvatarWithPlaceholder />);
  const rendered = getByTestId('text-component-1');
  expect(rendered).toBeTruthy();
});

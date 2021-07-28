import React from 'react';
import { render } from '@testing-library/react';

import { UsersListDefault } from './users-list.composition';

it('should be rendered', () => {
  const { getByTestId } = render(<UsersListDefault />);
  const rendered = getByTestId('users-list-component-1');
  expect(rendered).toBeTruthy();
});

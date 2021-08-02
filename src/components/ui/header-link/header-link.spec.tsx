import React from 'react';
import { render } from '@testing-library/react';

import { HeaderLinkDefault } from './header-link.composition';

it('should be rendered', () => {
  const { getByTestId } = render(<HeaderLinkDefault />);
  const rendered = getByTestId('header-link-component-1');
  expect(rendered).toBeTruthy();
});

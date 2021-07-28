import React from 'react';
import { render } from '@testing-library/react';

import { SidebarDefault } from './sidebar.composition';

it('should be rendered', () => {
  const { getByTestId } = render(<SidebarDefault />);
  const rendered = getByTestId('sidebar-component-1');
  expect(rendered).toBeTruthy();
});

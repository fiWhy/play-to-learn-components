import React from 'react';
import { render } from '@testing-library/react';

import { ProgressBarDefault } from './progress-bar.composition';

it('should be rendered', () => {
  const { getByTestId } = render(<ProgressBarDefault />);
  const rendered = getByTestId('progress-bar-component-1');
  expect(rendered).toBeTruthy();
});

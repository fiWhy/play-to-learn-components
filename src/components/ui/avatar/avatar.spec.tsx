import React from 'react';
import { render } from '@testing-library/react';
import { BasicAvatar } from './avatar.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAvatar />);
  const rendered = getByText('hello from Avatar');
  expect(rendered).toBeTruthy();
});

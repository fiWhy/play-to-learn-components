import React from 'react';
import { render } from '@testing-library/react';

import { ChatMessageDefault } from './chat-message.composition';

it('should be rendered', () => {
  const { getByTestId } = render(<ChatMessageDefault />);
  const rendered = getByTestId('chat-message-component-1');
  expect(rendered).toBeTruthy();
});

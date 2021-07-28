import React, { FC, useMemo } from 'react';
import { render } from '@testing-library/react';

import { renderConditionalElement } from '.';

const TestComponent: FC = () => {
  return renderConditionalElement(() => (
    <div data-testid="test-component">Hello world</div>
  ));
};

it('should be rendered', () => {
  const { getByTestId } = render(<TestComponent />);
  const rendered = getByTestId('test-component');
  expect(rendered).toBeTruthy();
});

import React from 'react';
import { render } from '@testing-library/react';
import { automationEnchancement } from './automation-enchancement';

it('should render with the correct text', () => {
  const ComponentExample = () => <div>hello from automationEnchancement</div>;
  const ComponentWithHOC = automationEnchancement(ComponentExample);
  const { getByText } = render(<ComponentWithHOC />);
  const rendered = getByText('hello from automationEnchancement');
  expect(rendered).toBeTruthy();
});

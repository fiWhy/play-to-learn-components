import React from 'react';
import { render } from '@testing-library/react';
import { automationEnchancement } from './automation-enchancement';

it('should render with the correct text', () => {
  const ComponentExample = () => <div>hello from automationEnchancement</div>;
  const ComponentWithHOC = automationEnchancement(ComponentExample, 'test');
  const { getByText } = render(<ComponentWithHOC />);
  const rendered = getByText('hello from automationEnchancement');
  expect(rendered).toBeTruthy();
});

it('should render with the correct class name and id', () => {
  const ComponentExample = ({ className, elementId }: any) => (
    <div className={className} id={elementId}>
      test
    </div>
  );
  const ComponentWithHOC = automationEnchancement(ComponentExample, 'test');
  const { getByText } = render(<ComponentWithHOC />);
  const rendered = getByText('test');
  expect(rendered.id).toBe('test-component-1');
  expect(rendered.className).toBe('test-component');
});

import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { render, fireEvent } from '@testing-library/react';

import { useClickOutside } from './use-click-outside';

it('show use handler on click outside target element', () => {
  const { container: target } = render(<div>Inside</div>);

  const map: any = {};

  document.addEventListener = jest.fn((event: string, cb: any) => {
    map[event] = cb;
  });

  const clickHandler = jest.fn();

  renderHook(() =>
    useClickOutside(
      {
        current: target,
      },
      clickHandler
    )
  );

  act(() => {
    const eventMock = {
      target: document,
    };

    map.click(eventMock);
  });

  expect(clickHandler).toHaveBeenCalledTimes(1);
});

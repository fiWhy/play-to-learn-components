import { useEffect, useRef, useCallback } from 'react';
import { ClickOutsideHook, EventHandler } from './interfaces';

export const useClickOutside: ClickOutsideHook = (ref, handler) => {
  const handlerRef = useRef<EventHandler>();

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  const handleEvent = useCallback((e: Event) => {
    if (handlerRef.current) {
      handlerRef.current(e);
    }
  }, []);

  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handleEvent(event);
    };
    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    };
  }, [ref, handleEvent]);
};

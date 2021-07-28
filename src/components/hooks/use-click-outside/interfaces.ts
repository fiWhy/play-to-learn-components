import { RefObject } from 'react';

export type EventHandler = (e: Event) => void;

export type ClickOutsideHook = (
  ref: RefObject<HTMLElement>,
  handler: EventHandler,
  ignore?: RefObject<HTMLElement>[]
) => void;

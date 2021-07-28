import { first, last } from 'lodash';

export type Maybe<T> = T | null;

export type Optional<T> = T | Maybe<T>;

export type RenderableProp = Maybe<(() => Maybe<JSX.Element>) | string>;

export type ConditionalElement<T = any> =
  | React.ReactNode
  | ((props?: T) => React.ReactNode);

export const renderConditionalElement = <T>(
  element: ConditionalElement<T>,
  props?: T
) => (typeof element === 'function' ? element(props) : element);

export const appendRenderableProp = (prop: RenderableProp) =>
  typeof prop === 'function' ? prop() : prop;

export const renderIf =
  (predicate: any) => (element: ConditionalElement<any>) =>
    predicate === undefined || predicate === null || predicate === false
      ? null
      : renderConditionalElement(element);

export const longTextToShort = (text: string) => {
  const textArray = text.split(' ');
  if (textArray.length > 2) {
    return `${first(textArray)} ... ${last(textArray)}`;
  }

  return textArray.join(' ');
};

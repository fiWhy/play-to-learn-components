import { entries, map, max } from 'lodash';

export type ComponentRelatedOptions = {
  id: number;
};

export type SavedMapComponentInfo = [symbol, ComponentRelatedOptions];

export const componentsOfType = new Map<
  string,
  Map<symbol, ComponentRelatedOptions>
>();

export const getNextComponentId = (type: string) => {
  const ids = map(entries(componentsOfType.get(type)), (el) => el[1].id);
  const lastId = (max(ids) || 0) + 1;
  return lastId;
};

export const addComponent = (type: string, ref: symbol) => {
  componentsOfType.set(
    type,
    componentsOfType.has(type)
      ? (componentsOfType.get(type) as Map<
          symbol,
          ComponentRelatedOptions
        >)?.set(ref, {
          id: getNextComponentId(type),
        })
      : new Map([
          [
            ref,
            {
              id: 1,
            },
          ],
        ])
  );
};

export const removeComponent = (type: string, ref: symbol) => {
  componentsOfType.get(type)?.delete(ref);
};

export const getCurrentComponentId = (type: string, ref: symbol) => {
  return componentsOfType.has(type)
    ? componentsOfType.get(type)?.get(ref)?.id || 1
    : 1;
};

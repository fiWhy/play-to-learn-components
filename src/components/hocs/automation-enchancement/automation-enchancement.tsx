import React, { useState, useMemo, useEffect } from 'react';
import { AutomationEnchancementProps } from './interfaces';
import { addComponent, getCurrentComponentId, removeComponent } from './utils';
import classNames from 'classnames';

export const automationEnchancement = <P extends AutomationEnchancementProps>(
  Component: React.ComponentType<P>,
  namespace?: string,
  defaultId?: string
) => {
  const displayName = Component.displayName || Component.name || 'Component';

  const WrappedComponent = (props: P) => {
    const { className, specialName, elementId, innerRef, ...otherProps } =
      props;

    const [generatedId, setGeneratedId] = useState<number>();

    const type = useMemo(
      () =>
        namespace ||
        specialName ||
        (Component?.displayName as string) ||
        (Component as any)?.type?.displayName,
      [specialName]
    );

    useEffect(() => {
      const ref = Symbol();
      addComponent(type, ref);
      setGeneratedId(getCurrentComponentId(type, ref));
      return () => {
        removeComponent(type, ref);
      };
    }, [type]);

    const enchancedClassName = useMemo(() => `${type}-component`, [type]);

    return (
      <Component
        {...(otherProps as P)}
        ref={innerRef}
        elementId={
          !elementId && !defaultId
            ? `${enchancedClassName}-${generatedId}`
            : elementId || defaultId
        }
        className={classNames(enchancedClassName, className)}
      />
    );
  };

  WrappedComponent.displayName = `automationEnchancement(${displayName})`;
  return WrappedComponent;
};

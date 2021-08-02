import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';
import cn from 'classnames';
import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { MainProps } from './interfaces';
import { MainWrapperStyled } from './styles';

const Main: ForwardRefRenderFunction<HTMLDivElement, MainProps> = (
  {
    children,
    className,
    elementId,
    fallbackColor,
    image,
    size,
    position = 'vertical',
    ...props
  },
  ref
) => {
  return (
    <MainWrapperStyled
      {...props}
      innerRef={ref}
      elementId={elementId}
      className={cn(className, {
        [position]: true,
        [size]: true,
      })}
      image={image}
      fallbackColor={fallbackColor}
    >
      {children}
    </MainWrapperStyled>
  );
};

export default automationEnchancement<MainProps>(forwardRef(Main), 'main');

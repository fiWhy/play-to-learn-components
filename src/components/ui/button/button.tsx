import React, { FC, forwardRef, ForwardRefExoticComponent } from 'react';
import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';

import { ButtonProps } from './interfaces';
import { ButtonWrapperStyled } from './styles';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, elementId, className }, ref) => {
    return (
      <ButtonWrapperStyled
        data-testid={elementId}
        ref={ref}
        className={className}
      >
        {children}
      </ButtonWrapperStyled>
    );
  }
);

export default automationEnchancement(Button, 'button');

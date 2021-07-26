import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';
import React, { forwardRef } from 'react';
import { FlexBoxProps } from './interfaces';
import { FlexBoxWrapperStyled } from './styles';

const FlexBox = forwardRef<HTMLDivElement, FlexBoxProps>(
  ({ children, className, elementId, ...flexElementProps }, ref) => {
    return (
      <FlexBoxWrapperStyled
        ref={ref}
        data-testid={elementId}
        className={className}
        {...flexElementProps}
      >
        {children}
      </FlexBoxWrapperStyled>
    );
  }
);

export default automationEnchancement(FlexBox, 'flex-box');

import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';
import Text from '@play-to-learn/components.ui.text';
import React, { forwardRef } from 'react';
import { ButtonProps } from './interfaces';
import {
  ButtonContentStyled,
  ButtonTipStyled,
  ButtonWrapperStyled,
} from './styles';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, elementId, btnType, tip, ...other }, ref) => {
    return (
      <ButtonWrapperStyled
        {...other}
        data-testid={elementId}
        btnType={btnType}
        ref={ref}
      >
        {tip && (
          <ButtonTipStyled>
            <Text type={'Body-Small'} secondary>
              {tip}
            </Text>
          </ButtonTipStyled>
        )}
        <ButtonContentStyled>{children}</ButtonContentStyled>
      </ButtonWrapperStyled>
    );
  }
);

export default automationEnchancement<ButtonProps>(Button, 'button');

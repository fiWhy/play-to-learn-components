import React, { FC } from 'react';
import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';

import { ButtonProps } from './interfaces';
import { ButtonWrapper } from './styles';

const Button: FC<ButtonProps> = ({ children, elementId, className }) => {
  return (
    <ButtonWrapper id={elementId} className={className}>
      {children}
    </ButtonWrapper>
  );
};

export default automationEnchancement(Button, 'button');

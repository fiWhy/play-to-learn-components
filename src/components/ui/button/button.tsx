import React, { FC } from 'react';
import { ButtonProps } from './interfaces';
import { ButtonWrapper } from './styles';

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <ButtonWrapper>
      {children}
    </ButtonWrapper>
  );
}

export default Button;
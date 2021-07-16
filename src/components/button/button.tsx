import React, { FC } from 'react';
import { ButtonProps } from './interfaces';

export const Button: FC<ButtonProps> = ({ children }) => {
  return <div>{children}</div>;
};

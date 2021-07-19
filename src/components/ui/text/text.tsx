import React, { FC } from 'react';
import { TextProps } from './interfaces';
import { TextWrapper } from './styles';

const Text: FC<TextProps> = ({ children }) => {
  return (
    <TextWrapper>
      {children}
    </TextWrapper>
  );
}

export default Text;
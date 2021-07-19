import React, { FC } from 'react';
import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';

import { TextProps } from './interfaces';
import { TextWrapper } from './styles';

const Text: FC<TextProps> = ({ children, elementId, className }) => {
  return (
    <TextWrapper id={elementId} className={className}>
      {children}
    </TextWrapper>
  );
};

export default automationEnchancement(Text, 'text');

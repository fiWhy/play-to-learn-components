import React, { FC } from 'react';
import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';

import { PinProps } from './interfaces';
import { PinWrapperStyled } from './styles';

const Pin: FC<PinProps> = ({ children, className, elementId }) => {
  return (
    <PinWrapperStyled elementId={elementId} className={className}>
      {children}
    </PinWrapperStyled>
  );
};

export default automationEnchancement<PinProps>(Pin, 'pin');

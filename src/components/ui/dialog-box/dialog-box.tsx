import React, { FC } from 'react';
import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';

import { DialogBoxProps } from './interfaces';
import { DialogBoxWrapperStyled } from './styles';

const DialogBox: FC<DialogBoxProps> = ({ children, className, elementId }) => {
  return (
    <DialogBoxWrapperStyled elementId={elementId} className={className}>
      {children}
    </DialogBoxWrapperStyled>
  );
};

export default automationEnchancement<DialogBoxProps>(DialogBox, 'dialog-box');

import React, { FC } from 'react';
import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';

import { AvatarProps } from './interfaces';
import { AvatarWrapperStyled } from './styles';

const Avatar: FC<AvatarProps> = ({ children, className, elementId }) => {
  return (
    <AvatarWrapperStyled data-testid={elementId} className={className}>
      {children}
    </AvatarWrapperStyled>
  );
};

export default automationEnchancement(Avatar, 'avatar');

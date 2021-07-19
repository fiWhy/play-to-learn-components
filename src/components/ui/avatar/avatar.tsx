import React, { FC } from 'react';
import { AvatarProps } from './interfaces';
import { AvatarWrapper } from './styles';
import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';

const Avatar: FC<AvatarProps> = ({ children, className, elementId }) => {
  return (
    <AvatarWrapper id={elementId} className={className}>
      {children}
    </AvatarWrapper>
  );
};

export default automationEnchancement(Avatar, 'avatar');

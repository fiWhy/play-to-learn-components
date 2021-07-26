import React, { FC } from 'react';
import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';

import { IconProps } from './interfaces';
import { iconsList } from './constants';
import { IconWrapperStyled } from './styles';

const Icon: FC<IconProps> = ({
  className,
  elementId,
  name,
  secondary,
  ...other
}) => {
  const IconComponent = (iconsList as any)[name];
  return (
    <IconWrapperStyled
      secondary={secondary}
      size={other.size}
      data-testid={elementId}
      className={className}
    >
      <IconComponent {...other} />
    </IconWrapperStyled>
  );
};

export default automationEnchancement<IconProps>(Icon, 'icon');

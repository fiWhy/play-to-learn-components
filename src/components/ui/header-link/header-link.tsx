import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';
import React, { FC } from 'react';
import Text from '@play-to-learn/components.ui.text';

import { HeaderLinkProps } from './interfaces';
import { HeaderLinkWrapperStyled, IconStyled } from './styles';

const HeaderLink: FC<HeaderLinkProps> = ({
  children,
  className,
  elementId,
  icon,
  ...linkProps
}) => {
  return (
    <HeaderLinkWrapperStyled
      {...linkProps}
      data-testid={elementId}
      className={className}
      activeClassName={'active'}
    >
      <IconStyled size={22} name={icon} />
      <Text className={'montserrat'} type={'Body-Default'}>
        {children}
      </Text>
    </HeaderLinkWrapperStyled>
  );
};

export default automationEnchancement<HeaderLinkProps>(
  HeaderLink,
  'header-link'
);

import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';
import Text from '@play-to-learn/components.ui.text';

import React, { forwardRef, ForwardRefRenderFunction } from 'react';

import { AvatarProps } from './interfaces';
import {
  AvatarWrapperStyled,
  AvatarImagePlaceholderStyled,
  AvatarImageStyled,
} from './styles';

const Avatar: ForwardRefRenderFunction<HTMLDivElement, AvatarProps> = (
  { children, elementId, src, alt, type = 'big', placeholder, ...other },
  ref
) => {
  return (
    <AvatarWrapperStyled
      {...other}
      type={type}
      innerRef={ref}
      data-testid={elementId}
    >
      {src ? (
        <AvatarImageStyled src={src} alt={alt} />
      ) : (
        <AvatarImagePlaceholderStyled
          flexType={'inline-flex'}
          justify={'center'}
          align={'center'}
        >
          <Text secondary type={'Heading-2'}>
            {placeholder}
          </Text>
        </AvatarImagePlaceholderStyled>
      )}
      {children}
    </AvatarWrapperStyled>
  );
};

export default automationEnchancement<AvatarProps>(
  forwardRef(Avatar),
  'avatar'
);

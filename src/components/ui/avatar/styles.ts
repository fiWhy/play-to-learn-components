import { styled, css } from '@play-to-learn/components.theme.palette';
import FlexBox from '@play-to-learn/components.ui.flex-box';

import { AvatarType } from './interfaces';

export const AvatarImagePlaceholderStyled = styled(FlexBox)<{
  color?: string;
}>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.secondary.blue03};
`;

export const AvatarImageStyled = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 50%;
`;

export const AvatarWrapperStyled = styled(FlexBox)<{
  type: AvatarType;
}>`
  border-radius: 50%;

  ${({ type }) => {
    switch (type) {
      case 'big':
        return css`
          width: 60px;
          height: 60px;
        `;
      case 'middle':
        return css`
          width: 40px;
          height: 40px;
        `;
      case 'small':
        return css`
          width: 30px;
          height: 30px;
        `;
    }
  }}
`;

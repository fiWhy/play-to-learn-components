import { styled } from '@play-to-learn/components.theme.palette';
import FlexBox from '@play-to-learn/components.ui.flex-box';
import DialogBox from '@play-to-learn/components.ui.dialog-box';

export const DateWrapperStyled = styled(FlexBox)`
  width: 100%;
`;

export const MessageWrapperStyled = styled(FlexBox)``;

export const InfoWrapperStyled = styled(FlexBox)`
  order: 2;
`;
export const DialogBoxWrapperStyled = styled(DialogBox)`
  flex: 1;
`;

export const AvatarWrapperStyled = styled(FlexBox)``;

export const ChatMessageWrapperStyled = styled(FlexBox)`
  &.left {
    ${AvatarWrapperStyled} {
      order: 1;
      margin-right: 17px;
    }
  }

  &.right {
    ${AvatarWrapperStyled} {
      order: 3;
      margin-left: 17px;
    }
  }
`;

import { styled } from '@play-to-learn/components.theme.palette';
import FlexBox from '@play-to-learn/components.ui.flex-box';
import DialogBox from '@play-to-learn/components.ui.dialog-box';

export const DateWrapperStyled = styled(FlexBox)`
  padding-bottom: 10px;
`;

export const MessageWrapperStyled = styled(FlexBox)``;

export const InfoWrapperStyled = styled(FlexBox)`
  order: 2;
  flex: 1;
  & > div {
    width: 100%;
  }
`;
export const DialogBoxWrapperStyled = styled(DialogBox)`
  flex: 1;
`;

export const AvatarWrapperStyled = styled(FlexBox)`
  margin-top: 30px;
`;

export const ChatMessageWrapperStyled = styled(FlexBox)`
  width: 100%;
  &.left {
    ${AvatarWrapperStyled} {
      order: 1;
      margin-right: 17px;
    }

    ${DateWrapperStyled} {
      align-items: flex-start;
      p {
        padding-left: 10px;
      }
    }
  }

  &.right {
    ${AvatarWrapperStyled} {
      order: 3;
      margin-left: 17px;
    }

    ${DateWrapperStyled} {
      align-items: flex-end;
      p {
        padding-right: 10px;
      }
    }
  }
`;

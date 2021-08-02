import { styled } from '@play-to-learn/components.theme.palette';
import FlexBox from '@play-to-learn/components.ui.flex-box';

export const DialogBoxPaddingStyled = styled.div`
  padding: 20px 30px;
  width: auto;
  max-width: 100%;
  height: 100%;
`;

export const DialogBoxOverflowStyled = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const DialogBoxWrapperStyled = styled(FlexBox)`
  position: relative;
  background: ${({ theme }) => theme.gradient.dialogBox};
  border-radius: ${({ theme }) => theme.radius.dialogBox};
  color: ${({ theme }) => theme.color.secondary.white};
`;

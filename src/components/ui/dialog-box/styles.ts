import { styled } from '@play-to-learn/components.theme.palette';
import FlexBox from '@play-to-learn/components.ui.flex-box';

export const DialogBoxWrapperStyled = styled(FlexBox)`
  position: relative;
  background: ${({ theme }) => theme.gradient.dialogBox};
  padding: 20px 30px;
  border-radius: ${({ theme }) => theme.radius.dialogBox};
  color: ${({ theme }) => theme.color.secondary.white};
`;

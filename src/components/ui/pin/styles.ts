import { styled } from '@play-to-learn/components.theme.palette';
import FlexBox from '@play-to-learn/components.ui.flex-box';

export const PinWrapperStyled = styled(FlexBox)`
  background-color: ${({ theme }) => theme.color.secondary.dark04};
  padding: 6px 24px;
  border-radius: ${({ theme }) => theme.radius.sidebar};
  display: inline-flex;
  color: ${({ theme }) => theme.color.secondary.white};
`;

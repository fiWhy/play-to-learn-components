import { styled } from '@play-to-learn/components.theme.palette';
import FlexBox from '@play-to-learn/components.ui.flex-box';

export const ProgressBarStatusStyled = styled(FlexBox)`
  border-radius: ${({ theme }) => theme.radius.cell};
  height: 5px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ProgressBarWrapperStyled = styled(FlexBox)`
  position: relative;
  background: ${({ theme }) => theme.color.secondary.grey03};
  border-radius: ${({ theme }) => theme.radius.cell};
  height: 5px;
`;

import { styled, css } from '@play-to-learn/components.theme.palette';

export const IconWrapperStyled = styled.div<{
  size?: string | number;
  secondary?: boolean;
}>`
  display: inline-flex;
  ${({ size }) =>
    size &&
    css`
      width: ${typeof size === 'string' ? size : `${size}px`};
      height: ${typeof size === 'string' ? size : `${size}px`};
    `}

  ${({ secondary, theme }) =>
    secondary &&
    css`
      color: ${theme.color.secondary.white};
    `}
`;

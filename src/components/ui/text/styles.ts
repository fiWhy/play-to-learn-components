import { styled, css } from '@play-to-learn/components.theme.palette';

import { TextStyleProps } from './interfaces';

export const styles = css<TextStyleProps>`
  margin: 0;
  padding: 0;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  ${({ theme, type }) => theme.text.type[type]};
  display: ${({ inline }) => (inline ? 'inline-flex' : 'block')};
  ${({ secondary, theme }) =>
    secondary &&
    css`
      color: ${theme.color.secondary.white};
    `}
  ${({ ellipsis }) =>
    ellipsis
      ? css`
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        `
      : ''}
    &.bold {
    font-weight: 500;
  }

  &.italic {
    font-style: italic;
  }

  &.light {
    font-weight: 300;
  }
`;

export const Heading1Styled = styled.h1`
  ${styles}
`;

export const Heading2Styled = styled.h2`
  ${styles}
`;

export const Heading3Styled = styled.h3`
  ${styles}
`;

export const ParagraphStyled = styled.p`
  ${styles}
`;

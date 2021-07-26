import { styled, css } from '@play-to-learn/components.theme.palette';
import { FlexBoxElementProps } from './interfaces';

export const FlexBoxWrapperStyled = styled.div<FlexBoxElementProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};

  ${({ colSpace, direction }) =>
    colSpace &&
    direction === 'row' &&
    css`
      & > div {
        margin-left: ${Number.isNaN(+colSpace) ? colSpace : `${colSpace}px`};

        &:first-of-type {
          margin-left: 0;
        }
      }
    `}

  ${({ rowSpace, direction }) =>
    rowSpace &&
    direction === 'column' &&
    css`
      & > div {
        margin-top: ${Number.isNaN(+rowSpace) ? rowSpace : `${rowSpace}px`};

        &:first-of-type {
          margin-top: 0;
        }
      }
    `}
`;

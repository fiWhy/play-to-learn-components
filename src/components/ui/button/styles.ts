import { css, styled } from '@play-to-learn/components.theme.palette';
import { BtnType } from './interfaces';

export const ButtonTipStyled = styled.span`
  position: absolute;
  border-radius: 50%;
  top: 0;
  left: 50%;
  padding: 3px 5px;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.color.secondary.blue01};
`;

export const ButtonContentStyled = styled.span`
  display: inline-flex;
  justify-content: center;
  align-content: center;
`;

export const ButtonWrapperStyled = styled.button<{ btnType?: BtnType }>`
  position: relative;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color.secondary.white};

  ${({ btnType, theme }) => {
    switch (btnType) {
      case 'circle':
        return css`
          min-width: 50px;
          min-height: 50px;
          border-radius: 50%;
          background: ${({ theme }) => theme.color.secondary.dark04};

          &:hover {
            background: ${({ theme }) => theme.color.secondary.grey01};
          }

          &:active {
            background: ${({ theme }) => theme.color.secondary.grey02};
          }
        `;
      default:
        return css`
          padding: 10px 30px;
          border-radius: ${({ theme }) => theme.radius.button};
          background: ${({ theme }) => theme.color.primary.main};

          &:hover {
            background: ${({ theme }) => theme.color.primary.focus};
          }

          &:active {
            background: ${({ theme }) => theme.color.primary.active};
          }
        `;
    }
  }}
`;

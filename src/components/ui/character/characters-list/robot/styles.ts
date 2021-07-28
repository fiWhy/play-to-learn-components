import {
  styled,
  css,
  keyframes,
} from '@play-to-learn/components.theme.palette';

const blink = keyframes`
  0% {
    transform: translateY(-50%) scale(1);
  }
  10% {
    transform: translateY(-50%) scale(1, 0);
  }
  20% {
   transform: translateY(-50%) scale(1, 1.1);
  }
  21% {
    transform: translateY(-50%) scale(1);
  }
  100% {
    transform: translateY(-50%) scale(1);
  }
`;

const bordered = css`
  border-top-left-radius: 30% 50%;
  border-bottom-left-radius: 30% 50%;
  border-top-right-radius: 30% 50%;
  border-bottom-right-radius: 30% 50%;
`;

const centered = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const centeredY = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const EyeStyled = styled.div`
  ${centeredY}
  border-radius: 50%;
  background: rgba(52, 122, 235, 1);
`;

export const ScreenStyled = styled.div`
  ${centered}
  ${bordered}
  background: rgba(16, 17, 18, 1);
`;

export const EyesWrapperStyled = styled.div`
  ${centered}
  ${bordered}
  background: rgba(52, 122, 235, 1);
  box-shadow: -10px -10px 12px 0px rgba(34, 60, 80, 0.2) inset;
`;

export const RobotStyled = styled.div<{ size: number }>`
  position: relative;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 50%;
  border: 1px solid rgba(34, 60, 80, 0.2);
  background: #fff;
  box-shadow: -10px -10px 12px 0px rgba(34, 60, 80, 0.2) inset;
  ${({ size }) => {
    const wrapperWidth = size * 0.9;
    const wrapperHeight = size * 0.65;
    const screenWidth = wrapperWidth * 0.95;
    const screenHeight = wrapperHeight * 0.95;
    const eyeWidth = screenWidth * 0.2;
    const eyeHeight = screenHeight * 0.55;
    return `
      ${EyesWrapperStyled} {
        width: ${wrapperWidth}px;
        height: ${wrapperHeight}px;
        ${ScreenStyled} {
          width: ${screenWidth}px;
          height: ${screenHeight}px;
          ${EyeStyled} {
            width: ${eyeWidth}px;
            height: ${eyeHeight}px;

            &.left {
              left: ${eyeWidth}px;
            }

            &.right {
              right: ${eyeWidth}px;
            }
          }
        }
      }
    `;
  }}
  &.blink {
    ${EyeStyled} {
      animation: 5s ${blink} infinite;
    }
  }
`;

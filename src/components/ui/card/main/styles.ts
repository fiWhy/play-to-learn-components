import { styled } from '@play-to-learn/components.theme.palette';
import FlexBox from '@play-to-learn/components.ui.flex-box';
import chroma from 'chroma-js';

export const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
`;

export const MainWrapperStyled = styled(FlexBox)<{
  fallbackColor: string;
  image?: string;
}>`
  border-radius: ${({ theme }) => theme.radius.cell};
  background-image: ${({ image, fallbackColor, theme }) => {
    if (image) {
      return `url(${image})`;
    }
    const scale = chroma.scale([fallbackColor, theme.color.secondary.blue03]);
    return `linear-gradient(135deg, rgb(${scale(1).rgb()}) 0%, rgb(${scale(
      0.4
    ).rgb()}) 100%)`;
  }};
  background-position: center;
  background-size: cover;
  background-color: ${({ fallbackColor }) => fallbackColor};

  &.x,
  &.horizontal {
    &.l {
      height: 230px;
      width: 100%;
    }
  }

  &.y,
  &.vertical {
    &.l {
      width: 270px;
      height: 350px;
    }
    &.m {
      width: 190px;
      height: 252px;
    }
    &.s {
      width: 140px;
      height: 190px;
    }
  }
`;

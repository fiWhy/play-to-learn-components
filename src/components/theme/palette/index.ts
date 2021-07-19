import baseStyled, {
  css as baseCss,
  ThemedCssFunction,
  ThemedStyledInterface,
} from 'styled-components';

const theme = {
  dark: {
    color: {
      primary: {
        main: '#2757FF',
        focus: '#2846B1',
        active: '#2F3756',
      },
      secondary: {
        dark01: '#1C233A',
        dark02: '#333A53',
        white: '#fff',
      },
      uiBackground: '#fff',
    },
    radius: {
      button: '5px',
    },
  },
  light: {
    color: {
      primary: {
        main: '#2757FF',
        focus: '#2846B1',
        active: '#2F3756',
      },
      secondary: {
        dark01: '#1C233A',
        dark02: '#333A53',
        white: '#fff',
      },
      uiBackground: '#fff',
    },
  },
};

export type Theme = typeof theme['dark'];
export type ThemeType = keyof typeof theme;

const styled = baseStyled as ThemedStyledInterface<Theme>;
const css = baseCss as ThemedCssFunction<Theme>;

export { styled, css };
export default theme;

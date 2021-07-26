import baseStyled, {
  css as baseCss,
  ThemedCssFunction,
  ThemedStyledInterface,
  createGlobalStyle,
} from 'styled-components';

const general = {
  text: {
    type: {
      'Heading-1': `
              font-size: 32px;
              font-weight: 600;
              line-height: 34px;
                  `,
      'Heading-2': `
              font-size: 24px;
              font-weight: 700;
              line-height: 30px;
                  `,
      'Heading-3': `
              font-size: 16px;
              font-weight: 600;
              line-height: 22px;
                  `,
      'Heading-4': `
              font-size: 10px;
              font-weight: 600;
              line-height: 12px;
                `,
      'Body-Large': `
              font-size: 18px;
              line-height: 18px;
              font-weight: 500;
            `,
      'Body-Regular': `
              font-size: 16px;
              line-height: 16px;
              font-weight: 500;
            `,
      'Body-Default': `
              font-size: 14px;
              line-height: 17px;
              font-weight: 400;
            `,
      'Body-Small': `
              font-size: 12px;
              line-height: 17px;
              font-weight: 200;
            `,
      'Body-Extra-Small': `
              font-size: 10px;
              line-height: 10px;
              font-weight: 200;
            `,
    },
  },
  radius: {
    button: '5px',
    cell: '10px',
  },
  shadow: {
    main: `3px 4px 20px rgba(0, 0, 0, 0.1)`,
  },
};

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
        dark03: '#232A43',
        white: '#fff',
      },
      uiBackground: '#fff',
    },
    ...general,
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
        dark03: '#232A43',
        white: '#fff',
      },
      uiBackground: '#fff',
    },
    ...general,
  },
};

export type Theme = typeof theme['dark'];
export type ThemeType = keyof typeof theme;
export type TextType = keyof typeof theme['dark']['text']['type'];

const styled = baseStyled as ThemedStyledInterface<Theme>;
const css = baseCss as ThemedCssFunction<Theme>;

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  html, body, #root, .App {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding:0;
    
    h1,h2,h3,h4,h5 {
      font-family: 'Montserrat', 'Open Sans', sans-serif;
    }

    background-color: ${({ theme }) => theme.color.uiBackground};
    color: ${({ theme }) => theme.color.secondary.dark01};
  }
`;

export { styled, css, GlobalStyle };
export default theme;
export { default as Fonts } from './fonts';

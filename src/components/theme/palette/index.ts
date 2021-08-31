import baseStyled, {
  css as baseCss,
  keyframes as baseKeyframes,
  ThemedCssFunction,
  ThemedStyledInterface,
  createGlobalStyle,
} from 'styled-components';
import { entries } from 'lodash';

const general = {
  variables: {},
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
              line-height: 20px;
              font-weight: 400;
            `,
      'Body-Small': `
              font-size: 12px;
              line-height: 17px;
              font-weight: normal;
            `,
      'Body-Extra-Small': `
              font-size: 10px;
              line-height: 10px;
              font-weight: normal;
            `,
    },
  },
  radius: {
    button: '5px',
    cell: '10px',
    sidebar: '20px',
    dialogBox: '15px',
  },
  shadow: {
    main: `3px 4px 20px rgba(0, 0, 0, 0.1)`,
    sidebar: `0px 4px 10px rgba(99, 62, 62, 0.12);`,
  },
  gradient: {
    dialogBox: 'linear-gradient(180deg, #465072 35.53%, #333B54 110.44%);',
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
        dark04: '#343D56',
        blue01: '#145DEA',
        blue02: '#5781EE',
        blue03: '#5286EB',
        grey01: '#535B70',
        grey02: '#4E4E4E',
        grey03: '#E2E2E2',
        grey04: '#353535',
        grey05: '#9A9A9A',
        red01: '#EB4D4D',
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
        dark04: '#343D56',
        blue01: '#145DEA',
        blue02: '#5781EE',
        blue03: '#5286EB',
        grey01: '#535B70',
        grey02: '#4E4E4E',
        grey03: '#E2E2E2',
        grey04: '#353535',
        grey05: '#9A9A9A',
        red01: '#EB4D4D',
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
const keyframes = baseKeyframes;

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  html, body, #root, .App {
    width: 100%;
    height: 100%;
  }

  html {
    ${({ theme }) => {
      return css`
        ${entries(theme.variables).map(([key, value]) => `--${key}: ${value};`)
          .join(`
        `)}
      `;
    }}
  }

  body {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding:0;
    
    h1,h2,h3,h4,h5, p.montserrat {
      font-family: 'Montserrat', 'Open Sans', sans-serif;
    }

    background-color: ${({ theme }) => theme.color.uiBackground};
    color: ${({ theme }) => theme.color.secondary.dark01};

    ${({ theme }) => theme.text.type['Body-Default']};
  }
`;

export { styled, css, GlobalStyle, keyframes };
export default theme;
export { default as Fonts } from './fonts';

const colors = {
  primary: '#123432',
  black: '#000',
  white: '#f4f4f4'
};

const fontFamilySansSerif = '\'Roboto\', Helvetica Neue, Helvetica, Arial, sans-serif';

export const theme = {
  colors,
  breakpoints: {
    desktop: '1200px',
  },
  layout: {
    container: {
      width: '960px',
    },
    navbar: {
      fixed: true,
      height: '4rem',
      fontSize: '2rem',
    },
  },
  elements: {
    button: {
      fontFamily: fontFamilySansSerif,
      color: colors.black,
      borderColor: colors.primary,
      primary: {
        background: colors.primary,
      },
      secondary: {
        background: colors.white,
      }
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
      fontFamily: fontFamilySansSerif,
      color: colors.black,
      margin: '0 0 1rem 0',
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 400,
      fontFamily: fontFamilySansSerif,
      color: colors.black,
      margin: '0 0 1rem 0',
    },
    h3: {
      fontSize: '1.6rem',
      fontWeight: 'normal',
      fontFamily: fontFamilySansSerif,
      color: colors.black,
      margin: '0 0 1rem 0',
    },
    h4: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      fontFamily: fontFamilySansSerif,
      color: colors.black,
      margin: '0 0 1rem 0',
    },
    h5: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      fontFamily: fontFamilySansSerif,
      color: colors.black,
      margin: '0 0 1rem 0',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 'bold',
      fontFamily: fontFamilySansSerif,
      color: colors.black,
      margin: '0 0 1rem 0',
    },
  },
};

type Theme = typeof theme;

declare module 'styled-components' {
  // tslint:disable-next-line:interface-name no-empty-interface
  export interface DefaultTheme extends Theme {}
}

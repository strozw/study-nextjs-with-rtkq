import { createTheme } from '@vanilla-extract/css'

export const colorPalette = {
  white: 'white',
  lightGray1: '#f8f8f8',
  lightGray2: '#DFDFDF',
  gray: 'gray',
  black: '#202020',
  blue: 'blue',
}

export const screens = {
  mobile: '414px',
  tablet: '834px',
  pc: '1024px',
}

export const [themeClass, vars] = createTheme({
  color: {
    ...colorPalette,
    primary: colorPalette.blue,
    common: {
      baseLayout: {
        bg: colorPalette.lightGray1,
      },
      section: {
        fg: colorPalette.black,
        bg: colorPalette.white,
        shadow: colorPalette.lightGray2,
        borderColor: colorPalette.lightGray2,
        heading: {
          borderColor: colorPalette.black,
        },
      },
    },
  },

  /**
   * font size の variation
   */
  fontSizes: {
    xs: '1rem',
    s: '1.2rem',
    m: '1.4rem',
    l: '1.6rem',
    xl: '2rem',
  },

  /**
   * spacing の variation
   */
  spaces: {
    s: '0.4rem',
    m: '0.8rem',
    l: '1.6rem',
    xl: '2.0rem',
  },

  /**
   * font family の valiation
   */
  font: {
    reqular: 'Noto Sans JP',
  },
})

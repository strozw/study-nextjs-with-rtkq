import { createTheme } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  color: {
    white: 'white',
    gray: 'gray',
    primary: 'blue',
  },
  fontSizes: {
    xs: '1rem',
    s: '1.2rem',
    m: '1.4rem',
    l: '1.6rem',
    xl: '2rem',
  },
  spaces: {
    s: '0.4rem',
    m: '0.8rem',
    l: '1.6rem',
    xl: '2.0rem',
  },
  font: {
    reqular: 'Noto Sans JP',
  },
})

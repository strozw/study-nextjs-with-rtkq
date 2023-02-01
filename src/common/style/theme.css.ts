import { createTheme } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  color: {
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
    s: '4rem',
    m: '8rem',
    l: '16rem',
    xl: '20rem',
  },
  font: {
    reqular: 'Noto Sans JP',
  },
})

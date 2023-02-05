import { globalStyle } from '@vanilla-extract/css'

import { vars } from './theme.css'

globalStyle('html', {
  fontSize: '10px',
})

globalStyle('html, body', {
  margin: 0,
  color: vars.color.black,
  background: vars.color.white,
})

globalStyle('body', {
  fontFamily: vars.font.reqular,
  fontSize: vars.fontSizes.m,
})

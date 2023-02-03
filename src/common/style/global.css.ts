import { globalStyle } from '@vanilla-extract/css'

import { vars } from './theme.css'

globalStyle('html, body', {
  margin: 0,
  fontSize: '10px',
  fontFamily: vars.font.reqular,
  color: vars.color.black,
  background: vars.color.white,
})

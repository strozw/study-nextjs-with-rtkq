import { style } from '@vanilla-extract/css'

import { vars } from '@/common/style/theme.css'

export const wrapper = style({
  display: 'flex',
  padding: vars.spaces.l,
  backgroundColor: vars.color.gray,
  color: vars.color.white,
})

export const heading = style({
  display: 'block',
  margin: '0 auto',
  fontSize: vars.fontSizes.xl,
  fontWeight: 'bold',
  textAlign: 'center',
  letterSpacing: '0.075em',
})

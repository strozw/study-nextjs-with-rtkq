import { style } from '@vanilla-extract/css'

import { vars } from '@/common/style/theme.css'

export const wrapper = style({
  display: 'flex',
  fontSize: vars.fontSizes.m,
  listStyle: 'none',
  flexWrap: 'wrap',
  margin: 0,
  padding: 0,
})

export const listItem = style({
  margin: vars.spaces.s,
  width: '8em',
})

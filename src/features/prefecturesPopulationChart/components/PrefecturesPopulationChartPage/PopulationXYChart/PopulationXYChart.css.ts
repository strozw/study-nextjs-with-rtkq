import { style } from '@vanilla-extract/css'

import { vars } from '@/common/style/theme.css'

export const wrapper = style({
  width: '100%',
  height: '500px !important',
  overflowX: 'scroll',
  border: `0.2rem solid ${vars.color.lightGray1}`,
})

export const empty = style({
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px',
  background: vars.color.lightGray1,
  fontSize: vars.fontSizes.l,
})

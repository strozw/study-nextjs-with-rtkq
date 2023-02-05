import { style } from '@vanilla-extract/css'

import { vars } from '@/common/style/theme.css'

export const wrapper = style({
  color: vars.color.common.section.fg,
  backgroundColor: vars.color.common.section.bg,
  fontSize: vars.fontSizes.m,
  boxShadow: `0 0px 1px ${vars.color.common.section.shadow}`,
  width: 'auto',
})

export const heading = style({
  padding: vars.spaces.m,
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: vars.color.common.section.borderColor,
  margin: 0,
  fontSize: vars.fontSizes.l,
  fontWeight: 'bold',
  letterSpacing: '0.075em',
})

export const body = style({
  padding: vars.spaces.m,
})

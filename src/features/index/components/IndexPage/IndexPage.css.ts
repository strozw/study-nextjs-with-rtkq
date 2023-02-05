import { globalStyle, style } from '@vanilla-extract/css'

import { vars } from '@/common/style/theme.css'

export const wrapper = style({})

export const section = style({
  margin: vars.spaces.l,
})

export const linkList = style({})

globalStyle(`${linkList} a`, {
  color: vars.color.blue,
})

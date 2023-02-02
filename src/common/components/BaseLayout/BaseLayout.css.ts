import { vars } from '@/common/style/theme.css'
import { style } from '@vanilla-extract/css'

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100dvh',
  backgroundColor: vars.color.white,
})

export const header = style({})

export const main = style({})

import { vars } from '@/common/style/theme.css'
import { style } from '@vanilla-extract/css'

export const wrapperStyle = style({
  padding: vars.spaces.l,
  backgroundColor: vars.color.gray,
  color: vars.color.white,
  fontSize: vars.fontSizes.xl,
  fontWeight: 'bold',
  letterSpacing: '0.075em',
  textAlign: 'center',
})

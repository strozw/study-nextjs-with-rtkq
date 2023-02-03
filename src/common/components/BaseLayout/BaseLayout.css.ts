import { style } from '@vanilla-extract/css'

import { screens, vars } from '@/common/style/theme.css'

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100dvh',
  backgroundColor: vars.color.common.baseLayout.bg,

  '@media': {
    [`screen and (min-width: ${screens.pc})`]: {
      width: 'auto',
      margin: '0 50px',
    },
  },
})

export const header = style({})

export const main = style({
  // padding: vars.spaces.s,
  // backgroundColor: vars.color.common.baseLayout.bg,
})

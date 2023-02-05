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
  marginRight: '1em',
  width: '7em',
  paddingBottom: vars.spaces.s,
  borderBottom: `solid ${vars.spaces.s}`,
  selectors: {
    '&:has(input:not(:checked))': {
      borderBottomColor: 'transparent !important',
    },
  },
})

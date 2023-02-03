import { style } from '@vanilla-extract/css'

import { vars } from '@/common/style/theme.css'

export const label = style({
  display: 'flex',
  fontSize: vars.fontSizes.l,
  alignItems: 'center',
})

export const input = style({
  /* Remove most all native input styles */
  appearance: 'none',
  /* For iOS < 15 */
  backgroundColor: vars.color.white,
  margin: 0,
  marginRight: vars.spaces.s,

  font: 'inherit',
  color: vars.color.black,
  width: '1.15em',
  height: '1.15em',
  border: `0.15em solid ${vars.color.black}`,
  borderRadius: '0.15em',
  transform: 'translateY(-0.075em)',

  display: 'grid',
  placeContent: 'center',

  selectors: {
    '&::before': {
      content: '',
      width: '0.65em',
      height: '0.65em',
      clipPath: 'polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)',
      transform: 'scale(0)',
      transformOrigin: 'bottom left',
      transition: '120ms transform ease-in-out',
      boxShadow: `inset 1em 1em ${vars.color.black}`,
    },
    '&:checked::before': {
      transform: 'scale(1)',
    },
    '&:focus': {
      outline: 'max(1px, 0.15em) solid currentColor',
      outlineOffset: 'max(1px, 0.15em)',
    },
    '&:disabled': {
      cursor: 'notAllowed;',
      border: `0.15em solid ${vars.color.gray}`,
      opacity: 0.5,
    },
    '&:disabled::before': {
      color: vars.color.lightGray2,
    },
  },
})

import { ComponentProps, ReactHTML, ReactNode } from 'react'

import * as style from './Checkbox.css'

export type CheckboxProps = {
  children: ReactNode
} & ComponentProps<ReactHTML['input']>

export const Checkbox = ({ children, ...rest }: CheckboxProps) => {
  return (
    <label className={style.label}>
      <input className={style.input} type='checkbox' {...rest} />

      {children}
    </label>
  )
}

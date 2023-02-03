import { ReactNode } from 'react'

import * as style from './Header.css'

export type HeaderProps = {
  title: ReactNode
}

export const Header = ({ title: children }: HeaderProps) => (
  <div className={style.wrapper}>
    <h1 className={style.heading}>{children}</h1>
  </div>
)

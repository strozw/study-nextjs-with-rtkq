import { ReactNode } from 'react'
import * as style from './Header.css'

export type HeaderProps = {
  title: ReactNode
}

export const Header = ({ title: children }: HeaderProps) => (
  <div className={style.wrapperStyle}>
    <h1 className={style.headingStyle}>{children}</h1>
  </div>
)

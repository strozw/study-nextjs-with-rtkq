import { ReactNode } from 'react'
import * as style from './Header.css'

export type HeaderProps = {
  title: ReactNode
}

export const Header = ({ title: children }: HeaderProps) => (
  <div className={style.wrapperStyle}>{children}</div>
)

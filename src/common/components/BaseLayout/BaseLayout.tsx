import { ReactNode } from 'react'
import * as style from './BaseLayout.css'

export type BaseLayoutProps = {
  header?: ReactNode
  children: ReactNode
}

export const BaseLayout = ({ header, children }: BaseLayoutProps) => {
  return (
    <div className={style.wrapper}>
      <header className={style.header}>{header}</header>

      <main className={style.main}>{children}</main>
    </div>
  )
}

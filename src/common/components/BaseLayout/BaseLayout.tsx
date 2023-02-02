import { clsx } from 'clsx'
import { ReactNode } from 'react'

import * as style from './BaseLayout.css'

export type BaseLayoutProps = {
  className?: string
  header?: ReactNode
  children: ReactNode
}

export const BaseLayout = ({ className, header, children }: BaseLayoutProps) => {
  return (
    <div className={clsx(style.wrapper, className)}>
      <header className={style.header}>{header}</header>

      <main className={style.main}>{children}</main>
    </div>
  )
}

import { ReactNode } from 'react'

export type BaseLayoutProps = {
  header?: ReactNode
  children: ReactNode
}

export const BaseLayout = ({ header, children }: BaseLayoutProps) => {
  return (
    <div>
      {header}

      <main>{children}</main>
    </div>
  )
}

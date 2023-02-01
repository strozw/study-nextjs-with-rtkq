import { ReactNode } from 'react'

export type HeaderProps = {
  title: ReactNode
}

export const Header = ({ title: children }: HeaderProps) => <div>{children}</div>

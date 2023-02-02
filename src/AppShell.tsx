import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { AppStore } from '@/store'

import 'sanitize.css'
import '@/common/style/global.css'

export type AppShellProps = {
  store: AppStore
  children: ReactNode
}

export const AppShell = ({ store, children }: AppShellProps) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  )
}

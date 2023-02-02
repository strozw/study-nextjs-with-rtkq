import { AppProps } from 'next/app'
import { AppShell } from '@/AppShell'
import { wrapper } from '@/store'

export default function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)

  return (
    <AppShell store={store}>
      <Component {...props.pageProps} />
    </AppShell>
  )
}

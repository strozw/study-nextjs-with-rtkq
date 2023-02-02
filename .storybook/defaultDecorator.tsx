import { AppShell } from '@/AppShell'
import { themeClass } from '@/common/style/theme.css'
import { createAppStore } from '@/store'
import { Decorator } from '@storybook/react'

const store = createAppStore()

/**
 * Story に default で適用する decorator
 * 共通の style などを適用する
 */
export const defaultDecorator: Decorator = (storyFn, context) => {
  return (
    <AppShell store={store}>
      <div className={themeClass}>{storyFn(context)}</div>
    </AppShell>
  )
}

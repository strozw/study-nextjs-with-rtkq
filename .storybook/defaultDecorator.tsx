import { themeClass } from '@/common/style/theme.css'
import { Decorator } from '@storybook/react'
import '../src/common/style/global.css'

/**
 * Story に default で適用する decorator
 * 共通の style などを適用する
 */
export const defaultDecorator: Decorator = (storyFn, context) => {
  return <div className={themeClass}>{storyFn(context)}</div>
}

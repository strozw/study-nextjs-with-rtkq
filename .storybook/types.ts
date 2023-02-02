import { Args, Meta as BaseMeta, StoryObj as BaseStoryObj } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

type AdditionalParams = {
  [key: string]: any
}

export type StoryParameters<TParams extends AdditionalParams = AdditionalParams> = {
  /**
   * @default 'padded'
   * @see {@url https://storybook.js.org/docs/react/configure/story-layout#global-layout}
   */
  layout?: 'centered' | 'fullscreen' | 'padded'

  /**
   * @see {@url https://storybook.js.org/docs/react/essentials/backgrounds}
   */
  backgrounds?: {
    default?: string
    values?: { name: string; value: string }[]
    disable?: boolean
    grid?: {
      disable?: boolean
      cellSize?: number
      opacity?: number
      cellAmount?: number
      // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      offsetX?: number
      // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      offsetY?: number
    }
  }

  /**
   * @see {@url https://storybook.js.org/docs/react/essentials/viewport}
   */
  viewport?: {
    viewports: typeof INITIAL_VIEWPORTS
  }

  /**
   * @see {@url https://storybook.js.org/docs/react/essentials/actions}
   */
  actions?: {
    argTypesRegex?: string
    handles?: string[]
  }

  /**
   * @see {@url https://storybook.js.org/docs/react/essentials/controls}
   */
  controls?: {
    expanded?: boolean
    matchers?: {
      color?: RegExp
      date?: RegExp
    }
    presetColors?: ({ color: string; title: string } | string)[]
    hideNoControlsWarning?: boolean
    include?: RegExp | string[]
    sort?: 'alpha' | 'requiredFirst'
  }
} & TParams

export type Meta<
  TArgs extends Args = Args,
  TParams extends AdditionalParams = AdditionalParams
> = BaseMeta<TArgs> & {
  parameters?: StoryParameters<TParams>
}

export type StoryObj<
  TArgs extends Args = Args,
  TParams extends AdditionalParams = AdditionalParams
> = BaseStoryObj<TArgs> & {
  paramters?: StoryParameters<TParams>
}

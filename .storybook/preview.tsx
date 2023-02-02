// import { expect } from '@storybook/jest'

import { Decorator } from '@storybook/react'
import { defaultDecorator } from './defaultDecorator'
import { StoryParameters } from './types'

export const decorators: Decorator[] = [defaultDecorator]

export const parameters: StoryParameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

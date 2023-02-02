// import { expect } from '@storybook/jest'

/**
 * @see {@url https://github.com/storybookjs/storybook/discussions/16858}
 */
// import * as matchers from '@testing-library/jest-dom'

// expect.extend(matchers)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

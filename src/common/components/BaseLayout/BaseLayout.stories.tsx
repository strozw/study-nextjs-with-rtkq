import { Meta, StoryObj } from '.storybook/types'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { BaseLayout, BaseLayoutProps } from './BaseLayout'

type Args = BaseLayoutProps

const meta: Meta<Args> = {
  component: BaseLayout,
}

export default meta

type Story = StoryObj<Args>

export const Default: Story = {
  args: {
    header: 'header',
    children: 'contents',
  },

  play: async context => {
    const view = within(context.canvasElement)

    const banner = await view.findByRole('banner')

    await expect(banner).toBeVisible()

    await expect(banner).toHaveTextContent('header')

    const main = await view.findByRole('main')

    await expect(main).toBeVisible()

    await expect(main).toHaveTextContent('contents')
  },
}

import { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Header, HeaderProps } from './Header'

type Args = HeaderProps

const meta: Meta<Args> = {
  component: Header,
}

export default meta

type Story = StoryObj<Args>

export const Default: Story = {
  args: {
    title: 'Title',
  },
  play: async context => {
    const view = within(context.canvasElement)

    await expect(view.getByRole('heading', { name: 'Title' })).toBeVisible()
  },
}

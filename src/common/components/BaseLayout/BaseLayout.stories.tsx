import { Meta, StoryObj } from '@storybook/react'
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
}

import { Meta, StoryObj } from '@storybook/react'
import { Header, HeaderProps } from './Header'

type Args = HeaderProps

const meta: Meta<Args> = {
  component: Header,
}

export default meta

type Story = StoryObj<Args>

export const Default: Story = {
  args: {
    title: 'title',
  },
}

import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'

import { Meta, StoryObj } from '.storybook/types'

import { Header } from '../Header'

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

    const banner = view.getByRole('banner')

    expect(banner).toBeVisible()

    expect(banner).toHaveTextContent('header')

    const main = view.getByRole('main')

    expect(main).toBeVisible()

    expect(main).toHaveTextContent('contents')
  },
}

export const WithHeader: Story = {
  args: {
    header: <Header title='Title' />,
    children: 'content',
  },
  play: async context => {
    const view = within(context.canvasElement)

    const banner = view.getByRole('banner')

    const bannerView = within(banner)

    expect(bannerView.getByRole('heading', { name: 'Title' })).toBeVisible()
  },
}

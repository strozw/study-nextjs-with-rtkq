import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'

import { Section, SectionProps } from './Section'

type Args = SectionProps

const meta: Meta<Args> = {
  component: Section,
}

export default meta

type Story = StoryObj<Args>

export const Default: Story = {
  args: {
    title: 'Title',
    children: 'aaaaaaaaaaaaaaaaaaaaaaaa',
  },
  play: async context => {
    const view = within(context.canvasElement)

    await expect(view.getByRole('heading', { name: 'Title' })).toBeVisible()

    await expect(view.getByRole('region', { name: 'Title' })).toBeVisible()
  },
}

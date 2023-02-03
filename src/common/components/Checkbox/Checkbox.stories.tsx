import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'

import { Checkbox, CheckboxProps } from './Checkbox'

type Args = CheckboxProps

const meta: Meta<Args> = {
  component: Checkbox,
  decorators: [
    (storyFn, context) => {
      return storyFn(context)
    },
  ],
  args: {
    children: 'Label',
    value: 'test',
  },
}

export default meta

type Story = StoryObj<Args>

export const Default: Story = {
  play: async context => {
    const view = within(context.canvasElement)

    await expect(await view.findByRole('input')).toBeVisible()
  },
}

export const Disalbed: Story = {
  args: {
    disabled: true,
    checked: true,
  },
}

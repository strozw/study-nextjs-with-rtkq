import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'

import { Meta, StoryObj } from '.storybook/types'

import { HomePage } from './HomePage'

const meta: Meta = {
  component: HomePage,
}

export default meta

export const Default: StoryObj = {
  play: async context => {
    const view = within(context.canvasElement)

    const section = view.getByRole('region', { name: 'コンテンツ内容' })

    await expect(section).toBeVisible()

    const sectionView = within(section)

    await expect(sectionView.getByLink('都道府県別の人工推移')).toBeVisible()
  },
}

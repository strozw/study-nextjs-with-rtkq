import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'

import { Meta, StoryObj } from '.storybook/types'

import { PrefecturesPopulationChartPage } from './PrefecturesPopulationChartPage'

const meta: Meta = {
  component: PrefecturesPopulationChartPage,
}

export default meta

export const Default: StoryObj = {
  play: async context => {
    const view = within(context.canvasElement)

    await expect(view.getByRole('region', { name: '都道府県の選択' })).toBeVisible()

    await expect(view.getByRole('region', { name: '人口数' })).toBeVisible()
  },
}

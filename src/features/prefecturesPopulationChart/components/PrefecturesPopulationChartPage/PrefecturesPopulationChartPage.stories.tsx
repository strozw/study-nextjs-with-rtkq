import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'

import { Meta, StoryObj } from '.storybook/types'

import { PrefecturesPopulationChartPage } from './PrefecturesPopulationChartPage'

const meta: Meta = {
  component: PrefecturesPopulationChartPage,
}

export default meta

export const Default: StoryObj = {
  play: context => {
    const view = within(context.canvasElement)

    expect(view.getByRole('region', { name: '都道府県別' })).toBeVisible()

    expect(view.getByRole('region', { name: '人口数' })).toBeVisible()
  },
}

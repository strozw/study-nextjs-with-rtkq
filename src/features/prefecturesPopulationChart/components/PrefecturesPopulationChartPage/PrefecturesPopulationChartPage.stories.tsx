import { action } from '@storybook/addon-actions'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'

import { Meta, StoryObj } from '.storybook/types'

import { prefecturesMock } from '@/store/services/resasApi/test/mocks/data/prefectures'

import { PrefecturesPicker } from './PrefecturesPicker'
import {
  PrefecturesPopulationChartPage,
  PrefecturesPopulationChartPageContext,
  PrefecturesPopulationChartPageContextValue,
} from './PrefecturesPopulationChartPage'

type Params = {
  contextValue?: PrefecturesPopulationChartPageContextValue
}

const meta: Meta<any, Params> = {
  component: PrefecturesPopulationChartPage,
  parameters: {
    contextValue: {
      PrefecturePicker: () => {
        return (
          <PrefecturesPicker
            prefectures={prefecturesMock}
            onChangeCheckbox={action('onChangeCheckbox')}
          />
        )
      },
      PopulationXYChart: () => <>aaaa</>,
    },
  },
  decorators: [
    (storyFn, context) => {
      return (
        <PrefecturesPopulationChartPageContext.Provider value={context.parameters.contextValue}>
          {storyFn(context)}
        </PrefecturesPopulationChartPageContext.Provider>
      )
    },
  ],
}

export default meta

export const Default: StoryObj = {
  play: async context => {
    const view = within(context.canvasElement)

    await expect(view.getByRole('region', { name: '都道府県の選択' })).toBeVisible()

    await expect(view.getByRole('region', { name: '人口数' })).toBeVisible()
  },
}

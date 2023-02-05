import { action } from '@storybook/addon-actions'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'

import { Meta, StoryObj } from '.storybook/types'

import { prefecturesMock } from '@/store/services/resasApi/test/mocks/data/prefectures'

import { createPrefCodesColorMap } from '../../helpers'

import { PopulationXYChart, PopulationXYChartContext } from './PopulationXYChart'
import { PrefecturesPicker } from './PrefecturesPicker'
import {
  PrefecturesPopulationChartPage,
  PrefecturesPopulationChartPageContext,
  PrefecturesPopulationChartPageContextValue,
} from './PrefecturesPopulationChartPage'

type Params = {
  contextValue?: PrefecturesPopulationChartPageContextValue
}

const prefCodes = prefecturesMock.map(({ prefCode }) => prefCode)

const prefCodesColorsMap = createPrefCodesColorMap(prefCodes, prefecturesMock.length)

const meta: Meta<any, Params> = {
  component: PrefecturesPopulationChartPage,
  parameters: {
    contextValue: {
      PrefecturePicker: () => {
        return (
          <PrefecturesPicker
            prefectures={prefecturesMock}
            prefCodesColorsMap={prefCodesColorsMap}
            onChangeCheckbox={action('onChangeCheckbox')}
          />
        )
      },
      PopulationXYChart: () => {
        return (
          <PopulationXYChartContext.Provider
            value={{
              PrefLineSeries: () => <></>,
            }}
          >
            <PopulationXYChart prefCodes={[]} />
          </PopulationXYChartContext.Provider>
        )
      },
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

    expect(view.getByRole('region', { name: '都道府県の選択' })).toBeVisible()

    expect(view.getByRole('region', { name: '人口数' })).toBeVisible()
  },
}

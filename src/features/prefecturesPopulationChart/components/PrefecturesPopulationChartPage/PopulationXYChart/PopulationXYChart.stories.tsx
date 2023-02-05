import { Meta, StoryObj } from '.storybook/types'
import { populationDataFactory } from '@/store/services/resasApi/test/mocks/factories/populationDataFactory'

import {
  PopulationXYChart,
  PopulationXYChartContext,
  PopulationXYChartContextValue,
  PopulationXYChartProps,
} from './PopulationXYChart'
import { PrefLineSeries } from './PrefLineSeries'

type Args = PopulationXYChartProps

type Params = {
  contextValue: PopulationXYChartContextValue
}

type Story = StoryObj<Args, Params>

export default {
  component: PopulationXYChart,
  args: {
    prefCodes: [10],
  },
  parameters: {
    contextValue: {
      PrefLineSeries: ({ prefCode }) => {
        const data = populationDataFactory.buildList(prefCode)
        return <PrefLineSeries prefName='なんとか県' color='#F00' data={data} />
      },
    },
  },
  decorators: [
    (storyFn, context) => {
      return (
        <PopulationXYChartContext.Provider value={context.parameters.contextValue}>
          {storyFn(context)}
        </PopulationXYChartContext.Provider>
      )
    },
  ],
} as Meta<Args, Params>

export const Default: Story = {}

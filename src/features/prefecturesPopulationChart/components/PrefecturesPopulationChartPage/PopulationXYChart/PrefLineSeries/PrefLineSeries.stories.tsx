import { XYChart } from '@visx/xychart'

import { Meta, StoryObj } from '.storybook/types'

import { populationDataFactory } from '@/store/services/resasApi/test/mocks/factories/populationDataFactory'

import { PrefLineSeries, PrefLineSeriesProps } from './PrefLineSeries'

type Args = PrefLineSeriesProps

type Story = StoryObj<Args>

export default {
  component: PrefLineSeries,
  args: {
    data: populationDataFactory.buildList(10),
    prefName: 'test',
    color: '#000',
  },
  decorators: [
    (storyFn, context) => {
      return (
        <XYChart height={500} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
          {storyFn(context)}
        </XYChart>
      )
    },
  ],
} as Meta<Args>

export const Default: Story = {}

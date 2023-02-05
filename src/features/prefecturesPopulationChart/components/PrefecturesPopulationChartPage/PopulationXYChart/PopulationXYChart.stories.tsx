import { Meta, StoryObj } from '.storybook/types'

import { PopulationXYChart, PopulationXYChartProps } from './PopulationXYChart'

type Args = PopulationXYChartProps

type Story = StoryObj<Args>

export default {
  component: PopulationXYChart,
  args: {},
} as Meta<Args>

export const Default: Story = {}

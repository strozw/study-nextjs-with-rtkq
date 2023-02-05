import { PopulationXYChart } from './PopulationXYChart'
import { usePopulationXYChart } from './usePopulationXYChart'

export const PopulationXYChartContainer = () => {
  const { getPopulationXYChartProps } = usePopulationXYChart()

  return <PopulationXYChart {...getPopulationXYChartProps()} />
}

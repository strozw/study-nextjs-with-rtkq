import { AnimatedLineSeries } from '@visx/xychart'

import {
  populationXYChartXAccesor,
  populationXYChartYAccesor,
} from '@/features/prefecturesPopulationChart/helpers'
import { PopulationData, Prefecture } from '@/store/services/resasApi'

export type PrefLineSeriesProps = {
  prefName: Prefecture['prefName']
  data: PopulationData[]
  color: string
}

export const PrefLineSeries = ({ prefName, data, color }: PrefLineSeriesProps) => {
  return (
    <AnimatedLineSeries
      dataKey={prefName}
      data={data}
      stroke={color}
      xAccessor={populationXYChartXAccesor}
      yAccessor={populationXYChartYAccesor}
      strokeWidth={2}
    />
  )
}

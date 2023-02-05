import { ParentSize } from '@visx/responsive'
import { AnimatedAxis, AnimatedGrid, XYChart } from '@visx/xychart'
import { createContext, useContext } from 'react'

import { PrefLineSeriesContainer } from './PrefLineSeries'

export const PopulationXYChartContext = createContext({
  PrefLineSeries: PrefLineSeriesContainer,
})

export type PopulationXYChartProps = {
  prefCodes: number[]
}

export const PopulationXYChart = ({ prefCodes }: PopulationXYChartProps) => {
  const { PrefLineSeries } = useContext(PopulationXYChartContext)

  return (
    <div>
      <ParentSize style={{ width: '100%', height: '500px' }}>
        {parent => (
          <XYChart
            width={parent.width}
            height={parent.height}
            xScale={{ type: 'band' }}
            yScale={{ type: 'linear' }}
            margin={{
              top: 50,
              right: 25,
              bottom: 50,
              left: 75,
            }}
          >
            <AnimatedAxis
              label='人工(万人)'
              orientation='left'
              labelOffset={25}
              tickFormat={value => (typeof value === 'number' ? String(Number(value) / 10000) : '')}
            />
            <AnimatedAxis label='年' orientation='bottom' />

            <AnimatedGrid columns={false} numTicks={10} />

            {prefCodes.map(prefCode => (
              <PrefLineSeries key={prefCode} prefCode={prefCode} />
            ))}
          </XYChart>
        )}
      </ParentSize>
    </div>
  )
}

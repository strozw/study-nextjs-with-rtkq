import { ParentSize } from '@visx/responsive'
import { AnimatedAxis, AnimatedGrid, Tooltip, XYChart } from '@visx/xychart'
import { ContextType, createContext, useContext } from 'react'

import {
  populationXYChartXAccesor,
  populationXYChartYAccesor,
} from '@/features/prefecturesPopulationChart/helpers'

import { PopulationData } from '@/store/services/resasApi'

import * as style from './PopulationXYChart.css'
import { PrefLineSeriesContainer } from './PrefLineSeries'

export const PopulationXYChartContext = createContext({
  PrefLineSeries: PrefLineSeriesContainer,
})

export type PopulationXYChartContextValue = ContextType<typeof PopulationXYChartContext>

export type PopulationXYChartProps = {
  prefCodes: number[]
}

export const PopulationXYChart = ({ prefCodes }: PopulationXYChartProps) => {
  const { PrefLineSeries } = useContext(PopulationXYChartContext)

  return (
    <ParentSize className={style.wrapper}>
      {({ width, height }) =>
        prefCodes.length ? (
          <XYChart
            width={Math.max(width, 1000)}
            height={height}
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

            <Tooltip<PopulationData>
              snapTooltipToDatumX
              snapTooltipToDatumY
              showVerticalCrosshair
              showSeriesGlyphs
              renderTooltip={({ tooltipData }) => (
                <div>
                  <div>{tooltipData?.nearestDatum?.key}</div>
                  {populationXYChartXAccesor(tooltipData?.nearestDatum?.datum)}年{', '}
                  {populationXYChartYAccesor(tooltipData?.nearestDatum?.datum)}人
                </div>
              )}
            />
          </XYChart>
        ) : (
          <div className={style.empty}>
            <span>選択した都道府県の人工推移が XY チャートで表示されます。</span>
          </div>
        )
      }
    </ParentSize>
  )
}

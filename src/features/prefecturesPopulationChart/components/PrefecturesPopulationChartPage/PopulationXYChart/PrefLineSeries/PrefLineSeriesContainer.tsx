import { PrefLineSeries } from './PrefLineSeries'
import { usePrefLineSeries, UsePrefLineSeriesProps } from './usePrefLineSeries'

export type PrefLineSeriesContainerProps = UsePrefLineSeriesProps

export const PrefLineSeriesContainer = ({ prefCode }: PrefLineSeriesContainerProps) => {
  const { getPrefLineSeriesProps } = usePrefLineSeries({ prefCode })

  return <PrefLineSeries {...getPrefLineSeriesProps()} />
}

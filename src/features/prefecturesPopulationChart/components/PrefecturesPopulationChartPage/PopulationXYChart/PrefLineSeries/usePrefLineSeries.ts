import { useCallback } from 'react'

import { usePrefColor } from '@/features/prefecturesPopulationChart/store/hooks'
import { Prefecture } from '@/store/services/resasApi'

import { usePrefecturesTotalPopulationData, usePrefName } from '@/store/services/resasApi/hooks'

import { PrefLineSeriesProps } from './PrefLineSeries'

export type UsePrefLineSeriesProps = {
  prefCode: Prefecture['prefCode']
}

export const usePrefLineSeries = ({ prefCode }: UsePrefLineSeriesProps) => {
  const prefName = usePrefName(prefCode)

  const color = usePrefColor(prefCode)

  const { populationData: data } = usePrefecturesTotalPopulationData(prefCode)

  return {
    getPrefLineSeriesProps: useCallback(
      (): PrefLineSeriesProps => ({
        prefName,
        data,
        color,
      }),
      [color, data, prefName]
    ),
  }
}

import { useCallback } from 'react'

import { useSelectedPrefecturesCodes } from '@/features/prefecturesPopulationChart/store/hooks'

import { PopulationXYChartProps } from './PopulationXYChart'

export const usePopulationXYChart = () => {
  const prefCodes = useSelectedPrefecturesCodes()

  return {
    getPopulationXYChartProps: useCallback(
      (): PopulationXYChartProps => ({
        prefCodes,
      }),
      [prefCodes]
    ),
  }
}

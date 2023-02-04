import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'

import { useAppDispatch, useAppSelector } from '@/store'

import {
  selectSelectedPrefecturesIds,
  togglePrefectureId,
} from './prefecturesPopulationChartPageSlice'

export const useSelectedPrefecturesIds = () => useAppSelector(selectSelectedPrefecturesIds)

export const useTogglePrefectureId = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(togglePrefectureId, dispatch), [dispatch])
}

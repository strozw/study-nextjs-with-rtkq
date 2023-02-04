import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'

import { useAppDispatch, useAppSelector } from '@/store'

import { selectSelectedPrefCodes, togglePrefCode } from './prefecturesPopulationChartPageSlice'

export const useSelectedPrefecturesCodes = () => useAppSelector(selectSelectedPrefCodes)

export const useTogglePrefCode = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(togglePrefCode, dispatch), [dispatch])
}

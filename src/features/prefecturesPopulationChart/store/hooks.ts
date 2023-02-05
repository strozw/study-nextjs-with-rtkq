import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'

import { useAppDispatch, useAppSelector } from '@/store'

import {
  selectSelectedPrefCodes,
  selectSelectedPrefCodesColorMap,
  togglePrefCode,
} from './prefecturesPopulationChartPageSlice'

export const useSelectedPrefecturesCodes = () => useAppSelector(selectSelectedPrefCodes)

/**
 * prefCode の選択切り替えの actionCreator を返す
 */
export const useTogglePrefCode = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(togglePrefCode, dispatch), [dispatch])
}

export const useSelectedPrefCodeColors = () => useAppSelector(selectSelectedPrefCodesColorMap)

/**
 * prefCode に対応する color を返す
 */
export const usePrefColor = (prefCode: number) => {
  const codeColorMap = useSelectedPrefCodeColors()

  return codeColorMap.get(prefCode) ?? ''
}

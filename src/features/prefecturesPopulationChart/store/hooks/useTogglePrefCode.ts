import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'

import { useAppDispatch } from '@/store'

import { togglePrefCode } from '../prefecturesPopulationChartPageSlice'

/**
 * prefCode の選択切り替えの actionCreator を返す
 */
export const useTogglePrefCode = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(togglePrefCode, dispatch), [dispatch])
}

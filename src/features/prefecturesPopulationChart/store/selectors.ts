import { createSelector } from '@reduxjs/toolkit'

import { interpolateRainbow } from 'd3-scale-chromatic'

import { RootState } from '@/store'
import { selectPrefecturesNum } from '@/store/services/resasApi/selectors'

/**
 * 選択中の prefCode 一覧を返す
 */
export const selectSelectedPrefCodes = (state: RootState) =>
  state.prefecturesPopulationChartPage.selectedPrefCodes

/**
 * 選択中の prefCode と色の Map を select
 */
export const selectSelectedPrefCodesColorMap = createSelector(
  selectSelectedPrefCodes,
  selectPrefecturesNum,
  (prefCodes, maxPrefNum) => {
    return new Map(prefCodes.map(prefCode => [prefCode, interpolateRainbow(prefCode / maxPrefNum)]))
  }
)

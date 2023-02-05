import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { interpolateRainbow } from 'd3-scale-chromatic'

import { RootState } from '@/store'
import { Prefecture } from '@/store/services/resasApi'
import { selectPrefecturesNum } from '@/store/services/resasApi/selectors'

export type PrefecturesPopulationChartPageState = {
  selectedPrefCodes: number[]
}

export const prefecturesPopulationChartPageInitialState: PrefecturesPopulationChartPageState = {
  selectedPrefCodes: [],
}

export const prefecturesPopulationChartPageSlice = createSlice({
  name: 'prefecturesPopulationChartPage',
  initialState: prefecturesPopulationChartPageInitialState,
  reducers: {
    togglePrefCode: (
      state,
      action: PayloadAction<{ prefCode: Prefecture['prefCode']; checked: boolean }>
    ) => {
      const { prefCode, checked } = action.payload
      const index = state.selectedPrefCodes.indexOf(prefCode)

      if (checked) {
        if (index === -1) {
          state.selectedPrefCodes.push(prefCode)
        }
      } else {
        if (index >= 0) {
          state.selectedPrefCodes.splice(index, 1)
        }
      }

      return state
    },
  },
})

export const { togglePrefCode } = prefecturesPopulationChartPageSlice.actions

export const selectSelectedPrefCodes = (state: RootState) =>
  state.prefecturesPopulationChartPage.selectedPrefCodes

export const selectSelectedPrefCodesColorMap = createSelector(
  selectSelectedPrefCodes,
  selectPrefecturesNum,
  (prefCodes, maxPrefNum) =>
    new Map(prefCodes.map(prefCode => [prefCode, interpolateRainbow(prefCode / maxPrefNum)]))
)

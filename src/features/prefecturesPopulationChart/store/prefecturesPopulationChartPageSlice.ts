import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/store'
import { Prefecture } from '@/store/services/resasApi'

export type PrefecturesPopulationChartPageState = {
  selectedPrefecturesIds: number[]
}

export const prefecturesPopulationChartPageInitialState: PrefecturesPopulationChartPageState = {
  selectedPrefecturesIds: [],
}

export const prefecturesPopulationChartPageSlice = createSlice({
  name: 'prefecturesPopulationChartPage',
  initialState: prefecturesPopulationChartPageInitialState,
  reducers: {
    togglePrefectureId: (
      state,
      action: PayloadAction<{ prefCode: Prefecture['prefCode']; checked: boolean }>
    ) => {
      const { prefCode, checked } = action.payload
      const index = state.selectedPrefecturesIds.indexOf(prefCode)

      if (checked) {
        if (index === -1) {
          state.selectedPrefecturesIds.push(prefCode)
        }
      } else {
        if (index >= 0) {
          state.selectedPrefecturesIds.splice(index, 1)
        }
      }

      return state
    },
  },
})

export const { togglePrefectureId } = prefecturesPopulationChartPageSlice.actions

export const selectSelectedPrefecturesIds = (state: RootState) =>
  state.prefecturesPopulationChartPage.selectedPrefecturesIds

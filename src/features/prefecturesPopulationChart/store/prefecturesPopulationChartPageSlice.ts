import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Prefecture } from '@/store/services/resasApi'

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

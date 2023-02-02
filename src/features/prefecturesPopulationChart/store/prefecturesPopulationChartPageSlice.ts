import { createSlice } from '@reduxjs/toolkit'

export type PrefecturesPopulationChartPageState = {
  selectedPrefecturesIds: string[]
}

export const prefecturesPopulationChartPageInitialState: PrefecturesPopulationChartPageState = {
  selectedPrefecturesIds: [],
}

export const prefecturesPopulationChartPageSlice = createSlice({
  name: 'prefecturesPopulationChartPage',
  initialState: prefecturesPopulationChartPageInitialState,
  reducers: {},
})

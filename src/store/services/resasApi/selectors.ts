import { createSelector } from '@reduxjs/toolkit'

import { emptyPrefectures } from './consts'

import { getV1Prefectures } from './resasApi'

export const selectPrefectures = createSelector(
  getV1Prefectures.select(),
  result => result.data?.result ?? emptyPrefectures
)

export const selectPrefecturesNum = createSelector(selectPrefectures, prefs => prefs.length)

export const selectPrefCodeNameMap = createSelector(
  selectPrefectures,
  prefs => new Map(prefs.map(({ prefCode, prefName }) => [prefCode, prefName]))
)

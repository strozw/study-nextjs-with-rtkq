import { describe, expect, it } from '@jest/globals'

import { createAppStore } from '@/store'

import { togglePrefectureId } from './prefecturesPopulationChartPageSlice'

describe('prefecturesPopulationChartPageInitialState', () => {
  describe('actions', () => {
    describe('togglePrefectureId', () => {
      it('selectedPrefecturesIds に prefCode を追加可能で、追加済みの場合は追加不可', () => {
        const store = createAppStore()

        store.dispatch(togglePrefectureId({ prefCode: 1, checked: true }))

        expect(
          store.getState().prefecturesPopulationChartPage.selectedPrefecturesIds
        ).toStrictEqual([1])

        store.dispatch(togglePrefectureId({ prefCode: 1, checked: true }))

        expect(
          store.getState().prefecturesPopulationChartPage.selectedPrefecturesIds
        ).toStrictEqual([1])
      })

      it('selectedPrefecturesIds に prefCode があるとき、 prefCode を削除可能', () => {
        const store = createAppStore()

        store.dispatch(togglePrefectureId({ prefCode: 1, checked: true }))

        expect(
          store.getState().prefecturesPopulationChartPage.selectedPrefecturesIds
        ).toStrictEqual([1])

        store.dispatch(togglePrefectureId({ prefCode: 1, checked: false }))

        expect(
          store.getState().prefecturesPopulationChartPage.selectedPrefecturesIds
        ).toStrictEqual([])
      })
    })
  })
})

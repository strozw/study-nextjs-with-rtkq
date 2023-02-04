import { describe, expect, it } from '@jest/globals'

import { createAppStore } from '@/store'

import { togglePrefCode } from './prefecturesPopulationChartPageSlice'

describe('prefecturesPopulationChartPageInitialState', () => {
  describe('actions', () => {
    describe('togglePrefectureId', () => {
      it('selectedPrefCodes に prefCode を追加可能で、追加済みの場合は追加不可', () => {
        const store = createAppStore()

        store.dispatch(togglePrefCode({ prefCode: 1, checked: true }))

        expect(store.getState().prefecturesPopulationChartPage.selectedPrefCodes).toStrictEqual([1])

        store.dispatch(togglePrefCode({ prefCode: 1, checked: true }))

        expect(store.getState().prefecturesPopulationChartPage.selectedPrefCodes).toStrictEqual([1])
      })

      it('selectedPrefCodes に prefCode があるとき、 prefCode を削除可能', () => {
        const store = createAppStore()

        store.dispatch(togglePrefCode({ prefCode: 1, checked: true }))

        expect(store.getState().prefecturesPopulationChartPage.selectedPrefCodes).toStrictEqual([1])

        store.dispatch(togglePrefCode({ prefCode: 1, checked: false }))

        expect(store.getState().prefecturesPopulationChartPage.selectedPrefCodes).toStrictEqual([])
      })
    })
  })
})

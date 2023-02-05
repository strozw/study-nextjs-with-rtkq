import { createContext, useCallback, useContext } from 'react'

import {
  useSelectedPrefCodeColors,
  useTogglePrefCode,
} from '@/features/prefecturesPopulationChart/store/hooks'
import { usePrefectures } from '@/store/services/resasApi/hooks'

import { PrefecturesPickerProps } from './PrefecturesPicker'

export const UsePrefecturesPickerContext = createContext({
  usePrefectures,
  useTogglePrefCode,
})

export const usePrefecturesPicker = () => {
  const { usePrefectures, useTogglePrefCode: useTogglePrefectureId } = useContext(
    UsePrefecturesPickerContext
  )

  const { prefectures } = usePrefectures()

  const togglePrefectureId = useTogglePrefectureId()

  const prefCodesColorsMap = useSelectedPrefCodeColors()

  const getPrefecturesPickerProps = useCallback(
    (): PrefecturesPickerProps => ({
      prefectures,
      prefCodesColorsMap,
      onChangeCheckbox: (prefCode, checked) => {
        togglePrefectureId({ prefCode, checked })
      },
    }),
    [prefCodesColorsMap, prefectures, togglePrefectureId]
  )

  return { getPrefecturesPickerProps }
}

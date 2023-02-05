import { createContext, useCallback, useContext } from 'react'

import { useSelectedPrefCodeColors } from '@/features/prefecturesPopulationChart/store/hooks/useSelectedPrefCodeColors'
import { useTogglePrefCode } from '@/features/prefecturesPopulationChart/store/hooks/useTogglePrefCode'
import { usePrefectures } from '@/store/services/resasApi/hooks'

import { PrefecturesPickerProps } from './PrefecturesPicker'

export const UsePrefecturesPickerContext = createContext({
  usePrefectures,
  useTogglePrefCode,
  useSelectedPrefCodeColors,
})

export const usePrefecturesPicker = () => {
  const { usePrefectures, useTogglePrefCode, useSelectedPrefCodeColors } = useContext(
    UsePrefecturesPickerContext
  )

  const { prefectures } = usePrefectures()

  const togglePrefectureId = useTogglePrefCode()

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

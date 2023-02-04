import { createContext, useCallback, useContext } from 'react'

import { useTogglePrefectureId } from '@/features/prefecturesPopulationChart/store/hooks'
import { usePrefectures } from '@/store/services/resasApi/hooks'

import { PrefecturesPickerProps } from './PrefecturesPicker'

export const UsePrefecturesPickerContext = createContext({
  usePrefectures,
  useTogglePrefectureId,
})

export const usePrefecturesPicker = () => {
  const { usePrefectures, useTogglePrefectureId } = useContext(UsePrefecturesPickerContext)

  const { prefectures } = usePrefectures()

  const togglePrefectureId = useTogglePrefectureId()

  const getPrefecturesPickerProps = useCallback(
    (): PrefecturesPickerProps => ({
      prefectures,
      onChangeCheckbox: (prefCode, checked) => {
        togglePrefectureId({ prefCode, checked })
      },
    }),
    [prefectures, togglePrefectureId]
  )

  return { getPrefecturesPickerProps }
}

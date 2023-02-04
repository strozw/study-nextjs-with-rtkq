import { PrefecturesPicker } from './PrefecturesPicker'
import { usePrefecturesPicker } from './usePrefecturesPicker'

export const PrefecturesPickerContainer = () => {
  const { getPrefecturesPickerProps } = usePrefecturesPicker()
  return <PrefecturesPicker {...getPrefecturesPickerProps()} />
}

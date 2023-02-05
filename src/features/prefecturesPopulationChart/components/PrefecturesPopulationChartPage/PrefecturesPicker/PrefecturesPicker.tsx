import { Checkbox } from '@/common/components/Checkbox'
import { Prefecture } from '@/store/services/resasApi'

import * as style from './PrefecturesPicker.css'

export type PrefecturesPickerProps = {
  prefectures: Prefecture[]
  onChangeCheckbox: (_prefCode: Prefecture['prefCode'], _checked: boolean) => void
  prefCodesColorsMap: Map<number, string>
}

export const PrefecturesPicker = ({
  prefectures,
  onChangeCheckbox,
  prefCodesColorsMap,
}: PrefecturesPickerProps) => {
  return (
    <ul className={style.wrapper}>
      {prefectures.map(pref => (
        <li
          className={style.listItem}
          key={pref.prefCode}
          style={{ borderBottomColor: prefCodesColorsMap?.get(pref.prefCode) ?? 'transparent' }}
        >
          <Checkbox
            value={pref.prefCode}
            onChange={event => {
              const { value, checked } = event.currentTarget
              onChangeCheckbox(Number(value), checked)
            }}
          >
            {pref.prefName}
          </Checkbox>
        </li>
      ))}
    </ul>
  )
}

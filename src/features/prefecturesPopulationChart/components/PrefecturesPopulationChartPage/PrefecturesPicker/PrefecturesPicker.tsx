import { Checkbox } from '@/common/components/Checkbox'
import { Prefecture } from '@/store/services/resasApi'

import * as style from './PrefecturesPicker.css'

export type PrefecturesPickerProps = {
  prefectures: Prefecture[]
  onChangeCheckbox: (_prefCode: Prefecture['prefCode'], _checked: boolean) => void
}

export const PrefecturesPicker = ({ prefectures, onChangeCheckbox }: PrefecturesPickerProps) => {
  return (
    <ul className={style.wrapper}>
      {prefectures.map(pref => (
        <li className={style.listItem} key={pref.prefCode}>
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

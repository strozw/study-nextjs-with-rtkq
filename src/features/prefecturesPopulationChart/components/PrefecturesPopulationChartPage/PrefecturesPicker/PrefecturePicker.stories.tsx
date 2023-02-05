import { expect } from '@storybook/jest'
import { userEvent, within } from '@storybook/testing-library'

import { Meta, StoryObj } from '.storybook/types'

import { createPrefCodesColorMap } from '@/features/prefecturesPopulationChart/helpers'
import { prefecturesMock } from '@/store/services/resasApi/test/mocks/data/prefectures'

import { PrefecturesPicker, PrefecturesPickerProps } from './PrefecturesPicker'

type Args = PrefecturesPickerProps

const prefCodesColorsMap = createPrefCodesColorMap(
  prefecturesMock.map(({ prefCode }) => prefCode),
  prefecturesMock.length
)

const meta: Meta<Args> = {
  component: PrefecturesPicker,
  args: {
    prefectures: prefecturesMock,
    prefCodesColorsMap,
  },
  argTypes: {
    onChangeCheckbox: { action: true },
  },
}

export default meta

export const Default: StoryObj<Args> = {
  play: async context => {
    const view = within(context.canvasElement)

    prefecturesMock.map(({ prefName }) => {
      expect(view.getByRole('checkbox', { name: prefName })).toBeVisible()
    })

    const checkbox = view.getByRole('checkbox', { name: prefecturesMock.at(0)?.prefName })

    expect(checkbox).not.toBeChecked()

    await userEvent.click(checkbox)

    expect(checkbox).toBeChecked

    expect(context.args.onChangeCheckbox).toHaveBeenCalled()
  },
}

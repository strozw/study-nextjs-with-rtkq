import { useContext, createContext } from 'react'

import { BaseLayout } from '@/common/components/BaseLayout'
import { Header } from '@/common/components/Header'
import { Section } from '@/common/components/Section'

import * as style from './PrefecturesPopulationChartPage.css'

export const PrefecturesPopulationChartPageContext = createContext({
  PrefecturePicker: () => <form>PrefecturePicker</form>,
  PopulationXYChart: () => <div>PopulationXYChart</div>,
})

export const PrefecturesPopulationChartPage = () => {
  const { PrefecturePicker, PopulationXYChart } = useContext(PrefecturesPopulationChartPageContext)

  return (
    <BaseLayout className={style.wrapper} header={<Header title='都道府県別の人工推移' />}>
      <div>
        <Section className={style.section} title='都道府県の選択'>
          <PrefecturePicker />
        </Section>

        <Section className={style.section} title='人口数'>
          <PopulationXYChart />
        </Section>
      </div>
    </BaseLayout>
  )
}

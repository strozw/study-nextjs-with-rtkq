import Link from 'next/link'

import { BaseLayout } from '@/common/components/BaseLayout'
import { Header } from '@/common/components/Header'
import { Section } from '@/common/components/Section'
import { routingPaths } from '@/routes'

import * as style from './HomePage.css'

export const HomePage = () => {
  return (
    <BaseLayout header={<Header title='Home' />}>
      <Section title='コンテンツ一覧' className={style.section}>
        <ul className={style.linkList}>
          <li>
            <Link href={routingPaths.prefecturePopulationChart}>都道府県別の人工推移</Link>
          </li>
        </ul>
      </Section>
    </BaseLayout>
  )
}

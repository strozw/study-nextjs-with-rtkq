import { faker } from '@faker-js/faker'
import { Factory } from 'fishery'

import { Prefecture } from '@/store/services/resasApi'

export const prefectureFactory = Factory.define<Prefecture>(() => ({
  prefCode: faker.datatype.number(),
  prefName: faker.word.noun({ length: { min: 2, max: 4 } }),
}))

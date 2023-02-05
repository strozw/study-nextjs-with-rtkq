import { faker } from '@faker-js/faker'
import { Factory } from 'fishery'

import { PopulationData } from '../../../types'

export const populationDataFactory = Factory.define<PopulationData>(data => ({
  rate: faker.datatype.number({
    max: 100,
    min: 0,
  }),
  year: data.sequence + 2000,
  value: faker.datatype.number({
    max: 1000000,
    min: 10000,
  }),
}))

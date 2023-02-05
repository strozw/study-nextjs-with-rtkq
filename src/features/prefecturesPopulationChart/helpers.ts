import { interpolateRainbow } from 'd3-scale-chromatic'

import { PopulationData, Prefecture } from '@/store/services/resasApi'

export const populationXYChartXAccesor = (data: PopulationData | undefined) => data?.year

export const populationXYChartYAccesor = (data: PopulationData | undefined) => data?.value

export const createPrefCodesColorMap = (prefCodes: Prefecture['prefCode'][], maxPrefNum: number) =>
  new Map(prefCodes.map(prefCode => [prefCode, interpolateRainbow(prefCode / maxPrefNum)]))

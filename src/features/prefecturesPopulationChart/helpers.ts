import { PopulationData } from '@/store/services/resasApi'

export const populationXYChartXAccesor = (data: PopulationData | undefined) => data?.year

export const populationXYChartYAccesor = (data: PopulationData | undefined) => data?.value

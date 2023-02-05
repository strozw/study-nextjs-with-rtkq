import { useMemo } from 'react'

import { useAppSelector } from '@/store/hooks'

import { emptyPopulationData, emptyPrefectures } from './consts'
import { useGetV1PoplulationCompositionPerYearQuery, useGetV1PrefecturesQuery } from './resasApi'
import { selectPrefCodeNameMap, selectPrefecturesNum } from './selectors'
import { Prefecture } from './types'

export const usePrefectures = () => {
  const { data, isLoading, isError, isSuccess, isFetching, isUninitialized } =
    useGetV1PrefecturesQuery()

  return {
    prefectures: data?.result ?? emptyPrefectures,
    isLoading,
    isError,
    isSuccess,
    isFetching,
    isUninitialized,
  }
}

export const usePrefName = (prefCode: number) => {
  const prefCodeNameMap = useAppSelector(selectPrefCodeNameMap)

  return prefCodeNameMap.get(prefCode) ?? ''
}

export const usePrefecturesNum = () => useAppSelector(selectPrefecturesNum)

export const usePrefecturesTotalPopulationData = (prefCode: Prefecture['prefCode']) => {
  const { data, isLoading, isError, isSuccess, isFetching, isUninitialized } =
    useGetV1PoplulationCompositionPerYearQuery({ prefCode })

  const populationData = useMemo(
    () => data?.result.data.find(({ label }) => label === '総人口')?.data ?? emptyPopulationData,
    [data?.result.data]
  )

  return {
    populationData,
    isLoading,
    isError,
    isSuccess,
    isFetching,
    isUninitialized,
  }
}

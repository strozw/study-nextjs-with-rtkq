import { emptyPrefectures } from './consts'
import { useGetV1PrefecturesQuery } from './resasApi'

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

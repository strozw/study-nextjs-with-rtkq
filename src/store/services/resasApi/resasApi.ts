import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import fetch from 'isomorphic-fetch'
import { HYDRATE } from 'next-redux-wrapper'

import {
  GetV1PopulationCompositionPerYearParams,
  GetV1PopulationCompositionPerYearResponse,
  GetV1PrefecturesResponse,
} from './types'

export const resasApiBaseUrl = 'https://opendata.resas-portal.go.jp'

export const resasApi = createApi({
  baseQuery: fetchBaseQuery({
    fetchFn: fetch,
    baseUrl: resasApiBaseUrl,
    headers: {
      'X-API-KEY': String(process.env.NEXT_PUBLIC_RESAS_API_KEY),
    },
  }),

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },

  tagTypes: [],

  endpoints: builder => ({
    getV1Prefectures: builder.query<GetV1PrefecturesResponse, void>({
      query: () => ({ url: 'api/v1/prefectures' }),
    }),

    getV1PoplulationCompositionPerYear: builder.query<
      GetV1PopulationCompositionPerYearResponse,
      GetV1PopulationCompositionPerYearParams
    >({
      query: args => ({ url: 'api/v1/population/composition/perYear', params: args }),
    }),
  }),
})

export const {
  useGetV1PrefecturesQuery,
  useLazyGetV1PrefecturesQuery,
  useGetV1PoplulationCompositionPerYearQuery,
  useLazyGetV1PoplulationCompositionPerYearQuery,
} = resasApi

export const { getV1Prefectures, getV1PoplulationCompositionPerYear } = resasApi.endpoints

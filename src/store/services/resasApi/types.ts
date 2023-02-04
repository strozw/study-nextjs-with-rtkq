export type Http400BadRequestResponse = '400'

export type Http403ForbiddenResponse = {
  statusCode: '403'
  message: 'Forbidden.'
  description: string
}

export type Http404NotFoundResponse =
  | {
      statusCode: '404'
      message: "404. That's an error."
      description: 'The requested URL /404 was not found on this server.'
    }
  | '404'

export type Http429TooManyRequestsResonse = {
  'message': null
}

export type V1Response<R> = {
  message: string | null
  result: R
}

/**
 * @see {@url https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html}
 */
export type GetV1PrefecturesResponse = V1Response<{ prefCode: number; prefName: string }[]>

/**
 * @see {@url https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html}
 */
export type GetV1PopulationCompositionPerYearParams = {
  prefCode: number
  cityCode: number
  addArea?: number
}

/**
 * @see {@url https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html}
 */
export type GetV1PopulationCompositionPerYearResponse = V1Response<{
  /**
   * 実績値と推計値の区切り年
   */
  boundaryYear: number

  data: {
    /**
     * ラベル
     */
    label: string

    /**
     * データ
     */
    data: {
      /**
       * 年
       */
      year: number

      /**
       * 人口
       */
      value: number

      /**
       * 割合
       * ※ labelが総人口の場合は存在しません。
       */
      rate: number
    }
  }[]
}>

export type Prefecture = GetV1PrefecturesResponse['result'][number]

export type PopulationData = GetV1PopulationCompositionPerYearResponse['result']['data'][number]

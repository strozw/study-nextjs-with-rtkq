export type V1Response<R> = {
  message: string | null
  result: R
}

/**
 * @see {@url https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html}
 */
export type GetV1PrefecturesResponse = V1Response<{ prefCode: string; prefName: string }[]>

/**
 * @see {@url https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html}
 */
export type GetV1PopulationCompositionPerYearParams = {
  prefCode: string
  cityCode: string
  addArea?: string
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

import { rest } from 'msw'

import { resasApiBaseUrl } from '../../../resasApi'

import { prefecturesMock } from '../data/prefectures'

export const getV1PrefecturesHandler = rest.get(
  [resasApiBaseUrl, '/api/v1/prefectures'].join(),
  (_req, res, ctx) => {
    return res(
      ctx.json({
        'message': null,
        'result': prefecturesMock,
      })
    )
  }
)

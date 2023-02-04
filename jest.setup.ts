import { afterAll, beforeAll } from '@jest/globals'

import { mockServer } from './src/test/msw/mockServer'

beforeAll(() => {
  mockServer.listen()
})

afterAll(() => {
  mockServer.close()
})

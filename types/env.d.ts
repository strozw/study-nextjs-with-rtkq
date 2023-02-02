/* eslint-disable no-unused-vars */
declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        RESAS_API_KEY?: string
      }
    }
  }
}

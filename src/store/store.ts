import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { createListenerMiddleware, addListener } from '@reduxjs/toolkit'
import type { TypedStartListening, TypedAddListener } from '@reduxjs/toolkit'
import { resasApi } from './services/resasApi'

export const createAppStore = () => {
  const listenerMiddleware = createListenerMiddleware()

  const store = configureStore({
    reducer: {
      [resasApi.reducerPath]: resasApi.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().prepend(listenerMiddleware.middleware).concat(resasApi.middleware),
  })

  // 最初から listener として登録する必要があるものは、以下を instance を利用して、ここで登録する
  // const appListenerMiddleware = listenerMiddleware as ListenerMiddlewareInstance<
  //   ReturnType<typeof store.getState>,
  //   typeof store.dispatch
  // >

  return store
}

export type AppStore = ReturnType<typeof createAppStore>

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']

export type AppStartListening = TypedStartListening<RootState, AppDispatch>

export type AddAppListenerAction = TypedAddListener<RootState, AppDispatch>

export const addAppListener = addListener as AddAppListenerAction

export const wrapper = createWrapper<AppStore>(createAppStore, { debug: true })

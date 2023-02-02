import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux'

import { addAppListener, AppDispatch, AppStore, RootState } from './store'

export const useAppStore = useStore as () => AppStore

export const useAppSelector = useSelector as TypedUseSelectorHook<RootState>

export const useAppDispatch = useDispatch as () => AppDispatch

export const useAddAppListener = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(dispatch, addAppListener), [dispatch])
}

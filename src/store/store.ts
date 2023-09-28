import { configureStore } from '@reduxjs/toolkit'

import characterReducer from './slice/characterSlice'
import pagingReducer from './slice/pagingSlice'
import errorReducer from './slice/errorSlice'

export const store = configureStore({
  reducer: {
    character: characterReducer,
    paging: pagingReducer,
    error: errorReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

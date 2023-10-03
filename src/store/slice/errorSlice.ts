import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface SerializedError {
  message: string
  status: number | null
}

interface ErrorState {
  message: string
  status: number | null
}

const initialState: ErrorState = {
  message: '',
  status: null
}

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<{ error: SerializedError }>) => {
      state.message = action.payload.error.message
      state.status = action.payload.error.status
    },
    cleanError: () => initialState
  }
})

export const { cleanError, setError } = errorSlice.actions

export const selectError = (state: RootState) => state.error
export default errorSlice.reducer

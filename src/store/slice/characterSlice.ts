import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCharacterCollection } from '../../service/characterService'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import type { Character } from '../../typing/API'

export const getCharacterCollection = createAsyncThunk(
  'character/getCharacterCollection',
  fetchCharacterCollection
)

interface CharacterState {
  collection: Character[]
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: CharacterState = {
  collection: [],
  loading: 'idle'
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        getCharacterCollection.fulfilled,
        (state, action: PayloadAction<Character[]>) => {
          state.collection = action.payload
          state.loading = 'succeeded'
        }
      )
      .addCase(getCharacterCollection.pending, (state, _action) => {
        state.loading = 'pending'
      })
      .addCase(getCharacterCollection.rejected, (state, _action) => {
        state.loading = 'failed'
      })
  }
})

export const selectCharacter = (state: RootState) => state.character
export default counterSlice.reducer

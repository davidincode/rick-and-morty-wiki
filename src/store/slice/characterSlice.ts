import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCharacterCollection } from '../../service/characterService'
import { setPagingInfo } from './pagingSlice'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import type { Character } from '../../typing/API'
import type { FetchCharacterCollectionArgs } from '../../service/characterService'

export const getCharacterCollection = createAsyncThunk(
  'character/getCharacterCollection',
  async ({ name, page }: FetchCharacterCollectionArgs, thunkAPI) => {
    const { collection, paging } = await fetchCharacterCollection({
      name,
      page
    })
    thunkAPI.dispatch(setPagingInfo(paging))

    return collection
  }
)

interface CharacterState {
  collection: Character[]
  targeted: string
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: CharacterState = {
  collection: [],
  targeted: '',
  loading: 'idle'
}

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setTargetedCharacter: (state, action: PayloadAction<string>) => {
      state.targeted = action.payload
    }
  },
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

export const { setTargetedCharacter } = characterSlice.actions

export const selectCharacter = (state: RootState) => state.character
export default characterSlice.reducer

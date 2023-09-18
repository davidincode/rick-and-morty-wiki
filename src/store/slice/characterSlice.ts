import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  fetchCharacterCollection,
  fetchCharacterDetail
} from '../../service/characterService'
import { setPagingInfo } from './pagingSlice'
import { isSerializedError } from '../../util/typing'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import type { Character } from '../../typing/API'
import type { SerializedError } from '../../typing/store'
import type { FetchCharacterCollectionArgs } from '../../service/characterService'
import { AxiosError } from 'axios'

export const getCharacterCollection = createAsyncThunk(
  'character/getCharacterCollection',
  async ({ name, page }: FetchCharacterCollectionArgs, thunkAPI) => {
    try {
      const { collection, paging } = await fetchCharacterCollection({
        name,
        page
      })
      thunkAPI.dispatch(setPagingInfo(paging))
      thunkAPI.dispatch(cleanError())

      return collection
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue({
          message: error.response?.data.error,
          status: error.response?.status ?? 400
        } satisfies SerializedError)
      }

      return thunkAPI.rejectWithValue({
        message: 'Unfortunately, something went wrong!',
        status: 500
      } satisfies SerializedError)
    }
  }
)

export const getCharacterDetail = createAsyncThunk(
  'character/getCharacterDetail',
  async (id: number) => {
    const detailOfCharacter = await fetchCharacterDetail(id)
    return detailOfCharacter
  }
)

interface CharacterState {
  collection: Character[]
  targeted: string
  error?: SerializedError
  detail: Character | null
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: CharacterState = {
  collection: [],
  targeted: '',
  detail: null,
  loading: 'idle'
}

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setTargetedCharacter: (state, action: PayloadAction<string>) => {
      state.targeted = action.payload
    },
    cleanError: state => {
      state.error = undefined
    }
  },
  extraReducers: builder => {
    builder
      .addCase(
        getCharacterCollection.fulfilled,
        (state, action: PayloadAction<Character[] | undefined>) => {
          if (action.payload) {
            state.collection = action.payload
          }
          state.loading = 'succeeded'
        }
      )
      .addCase(getCharacterCollection.pending, (state, _action) => {
        state.loading = 'pending'
      })
      .addCase(getCharacterCollection.rejected, (state, action) => {
        if (action.meta.rejectedWithValue) {
          if (isSerializedError(action.payload)) {
            state.error = action.payload
          }
        }
        state.loading = 'failed'
      })
      .addCase(
        getCharacterDetail.fulfilled,
        (state, action: PayloadAction<Character>) => {
          state.detail = action.payload
          state.loading = 'succeeded'
        }
      )
      .addCase(getCharacterDetail.pending, (state, _action) => {
        state.loading = 'pending'
      })
      .addCase(getCharacterDetail.rejected, (state, _action) => {
        state.loading = 'failed'
      })
  }
})

export const { setTargetedCharacter, cleanError } = characterSlice.actions

export const selectCharacter = (state: RootState) => state.character
export default characterSlice.reducer

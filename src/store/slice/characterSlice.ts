import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  fetchCharacterCollection,
  fetchCharacterDetail
} from '../../service/characterService'
import { setPagingInfo } from './pagingSlice'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import type { Character, Gender, Status, Species, Type } from '../../type/API'
import type { FetchCharacterCollectionArgs } from '../../service/service'
import { cleanError, setError } from './errorSlice'
import { serializeError } from '../../util/error'

export const getCharacterCollection = createAsyncThunk(
  'character/getCharacterCollection',
  async (args: FetchCharacterCollectionArgs, thunkAPI) => {
    try {
      const { collection, paging } = await fetchCharacterCollection(args)
      thunkAPI.dispatch(setPagingInfo(paging))
      thunkAPI.dispatch(cleanError())

      return collection
    } catch (error) {
      const serializedError = serializeError(error)
      thunkAPI.dispatch(setError({ error: serializedError }))
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

export interface Filter {
  name?: string
  gender?: Gender
  status?: Status
  species?: Species
  type?: Type
  [key: string]: string | number | null | undefined
}

interface CharacterState {
  collection: Character[]
  filterBy: Filter
  detail: Character | null
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: CharacterState = {
  collection: [],
  filterBy: {},
  detail: null,
  loading: 'idle'
}

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setFilterBy: (
      state,
      action: PayloadAction<{ by: string; value: string }>
    ) => {
      if (action.payload.by) {
        state.filterBy[action.payload.by] = action.payload.value
      }
    },
    removeFilterBy: (state, action: PayloadAction<{ by: string }>) => {
      const { [action.payload.by]: _, ...newFilter } = state.filterBy
      state.filterBy = newFilter
    },
    clearFilter: state => {
      state.filterBy = {}
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
      .addCase(getCharacterCollection.rejected, (state, _action) => {
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

export const { setFilterBy, removeFilterBy } = characterSlice.actions

export const selectCharacter = (state: RootState) => state.character
export default characterSlice.reducer

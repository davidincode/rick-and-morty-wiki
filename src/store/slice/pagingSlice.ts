import { createSlice } from '@reduxjs/toolkit'
import { getPageNumer } from '../../util/paging'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import type { Info } from '../../typing/API'

export interface PagingState {
  count: number
  pages: number
  current: number
  next: {
    page: number | null
    url: string | null
  }
  prev: {
    page: number | null
    url: string | null
  }
}

const initialState: PagingState = {
  count: 0,
  pages: 0,
  next: {
    page: 2,
    url: null
  },
  prev: {
    page: null,
    url: null
  },
  current: 1
}

export const pagingSlice = createSlice({
  name: 'paging',
  initialState,
  reducers: {
    setPagingInfo: (state, action: PayloadAction<Info>) => {
      const nextPage =
        action.payload.next !== null ? getPageNumer(action.payload.next) : null
      const prevPage =
        action.payload.prev !== null ? getPageNumer(action.payload.prev) : null

      state.count = action.payload.count
      state.pages = action.payload.pages
      state.current = nextPage ? nextPage - 1 : prevPage ? prevPage + 1 : 1
      state.next = { page: nextPage, url: action.payload.next }
      state.prev = { page: prevPage, url: action.payload.prev }
    },
    setNextPage: state => {
      state.current++
    },
    setPrevPage: state => {
      state.current--
    },
    resetPagingInfo: () => initialState
  }
})

export const selectPagingInfo = (state: RootState) => state.paging

export const { setPagingInfo, setNextPage, setPrevPage, resetPagingInfo } =
  pagingSlice.actions
export default pagingSlice.reducer

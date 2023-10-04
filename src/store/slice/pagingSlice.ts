import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { getPageNumberFromURL } from '../../util/pagingUtility'

import type { RootState } from '../store'
import type { Info } from '../../type/API'

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
      const { next, prev, count, pages } = action.payload
      const nextPage = next ? getPageNumberFromURL(next) : null
      const prevPage = prev ? getPageNumberFromURL(prev) : null

      state.count = count
      state.pages = pages
      state.current = nextPage ? nextPage - 1 : prevPage ? prevPage + 1 : 1
      state.next = { page: nextPage, url: next }
      state.prev = { page: prevPage, url: prev }
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

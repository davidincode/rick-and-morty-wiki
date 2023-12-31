import { useCallback } from 'react'
import { debounce } from 'lodash'

import { useAppDispatch } from '../store/hook/useStore'
import { setFilterBy } from '../store/slice/characterSlice'
import { resetPagingInfo } from '../store/slice/pagingSlice'
import type { TFilterSingleValue } from '@util/filterUtility'

export const useSearch = () => {
  const dispatch = useAppDispatch()

  const debouncedSearch = useCallback(
    debounce((characterName: string) => {
      dispatch(resetPagingInfo())
      dispatch(
        setFilterBy({ by: 'name', value: characterName as TFilterSingleValue })
      )
    }, 500),
    [dispatch]
  )

  const searchCharacter = (targetedCharacter: string) => {
    debouncedSearch(targetedCharacter)
  }

  return { searchCharacter }
}

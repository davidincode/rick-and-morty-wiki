import { useCallback } from 'react'
import { debounce } from 'lodash'

import { useAppDispatch } from '../store/hook/useStore'
import { setTargetedCharacter } from '../store/slice/characterSlice'
import { resetPagingInfo } from '../store/slice/pagingSlice'

export const useSearch = () => {
  const dispatch = useAppDispatch()

  const debouncedSearch = useCallback(
    debounce((characterName: string) => {
      dispatch(resetPagingInfo())
      dispatch(setTargetedCharacter(characterName))
    }, 500),
    [dispatch]
  )

  const searchCharacter = (targetedCharacter: string) => {
    debouncedSearch(targetedCharacter)
  }

  return { searchCharacter }
}

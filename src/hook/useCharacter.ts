import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hook/useStore'
import {
  getCharacterCollection,
  selectCharacter
} from '../store/slice/characterSlice'

import { selectPagingInfo } from '../store/slice/pagingSlice'

export const useGetCharacterCollection = () => {
  const dispatch = useAppDispatch()
  const { collection, loading } = useAppSelector(selectCharacter)
  const { current: page } = useAppSelector(selectPagingInfo)

  useEffect(() => {
    dispatch(getCharacterCollection(page))
  }, [page, dispatch])

  const isUninitialized = loading === 'idle'
  const isLoading = loading === 'pending'
  const isError = loading === 'failed'
  const isSuccess = loading === 'succeeded'

  return { collection, isUninitialized, isLoading, isError, isSuccess }
}

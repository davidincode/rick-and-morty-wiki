import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hook/useStore'
import {
  getCharacterCollection,
  selectCharacter
} from '../store/slice/characterSlice'

export const useGetCharacterCollection = () => {
  const dispatch = useAppDispatch()
  const { collection, loading } = useAppSelector(selectCharacter)

  useEffect(() => {
    dispatch(getCharacterCollection())
  }, [dispatch])

  const isUninitialized = loading === 'idle'
  const isLoading = loading === 'pending'
  const isError = loading === 'failed'
  const isSuccess = loading === 'succeeded'

  return { collection, isUninitialized, isLoading, isError, isSuccess }
}

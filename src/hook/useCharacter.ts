import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hook/useStore'
import {
  getCharacterCollection,
  getCharacterDetail,
  selectCharacter
} from '../store/slice/characterSlice'

import { selectPagingInfo } from '../store/slice/pagingSlice'

export const useGetCharacterCollection = () => {
  const dispatch = useAppDispatch()
  const {
    collection,
    targeted: name,
    loading
  } = useAppSelector(selectCharacter)
  const { current: page } = useAppSelector(selectPagingInfo)

  useEffect(() => {
    dispatch(getCharacterCollection({ name, page }))
  }, [name, page, dispatch])

  const isUninitialized = loading === 'idle'
  const isLoading = loading === 'pending'
  const isError = loading === 'failed'
  const isSuccess = loading === 'succeeded'

  return { collection, isUninitialized, isLoading, isError, isSuccess }
}

export const useGetCharacterDetail = (characterId: number) => {
  const dispatch = useAppDispatch()
  const { detail: characterDetail, loading } = useAppSelector(selectCharacter)

  useEffect(() => {
    dispatch(getCharacterDetail(characterId))
  }, [dispatch])

  const isUninitialized = loading === 'idle'
  const isLoading = loading === 'pending'
  const isError = loading === 'failed'
  const isSuccess = loading === 'succeeded'

  return { characterDetail, isUninitialized, isLoading, isError, isSuccess }
}

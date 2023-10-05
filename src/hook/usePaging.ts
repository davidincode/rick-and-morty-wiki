import { useAppDispatch, useAppSelector } from '@store/hook/useStore'
import {
  selectPagingInfo,
  setNextPage,
  setPrevPage
} from '@store/slice/pagingSlice'

export const usePaging = () => {
  const dispatch = useAppDispatch()
  const pagingInfo = useAppSelector(selectPagingInfo)

  const useSetNextPage = () => {
    dispatch(setNextPage())
  }

  const useSetPrevPage = () => {
    dispatch(setPrevPage())
  }

  return { pagingInfo, useSetNextPage, useSetPrevPage }
}

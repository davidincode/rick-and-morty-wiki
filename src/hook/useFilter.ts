import { useAppDispatch, useAppSelector } from '../store/hook/useStore'
import {
  removeFilterBy,
  selectCharacter,
  setFilterBy
} from '../store/slice/characterSlice'
import type { TFilterOption, TFilterValue } from '../util/filter'

interface TFilter {
  by: TFilterOption
  value: TFilterValue
}

export const useFilter = () => {
  const dispatch = useAppDispatch()

  const { filterBy } = useAppSelector(selectCharacter)

  const filterCharacterCollection = ({ by, value }: TFilter) => {
    if (value !== 'None') {
      dispatch(setFilterBy({ by, value }))
    }
  }

  const unsetFilter = ({ by }: { by: TFilterOption }) => {
    dispatch(removeFilterBy({ by }))
  }

  return { filterBy, filterCharacterCollection, unsetFilter }
}

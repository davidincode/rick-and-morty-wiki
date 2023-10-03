import { useAppDispatch, useAppSelector } from '../store/hook/useStore'
import {
  removeFilterBy,
  selectCharacter,
  setFilterBy
} from '../store/slice/characterSlice'
import type { TFilterOption, TFilterSingleValue } from '../util/filterUtility'

interface TSingleFilter {
  by: TFilterOption
  value: TFilterSingleValue
}

export const useFilter = () => {
  const dispatch = useAppDispatch()

  const { filterBy: activeFilterMap } = useAppSelector(selectCharacter)

  const updateFilter = ({ by, value }: TSingleFilter) => {
    if (value !== 'None') {
      dispatch(setFilterBy({ by, value }))
    }
  }

  const unsetFilter = ({ by }: { by: TFilterOption }) => {
    dispatch(removeFilterBy({ by }))
  }

  return { activeFilterMap, updateFilter, unsetFilter }
}

import { useAppDispatch, useAppSelector } from '../store/hook/useStore'
import { selectCharacter, setFilterBy } from '../store/slice/characterSlice'
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

  return { filterBy, filterCharacterCollection }
}

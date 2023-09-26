import type { Species, Type, Gender, Status } from '../typing/API'
import { useAppDispatch, useAppSelector } from '../store/hook/useStore'
import { setFilterBy } from '../store/slice/characterSlice'

interface FilterOptionProps {
  title: string
  data: Array<Species | Type | Gender | Status>
}

const FilterOption = ({ title, data }: FilterOptionProps) => {
  const dispatch = useAppDispatch()
  const { filterBy } = useAppSelector(state => state.character)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== 'none') {
      dispatch(setFilterBy({ by: title, value: e.target.value }))
    }
  }

  return (
    <div>
      <p>{title}</p>
      <select onChange={handleChange} value={String(filterBy[title])}>
        <option value='none'></option>
        {data.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}
export default FilterOption

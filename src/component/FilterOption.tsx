import { useFilter } from '../hook/useFilter'
import type { TFilterOption, TFilterValues, TFilterValue } from '../util/filter'

interface FilterOptionProps {
  option: TFilterOption
  values: TFilterValues
}

const FilterOption = ({ option, values }: FilterOptionProps) => {
  const { filterBy, filterCharacterCollection } = useFilter()

  return (
    <div>
      <p>{option}</p>
      <select
        onChange={e =>
          filterCharacterCollection({
            by: option,
            value: e.target.value as TFilterValue
          })
        }
        value={String(filterBy[option])}
      >
        <option value='None'></option>
        {values.map((value, index) => (
          <option
            key={index}
            value={value}
            style={{ textTransform: 'capitalize' }}
          >
            {value}
          </option>
        ))}
      </select>
    </div>
  )
}
export default FilterOption

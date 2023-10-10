import { useError } from '@hook/useError'
import { useFilter } from '@hook/useFilter'

// Types
import type {
  TFilterOption,
  TFilterValueList,
  TFilterSingleValue
} from '@util/filterUtility'

interface FilterOptionConfig {
  option: TFilterOption
  valueList: TFilterValueList
}

const FilterOption = ({ option, valueList }: FilterOptionConfig) => {
  const { activeFilterMap, updateFilter } = useFilter()
  const { isNotFoundError } = useError()

  const handleSelectFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateFilter({
      by: option,
      value: e.target.value as TFilterSingleValue
    })
  }

  return (
    <div>
      <p style={{ textTransform: 'capitalize' }}>{option}</p>
      <select
        disabled={isNotFoundError}
        onChange={handleSelectFilter}
        value={String(activeFilterMap[option])}
      >
        <option value='None'></option>
        {valueList.map((value, index) => (
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

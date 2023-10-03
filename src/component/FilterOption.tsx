import { useFilter } from '../hook/useFilter'
import type {
  TFilterOption,
  TFilterValueList,
  TFilterSingleValue
} from '../util/filterUtility'

interface FilterOptionConfig {
  option: TFilterOption
  valueList: TFilterValueList
}

const FilterOption = ({ option, valueList }: FilterOptionConfig) => {
  const { activeFilterMap, updateFilter } = useFilter()

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

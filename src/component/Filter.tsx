import { characterFilterMap } from '@util/filterUtility'
import FilterOption from './FilterOption'

const Filter = () => {
  return (
    <div>
      {Array.from(characterFilterMap).map(
        ([filterOption, filterValueList], index) => (
          <FilterOption
            key={index}
            option={filterOption}
            valueList={filterValueList}
          />
        )
      )}
    </div>
  )
}

export default Filter

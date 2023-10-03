import { characterFilterMap } from '../util/filterUtility'
import FilterOption from './FilterOption'

const Filter = () => {
  return (
    <div>
      {Array.from(characterFilterMap).map(
        ([filterOption, filterValueList], index) => (
          <FilterOption
            key={index}
            option={filterOption}
            values={filterValueList}
          />
        )
      )}
    </div>
  )
}

export default Filter

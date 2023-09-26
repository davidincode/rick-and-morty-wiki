import { filterList } from '../util/filterData'
import FilterOption from './FilterOption'

const Filter = () => {
  return (
    <div>
      {Array.from(filterList).map(([filterTitle, filterData], index) => (
        <FilterOption key={index} title={filterTitle} data={filterData} />
      ))}
    </div>
  )
}

export default Filter

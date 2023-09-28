import { useFilter } from '../hook/useFilter'
import type { Filter } from '../store/slice/characterSlice'
import type { TFilterOption } from '../util/filter'

interface ActiveFilterProps {
  activeFilters: Filter
}

const ActiveFilters = ({ activeFilters }: ActiveFilterProps) => {
  const { unsetFilter } = useFilter()
  return (
    <>
      {Object.entries(activeFilters).length > 0 &&
        Object.entries(activeFilters).map(([filterOption, value]) => (
          <p style={{ textTransform: 'capitalize' }} key={filterOption}>
            {filterOption}: {value}
            <button
              onClick={() => unsetFilter({ by: filterOption as TFilterOption })}
            >
              Delete
            </button>
          </p>
        ))}
    </>
  )
}

export default ActiveFilters

import { useFilter } from '@hook/useFilter'

// Types
import type { TFilterMap } from '@store/slice/characterSlice'
import type { TFilterOption } from '@util/filterUtility'

interface ActiveFilterConfig {
  filterMap: TFilterMap
}

const ActiveFilter = ({ filterMap }: ActiveFilterConfig) => {
  const { unsetFilter } = useFilter()
  return (
    <>
      {Object.entries(filterMap).length > 0 &&
        Object.entries(filterMap).map(
          ([filterOption, filterValue]) =>
            filterOption !== 'name' && (
              <p style={{ textTransform: 'capitalize' }} key={filterOption}>
                {filterOption}: {filterValue}
                <button
                  onClick={() =>
                    unsetFilter({ by: filterOption as TFilterOption })
                  }
                >
                  Delete
                </button>
              </p>
            )
        )}
    </>
  )
}

export default ActiveFilter

import { usePaging } from '@hook/usePaging'
const Paging = () => {
  const { pagingInfo, useSetNextPage, useSetPrevPage } = usePaging()
  const { count, prev, current, next, pages } = pagingInfo
  return (
    count > 0 && (
      <div>
        {prev.page && <button onClick={useSetPrevPage}>Prev</button>}
        {current} of {pages}
        {next.page && <button onClick={useSetNextPage}>Next</button>}
      </div>
    )
  )
}

export default Paging

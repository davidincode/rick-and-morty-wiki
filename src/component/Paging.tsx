import { usePaging } from '../hook/usePaging'
const Paging = () => {
  const { pagingInfo, useSetNextPage, useSetPrevPage } = usePaging()
  return (
    pagingInfo.count > 0 && (
      <div>
        {pagingInfo.prev.page && <button onClick={useSetPrevPage}>Prev</button>}
        {pagingInfo.current} of {pagingInfo.pages}
        {pagingInfo.next.page && <button onClick={useSetNextPage}>Next</button>}
      </div>
    )
  )
}

export default Paging

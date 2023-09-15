import {
  selectPagingInfo,
  setNextPage,
  setPrevPage
} from '../store/slice/pagingSlice'
import { useAppDispatch, useAppSelector } from '../store/hook/useStore'

const Paging = () => {
  const dispatch = useAppDispatch()
  const pagingInfo = useAppSelector(selectPagingInfo)
  return (
    <div>
      {pagingInfo.prev.page && (
        <button onClick={() => dispatch(setPrevPage())}>Prev</button>
      )}
      {pagingInfo.current} of {pagingInfo.pages}
      {pagingInfo.next.page && (
        <button onClick={() => dispatch(setNextPage())}>Next</button>
      )}
    </div>
  )
}

export default Paging

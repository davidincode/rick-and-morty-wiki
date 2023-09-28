import { useAppDispatch, useAppSelector } from '../store/hook/useStore'
import { cleanError, selectError } from '../store/slice/errorSlice'

export const useError = () => {
  const dispatch = useAppDispatch()
  const error = useAppSelector(selectError)

  const clearError = () => {
    dispatch(cleanError())
  }

  return { errorStatus: error.status, errorMessage: error.message, clearError }
}

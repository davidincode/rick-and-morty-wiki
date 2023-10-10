import { useAppDispatch, useAppSelector } from '@store/hook/useStore'
import { cleanError, selectError } from '@store/slice/errorSlice'

export const useError = () => {
  const dispatch = useAppDispatch()
  const error = useAppSelector(selectError)

  const clearError = () => {
    dispatch(cleanError())
  }

  const isBadRequestError = error.status === 400
  const isServerError = error.status === 500
  const isNotFoundError = error.status === 404

  return {
    isError: error.message !== '' && error.status !== null,
    isBadRequestError,
    isServerError,
    isNotFoundError,
    errorStatus: error.status,
    errorMessage: error.message,
    clearError
  }
}

import { AxiosError } from 'axios'
import type { SerializedError } from '@store/slice/errorSlice'

export const serializeError = (error: unknown): SerializedError => {
  const isAxiosError = error instanceof AxiosError
  const generalErrorMessage = 'Unfortunately, something went wrong!'

  if (isAxiosError) {
    return {
      message: error.response?.data.error ?? generalErrorMessage,
      status: error.response?.status ?? 400
    }
  }

  return {
    message: generalErrorMessage,
    status: 500
  }
}

export const isSerializedError = (
  payload: unknown
): payload is SerializedError => {
  return (
    typeof payload === 'object' &&
    payload !== null &&
    'message' in payload &&
    'status' in payload
  )
}

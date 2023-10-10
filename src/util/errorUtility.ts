import { AxiosError } from 'axios'
import type { SerializedError } from '@store/slice/errorSlice'

export const serializeError = (error: unknown): SerializedError => {
  const isAxiosError = error instanceof AxiosError

  if (isAxiosError) {
    if (error.response?.status === 404) {
      return {
        message:
          'Unfortunately, the character you are looking for does not exist',
        status: 404
      }
    }

    if (error.response?.status === 400) {
      return {
        message:
          'Something went wrong on our part, but we are working to fix it',
        status: 400
      }
    }

    return {
      message:
        error.response?.data.error ?? 'Unfortunately, something went wrong!',
      status: error.response?.status ?? 500
    }
  }

  return {
    message: 'Unfortunately, something went wrong!',
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

import { AxiosError } from 'axios'
import type { SerializedError } from '../type/store'

export const serializeError = (error: unknown): SerializedError => {
  if (error instanceof AxiosError) {
    return {
      message: error.response?.data.error,
      status: error.response?.status ?? 400
    }
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      status: 400
    }
  }

  return {
    message: 'Unfortunately, something went wrong!',
    status: 500
  }
}

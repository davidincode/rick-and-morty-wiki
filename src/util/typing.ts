import type { SerializedError } from '../typing/store'

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

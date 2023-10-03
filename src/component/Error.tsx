import { useRef } from 'react'
import { useError } from '../hook/useError'

const Error = () => {
  const { errorStatus, errorMessage, clearError } = useError()
  const dialogRef: React.MutableRefObject<HTMLDialogElement | null> =
    useRef(null)

  const handleCloseModal = () => {
    if (dialogRef.current !== null) {
      clearError()
      dialogRef.current.close()
    }
  }

  if (errorStatus === 404) {
    return (
      <div>
        <p>Character not found</p>
        <button onClick={clearError}>Close</button>
      </div>
    )
  }

  if (errorStatus !== 404) {
    return (
      <dialog ref={dialogRef} open={errorStatus !== null}>
        <p>{errorMessage}</p>
        <button onClick={handleCloseModal}>Close</button>
      </dialog>
    )
  }
}

export default Error

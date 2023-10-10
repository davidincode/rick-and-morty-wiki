import { useEffect, useRef } from 'react'
import { useError } from '@hook/useError'

const Error = () => {
  const {
    isBadRequestError,
    isServerError,
    isNotFoundError,
    errorStatus,
    errorMessage,
    clearError
  } = useError()
  const dialogRef: React.MutableRefObject<HTMLDialogElement | null> =
    useRef(null)

  useEffect(() => {
    if (isServerError || isBadRequestError) {
      dialogRef.current?.showModal()
    }
  }, [isServerError, isBadRequestError])

  const handleCloseModal = () => {
    if (dialogRef.current !== null) {
      clearError()
      dialogRef.current.close()
      window.location.reload()
    }
  }

  if (isNotFoundError) {
    return <p>{errorMessage}</p>
  }

  if (isServerError || isBadRequestError) {
    return (
      <dialog ref={dialogRef}>
        <h4>Error {errorStatus}</h4>
        <p>{errorMessage}</p>
        <button onClick={handleCloseModal}>Close</button>
      </dialog>
    )
  }
}

export default Error

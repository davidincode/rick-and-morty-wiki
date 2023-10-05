import { useParams } from 'react-router-dom'
import { useGetCharacterDetail } from '@hook/useCharacter'

const CharacterDetail = () => {
  const { characterDetail, isLoading, isError } = useGetCharacterDetail(
    parseInt(useParams().id!)
  )

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Unfortunately, something went wrong!</p>
  }

  return (
    <main>
      <h1>{characterDetail?.name}</h1>
      <img
        src={characterDetail?.image}
        alt={`Photo of ${characterDetail?.name}`}
      />
      <div>
        <p>Last Known Location: {characterDetail?.location.name}</p>
        <p>First Seen In: {characterDetail?.firstSeenIn}</p>
      </div>
    </main>
  )
}

export default CharacterDetail

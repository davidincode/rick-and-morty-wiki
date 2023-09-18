import { useNavigate } from 'react-router-dom'
import type { Character } from '../typing/API'
import type { SerializedError } from '../typing/store'

interface CharacterGridProps {
  collection: Character[]
  error?: SerializedError
}

const CharacterGrid = ({ collection, error }: CharacterGridProps) => {
  const navigate = useNavigate()
  return (
    <ul>
      {error?.status === 404 && <p>Character not found</p>}
      {collection.map(character => (
        <li key={character.id}>
          <h1>{character.name}</h1>
          <img src={character.image} alt={`Photo of ${character.name}`} />
          <div>
            <p>Last Knwon Location: {character.location.name}</p>
            <p>First Seen In: {character.firstSeenIn}</p>
          </div>
          <button onClick={() => navigate(`/character/${character.id}`)}>
            View More
          </button>
        </li>
      ))}
    </ul>
  )
}

export default CharacterGrid

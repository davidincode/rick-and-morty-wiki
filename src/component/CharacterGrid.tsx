import { useNavigate } from 'react-router-dom'
import type { Character } from '../type/API'

interface CharacterGridProps {
  collection: Character[]
}

const CharacterGrid = ({ collection }: CharacterGridProps) => {
  const navigate = useNavigate()
  return (
    <ul>
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

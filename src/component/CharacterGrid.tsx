import type { Character } from '../typing/API'

interface CharacterGridProps {
  collection: Character[]
}

const CharacterGrid = ({ collection }: CharacterGridProps) => {
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
        </li>
      ))}
    </ul>
  )
}

export default CharacterGrid

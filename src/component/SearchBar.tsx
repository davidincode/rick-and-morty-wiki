import { useSearch } from '../hook/useSearch'

const SearchBar = () => {
  const { characterName, useSearchCharacter } = useSearch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    useSearchCharacter(e.target.value)
  }

  return <input type='text' value={characterName} onChange={handleChange} />
}

export default SearchBar

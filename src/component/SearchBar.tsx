import { useState } from 'react'
import { useSearch } from '../hook/useSearch'

const SearchBar = () => {
  const [characterName, setCharacterName] = useState('')
  const { useSearchCharacter } = useSearch()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterName(e.target.value)
    useSearchCharacter(e.target.value)
  }
  return <input type='text' value={characterName} onChange={handleChange} />
}

export default SearchBar

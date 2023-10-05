import { useState } from 'react'
import { useSearch } from '@hook/useSearch'

const SearchBar = () => {
  const [characterName, setCharacterName] = useState('')
  const { searchCharacter } = useSearch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterName(e.target.value)
    searchCharacter(e.target.value)
  }

  return <input type='text' value={characterName} onChange={handleChange} />
}

export default SearchBar

import axios from 'axios'

import type { RickAndMortyAPIResponse, Character, Episode } from '../typing/API'

const API_BASE_URL = 'https://rickandmortyapi.com/api'

export const fetchCharacterCollection = async () => {
  const { data }: { data: RickAndMortyAPIResponse } = await axios.get(
    `${API_BASE_URL}/character`
  )

  const characterCollection: Character[] = await Promise.all(
    data.results.map(async character => {
      const { data }: { data: Episode } = await axios.get(character.episode[0])
      return { ...character, firstSeenIn: data.name }
    })
  )

  return characterCollection
}

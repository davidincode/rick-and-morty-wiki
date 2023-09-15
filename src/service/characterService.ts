import axios from 'axios'
import type { Character, Episode, RickAndMortyAPIResponse } from '../typing/API'

const API_BASE_URL = 'https://rickandmortyapi.com/api'

export const fetchCharacterCollection = async (page: number) => {
  const { data }: { data: RickAndMortyAPIResponse } = await axios.get(
    `${API_BASE_URL}/character?page=${page}`
  )

  const collection: Character[] = await Promise.all(
    data.results.map(async character => {
      const { data }: { data: Episode } = await axios.get(character.episode[0])
      return { ...character, firstSeenIn: data.name }
    })
  )

  return { collection, paging: data.info }
}

import axios from 'axios'
import type { Character, Episode, RickAndMortyAPIResponse } from '../typing/API'

const API_BASE_URL = 'https://rickandmortyapi.com/api'

const formatCollectionWithFirstSeenIn = async (
  collection: Character[]
): Promise<Character[]> => {
  return await Promise.all(
    collection.map(async character => {
      const { data }: { data: Episode } = await axios.get(character.episode[0])
      return { ...character, firstSeenIn: data.name }
    })
  )
}

export const buildEndpoint = ({ name, page }: FetchCharacterCollectionArgs) => {
  const url = new URL(`${API_BASE_URL}/character`)

  if (name) {
    url.searchParams.set('name', name)
  }

  if (page) {
    url.searchParams.set('page', String(page))
  }

  return url.toString()
}

export interface FetchCharacterCollectionArgs {
  name?: string | null
  page?: number | null
}

export const fetchCharacterCollection = async ({
  name,
  page
}: FetchCharacterCollectionArgs) => {
  const endpoint = buildEndpoint({ name, page })
  const { data }: { data: RickAndMortyAPIResponse } = await axios.get(endpoint)

  const collection = await formatCollectionWithFirstSeenIn(data.results)

  return { collection, paging: data.info }
}

export const fetchCharacterDetail = async (characterId: number) => {
  const { data }: { data: Character } = await axios.get(
    `${API_BASE_URL}/character/${characterId}`
  )

  return data
}

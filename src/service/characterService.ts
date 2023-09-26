import axios from 'axios'
import type {
  Character,
  Episode,
  RickAndMortyAPIResponse,
  Species,
  Gender,
  Status,
  Type
} from '../typing/API'

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

export const buildEndpoint = (args: FetchCharacterCollectionArgs) => {
  const url = new URL(`${API_BASE_URL}/character`)
  for (const key in args) {
    if (args[key]) {
      url.searchParams.append(key, String(args[key]))
    }
  }
  console.log(url.toString())
  return url.toString()
}

export interface FetchCharacterCollectionArgs {
  name?: string | null
  page?: number | null
  species?: Species | null
  type?: Type | null
  gender?: Gender | null
  status?: Status | null
  [key: string]: string | number | null | undefined
}

export const fetchCharacterCollection = async (
  args: FetchCharacterCollectionArgs
) => {
  const endpoint = buildEndpoint(args)
  const { data }: { data: RickAndMortyAPIResponse } = await axios.get(endpoint)

  const collection = await formatCollectionWithFirstSeenIn(data.results)

  return { collection, paging: data.info }
}

export const fetchCharacterDetail = async (characterId: number) => {
  const { data }: { data: Character } = await axios.get(
    `${API_BASE_URL}/character/${characterId}`
  )

  const collection = await formatCollectionWithFirstSeenIn([data])

  return collection[0]
}

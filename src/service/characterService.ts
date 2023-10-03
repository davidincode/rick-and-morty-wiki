import axios from 'axios'
import type { Character, Episode, RickAndMortyAPIResponse } from '../type/API'
import type { TFilterMap } from '../store/slice/characterSlice'

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

export const buildEndpoint = (parameterMap: TFilterMap) => {
  const url = new URL(`${API_BASE_URL}/character`)
  for (const param in parameterMap) {
    if (parameterMap[param] !== null) {
      url.searchParams.append(param, String(parameterMap[param]))
    }
  }
  return url.toString()
}

export const fetchCharacterCollection = async (parameterMap: TFilterMap) => {
  const ENDPOINT = buildEndpoint(parameterMap)

  const { data }: { data: RickAndMortyAPIResponse } = await axios.get(ENDPOINT)
  const collection = await formatCollectionWithFirstSeenIn(data.results)

  return { collection, paging: data.info }
}

export const fetchCharacterDetail = async (characterId: number) => {
  const { data }: { data: Character } = await axios.get(
    `${API_BASE_URL}/character/${characterId}`
  )
  const singleItemCollection = await formatCollectionWithFirstSeenIn([data])

  return singleItemCollection[0]
}

import type { TFilterMap } from '../store/slice/characterSlice'
import type { Species, Type, Gender, Status } from '../type/API'

export const characterGender: Gender[] = [
  'Female',
  'Male',
  'Genderless',
  'Unknown'
]

export const characterStatus: Status[] = ['Alive', 'Dead', 'Unknown']

export const characterSpecies: Species[] = [
  'Human',
  'Alien',
  'Humanoid',
  'unknown',
  'Poopybutthole',
  'Mythological Creature',
  'Robot',
  'Animal',
  'Disease',
  'Cronenberg'
]

export const characterType: Type[] = [
  'Genetic experiment',
  'Superhuman (Ghost trains summoner)',
  'Parasite',
  'Human with antennae',
  'Human with ants in his eyes'
]

export type TFilterOption = keyof TFilterMap
export type TFilterValueList = Species[] | Type[] | Gender[] | Status[]
export type TFilterSingleValue = Species | Type | Gender | Status | 'None'

export const characterFilterMap = new Map<TFilterOption, TFilterValueList>([
  ['species', characterSpecies],
  ['type', characterType],
  ['gender', characterGender],
  ['status', characterStatus]
])

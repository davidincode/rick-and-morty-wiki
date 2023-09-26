import type { Species, Type, Gender, Status } from '../typing/API'

export const gender: Gender[] = ['Female', 'Male', 'Genderless', 'Unknown']

export const status: Status[] = ['Alive', 'Dead', 'Unknown']

export const species: Species[] = [
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

export const types: Type[] = [
  'Genetic experiment',
  'Superhuman (Ghost trains summoner)',
  'Parasite',
  'Human with antennae',
  'Human with ants in his eyes'
]

export const filterList = new Map<
  string,
  Array<Species | Type | Gender | Status>
>([
  ['species', species],
  ['type', types],
  ['gender', gender],
  ['status', status]
])

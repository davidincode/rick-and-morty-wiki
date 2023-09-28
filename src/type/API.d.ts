export interface RickAndMortyAPIResponse {
  info: Info
  results: Character[]
}

export interface Info {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export interface Character {
  id: number
  name: string
  status: Status
  species: Species
  type: string
  gender: Gender
  origin: Location
  location: Location
  image: string
  episode: string[]
  url: string
  created: Date
  firstSeenIn?: string
}

export interface Location {
  name: string
  url: string
}

export interface Episode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: Date
}

export type Gender = 'Female' | 'Male' | 'Genderless' | 'Unknown'
export type Status = 'Alive' | 'Dead' | 'Unknown'
export type Species =
  | 'Human'
  | 'Alien'
  | 'Humanoid'
  | 'unknown'
  | 'Poopybutthole'
  | 'Mythological Creature'
  | 'Robot'
  | 'Animal'
  | 'Disease'
  | 'Cronenberg'
export type Type =
  | 'Genetic experiment'
  | 'Superhuman (Ghost trains summoner)'
  | 'Parasite'
  | 'Human with antennae'
  | 'Human with ants in his eyes'

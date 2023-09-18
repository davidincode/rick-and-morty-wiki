import CharacterGrid from '../component/CharacterGrid'
import Paging from '../component/Paging'
import SearchBar from '../component/SearchBar'

import { useGetCharacterCollection } from '../hook/useCharacter'

const Home = () => {
  const { collection, isLoading, error } = useGetCharacterCollection()

  if (error?.status === 500) {
    return <div>{error.message}</div>
  }

  return (
    <>
      <SearchBar />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Paging />
          <CharacterGrid collection={collection} error={error} />
        </>
      )}
    </>
  )
}

export default Home

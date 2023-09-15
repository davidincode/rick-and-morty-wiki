import CharacterGrid from '../component/CharacterGrid'
import Paging from '../component/Paging'
import SearchBar from '../component/SearchBar'

import { useGetCharacterCollection } from '../hook/useCharacter'

const Home = () => {
  const { collection, isLoading, isError } = useGetCharacterCollection()

  if (isError) {
    return <div>Unfortunately, something went wrong!</div>
  }
  return (
    <>
      <SearchBar />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Paging />
          <CharacterGrid collection={collection} />
        </>
      )}
    </>
  )
}

export default Home

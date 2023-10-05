import CharacterGrid from '@component/CharacterGrid'
import Filter from '@component/Filter'
import Paging from '@component/Paging'
import SearchBar from '@component/SearchBar'
import ActiveFilter from '@component/ActiveFilter'

import { useGetCharacterCollection } from '../hook/useCharacter'
const Home = () => {
  const {
    collection,
    filterBy: activeFilterMap,
    isLoading
  } = useGetCharacterCollection()

  return (
    <>
      <SearchBar />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Paging />
          <ActiveFilter filterMap={activeFilterMap} />
          <CharacterGrid collection={collection} />
          <Filter />
        </>
      )}
    </>
  )
}

export default Home

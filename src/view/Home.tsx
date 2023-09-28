import CharacterGrid from '../component/CharacterGrid'
import Filter from '../component/Filter'
import Paging from '../component/Paging'
import SearchBar from '../component/SearchBar'
import ActiveFilters from '../component/ActiveFilters'
import Error from '../component/Error'

import { useGetCharacterCollection } from '../hook/useCharacter'
import { useAppSelector } from '../store/hook/useStore'
import { selectError } from '../store/slice/errorSlice'
const Home = () => {
  const { collection, filterBy, isLoading } = useGetCharacterCollection()
  const error = useAppSelector(selectError)

  return (
    <>
      <SearchBar />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {error.status !== null && <Error />}
          <Paging />
          <ActiveFilters activeFilters={filterBy} />
          <CharacterGrid collection={collection} />
          <Filter />
        </>
      )}
    </>
  )
}

export default Home

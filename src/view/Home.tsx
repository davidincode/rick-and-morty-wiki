import CharacterGrid from '../component/CharacterGrid'
import Filter from '../component/Filter'
import Paging from '../component/Paging'
import SearchBar from '../component/SearchBar'
import { removeFilterBy } from '../store/slice/characterSlice'

import { useGetCharacterCollection } from '../hook/useCharacter'
import { useAppDispatch } from '../store/hook/useStore'
const Home = () => {
  const { collection, filterBy, isLoading, error } = useGetCharacterCollection()
  const dispatch = useAppDispatch()

  const handleDetele = (key: string) => {
    dispatch(removeFilterBy({ by: key }))
  }

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
          {Object.entries(filterBy).length > 0 &&
            Object.entries(filterBy).map(([key, value]) => (
              <p key={key}>
                {key}: {value}
                <button onClick={() => handleDetele(key)}>Delete</button>
              </p>
            ))}
          <CharacterGrid collection={collection} error={error} />
          <Filter />
        </>
      )}
    </>
  )
}

export default Home

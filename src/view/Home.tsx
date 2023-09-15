import CharacterGrid from '../component/CharacterGrid'
import Paging from '../component/Paging'

import { useGetCharacterCollection } from '../hook/useCharacter'

const Home = () => {
  const { collection, isLoading, isError } = useGetCharacterCollection()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Unfortunately, something went wrong!</div>
  }
  return (
    <>
      <CharacterGrid collection={collection} />
      <Paging />
    </>
  )
}

export default Home

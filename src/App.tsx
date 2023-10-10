import { Routes, Route } from 'react-router-dom'

// View
import Home from './view/Home'
import CharacterDetail from './view/CharacterDetail'

// Component
import Error from '@component/Error'

const App = () => {
  return (
    <>
      <Error />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/character/:id' element={<CharacterDetail />} />
      </Routes>
    </>
  )
}

export default App

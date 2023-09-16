import Home from './view/Home'
import CharacterDetail from './view/CharacterDetail'

import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/character/:id' element={<CharacterDetail />} />
    </Routes>
  )
}

export default App

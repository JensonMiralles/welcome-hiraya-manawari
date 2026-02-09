import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Design3 from './pages/Design3'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Design3 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

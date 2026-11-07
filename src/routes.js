import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Filmes from './pages/Filmes'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes/:id" element={<Filmes />} />
      </Routes>
    </BrowserRouter>
  )
}

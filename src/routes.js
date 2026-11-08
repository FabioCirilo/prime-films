import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Filmes from './pages/Filmes'
import Header from './components/Header'
import NotFound from './pages/NotFound'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes/:id" element={<Filmes />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

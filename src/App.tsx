import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { HashScroll } from './components/HashScroll'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { PoliticaPrivacidadePage } from './pages/PoliticaPrivacidadePage'

function App() {
  return (
    <BrowserRouter>
      <HashScroll />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/politica-de-privacidade"
            element={<PoliticaPrivacidadePage />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

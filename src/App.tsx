import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Analytics from './components/Analytics'
import Home from './pages/Home'
import Experiencia from './pages/Experiencia'
import Competencias from './pages/Competencias'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Privacidade from './pages/Privacidade'
import Termos from './pages/Termos'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Layout>
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/competencias" element={<Competencias />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App

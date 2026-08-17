import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Experiencia from './pages/Experiencia'
import Competencias from './pages/Competencias'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/competencias" element={<Competencias />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Layout>
  )
}

export default App

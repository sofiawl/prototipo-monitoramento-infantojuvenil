import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import PlanoDecenal from './pages/PlanoDecenal'
import Monitoramento from './pages/Monitoramento'
import Sobre from './pages/Sobre'
import Login from './pages/Login'
import PainelAdmin from './pages/PainelAdmin'

function App() {

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plano-decenal" element={<PlanoDecenal />} />
        <Route path="/monitoramento" element={<Monitoramento />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/acessar" element={<Login />} />
        <Route path="/painel-admin" element={<PainelAdmin />} />
      </Routes>
      <Footer />



    </div>
  )
}

export default App

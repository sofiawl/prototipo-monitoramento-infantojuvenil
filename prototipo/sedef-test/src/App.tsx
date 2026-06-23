import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import PlanoDecenal from './pages/PlanoDecenal'

function App() {

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plano-decenal" element={<PlanoDecenal />} />
      </Routes>
      <Footer />



    </div>
  )
}

export default App

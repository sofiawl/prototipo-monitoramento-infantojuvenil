import { useState } from 'react'
import { Search } from 'lucide-react'
import { IoContrast } from 'react-icons/io5'
import { FaLock } from "react-icons/fa";
import { BR } from 'country-flag-icons/react/3x2'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { FaUserCircle } from "react-icons/fa";
import { BiSolidExit } from "react-icons/bi";


const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Plano Decenal', path: '/plano-decenal' },
    { label: 'Monitoramento', path: '/monitoramento' },
    { label: 'Sobre', path: '/sobre' },
]

function Header() {
    const [fontSize, setFontSize] = useState<number>(100)
    const [highContrast, setHighContrast] = useState<boolean>(false)
    const location = useLocation()
    const navigate = useNavigate()
    const { usuario, logout } = useAuth()

    function diminuirFonte(): void {
        const novoTamanho = Math.max(fontSize -10, 50)
        setFontSize(novoTamanho)
        document.documentElement.style.fontSize = `${novoTamanho}%`
    }

    function aumentarFonte(): void {
        const novoTamanho = Math.min(fontSize + 10, 180)
        setFontSize(novoTamanho)
        document.documentElement.style.fontSize = `${novoTamanho}%`
    }
    function toggleContraste(): void {
        setHighContrast(prev => !prev)
        document.documentElement.classList.toggle('high-contrast')
    }

    return (
      <header className="w-full bg-white shadow-lg sticky top-0 z-50">
        {/* barra superior */}
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-4">
          {/* logo e nome */}
          <div className="flex items-center gap-3 flext-shrink-0">
            <img
              src="/src/assets/logo-monitoramento.svg"
              alt="Logo Monitoramento"
              className="w-12 h-12"
            />
          </div>
          <div className="leading-tight">
            <p className="text-gray-800 font-bold text-md">Monitoramento</p>
            <p className="text-gray-600 font-bold text-sm">Plano Decenal</p>
          </div>
          {/* barra de busca */}
          <div className="flex-1 max-w-md mx-auto">
            <div className="flex items-center bg-gray-100 border border-gray-500 rounded-2xl px-3 py-2 gap-2">
              <Search className="text-gray-500" size={16} />
              <input
                type="text"
                placeholder="Buscar..."
                className="bg-transparent text-gray-700 text-sm placeholder-gray-500 focus:outline-none w-full"
              />
            </div>
          </div>
          {/* controles de acessibilidade */}
          <div className="flex items-center gap-2 ml-auto">
            {/* tamanho da fonte */}
            <div className="flex items-center gap-1">
              <button
                onClick={aumentarFonte}
                className="text-gray-700 hover:text-gray-500 font-bold text-md w-6 h-6 flex items-center justify-center"
                title="Aumentar Tamanho Fonte"
              >
                A+
              </button>
              <button
                onClick={diminuirFonte}
                className="text-gray-700 hover:text-gray-500 font-bold text-md w-6 h-6 flex items-center justify-center"
                title="Diminuir Tamanho Fonte"
              >
                A-
              </button>
            </div>
            {/* Alto contraste */}
            <button
              onClick={toggleContraste}
              title="Alternar alto contraste"
              className={
                "text-lg w-8 h-8 flex items-center justify-center " +
                (highContrast
                  ? "text-yellow-300"
                  : "text-gray-700 hover:text-gray-500")
              }
            >
              <IoContrast />
            </button>
            {/* Idioma */}
            <button className="flex items-center gap-2 px-2 py-1">
              <BR title="Português" className="w-5 h-4" />
            </button>

            {usuario ? (
              // Logado — exibe nome + botão sair
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate("/painel-admin")}
                  className="flex items-center gap-2 bg-sky-500 text-white font-bold text-sm px-3 py-1.5 rounded-lg hover:bg-sky-400 transition-colors"
                >
                  <FaUserCircle className="w-4 h-4" />
                  {usuario.nome}
                </button>
                <button
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                  className="flex items-center gap-2 bg-pink-600 text-white font-bold text-sm px-3 py-1.5 rounded-lg hover:bg-pink-500 transition-colors"
                >
                  <BiSolidExit />
                  Sair
                </button>
              </div>
            ) : (
              // Não logado — exibe botão Acessar
              <button
                type="button"
                onClick={() => navigate("/acessar")}
                className="flex items-center gap-2 bg-sky-500 text-white font-bold text-sm ml-2 px-3 py-1.5 rounded-lg hover:bg-sky-400 transition-colors"
              >
                <FaLock />
                Acessar
              </button>
            )}
          </div>
        </div>

        {/* barra inferior */}
        <div className="w-full bg-sky-500">
          <nav className="max-w-3xl mx-auto px-6 flex items-center justify-between gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={
                    "px-5 py-3 mt-1 text-md text-white uppercase font-bold " +
                    (isActive
                      ? "border-b-4 border-white"
                      : "border-b-4 border-transparent")
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    );
}

export default Header

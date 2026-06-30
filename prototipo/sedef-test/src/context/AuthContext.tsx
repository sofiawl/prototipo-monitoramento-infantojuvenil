import { createContext, useContext, useState, type ReactNode } from 'react'

// ── Tipos ────────────────────────────────────────────────────────────
interface Usuario {
  nome: string
  email: string
  cargo: string
  avatar?: string
}

interface AuthContextType {
  usuario: Usuario | null      // null = não logado
  login: (email: string, senha: string) => boolean  // retorna se deu certo
  logout: () => void
}

// ── Usuário admin mockado ────────────────────────────────────────────
const ADMIN_MOCK: Usuario = {
  nome: 'James',
  email: 'james@example.com',
  cargo: 'ADMIN',
}

const CREDENCIAIS = {
  email: 'james@example.com',
  senha: 'James123#@!',
}

// ── Criação do contexto ──────────────────────────────────────────────
// createContext cria um "canal" global que qualquer componente filho pode ler
const AuthContext = createContext<AuthContextType | null>(null)

// ── Provider — envolve a aplicação e fornece o contexto ──────────────
export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null)

  function login(email: string, senha: string): boolean {
    if (email === CREDENCIAIS.email && senha === CREDENCIAIS.senha) {
      setUsuario(ADMIN_MOCK)
      return true
    }
    return false
  }

  function logout() {
    setUsuario(null)
  }

  return (
    // O value disponibiliza usuario, login e logout para todos os filhos
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// ── Hook customizado para consumir o contexto ────────────────────────
// Em vez de chamar useContext(AuthContext) em todo lugar, exportamos um hook
export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth deve ser usado dentro de AuthProvider')
  return ctx
}
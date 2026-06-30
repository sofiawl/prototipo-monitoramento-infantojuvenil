import { useState } from 'react'
import { Badge } from '/@/components/ui/badge'
import { Input } from '/@/components/ui/input'
import { Label } from '/@/components/ui/label'
import { Pencil, Eye} from 'lucide-react'
import { FaUserCircle } from "react-icons/fa";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,
} from '/@/components/ui/dialog'
import { contasMock, cargosDisponiveis, type ContaUsuario } from '@/data/admin'

// ── Formulário de edição de conta ────────────────────────────────────
function FormEditarConta({ conta, onSalvar }: { conta: ContaUsuario; onSalvar: (c: ContaUsuario) => void }) {
  const [form, setForm] = useState(conta)

  function handleChange(campo: keyof ContaUsuario, valor: string | boolean) {
    setForm(prev => ({ ...prev, [campo]: valor }))
  }

  return (
    <div className="flex flex-col gap-4 py-2">
      {[
        { campo: 'nome',     label: 'Nome completo',  type: 'text'  },
        { campo: 'email',    label: 'E-mail',          type: 'email' },
        { campo: 'celular',  label: 'Celular',         type: 'text'  },
        { campo: 'cpf',      label: 'CPF',             type: 'text'  },
      ].map(({ campo, label, type }) => (
        <div key={campo} className="flex flex-col gap-1.5">
          <Label>{label}</Label>
          <Input
            type={type}
            value={form[campo as keyof ContaUsuario] as string}
            onChange={e => handleChange(campo as keyof ContaUsuario, e.target.value)}
          />
        </div>
      ))}

      <div className="flex flex-col gap-1.5">
        <Label>Cargo</Label>
        <select
          value={form.cargo}
          onChange={e => handleChange('cargo', e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
        >
          {cargosDisponiveis.map(c => <option key={c}>{c}</option>)}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="ativo"
          checked={form.ativo}
          onChange={e => handleChange('ativo', e.target.checked)}
          className="w-4 h-4"
        />
        <Label htmlFor="ativo">Conta ativa</Label>
      </div>

      <button
        onClick={() => onSalvar(form)}
        className="mt-2 bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-lg transition-colors"
      >
        Salvar alterações
      </button>
    </div>
  )
}

// ── Aba Gerenciar Contas ─────────────────────────────────────────────
function GerenciarContas() {
  const [contas, setContas] = useState<ContaUsuario[]>(contasMock)

  function handleSalvar(contaAtualizada: ContaUsuario) {
    setContas(prev => prev.map(c => c.id === contaAtualizada.id ? contaAtualizada : c))
  }

  return (
    <div className="border border-gray-200 bg-white rounded-xl overflow-hidden">
      {/* Cabeçalho da tabela */}
      <div className="grid grid-cols-[2fr_2fr_1fr_auto_auto] gap-4 px-4 py-2 bg-gray-100 border-b border-gray-200">
        {['Usuário', 'Cargo', 'Última Atividade', 'Editar', 'Ver Mais'].map(col => (
          <p key={col} className="text-xs font-bold text-gray-500 uppercase tracking-wider">{col}</p>
        ))}
      </div>

      {/* Linhas */}
      {contas.map(conta => (
        <div
          key={conta.id}
          className="grid grid-cols-[2fr_2fr_1fr_auto_auto] gap-4 items-center px-4 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
        >
          {/* Nome */}
          <div className="flex items-center gap-2">
            <FaUserCircle className="w-6 h-6 text-gray-400 flex-shrink-0" />
            <span className={`text-sm font-medium ${!conta.ativo ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
              {conta.nome}
            </span>
          </div>

          {/* Cargo */}
          <Badge variant="outline" className="text-xs text-orange-600 border-orange-300 w-fit uppercase tracking-wider">
            {conta.cargo}
          </Badge>

          {/* Última atividade */}
          <span className="text-xs text-gray-500">{conta.ultimaAtividade}</span>

          {/* Editar */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="p-1.5 rounded-md hover:bg-gray-100 transition-colors" title="Editar conta">
                <Pencil className="w-4 h-4 text-gray-400 hover:text-sky-500" />
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Editar conta — {conta.nome}</DialogTitle>
              </DialogHeader>
              <FormEditarConta conta={conta} onSalvar={(c) => { handleSalvar(c) }} />
            </DialogContent>
          </Dialog>

          {/* Ver mais */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="p-1.5 rounded-md hover:bg-gray-100 transition-colors" title="Ver detalhes">
                <Eye className="w-4 h-4 text-gray-400 hover:text-sky-500" />
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Detalhes — {conta.nome}</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-3 py-2">
                {[
                  { label: 'E-mail',           valor: conta.email },
                  { label: 'Celular',          valor: conta.celular },
                  { label: 'CPF',              valor: conta.cpf },
                  { label: 'Cargo',            valor: conta.cargo },
                  { label: 'Última atividade', valor: conta.ultimaAtividade },
                  { label: 'Status',           valor: conta.ativo ? 'Ativa' : 'Inativa' },
                ].map(({ label, valor }) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{label}</p>
                    <p className="text-sm text-gray-700">{valor}</p>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  )
}

// ── Aba Criar Conta ──────────────────────────────────────────────────
function CriarConta() {
  const [form, setForm] = useState({
    nome: '', celular: '', cpf: '', cargo: '', email: '', senha: '',
  })
  const [sucesso, setSucesso] = useState(false)

  function handleChange(campo: string, valor: string) {
    setForm(prev => ({ ...prev, [campo]: valor }))
    setSucesso(false)
  }

  function handleSubmit() {
    const vazio = Object.values(form).some(v => v === '')
    if (vazio) return alert('Preencha todos os campos.')
    setSucesso(true)
    setForm({ nome: '', celular: '', cpf: '', cargo: '', email: '', senha: '' })
  }

  const campos = [
    { campo: 'nome',    label: 'Nome de Usuário',  placeholder: 'Nome Completo',                type: 'text'     },
    { campo: 'celular', label: 'Celular',           placeholder: 'Número de Celular',            type: 'text'     },
    { campo: 'cpf',     label: 'CPF',               placeholder: 'Número do CPF',                type: 'text'     },
    { campo: 'email',   label: 'Email',             placeholder: 'Email Institucional',          type: 'email'    },
    { campo: 'senha',   label: 'Senha Provisória',  placeholder: 'Senha',                        type: 'password' },
  ]

  return (
    <div className="max-w-lg flex flex-col gap-4">
      {sucesso && (
        <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg px-4 py-3">
          ✓ Conta criada com sucesso!
        </div>
      )}

      {campos.map(({ campo, label, placeholder, type }) => (
        <div key={campo} className="flex flex-col gap-2 text-gray-700">
          <Label>{label}</Label>
          <Input
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
            type={type}
            placeholder={placeholder}
            value={form[campo as keyof typeof form]}
            onChange={e => handleChange(campo, e.target.value)}
          />
        </div>
      ))}

      <div className="flex flex-col gap-2 text-gray-700">
        <Label>Cargo</Label>
        <select
          value={form.cargo}
          onChange={e => handleChange('cargo', e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
        >
          <option value="">Selecione o Cargo Administrativo</option>
          {cargosDisponiveis.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-2 self-end bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm uppercase tracking-widest px-6 py-2.5 rounded-lg transition-colors"
      >
        Criar Conta
      </button>
    </div>
  )
}

// ── Export principal ─────────────────────────────────────────────────
export default function AbaContas() {
  const [subAba, setSubAba] = useState<'gerenciar' | 'criar'>('gerenciar')

  return (
    <div className="flex flex-col gap-6">
      {/* Sub-abas */}
      <div className="flex gap-2">
        {[
          { id: 'gerenciar', label: 'Gerenciar Contas' },
          { id: 'criar',     label: 'Criar conta'      },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setSubAba(tab.id as 'gerenciar' | 'criar')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-colors
              ${subAba === tab.id
                ? 'bg-orange-500 text-white border-orange-500'
                : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {subAba === 'gerenciar' ? <GerenciarContas /> : <CriarConta />}
    </div>
  )
}
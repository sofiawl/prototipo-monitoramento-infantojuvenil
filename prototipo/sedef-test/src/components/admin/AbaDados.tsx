import { useState } from 'react'
import { Pencil, Plus, Check, X, CirclePlus } from 'lucide-react'
import { Label } from '/@/components/ui/label'
import { Input } from '/@/components/ui/input'
import {
  areas, compromissos, responsaveis, indicadores,
  getCompromissosByAreaId, getIndicadoresByCompromissoId,
} from '@/data/monitoramento-admin'
import {
  dadosPorIndicador, submissoesMock,
  type EntradaDado, type SubmissaoDado,
} from '@/data/admin'

// ── Aba Editar Dados ─────────────────────────────────────────────────
function EditarDados() {
  const [areaSel,         setAreaSel]         = useState('')
  const [compromissoSel,  setCompromissoSel]  = useState('')
  const [responsaveisSel, setResponsaveisSel] = useState<string[]>([])
  const [indicadorSel,    setIndicadorSel]    = useState('')
  const [dados,           setDados]           = useState<EntradaDado[]>([])
  const [editandoId,      setEditandoId]      = useState<string | null>(null)
  const [valorEdit,       setValorEdit]       = useState('')
  const [salvo,           setSalvo]           = useState(false)

  /*
    CORREÇÃO 4a — cascata correta de seletores
    Cada seletor só aparece quando o anterior foi preenchido.
    Isso guia o usuário e evita estados inconsistentes.
  */
  const compromissosFiltrados = getCompromissosByAreaId(areaSel)

  /*
    CORREÇÃO 4b — indicadores corretos
    Quando compromisso está selecionado, filtra pelos do compromisso.
    Caso contrário, mostra lista vazia (força selecionar compromisso primeiro).
  */
  const indicadoresFiltrados = compromissoSel
    ? getIndicadoresByCompromissoId(compromissoSel)
    : []

  // Responsáveis do compromisso selecionado
  const responsaveisDoCompromisso = compromissoSel
    ? responsaveis.filter(r =>
        compromissos.find(c => c.id === compromissoSel)?.idResponsavel.includes(r.id)
      )
    : []

  function handleArea(id: string) {
    setAreaSel(id)
    // Limpa tudo abaixo na cascata
    setCompromissoSel('')
    setResponsaveisSel([])
    setIndicadorSel('')
    setDados([])
  }

  function handleCompromisso(id: string) {
    setCompromissoSel(id)
    // Limpa tudo abaixo na cascata
    setResponsaveisSel([])
    setIndicadorSel('')
    setDados([])
  }

  function handleIndicador(id: string) {
    setIndicadorSel(id)
    // Carrega dados mockados do indicador, ou gera anos padrão
    setDados(dadosPorIndicador[id] ?? [
      { ano: '2014', valor: 0 },
      { ano: '2015', valor: 0 },
      { ano: '2016', valor: 0 },
      { ano: '2017', valor: 0 },
      { ano: '2018', valor: 0 },
      { ano: '2019', valor: 0 },
    ])
    setEditandoId(null)
  }

  function toggleResponsavel(id: string) {
    setResponsaveisSel(prev =>
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    )
  }

  function salvarLinha(ano: string) {
    setDados(prev =>
      prev.map(d => d.ano === ano ? { ...d, valor: Number(valorEdit) } : d)
    )
    setEditandoId(null)
  }

  function adicionarLinha() {
    const ultimoAno = dados.length > 0
      ? parseInt(dados[dados.length - 1].ano)
      : 2013
    setDados(prev => [...prev, { ano: String(ultimoAno + 1), valor: 0 }])
  }

  function handleSalvar() {
    setSalvo(true)
    setTimeout(() => setSalvo(false), 3000)
  }

  return (
    <div className="flex flex-col gap-5">

      {/* Seletor de Área — sempre visível */}
      <div className="flex flex-col gap-2 text-gray-700">
        <Label>Área</Label>
        <select
          value={areaSel}
          onChange={e => handleArea(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:border-blue-400"
        >
          <option value="">Selecione a Área</option>
          {areas.map(a => <option key={a.id} value={a.id}>{a.nome}</option>)}
        </select>
      </div>

        <div className="flex flex-col gap-2 text-gray-700">
          <Label>Compromisso</Label>
          <select
            value={compromissoSel}
            onChange={e => handleCompromisso(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:border-blue-400"
          >
            <option value="">Selecione o Compromisso</option>
            {compromissosFiltrados.map(c =>
              <option key={c.id} value={c.id}>{c.nome}</option>
            )}
          </select>
        </div>
      
        <div className="flex flex-col gap-2 text-gray-700">
          <Label>Responsáveis</Label>
          <div className="grid grid-cols-2 gap-2">
            {responsaveisDoCompromisso.map(r => (
              <label
                key={r.id}
                className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800"
              >
                <input
                  type="checkbox"
                  checked={responsaveisSel.includes(r.id)}
                  onChange={() => toggleResponsavel(r.id)}
                  className="w-4 h-4 accent-sky-500"
                />
                {r.nome}
              </label>
            ))}
          </div>
        </div>

        <div className="flex items-end gap-3">
          <div className="flex flex-col gap-2 text-gray-700 flex-1">
            <Label>Indicador</Label>
            <select
              value={indicadorSel}
              onChange={e => handleIndicador(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:border-blue-400"
            >
              <option value="">Selecione o Indicador</option>
              {indicadoresFiltrados.map(i =>
                <option key={i.id} value={i.id}>{i.nome}</option>
              )}
            </select>
          </div>
          <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-2.5 rounded-lg transition-colors whitespace-nowrap">
            <Plus className="w-3.5 h-3.5" /> Criar Novo Indicador
          </button>
        </div>

      {/* Tabela de dados — aparece após selecionar indicador */}
      {indicadorSel && dados.length > 0 && (
        <div className="flex flex-col gap-3">

          {/* Cabeçalho da tabela */}
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
            <div className="grid grid-cols-[1fr_2fr_80px] gap-4 px-4 py-2 bg-gray-100 border-b border-gray-200">
              {['ANO', 'DADO', 'EDITAR'].map(col => (
                <p key={col} className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {col}
                </p>
              ))}
            </div>

            {dados.map(linha => (
              <div
                key={linha.ano}
                className="grid grid-cols-[1fr_2fr_80px] gap-4 items-center px-4 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm text-gray-600 font-medium">{linha.ano}</span>

                {editandoId === linha.ano ? (
                  <Input
                    type="number"
                    value={valorEdit}
                    onChange={e => setValorEdit(e.target.value)}
                    className="h-8 text-sm text-gray-600"
                    autoFocus
                  />
                ) : (
                  <span className="text-sm text-gray-700">
                    {linha.valor.toLocaleString('pt-BR')}
                  </span>
                )}

                <div className="flex items-center gap-1">
                  {editandoId === linha.ano ? (
                    <>
                      <button
                        onClick={() => salvarLinha(linha.ano)}
                        className="p-1 rounded hover:bg-green-50 transition-colors"
                        title="Confirmar"
                      >
                        <Check className="w-4 h-4 text-green-500" />
                      </button>
                      <button
                        onClick={() => setEditandoId(null)}
                        className="p-1 rounded hover:bg-red-50 transition-colors"
                        title="Cancelar"
                      >
                        <X className="w-4 h-4 text-red-400" />
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => { setEditandoId(linha.ano); setValorEdit(String(linha.valor)) }}
                      className="p-1 rounded hover:bg-gray-100 transition-colors"
                      title="Editar"
                    >
                      <Pencil className="w-4 h-4 text-gray-400 hover:text-sky-500" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Adicionar linha */}
          <button
            onClick={adicionarLinha}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-sky-500 transition-colors w-fit"
          >
            <CirclePlus className="w-4 h-4" /> Adicionar Nova Linha
          </button>

          {/* Botões de ação */}
          <div className="flex gap-3 pt-1">
            <button
              onClick={handleSalvar}
              className="bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg transition-colors"
            >
              {salvo ? '✓ Atualizado!' : 'Atualizar Dados'}
            </button>
            <button
              onClick={() => { setIndicadorSel(''); setDados([]) }}
              className="border border-gray-300 text-gray-600 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg hover:bg-white transition-colors"
            >
              Voltar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Aba Verificar Dados (sem alterações) ─────────────────────────────
function VerificarDados() {
  const [submissoes, setSubmissoes] = useState<SubmissaoDado[]>(submissoesMock)

  function handleAcao(id: string, acao: 'aprovado' | 'rejeitado') {
    setSubmissoes(prev => prev.map(s => s.id === id ? { ...s, status: acao } : s))
  }

  const corStatus = {
    pendente:  'bg-yellow-100 text-yellow-700 border-yellow-200',
    aprovado:  'bg-green-100  text-green-700  border-green-200',
    rejeitado: 'bg-red-100    text-red-700    border-red-200',
  }

  return (
    <div className="flex flex-col gap-3">
      {submissoes.map(s => (
        <div key={s.id} className="border border-gray-200 rounded-xl p-4 flex flex-col gap-3 bg-white shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-0.5">
              <p className="text-sm font-semibold text-gray-800">{s.indicadorNome}</p>
              <p className="text-xs text-gray-400">{s.compromissoNome}</p>
            </div>
            <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border flex-shrink-0 ${corStatus[s.status]}`}>
              {s.status}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 text-xs">
            {[
              { label: 'Ano',           valor: s.ano              },
              { label: 'Valor',         valor: s.valor.toString() },
              { label: 'Responsável',   valor: s.responsavelNome  },
              { label: 'Submetido por', valor: s.submetidoPor     },
              { label: 'Data',          valor: s.submetidoEm      },
            ].map(({ label, valor }) => (
              <div key={label}>
                <p className="text-gray-400 uppercase tracking-wider font-medium">{label}</p>
                <p className="text-gray-700 font-semibold mt-0.5">{valor}</p>
              </div>
            ))}
          </div>

          {s.status === 'pendente' && (
            <div className="flex gap-2 pt-1 border-t border-gray-100">
              <button onClick={() => handleAcao(s.id, 'aprovado')}
                className="flex items-center gap-1.5 bg-green-500 hover:bg-green-400 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors">
                <Check className="w-3.5 h-3.5" /> Aprovar
              </button>
              <button onClick={() => handleAcao(s.id, 'rejeitado')}
                className="flex items-center gap-1.5 bg-red-500 hover:bg-red-400 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors">
                <X className="w-3.5 h-3.5" /> Rejeitar
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// ── Export principal ─────────────────────────────────────────────────
export default function AbaDados() {
  const [subAba, setSubAba] = useState<'editar' | 'verificar'>('editar')

  return (
    <div className="flex flex-col gap-6">

      {/* Sub-abas */}
      <div className="flex gap-2">
        {[
          { id: 'editar',    label: 'Editar Dados'    },
          { id: 'verificar', label: 'Verificar Dados' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setSubAba(tab.id as 'editar' | 'verificar')}
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

      {/* Conteúdo da sub-aba — fundo branco para contrastar com o card cinza pai */}
      <div className="bg-white border border-gray-200 rounded-xl p-5">
        {subAba === 'editar' ? <EditarDados /> : <VerificarDados />}
      </div>

    </div>
  )
}
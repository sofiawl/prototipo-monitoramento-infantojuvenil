import { useMemo, useState } from 'react'
import { Info, Download } from 'lucide-react'
import MonitoramentoBars from '@/components/MonitoramentoBars'
import GraficoIndicador from '@/components/GraficoIndicador'
import {
  compromissosComMonitoramento,
  TIPO_INDICADOR_CONFIG,
  type Indicador,
} from '@/data/monitoramento'

interface IndicadorContexto {
  indicador: Indicador
  compromissoId: string
  compromissoTitulo: string
  marco: string
  responsavel: string
}

const TODOS_INDICADORES: IndicadorContexto[] = compromissosComMonitoramento.flatMap((c) =>
  c.objetivos.flatMap((o) =>
    o.linhasDeAcao.flatMap((l) =>
      l.indicadores.map((indicador) => ({
        indicador,
        compromissoId: c.id,
        compromissoTitulo: c.titulo,
        marco: c.tipo,
        responsavel: l.responsavelPrincipal,
      }))
    )
  )
)

const PERIODO_OPCOES = [
  { value: '2016-2025', label: 'Todos os anos (2016 a 2025)' },
  { value: '2016-2020', label: '2016 a 2020' },
  { value: '2021-2025', label: '2021 a 2025' },
  { value: '2023-2025', label: 'Últimos 3 anos (2023 a 2025)' },
]

interface Filtros {
  marco: string
  compromisso: string
  responsavel: string
  periodo: string
  indicador: string
}

const FILTROS_VAZIO: Filtros = {
  marco: '',
  compromisso: '',
  responsavel: '',
  periodo: '',
  indicador: '',
}

function formatDataHora(iso: string): string {
  const d = new Date(iso)
  const p = (n: number) => String(n).padStart(2, '0')
  return `${p(d.getDate())}/${p(d.getMonth() + 1)}/${d.getFullYear()} ${p(d.getHours())}:${p(d.getMinutes())}`
}

function BannerSection() {
  return (
    <section className="relative bg-sky-900 w-full py-16 flex items-center justify-center overflow-hidden">
      <MonitoramentoBars />
      <div className="absolute inset-0 bg-sky-500/30" />
      <div className="relative z-10 mx-4 py-10 px-16 border-2 border-white rounded-2xl flex flex-col items-center gap-2 text-center">
        <p className="text-white text-base font-medium uppercase tracking-widest">
          Sistema de
        </p>
        <h1 className="text-5xl font-black text-white uppercase tracking-tight drop-shadow-lg">
          Monitoramento
        </h1>
      </div>
    </section>
  )
}

interface FiltroSelectProps {
  label: string
  ajuda: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  opcoes: { value: string; label: string }[]
}

function FiltroSelect({ label, ajuda, placeholder, value, onChange, opcoes }: FiltroSelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-1.5 text-gray-600 text-sm">
        {label}
        <span title={ajuda} className="text-gray-400 cursor-help">
          <Info size={13} />
        </span>
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
      >
        <option value="">{placeholder}</option>
        {opcoes.map((opcao) => (
          <option key={opcao.value} value={opcao.value}>
            {opcao.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default function Monitoramento() {
  const [pendente, setPendente] = useState<Filtros>(FILTROS_VAZIO)
  const [aplicado, setAplicado] = useState<Filtros>(FILTROS_VAZIO)

  const marcoOpcoes = useMemo(
    () =>
      Array.from(new Set(TODOS_INDICADORES.map((ic) => ic.marco))).map((m) => ({
        value: m,
        label: m,
      })),
    []
  )

  const compromissoOpcoes = useMemo(
    () =>
      compromissosComMonitoramento
        .filter((c) => !pendente.marco || c.tipo === pendente.marco)
        .map((c) => ({ value: c.id, label: `${c.numero}. ${c.titulo}` })),
    [pendente.marco]
  )

  const responsavelOpcoes = useMemo(
    () =>
      Array.from(
        new Set(
          TODOS_INDICADORES.filter(
            (ic) => !pendente.compromisso || ic.compromissoId === pendente.compromisso
          )
            .map((ic) => ic.responsavel)
            .filter(Boolean)
        )
      ).map((r) => ({ value: r, label: r })),
    [pendente.compromisso]
  )

  const indicadorOpcoes = useMemo(
    () =>
      TODOS_INDICADORES.filter(
        (ic) => !pendente.compromisso || ic.compromissoId === pendente.compromisso
      ).map((ic) => ({ value: ic.indicador.id, label: ic.indicador.nome })),
    [pendente.compromisso]
  )

  const temFiltroAplicado = Object.values(aplicado).some((v) => v !== '')

  const resultados = useMemo(() => {
    if (!temFiltroAplicado) return []
    return TODOS_INDICADORES.filter(
      (ic) =>
        (!aplicado.marco || ic.marco === aplicado.marco) &&
        (!aplicado.compromisso || ic.compromissoId === aplicado.compromisso) &&
        (!aplicado.responsavel || ic.responsavel === aplicado.responsavel) &&
        (!aplicado.indicador || ic.indicador.id === aplicado.indicador)
    )
  }, [aplicado, temFiltroAplicado])

  const [anoMin, anoMax] = useMemo(() => {
    const periodo = aplicado.periodo || '2016-2025'
    const [min, max] = periodo.split('-').map(Number)
    return [min, max]
  }, [aplicado.periodo])

  const ultimaAtualizacao = useMemo(() => {
    const fonte = resultados.length > 0 ? resultados : TODOS_INDICADORES
    const maisRecente = fonte.reduce((acc, ic) => {
      const data = ic.indicador.ultimaAtualizacao
      return data > acc ? data : acc
    }, fonte[0]?.indicador.ultimaAtualizacao ?? new Date().toISOString())
    return formatDataHora(maisRecente)
  }, [resultados])

  function aplicarFiltros() {
    setAplicado(pendente)
  }

  function limparFiltros() {
    setPendente(FILTROS_VAZIO)
    setAplicado(FILTROS_VAZIO)
  }

  return (
    <main className="w-full bg-white">
      <BannerSection />

      <section className="w-full py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-6">
          {/* Painel de filtros */}
          <aside className="w-full lg:w-80 flex-shrink-0 border border-gray-300 rounded-2xl p-6 bg-white h-fit">
            <h2 className="text-3xl font-black text-gray-700 uppercase tracking-wide mb-6">
              Filtros
            </h2>

            <div className="flex flex-col gap-4">
              <FiltroSelect
                label="Marco Situacional"
                ajuda="Eixo estruturante do Plano Decenal."
                placeholder="Escolha o marco situacional"
                value={pendente.marco}
                onChange={(value) => setPendente((f) => ({ ...f, marco: value }))}
                opcoes={marcoOpcoes}
              />
              <FiltroSelect
                label="Compromisso"
                ajuda="Compromisso decenal vinculado ao marco."
                placeholder="Escolha o compromisso"
                value={pendente.compromisso}
                onChange={(value) => setPendente((f) => ({ ...f, compromisso: value }))}
                opcoes={compromissoOpcoes}
              />
              <FiltroSelect
                label="Responsável"
                ajuda="Órgão responsável principal pela linha de ação."
                placeholder="Escolha o responsável"
                value={pendente.responsavel}
                onChange={(value) => setPendente((f) => ({ ...f, responsavel: value }))}
                opcoes={responsavelOpcoes}
              />
              <FiltroSelect
                label="Período de Tempo"
                ajuda="Intervalo de anos exibido nos gráficos."
                placeholder="Escolha o período de tempo"
                value={pendente.periodo}
                onChange={(value) => setPendente((f) => ({ ...f, periodo: value }))}
                opcoes={PERIODO_OPCOES}
              />
              <FiltroSelect
                label="Indicador"
                ajuda="Indicador específico de monitoramento."
                placeholder="Escolha o indicador"
                value={pendente.indicador}
                onChange={(value) => setPendente((f) => ({ ...f, indicador: value }))}
                opcoes={indicadorOpcoes}
              />
            </div>

            <div className="flex items-center gap-2 mt-6">
              <button
                onClick={limparFiltros}
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold text-sm uppercase tracking-wide px-4 py-2 rounded-md transition-colors"
              >
                Limpar Filtros
              </button>
              <button
                onClick={aplicarFiltros}
                className="bg-sky-400 hover:bg-sky-500 text-white font-bold text-sm uppercase tracking-wide px-4 py-2 rounded-md transition-colors"
              >
                Aplicar Filtros
              </button>
            </div>
          </aside>

          {/* Área de gráficos */}
          <div className="flex-1 flex flex-col gap-3 min-w-0">
            <div className="border border-gray-300 rounded-2xl p-4 min-h-[480px] flex flex-col">
              {!temFiltroAplicado ? (
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-gray-400 text-lg uppercase tracking-widest">
                    Selecione algum filtro
                  </p>
                </div>
              ) : resultados.length === 0 ? (
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-gray-400 text-base text-center px-6">
                    Nenhum indicador encontrado para os filtros selecionados.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto max-h-[560px] pr-1">
                  {resultados.map((ic) => {
                    const config = TIPO_INDICADOR_CONFIG[ic.indicador.tipo]
                    const tipoGrafico = ic.indicador.tipo === 'absoluto' ? 'linha' : 'barra'
                    return (
                      <div
                        key={ic.indicador.id}
                        className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col gap-2"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-xs text-gray-500 leading-snug flex-1">
                            {ic.indicador.nome}
                          </p>
                          <span
                            className={
                              'flex-shrink-0 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full border ' +
                              config.badgeClass
                            }
                          >
                            {config.label}
                          </span>
                        </div>
                        <GraficoIndicador
                          indicador={ic.indicador}
                          tipoGrafico={tipoGrafico}
                          anoMin={anoMin}
                          anoMax={anoMax}
                        />
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {temFiltroAplicado && resultados.length > 0 && (
              <div className="flex justify-end">
                <button
                  type="button"
                  title="Funcionalidade ilustrativa: a exportação não está disponível neste protótipo."
                  className="flex items-center gap-2 bg-sky-400 hover:bg-sky-500 text-white font-bold text-sm uppercase tracking-wide px-5 py-2.5 rounded-md transition-colors"
                >
                  <Download size={16} />
                  Exportar Dados
                </button>
              </div>
            )}

            <p className="text-right text-xs text-gray-400">
              Última atualização: {ultimaAtualizacao}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

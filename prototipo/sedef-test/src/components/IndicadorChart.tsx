import { useState, type ReactNode } from 'react'
import { Hash, Percent } from 'lucide-react'
import type { Indicador, TipoIndicador } from '@/data/monitoramento'
import { TIPO_INDICADOR_CONFIG } from '@/data/monitoramento'
import UltimaAtualizacao from '@/components/UltimaAtualizacao'

const TIPO_ICONS: Record<TipoIndicador, ReactNode> = {
  percentual: <Percent size={14} />,
  absoluto: <Hash size={14} />,
}

interface IndicadorChartProps {
  indicador: Indicador
}

function formatValor(indicador: Indicador): string {
  const unidade = indicador.unidade ?? ''
  return `${indicador.valorAtual}${unidade === '%' ? '%' : unidade ? ` ${unidade}` : ''}`
}

function IndicadorChart({ indicador }: IndicadorChartProps) {
  const [anoFiltro, setAnoFiltro] = useState<string>('todos')
  const config = TIPO_INDICADOR_CONFIG[indicador.tipo]

  const dados =
    anoFiltro === 'todos'
      ? indicador.historicoAnual
      : indicador.historicoAnual.filter((v) => v.ano === Number(anoFiltro))

  const maxValor = Math.max(
    ...dados.map((d) => d.valor),
    indicador.meta ?? 0,
    1
  )

  const chartWidth = 320
  const chartHeight = 120
  const barGap = dados.length > 1 ? chartWidth / dados.length : chartWidth
  const barWidth = Math.min(barGap * 0.7, 40)

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2 flex-wrap">
        <div className="flex flex-col gap-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={
                'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide border ' +
                config.badgeClass
              }
            >
              {TIPO_ICONS[indicador.tipo]}
              {config.label}
            </span>
          </div>
          <p className="text-sm font-semibold text-gray-800 leading-snug">{indicador.nome}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-2xl font-black text-gray-700">{formatValor(indicador)}</p>
          {indicador.meta !== undefined && (
            <p className="text-xs text-gray-500">Meta: {indicador.meta}{indicador.unidade === '%' ? '%' : indicador.unidade ? ` ${indicador.unidade}` : ''}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor={`ano-${indicador.id}`} className="text-xs font-bold uppercase tracking-widest text-gray-500">
          Ano:
        </label>
        <select
          id={`ano-${indicador.id}`}
          value={anoFiltro}
          onChange={(e) => setAnoFiltro(e.target.value)}
          className="text-sm border border-gray-300 rounded-md px-2 py-1 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          <option value="todos">Todos</option>
          {indicador.historicoAnual.map((v) => (
            <option key={v.ano} value={String(v.ano)}>
              {v.ano}
            </option>
          ))}
        </select>
      </div>

      {dados.length > 0 ? (
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight + 24}`}
          className="w-full max-w-md"
          aria-label={`Gráfico de progresso: ${indicador.nome}`}
        >
          {dados.map((ponto, index) => {
            const barHeight = (ponto.valor / maxValor) * chartHeight
            const x = index * barGap + (barGap - barWidth) / 2
            const y = chartHeight - barHeight
            return (
              <g key={ponto.ano}>
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  fill={config.chartColor}
                  fillOpacity={0.85}
                  rx={4}
                />
                <text
                  x={x + barWidth / 2}
                  y={chartHeight + 16}
                  textAnchor="middle"
                  className="fill-gray-500"
                  fontSize={10}
                  fontWeight={600}
                >
                  {ponto.ano}
                </text>
                <text
                  x={x + barWidth / 2}
                  y={y - 4}
                  textAnchor="middle"
                  className="fill-gray-600"
                  fontSize={9}
                  fontWeight={700}
                >
                  {ponto.valor}
                </text>
              </g>
            )
          })}
        </svg>
      ) : (
        <p className="text-xs text-gray-400 italic">Sem dados para o ano selecionado.</p>
      )}

      <UltimaAtualizacao iso={indicador.ultimaAtualizacao} />
    </div>
  )
}

export default IndicadorChart

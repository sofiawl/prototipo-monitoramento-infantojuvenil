import type { Indicador } from '@/data/monitoramento'

const BAR_PALETTE = [
  '#3b82f6',
  '#a78bfa',
  '#f59e0b',
  '#fbbf24',
  '#f472b6',
  '#34d399',
  '#22d3ee',
  '#fb923c',
]

interface GraficoIndicadorProps {
  indicador: Indicador
  tipoGrafico: 'barra' | 'linha'
  anoMin: number
  anoMax: number
}

function niceCeil(v: number): number {
  if (v <= 0) return 1
  const exp = Math.floor(Math.log10(v))
  const f = v / 10 ** exp
  const nf = f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10
  return nf * 10 ** exp
}

function GraficoIndicador({ indicador, tipoGrafico, anoMin, anoMax }: GraficoIndicadorProps) {
  const dados = indicador.historicoAnual.filter((d) => d.ano >= anoMin && d.ano <= anoMax)
  const maxVal = Math.max(...dados.map((d) => d.valor), 1)
  const yMax = niceCeil(maxVal)
  const ticks = Array.from({ length: 6 }, (_, i) => (yMax / 5) * i)

  const width = 320
  const height = 200
  const ml = 30
  const mr = 10
  const mt = 12
  const mb = 26
  const plotW = width - ml - mr
  const plotH = height - mt - mb
  const n = dados.length || 1
  const slot = plotW / n
  const cx = (i: number) => ml + slot * i + slot / 2
  const cy = (v: number) => mt + plotH - (v / yMax) * plotH
  const barW = Math.min(slot * 0.6, 34)

  if (dados.length === 0) {
    return (
      <p className="text-xs text-gray-400 italic text-center py-8">
        Sem dados para o período selecionado.
      </p>
    )
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full"
      role="img"
      aria-label={`Gráfico de ${indicador.nome}`}
    >
      {ticks.map((t, i) => (
        <g key={i}>
          <line x1={ml} y1={cy(t)} x2={width - mr} y2={cy(t)} stroke="#e5e7eb" strokeWidth={1} />
          <text x={ml - 4} y={cy(t) + 3} textAnchor="end" fontSize={8} fill="#9ca3af">
            {Math.round(t)}
          </text>
        </g>
      ))}

      {tipoGrafico === 'barra'
        ? dados.map((d, i) => {
            const barHeight = (d.valor / yMax) * plotH
            return (
              <rect
                key={d.ano}
                x={ml + slot * i + (slot - barW) / 2}
                y={mt + plotH - barHeight}
                width={barW}
                height={barHeight}
                rx={3}
                fill={BAR_PALETTE[i % BAR_PALETTE.length]}
              />
            )
          })
        : (
            <>
              <polyline
                points={dados.map((d, i) => `${cx(i)},${cy(d.valor)}`).join(' ')}
                fill="none"
                stroke="#38bdf8"
                strokeWidth={2}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {dados.map((d, i) => (
                <circle key={d.ano} cx={cx(i)} cy={cy(d.valor)} r={3} fill="#0ea5e9" />
              ))}
            </>
          )}

      {dados.map((d, i) => (
        <text
          key={d.ano}
          x={cx(i)}
          y={height - 8}
          textAnchor="middle"
          fontSize={8}
          fill="#6b7280"
        >
          {d.ano}
        </text>
      ))}
    </svg>
  )
}

export default GraficoIndicador

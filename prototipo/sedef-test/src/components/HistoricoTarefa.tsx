import type { HistoricoEntrada } from '@/data/monitoramento'
import { formatUltimaAtualizacao } from '@/data/monitoramento'
import { Card, CardContent } from '/@/components/ui/card'

interface HistoricoTarefaProps {
  historico: HistoricoEntrada[]
}

function HistoricoTarefa({ historico }: HistoricoTarefaProps) {
  const ordenado = [...historico].sort(
    (a, b) => new Date(a.data).getTime() - new Date(b.data).getTime()
  )

  if (ordenado.length === 0) {
    return (
      <p className="text-xs text-gray-400 italic">Nenhuma alteração registrada.</p>
    )
  }

  return (
    <Card className="bg-gray-50 border border-gray-200 shadow-none">
      <CardContent className="py-3 px-4">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
          Histórico de alterações
        </p>
        <ol className="flex flex-col gap-3">
          {ordenado.map((entrada, index) => (
            <li key={index} className="flex gap-3 text-sm">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-sky-500 mt-1.5" />
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-xs text-gray-400">
                  {formatUltimaAtualizacao(entrada.data)}
                </span>
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  {entrada.campo}
                </span>
                <span className="text-gray-600 text-sm leading-relaxed">
                  <span className="text-gray-400 line-through">{entrada.conteudoAnterior}</span>
                  {' → '}
                  <span className="font-medium text-gray-800">{entrada.conteudoNovo}</span>
                </span>
              </div>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}

export default HistoricoTarefa

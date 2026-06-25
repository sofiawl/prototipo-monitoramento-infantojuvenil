import type { StatusTarefa } from '@/data/monitoramento'
import { STATUS_LABELS } from '@/data/monitoramento'

const STATUS_STYLES: Record<StatusTarefa, string> = {
  nao_iniciada: 'bg-gray-100 text-gray-600 border-gray-300',
  em_andamento: 'bg-sky-100 text-sky-700 border-sky-300',
  concluida: 'bg-green-100 text-green-700 border-green-300',
}

interface StatusBadgeProps {
  status: StatusTarefa
  percentualConcluido?: number
}

function StatusBadge({ status, percentualConcluido }: StatusBadgeProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span
        className={
          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide border ' +
          STATUS_STYLES[status]
        }
      >
        {STATUS_LABELS[status]}
      </span>
      {percentualConcluido !== undefined && (
        <span className="text-xs text-gray-500 font-medium">
          {percentualConcluido}% concluído
        </span>
      )}
    </div>
  )
}

export default StatusBadge

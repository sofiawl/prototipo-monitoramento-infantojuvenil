import { Clock } from 'lucide-react'
import { formatUltimaAtualizacao } from '@/data/monitoramento'

interface UltimaAtualizacaoProps {
  iso: string
}

function UltimaAtualizacao({ iso }: UltimaAtualizacaoProps) {
  return (
    <p className="flex items-center gap-1 text-xs text-gray-500">
      <Clock size={12} className="flex-shrink-0" />
      <span>Última atualização: {formatUltimaAtualizacao(iso)}</span>
    </p>
  )
}

export default UltimaAtualizacao

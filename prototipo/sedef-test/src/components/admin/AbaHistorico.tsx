import { useState } from 'react'
import { historicoMock, type RegistroHistorico } from '@/data/admin'
import { ArrowRight } from 'lucide-react'

const corStatus = {
  aprovado:  'bg-green-100  text-green-700  border-green-200',
  pendente:  'bg-yellow-100 text-yellow-700 border-yellow-200',
  rejeitado: 'bg-red-100    text-red-700    border-red-200',
}

export default function AbaHistorico() {
  const [historico, setHistorico] = useState<RegistroHistorico[]>(historicoMock)

  function handleStatus(id: string, status: RegistroHistorico['status']) {
    setHistorico(prev => prev.map(h => h.id === id ? { ...h, status } : h))
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-1">
        {historico.length} registros encontrados
      </p>

      {historico.map(h => (
        <div key={h.id}
          className="border border-gray-200 rounded-xl px-5 py-4 bg-white shadow-sm flex items-start justify-between gap-4 hover:border-gray-300 transition-colors">

          <div className="flex flex-col gap-1 flex-1 min-w-0">
            {/* Linha 1 — usuário + ação */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-semibold text-gray-800">{h.usuario}</span>
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{h.cargo}</span>
              <span className="text-xs text-gray-500">·</span>
              <span className="text-xs text-gray-500">{h.acao}</span>
            </div>

            {/* Linha 2 — indicador */}
            <p className="text-xs text-gray-500 truncate">{h.indicador}</p>

            {/* Linha 3 — valor anterior → novo (se houver) */}
            {h.valorAnterior && h.valorNovo && (
              <div className="flex items-center gap-1.5 text-xs mt-0.5">
                <span className="text-red-400 line-through">{h.valorAnterior}</span>
                <ArrowRight className="w-3 h-3 text-gray-400" />
                <span className="text-green-600 font-semibold">{h.valorNovo}</span>
              </div>
            )}

            {/* Data */}
            <p className="text-xs text-gray-400 mt-1">{h.data}</p>
          </div>

          {/* Status + ações */}
          <div className="flex flex-col items-end gap-2 flex-shrink-0">
            <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${corStatus[h.status]}`}>
              {h.status}
            </span>

            {h.status === 'pendente' && (
              <div className="flex gap-1">
                <button onClick={() => handleStatus(h.id, 'aprovado')}
                  className="text-xs bg-green-500 hover:bg-green-400 text-white px-2 py-1 rounded transition-colors font-bold">
                  Aprovar
                </button>
                <button onClick={() => handleStatus(h.id, 'rejeitado')}
                  className="text-xs bg-red-500 hover:bg-red-400 text-white px-2 py-1 rounded transition-colors font-bold">
                  Rejeitar
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
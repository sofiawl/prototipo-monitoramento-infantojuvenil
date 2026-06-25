import { User, Users } from 'lucide-react'

interface ResponsaveisSectionProps {
  responsavelPrincipal: string
  colaboradores: string[]
}

function ResponsaveisSection({
  responsavelPrincipal,
  colaboradores,
}: ResponsaveisSectionProps) {
  if (!responsavelPrincipal && colaboradores.length === 0) {
    return null
  }

  return (
    <div className="flex flex-col gap-2 mb-4 p-3 bg-blue-50 border border-blue-100 rounded-lg">
      {responsavelPrincipal && (
        <div className="flex items-start gap-2">
          <User size={16} className="text-sky-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Responsável Principal
            </p>
            <p className="text-sm font-semibold text-gray-700">{responsavelPrincipal}</p>
          </div>
        </div>
      )}
      {colaboradores.length > 0 && (
        <div className="flex items-start gap-2">
          <Users size={16} className="text-sky-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Colaboradores
            </p>
            <p className="text-sm text-gray-600">{colaboradores.join(', ')}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ResponsaveisSection

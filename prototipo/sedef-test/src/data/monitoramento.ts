import {
  compromissos,
  type Compromisso,
  type LinhaDeAcao,
  type Objetivo,
} from '@/data/planoDecenal'

export type StatusTarefa = 'nao_iniciada' | 'em_andamento' | 'concluida'
export type TipoIndicador = 'percentual' | 'absoluto'

export interface HistoricoEntrada {
  data: string
  campo: string
  conteudoAnterior: string
  conteudoNovo: string
}

export interface Tarefa {
  id: string
  descricao: string
  status: StatusTarefa
  percentualConcluido?: number
  ultimaAtualizacao: string
  historico: HistoricoEntrada[]
}

export interface ValorAnual {
  ano: number
  valor: number
}

export interface Indicador {
  id: string
  nome: string
  tipo: TipoIndicador
  valorAtual: number
  unidade?: string
  meta?: number
  ultimaAtualizacao: string
  historicoAnual: ValorAnual[]
}

export interface DadosMonitoramento {
  responsavelPrincipal: string
  colaboradores: string[]
  tarefas: Tarefa[]
  indicadores: Indicador[]
}

export type LinhaDeAcaoComMonitoramento = LinhaDeAcao & DadosMonitoramento

export interface ObjetivoComMonitoramento extends Omit<Objetivo, 'linhasDeAcao'> {
  linhasDeAcao: LinhaDeAcaoComMonitoramento[]
}

export interface CompromissoComMonitoramento extends Omit<Compromisso, 'objetivos'> {
  objetivos: ObjetivoComMonitoramento[]
}

export const STATUS_LABELS: Record<StatusTarefa, string> = {
  nao_iniciada: 'Não iniciada',
  em_andamento: 'Em andamento',
  concluida: 'Concluída',
}

export const TIPO_INDICADOR_CONFIG: Record<
  TipoIndicador,
  { label: string; badgeClass: string; chartColor: string }
> = {
  percentual: {
    label: 'Percentual',
    badgeClass: 'bg-sky-100 text-sky-700 border-sky-300',
    chartColor: '#0ea5e9',
  },
  absoluto: {
    label: 'Absoluto',
    badgeClass: 'bg-amber-100 text-amber-800 border-amber-300',
    chartColor: '#d97706',
  },
}

export const dadosMonitoramentoVazio: DadosMonitoramento = {
  responsavelPrincipal: '',
  colaboradores: [],
  tarefas: [],
  indicadores: [],
}

export function formatUltimaAtualizacao(iso: string): string {
  const date = new Date(iso)
  return date.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function historicoAnual(valores: Record<number, number>): ValorAnual[] {
  return Object.entries(valores)
    .map(([ano, valor]) => ({ ano: Number(ano), valor }))
    .sort((a, b) => a.ano - b.ano)
}

const historico2016a2025 = {
  progressivo: historicoAnual({
    2016: 12, 2017: 18, 2018: 24, 2019: 31, 2020: 38,
    2021: 45, 2022: 52, 2023: 61, 2024: 72, 2025: 78,
  }),
  absoluto: historicoAnual({
    2016: 8, 2017: 12, 2018: 15, 2019: 22, 2020: 28,
    2021: 35, 2022: 41, 2023: 48, 2024: 54, 2025: 62,
  }),
}

export const monitoramentoPorLinhaId: Record<string, DadosMonitoramento> = {
  'c1-o1-l1': {
    responsavelPrincipal: 'Secretaria de Estado da Família e Desenvolvimento Social',
    colaboradores: ['CEDCA/PR', 'Conselhos Tutelares Municipais', 'Universidade Estadual do Paraná'],
    tarefas: [
      {
        id: 'c1-o1-l1-t1',
        descricao: 'Elaborar currículo de capacitação para a rede de proteção.',
        status: 'concluida',
        percentualConcluido: 100,
        ultimaAtualizacao: '2025-11-14T10:30:00',
        historico: [
          { data: '2024-03-10T09:00:00', campo: 'status', conteudoAnterior: 'Não iniciada', conteudoNovo: 'Em andamento' },
          { data: '2024-08-22T14:15:00', campo: 'percentual', conteudoAnterior: '35%', conteudoNovo: '70%' },
          { data: '2025-11-14T10:30:00', campo: 'status', conteudoAnterior: 'Em andamento', conteudoNovo: 'Concluída' },
        ],
      },
      {
        id: 'c1-o1-l1-t2',
        descricao: 'Realizar oficinas presenciais em 15 regionais do estado.',
        status: 'em_andamento',
        percentualConcluido: 60,
        ultimaAtualizacao: '2026-05-20T16:45:00',
        historico: [
          { data: '2025-01-15T08:00:00', campo: 'status', conteudoAnterior: 'Não iniciada', conteudoNovo: 'Em andamento' },
          { data: '2025-09-30T11:20:00', campo: 'percentual', conteudoAnterior: '20%', conteudoNovo: '45%' },
          { data: '2026-05-20T16:45:00', campo: 'percentual', conteudoAnterior: '45%', conteudoNovo: '60%' },
        ],
      },
    ],
    indicadores: [
      {
        id: 'c1-o1-l1-i1',
        nome: 'Profissionais capacitados na rede de proteção',
        tipo: 'percentual',
        valorAtual: 78,
        unidade: '%',
        meta: 100,
        ultimaAtualizacao: '2026-05-18T09:00:00',
        historicoAnual: historico2016a2025.progressivo,
      },
    ],
  },
  'c1-o1-l2': {
    responsavelPrincipal: 'Secretaria de Estado da Saúde',
    colaboradores: ['Secretaria de Assistência Social', 'Ministério Público do Paraná'],
    tarefas: [
      {
        id: 'c1-o1-l2-t1',
        descricao: 'Identificar municípios-sede para instalação dos centros regionais.',
        status: 'concluida',
        percentualConcluido: 100,
        ultimaAtualizacao: '2025-06-01T12:00:00',
        historico: [
          { data: '2024-05-01T10:00:00', campo: 'status', conteudoAnterior: 'Não iniciada', conteudoNovo: 'Em andamento' },
          { data: '2025-06-01T12:00:00', campo: 'status', conteudoAnterior: 'Em andamento', conteudoNovo: 'Concluída' },
        ],
      },
      {
        id: 'c1-o1-l2-t2',
        descricao: 'Inaugurar centros de referência nas regiões Norte e Oeste.',
        status: 'nao_iniciada',
        ultimaAtualizacao: '2024-01-10T08:00:00',
        historico: [
          { data: '2024-01-10T08:00:00', campo: 'status', conteudoAnterior: '—', conteudoNovo: 'Não iniciada' },
        ],
      },
    ],
    indicadores: [
      {
        id: 'c1-o1-l2-i1',
        nome: 'Centros de referência implantados',
        tipo: 'absoluto',
        valorAtual: 62,
        unidade: 'unidades',
        meta: 80,
        ultimaAtualizacao: '2026-04-12T15:30:00',
        historicoAnual: historico2016a2025.absoluto,
      },
    ],
  },
  'c1-o1-l3': {
    responsavelPrincipal: 'Conselho Estadual dos Direitos da Criança e do Adolescente',
    colaboradores: ['Tribunal de Justiça do Paraná', 'Defensoria Pública'],
    tarefas: [
      {
        id: 'c1-o1-l3-t1',
        descricao: 'Redigir protocolo intersetorial de encaminhamento de casos.',
        status: 'em_andamento',
        percentualConcluido: 75,
        ultimaAtualizacao: '2026-06-10T11:00:00',
        historico: [
          { data: '2025-02-20T09:30:00', campo: 'status', conteudoAnterior: 'Não iniciada', conteudoNovo: 'Em andamento' },
          { data: '2025-12-05T14:00:00', campo: 'percentual', conteudoAnterior: '40%', conteudoNovo: '60%' },
          { data: '2026-06-10T11:00:00', campo: 'percentual', conteudoAnterior: '60%', conteudoNovo: '75%' },
        ],
      },
    ],
    indicadores: [
      {
        id: 'c1-o1-l3-i1',
        nome: 'Avanço na formalização do protocolo intersetorial',
        tipo: 'percentual',
        valorAtual: 75,
        unidade: '%',
        meta: 100,
        ultimaAtualizacao: '2026-02-28T10:00:00',
        historicoAnual: historicoAnual({
          2016: 0, 2017: 0, 2018: 5, 2019: 10, 2020: 15,
          2021: 25, 2022: 40, 2023: 55, 2024: 65, 2025: 75,
        }),
      },
    ],
  },
  'c1-o2-l1': {
    responsavelPrincipal: 'Secretaria de Comunicação Social',
    colaboradores: ['Prefeituras parceiras', 'ONGs de proteção à infância'],
    tarefas: [
      {
        id: 'c1-o2-l1-t1',
        descricao: 'Produzir material educativo para campanha estadual.',
        status: 'concluida',
        percentualConcluido: 100,
        ultimaAtualizacao: '2025-08-15T13:20:00',
        historico: [
          { data: '2024-11-01T09:00:00', campo: 'status', conteudoAnterior: 'Não iniciada', conteudoNovo: 'Em andamento' },
          { data: '2025-08-15T13:20:00', campo: 'status', conteudoAnterior: 'Em andamento', conteudoNovo: 'Concluída' },
        ],
      },
    ],
    indicadores: [
      {
        id: 'c1-o2-l1-i1',
        nome: 'Municípios com campanha ativa',
        tipo: 'percentual',
        valorAtual: 55,
        unidade: '%',
        meta: 90,
        ultimaAtualizacao: '2026-03-22T08:45:00',
        historicoAnual: historicoAnual({
          2016: 5, 2017: 10, 2018: 15, 2019: 20, 2020: 25,
          2021: 30, 2022: 38, 2023: 44, 2024: 50, 2025: 55,
        }),
      },
    ],
  },
  'c1-o2-l2': {
    responsavelPrincipal: 'Secretaria de Estado da Família e Desenvolvimento Social',
    colaboradores: ['CRAS regionais', 'Assistência Social Municipal'],
    tarefas: [
      {
        id: 'c1-o2-l2-t1',
        descricao: 'Mapear famílias elegíveis para grupos de apoio.',
        status: 'em_andamento',
        percentualConcluido: 40,
        ultimaAtualizacao: '2026-06-01T17:00:00',
        historico: [
          { data: '2025-04-10T10:00:00', campo: 'status', conteudoAnterior: 'Não iniciada', conteudoNovo: 'Em andamento' },
          { data: '2026-06-01T17:00:00', campo: 'percentual', conteudoAnterior: '25%', conteudoNovo: '40%' },
        ],
      },
      {
        id: 'c1-o2-l2-t2',
        descricao: 'Formar facilitadores para condução dos grupos.',
        status: 'nao_iniciada',
        ultimaAtualizacao: '2025-01-05T09:00:00',
        historico: [
          { data: '2025-01-05T09:00:00', campo: 'status', conteudoAnterior: '—', conteudoNovo: 'Não iniciada' },
        ],
      },
    ],
    indicadores: [
      {
        id: 'c1-o2-l2-i1',
        nome: 'Grupos de apoio em funcionamento',
        tipo: 'absoluto',
        valorAtual: 28,
        unidade: 'grupos',
        meta: 50,
        ultimaAtualizacao: '2026-05-30T14:00:00',
        historicoAnual: historicoAnual({
          2016: 2, 2017: 4, 2018: 6, 2019: 8, 2020: 10,
          2021: 14, 2022: 18, 2023: 22, 2024: 25, 2025: 28,
        }),
      },
    ],
  },
  'c2-o1-l1': {
    responsavelPrincipal: 'Secretaria de Estado da Saúde',
    colaboradores: ['Ministério da Saúde', 'Gestores municipais de saúde'],
    tarefas: [
      {
        id: 'c2-o1-l1-t1',
        descricao: 'Levantar municípios elegíveis para implantação de CAPSij.',
        status: 'concluida',
        percentualConcluido: 100,
        ultimaAtualizacao: '2025-03-20T11:30:00',
        historico: [
          { data: '2024-06-15T08:00:00', campo: 'status', conteudoAnterior: 'Não iniciada', conteudoNovo: 'Em andamento' },
          { data: '2025-03-20T11:30:00', campo: 'status', conteudoAnterior: 'Em andamento', conteudoNovo: 'Concluída' },
        ],
      },
      {
        id: 'c2-o1-l1-t2',
        descricao: 'Contratar equipes multiprofissionais para unidades CAPSij.',
        status: 'em_andamento',
        percentualConcluido: 55,
        ultimaAtualizacao: '2026-06-15T10:15:00',
        historico: [
          { data: '2025-05-01T09:00:00', campo: 'status', conteudoAnterior: 'Não iniciada', conteudoNovo: 'Em andamento' },
          { data: '2026-01-20T16:00:00', campo: 'percentual', conteudoAnterior: '30%', conteudoNovo: '45%' },
          { data: '2026-06-15T10:15:00', campo: 'percentual', conteudoAnterior: '45%', conteudoNovo: '55%' },
        ],
      },
    ],
    indicadores: [
      {
        id: 'c2-o1-l1-i1',
        nome: 'CAPSij implantados em municípios elegíveis',
        tipo: 'percentual',
        valorAtual: 68,
        unidade: '%',
        meta: 100,
        ultimaAtualizacao: '2026-06-12T09:30:00',
        historicoAnual: historicoAnual({
          2016: 8, 2017: 14, 2018: 20, 2019: 28, 2020: 35,
          2021: 42, 2022: 50, 2023: 58, 2024: 63, 2025: 68,
        }),
      },
    ],
  },
  'c2-o1-l2': {
    responsavelPrincipal: 'Secretaria de Estado da Saúde',
    colaboradores: ['Universidade Federal do Paraná', 'Conselho Regional de Psicologia'],
    tarefas: [
      {
        id: 'c2-o1-l2-t1',
        descricao: 'Desenvolver módulo de capacitação para equipes de ESF.',
        status: 'em_andamento',
        percentualConcluido: 80,
        ultimaAtualizacao: '2026-05-25T14:40:00',
        historico: [
          { data: '2024-09-01T10:00:00', campo: 'status', conteudoAnterior: 'Não iniciada', conteudoNovo: 'Em andamento' },
          { data: '2025-11-10T11:00:00', campo: 'percentual', conteudoAnterior: '50%', conteudoNovo: '65%' },
          { data: '2026-05-25T14:40:00', campo: 'percentual', conteudoAnterior: '65%', conteudoNovo: '80%' },
        ],
      },
    ],
    indicadores: [
      {
        id: 'c2-o1-l2-i1',
        nome: 'Equipes de atenção básica capacitadas',
        tipo: 'absoluto',
        valorAtual: 340,
        unidade: 'equipes',
        meta: 500,
        ultimaAtualizacao: '2026-06-08T08:00:00',
        historicoAnual: historicoAnual({
          2016: 45, 2017: 72, 2018: 98, 2019: 130, 2020: 165,
          2021: 200, 2022: 240, 2023: 280, 2024: 310, 2025: 340,
        }),
      },
    ],
  },
  'c2-o2-l1': {
    responsavelPrincipal: 'Secretaria de Estado da Saúde',
    colaboradores: ['Hospitais regionais', 'Agentes comunitários de saúde'],
    tarefas: [
      {
        id: 'c2-o2-l1-t1',
        descricao: 'Ampliar cobertura do pré-natal de alto risco em regiões prioritárias.',
        status: 'em_andamento',
        percentualConcluido: 70,
        ultimaAtualizacao: '2026-06-18T12:00:00',
        historico: [
          { data: '2024-04-01T08:30:00', campo: 'status', conteudoAnterior: 'Não iniciada', conteudoNovo: 'Em andamento' },
          { data: '2025-10-15T15:00:00', campo: 'percentual', conteudoAnterior: '45%', conteudoNovo: '60%' },
          { data: '2026-06-18T12:00:00', campo: 'percentual', conteudoAnterior: '60%', conteudoNovo: '70%' },
        ],
      },
    ],
    indicadores: [
      {
        id: 'c2-o2-l1-i1',
        nome: 'Gestantes de alto risco acompanhadas',
        tipo: 'percentual',
        valorAtual: 82,
        unidade: '%',
        meta: 95,
        ultimaAtualizacao: '2026-06-20T09:00:00',
        historicoAnual: historicoAnual({
          2016: 40, 2017: 48, 2018: 55, 2019: 60, 2020: 65,
          2021: 70, 2022: 74, 2023: 77, 2024: 80, 2025: 82,
        }),
      },
    ],
  },
  'c2-o2-l2': {
    responsavelPrincipal: 'Secretaria de Estado da Saúde',
    colaboradores: ['Vigilância Epidemiológica', 'Secretarias municipais de saúde'],
    tarefas: [
      {
        id: 'c2-o2-l2-t1',
        descricao: 'Realizar mutirões de vacinação em municípios com baixa cobertura.',
        status: 'concluida',
        percentualConcluido: 100,
        ultimaAtualizacao: '2025-12-10T16:30:00',
        historico: [
          { data: '2025-01-20T09:00:00', campo: 'status', conteudoAnterior: 'Não iniciada', conteudoNovo: 'Em andamento' },
          { data: '2025-12-10T16:30:00', campo: 'status', conteudoAnterior: 'Em andamento', conteudoNovo: 'Concluída' },
        ],
      },
      {
        id: 'c2-o2-l2-t2',
        descricao: 'Monitorar cobertura vacinal mensal nos municípios prioritários.',
        status: 'em_andamento',
        percentualConcluido: 90,
        ultimaAtualizacao: '2026-06-22T11:45:00',
        historico: [
          { data: '2025-03-01T10:00:00', campo: 'status', conteudoAnterior: 'Não iniciada', conteudoNovo: 'Em andamento' },
          { data: '2026-06-22T11:45:00', campo: 'percentual', conteudoAnterior: '75%', conteudoNovo: '90%' },
        ],
      },
    ],
    indicadores: [
      {
        id: 'c2-o2-l2-i1',
        nome: 'Percentual de municípios com cobertura vacinal acima da meta',
        tipo: 'percentual',
        valorAtual: 68,
        unidade: '%',
        meta: 90,
        ultimaAtualizacao: '2026-06-01T08:00:00',
        historicoAnual: historicoAnual({
          2016: 12, 2017: 18, 2018: 22, 2019: 25, 2020: 30,
          2021: 38, 2022: 45, 2023: 52, 2024: 60, 2025: 68,
        }),
      },
    ],
  },
  'c2-o2-l3': {
    responsavelPrincipal: 'Conselho Estadual dos Direitos da Criança e do Adolescente',
    colaboradores: ['Secretaria de Saúde', 'Prefeituras'],
    tarefas: [
      {
        id: 'c2-o2-l3-t1',
        descricao: 'Elaborar modelo de comitê municipal de prevenção.',
        status: 'concluida',
        percentualConcluido: 100,
        ultimaAtualizacao: '2025-07-01T10:00:00',
        historico: [
          { data: '2024-10-01T09:00:00', campo: 'status', conteudoAnterior: 'Não iniciada', conteudoNovo: 'Em andamento' },
          { data: '2025-07-01T10:00:00', campo: 'status', conteudoAnterior: 'Em andamento', conteudoNovo: 'Concluída' },
        ],
      },
      {
        id: 'c2-o2-l3-t2',
        descricao: 'Instalar comitês em municípios com mortalidade infantil elevada.',
        status: 'nao_iniciada',
        ultimaAtualizacao: '2025-02-01T08:00:00',
        historico: [
          { data: '2025-02-01T08:00:00', campo: 'status', conteudoAnterior: '—', conteudoNovo: 'Não iniciada' },
        ],
      },
    ],
    indicadores: [
      {
        id: 'c2-o2-l3-i1',
        nome: 'Comitês municipais instalados',
        tipo: 'absoluto',
        valorAtual: 18,
        unidade: 'comitês',
        meta: 35,
        ultimaAtualizacao: '2026-05-15T13:00:00',
        historicoAnual: historicoAnual({
          2016: 0, 2017: 1, 2018: 2, 2019: 4, 2020: 6,
          2021: 8, 2022: 10, 2023: 12, 2024: 15, 2025: 18,
        }),
      },
    ],
  },
}

export function getMonitoramentoLinha(linhaId: string): DadosMonitoramento {
  return monitoramentoPorLinhaId[linhaId] ?? dadosMonitoramentoVazio
}

export function linhaTemMonitoramento(dados: DadosMonitoramento): boolean {
  return dados.tarefas.length > 0 || dados.indicadores.length > 0
}

function enriquecerLinha(linha: LinhaDeAcao): LinhaDeAcaoComMonitoramento {
  return { ...linha, ...getMonitoramentoLinha(linha.id) }
}

export const compromissosComMonitoramento: CompromissoComMonitoramento[] = compromissos.map(
  (compromisso) => ({
    ...compromisso,
    objetivos: compromisso.objetivos.map((objetivo) => ({
      ...objetivo,
      linhasDeAcao: objetivo.linhasDeAcao.map(enriquecerLinha),
    })),
  })
)

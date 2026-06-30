// ── Tipos ────────────────────────────────────────────────────────────
export interface ContaUsuario {
  id: string
  nome: string
  email: string
  celular: string
  cpf: string
  cargo: string
  ultimaAtividade: string
  ativo: boolean
}

export interface SubmissaoDado {
  id: string
  ano: string
  valor: number
  indicadorId: string
  indicadorNome: string
  compromissoNome: string
  responsavelNome: string
  status: 'pendente' | 'aprovado' | 'rejeitado'
  submetidoPor: string
  submetidoEm: string
}

export interface EntradaDado {
  ano: string
  valor: number
}

export interface RegistroHistorico {
  id: string
  usuario: string
  cargo: string
  acao: string
  indicador: string
  valorAnterior?: string
  valorNovo?: string
  data: string
  status: 'aprovado' | 'pendente' | 'rejeitado'
}

// ── Contas mockadas ──────────────────────────────────────────────────
export const contasMock: ContaUsuario[] = [
  { id: 'u1', nome: 'Alice Amorim',     email: 'alice@educacao.pr.gov.br',     celular: '(41) 99001-0001', cpf: '111.111.111-01', cargo: 'Secretaria de Educação',          ultimaAtividade: '10/05/2026 09:46', ativo: true  },
  { id: 'u2', nome: 'Bruno Gonçalves',  email: 'bruno@mp.pr.gov.br',           celular: '(41) 99001-0002', cpf: '111.111.111-02', cargo: 'Ministério Público',              ultimaAtividade: '14/02/2026 12:47', ativo: true  },
  { id: 'u3', nome: 'Beatriz Akemi',    email: 'beatriz@saude.pr.gov.br',      celular: '(41) 99001-0003', cpf: '111.111.111-03', cargo: 'Secretaria de Saúde',             ultimaAtividade: '03/05/2026 08:09', ativo: true  },
  { id: 'u4', nome: 'Caroline Machado', email: 'caroline@saude.pr.gov.br',     celular: '(41) 99001-0004', cpf: '111.111.111-04', cargo: 'Secretaria de Saúde',             ultimaAtividade: '27/04/2026 09:06', ativo: false },
  { id: 'u5', nome: 'Daniele Chagas',   email: 'daniele@educacao.pr.gov.br',   celular: '(41) 99001-0005', cpf: '111.111.111-05', cargo: 'Secretaria de Educação',          ultimaAtividade: '21/06/2026 10:28', ativo: true  },
  { id: 'u6', nome: 'Emanuelly Veiga',  email: 'emanuelly@esportes.pr.gov.br', celular: '(41) 99001-0006', cpf: '111.111.111-06', cargo: 'Secretaria de Esportes',          ultimaAtividade: '16/06/2026 10:11', ativo: true  },
]

export const cargosDisponiveis = [
  'Secretaria de Educação',
  'Secretaria de Assistência Social',
  'Secretaria de Saúde',
  'Ministério Público',
  'Secretaria de Segurança',
  'Secretaria de Justiça e Cidadania',
  'Secretaria de Trabalho, Qualificação e Renda',
  'Secretaria de Cultura',
  'Secretaria de Esportes',
  'Defensoria Pública',
]

// ── Submissões para verificação ──────────────────────────────────────
export const submissoesMock: SubmissaoDado[] = [
  { id: 's1', ano: '2024', valor: 14200, indicadorId: 'ind-3',  indicadorNome: 'Quantidade de estudantes acompanhados',        compromissoNome: 'Fortalecer a permanência escolar', responsavelNome: 'Alice Amorim',     status: 'pendente',  submetidoPor: 'Alice Amorim',     submetidoEm: '20/06/2026 14:32' },
  { id: 's2', ano: '2024', valor: 87,   indicadorId: 'ind-34', indicadorNome: 'Cobertura vacinal (todas as vacinas)',          compromissoNome: 'Recuperar cobertura vacinal',      responsavelNome: 'Beatriz Akemi',    status: 'pendente',  submetidoPor: 'Beatriz Akemi',    submetidoEm: '19/06/2026 09:15' },
  { id: 's3', ano: '2023', valor: 342,  indicadorId: 'ind-13', indicadorNome: 'Quantidade de denúncias registradas',          compromissoNome: 'Enfrentar violência contra crianças', responsavelNome: 'Bruno Gonçalves', status: 'aprovado',  submetidoPor: 'Bruno Gonçalves',  submetidoEm: '10/06/2026 11:00' },
  { id: 's4', ano: '2023', valor: 5600, indicadorId: 'ind-71', indicadorNome: 'Número de crianças em programas esportivos',   compromissoNome: 'Reduzir desigualdades no acesso',  responsavelNome: 'Emanuelly Veiga',  status: 'rejeitado', submetidoPor: 'Emanuelly Veiga',  submetidoEm: '05/06/2026 16:45' },
]

// ── Dados editáveis por indicador ────────────────────────────────────
export const dadosPorIndicador: Record<string, EntradaDado[]> = {
  'ind-3':  [{ ano: '2014', valor: 10123 }, { ano: '2015', valor: 11000 }, { ano: '2016', valor: 15467 }, { ano: '2017', valor: 17899 }, { ano: '2018', valor: 17945 }, { ano: '2019', valor: 18669 }],
  'ind-5':  [{ ano: '2014', valor: 10 }, { ano: '2015', valor: 13 }, { ano: '2016', valor: 15 }, { ano: '2017', valor: 14 }, { ano: '2018', valor: 16 }, { ano: '2019', valor: 17 }],
  'ind-34': [{ ano: '2014', valor: 92 }, { ano: '2015', valor: 90 }, { ano: '2016', valor: 88 }, { ano: '2017', valor: 85 }, { ano: '2018', valor: 83 }, { ano: '2019', valor: 87 }],
  'ind-13': [{ ano: '2014', valor: 210 }, { ano: '2015', valor: 245 }, { ano: '2016', valor: 280 }, { ano: '2017', valor: 310 }, { ano: '2018', valor: 295 }, { ano: '2019', valor: 342 }],
}

// ── Histórico de alterações ──────────────────────────────────────────
export const historicoMock: RegistroHistorico[] = [
  { id: 'h1', usuario: 'Alice Amorim',    cargo: 'Sec. Educação',    acao: 'Edição de dado',    indicador: 'Quantidade de estudantes acompanhados',      valorAnterior: '10123', valorNovo: '11500', data: '20/06/2026 14:32', status: 'aprovado'  },
  { id: 'h2', usuario: 'Beatriz Akemi',   cargo: 'Sec. Saúde',       acao: 'Submissão de dado', indicador: 'Cobertura vacinal (todas as vacinas)',        valorAnterior: '85',    valorNovo: '87',    data: '19/06/2026 09:15', status: 'pendente'  },
  { id: 'h3', usuario: 'Bruno Gonçalves', cargo: 'Min. Público',     acao: 'Submissão de dado', indicador: 'Quantidade de denúncias registradas',         valorAnterior: '295',   valorNovo: '342',   data: '10/06/2026 11:00', status: 'aprovado'  },
  { id: 'h4', usuario: 'Emanuelly Veiga', cargo: 'Sec. Esportes',    acao: 'Submissão de dado', indicador: 'Número de crianças em programas esportivos',  valorAnterior: '5100',  valorNovo: '5600',  data: '05/06/2026 16:45', status: 'rejeitado' },
  { id: 'h5', usuario: 'Daniele Chagas',  cargo: 'Sec. Educação',    acao: 'Criação de conta',  indicador: '—',                                          data: '01/06/2026 08:00', status: 'aprovado'  },
  { id: 'h6', usuario: 'James (Admin)',   cargo: 'Admin',            acao: 'Aprovação de dado', indicador: 'Quantidade de denúncias registradas',         valorAnterior: '—',     valorNovo: '342',   data: '11/06/2026 10:00', status: 'aprovado'  },
]
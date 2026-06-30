// ── Tipos ────────────────────────────────────────────────────────────
export interface IndicadorFiltro {
  id: string;
  nome: string;
}

export interface ResponsavelFiltro {
  id: string;
  nome: string;
}

export interface AreaFiltro {
  id: string;
  nome: string;
}

export interface CompromissoFiltro {
  id: string;
  nome: string;
  area: string;
  idResponsavel: string[];
  idIndicador: string[];
}

export interface FiltrosState {
  area: string;
  compromisso: string;
  responsavel: string;
  periodoTempo: string;
  indicador: string;
}

export interface MetricaGeral {
  label: string;
  valor: string;
  descricao: string;
  cor: string;
}

// dados --------------------------------------------------------------------------------

// provisorio
export const periodos = ["2014–2016", "2017–2019", "2020–2022", "2014–2022"];

export const metricasGerais: MetricaGeral[] = [
  {
    label: "Compromissos Cumpridos",
    valor: "3 / 23",
    descricao: "compromissos com metas atingidas",
    cor: "text-blue-600",
  },
  {
    label: "Tarefas Concluídas",
    valor: "47",
    descricao: "de 80 tarefas totais (59%)",
    cor: "text-emerald-600",
  },
  {
    label: "Implementação",
    valor: "63%",
    descricao: "das intervenções implementadas",
    cor: "text-violet-600",
  },
  {
    label: "Crianças Impactadas",
    valor: "124.800",
    descricao: "crianças e adolescentes atendidos",
    cor: "text-orange-500",
  },
];

export const areas: AreaFiltro[] = [
  { id: "area-1", nome: "Vida" },
  { id: "area-2", nome: "Saúde" },
  { id: "area-3", nome: "Educação" },
  { id: "area-4", nome: "Convivência" },
  { id: "area-5", nome: "Trabalho Infantil" },
  { id: "area-6", nome: "Desenvolvimento" },
  { id: "area-7", nome: "Esporte, Lazer e Cultura" },
  { id: "area-8", nome: "Acolhimento Migrante" },
];

export const responsaveis: ResponsavelFiltro[] = [
  { id: "resp-1", nome: "Secretaria de Educação" },
  { id: "resp-2", nome: "Secretaria de Assistência Social" },
  { id: "resp-3", nome: "Secretaria de Saúde" },
  { id: "resp-4", nome: "Ministério Público" },
  { id: "resp-5", nome: "Secretaria de Segurança" },
  { id: "resp-6", nome: "Secretaria de Justiça e Cidadania" },
  { id: "resp-7", nome: "Secretaria de Trabalho, Qualificação e Renda" },
  { id: "resp-8", nome: "Secretaria de Cultura" },
  { id: "resp-9", nome: "Secretaria de Esportes" },
  { id: "resp-10", nome: "Defensoria Pública" },
  { id: "resp-11", nome: "Poder Judiciário" },
];

export const indicadores: IndicadorFiltro[] = [
  // Educação
  { id: "ind-1", nome: "Taxa de evasão escolar" },
  { id: "ind-2", nome: "Percentual de frequência média mensal" },
  { id: "ind-3", nome: "Quantidade de estudantes acompanhados" },
  {
    id: "ind-4",
    nome: "Percentual de escolas com atualização mensal dos dados",
  },
  // Segurança Alimentar
  {
    id: "ind-5",
    nome: "Percentual de crianças em situação de insegurança alimentar",
  },
  { id: "ind-6", nome: "Quantidade de famílias acompanhadas" },
  { id: "ind-7", nome: "Média de avaliações nutricionais realizadas por mês" },
  { id: "ind-8", nome: "Percentual de municípios com dados atualizados" },
  // Saúde Mental
  { id: "ind-9", nome: "Quantidade de atendimentos realizados" },
  { id: "ind-10", nome: "Tempo médio de espera para atendimento" },
  { id: "ind-11", nome: "Percentual de casos acompanhados continuamente" },
  { id: "ind-12", nome: "Quantidade de encaminhamentos concluídos" },
  // Violência Infantil
  { id: "ind-13", nome: "Quantidade de denúncias registradas" },
  { id: "ind-14", nome: "Percentual de casos em acompanhamento" },
  { id: "ind-15", nome: "Tempo médio de resposta às denúncias" },
  { id: "ind-16", nome: "Percentual de casos encerrados" },

  // Área 1 – Violências (comp-1 a comp-8) – mais indicadores
  {
    id: "ind-17",
    nome: "Taxa de utilização de serviços com redução de barreiras",
  },
  {
    id: "ind-18",
    nome: "Percentual de municípios com protocolos de escuta especializada",
  },
  { id: "ind-19", nome: "Quantidade de denúncias de violência digital" },
  { id: "ind-20", nome: "Tempo médio de remoção de conteúdo abusivo" },
  {
    id: "ind-21",
    nome: "Número de mortes de adolescentes em intervenções policiais",
  },
  { id: "ind-22", nome: "Percentual de adolescentes negros entre vítimas" },
  { id: "ind-23", nome: "Taxa de letalidade por território" },
  { id: "ind-24", nome: "Índice de clima escolar positivo" },
  { id: "ind-25", nome: "Número de episódios de violência escolar" },
  { id: "ind-26", nome: "Percentual de escolas com protocolos de prevenção" },
  { id: "ind-27", nome: "Taxa de reincidência no sistema socioeducativo" },
  { id: "ind-28", nome: "Percentual de adolescentes com PIA qualificado" },
  { id: "ind-29", nome: "Cobertura de atividades educacionais no sistema" },
  { id: "ind-30", nome: "Índice de saúde mental de socioeducandos" },

  // Área 2 – Saúde (comp-9 a comp-14)
  { id: "ind-31", nome: "Taxa de gravidez na adolescência (10-19 anos)" },
  {
    id: "ind-32",
    nome: "Percentual de adolescentes com acesso a contracepção",
  },
  { id: "ind-33", nome: "Cobertura de educação sexual nas escolas" },
  { id: "ind-34", nome: "Cobertura vacinal (todas as vacinas)" },
  { id: "ind-35", nome: "Percentual de municípios com microplanejamento" },
  { id: "ind-36", nome: "Taxa de hesitação vacinal" },
  { id: "ind-37", nome: "Razão de mortalidade materna" },
  { id: "ind-38", nome: "Taxa de mortalidade infantil" },
  { id: "ind-39", nome: "Percentual de óbitos por causas evitáveis" },
  { id: "ind-40", nome: "Taxa de internações por ICSAP pediátricas" },
  { id: "ind-41", nome: "Cobertura de APS infantil" },
  { id: "ind-42", nome: "Percentual de crianças com acompanhamento pós-alta" },
  { id: "ind-43", nome: "Prevalência de consumo de álcool entre adolescentes" },
  { id: "ind-44", nome: "Prevalência de uso de cigarros eletrônicos" },
  { id: "ind-45", nome: "Percentual de escolas com programas de prevenção" },
  { id: "ind-46", nome: "Número de mortes de crianças no trânsito" },
  { id: "ind-47", nome: "Percentual de entornos escolares seguros" },
  {
    id: "ind-48",
    nome: "Taxa de fiscalização de velocidade em zonas escolares",
  },

  // Área 3 – Educação (comp-15 a comp-16)
  { id: "ind-49", nome: "Número de vagas em creche" },
  { id: "ind-50", nome: "Percentual de crianças na educação infantil" },
  { id: "ind-51", nome: "Índice de qualidade da educação infantil" },
  { id: "ind-52", nome: "Taxa de distorção idade-série no meio rural" },
  {
    id: "ind-53",
    nome: "Percentual de escolas rurais com infraestrutura adequada",
  },
  { id: "ind-54", nome: "Taxa de evasão escolar no meio rural" },

  // Área 4 – Convivência familiar (comp-17 a comp-18)
  { id: "ind-55", nome: "Percentual de crianças em acolhimento familiar" },
  { id: "ind-56", nome: "Tempo médio de acolhimento" },
  { id: "ind-57", nome: "Número de famílias acolhedoras cadastradas" },
  { id: "ind-58", nome: "Percentual de adoções de crianças com deficiência" },
  { id: "ind-59", nome: "Número de adoções de adolescentes" },
  { id: "ind-60", nome: "Taxa de devolução de crianças adotadas" },

  // Área 5 – Trabalho (comp-19 a comp-20)
  { id: "ind-61", nome: "Número de crianças em trabalho infantil" },
  { id: "ind-62", nome: "Percentual de crianças nas piores formas" },
  { id: "ind-63", nome: "Cobertura de programas de erradicação" },
  { id: "ind-64", nome: "Número de adolescentes em programas de aprendizagem" },
  {
    id: "ind-65",
    nome: "Percentual de adolescentes com formação profissional",
  },
  { id: "ind-66", nome: "Taxa de inserção no mercado de trabalho formal" },

  // Área 6 – Primeira infância (comp-21)
  { id: "ind-67", nome: "Cobertura de visitas domiciliares" },
  { id: "ind-68", nome: "Percentual de crianças com desenvolvimento adequado" },
  {
    id: "ind-69",
    nome: "Número de famílias atendidas por programas parentais",
  },

  // Área 7 – Esporte, lazer e cultura (comp-22)
  {
    id: "ind-70",
    nome: "Percentual de municípios com oferta cultural infantil",
  },
  { id: "ind-71", nome: "Número de crianças em programas esportivos" },
  { id: "ind-72", nome: "Índice de participação em atividades de lazer" },

  // Área 8 – Migrantes (comp-23)
  { id: "ind-73", nome: "Número de crianças migrantes atendidas" },
  { id: "ind-74", nome: "Percentual de migrantes com acesso a serviços" },
  { id: "ind-75", nome: "Taxa de integração escolar de migrantes" },
];

export const compromissos: CompromissoFiltro[] = [
  // ===== Área 1: Violências =====
  {
    id: "comp-1",
    nome: "Consolidar o acesso sem barreiras como diretriz do Plano Decenal (transversal)",
    area: "area-1",
    idResponsavel: ["resp-1", "resp-2", "resp-3", "resp-4", "resp-5"],
    idIndicador: ["ind-1", "ind-2", "ind-3", "ind-4", "ind-5"],
  },
  {
    id: "comp-2",
    nome: "Fortalecer a governança, articulação e coordenação das políticas (transversal)",
    area: "area-1",
    idResponsavel: ["resp-1", "resp-2", "resp-3", "resp-4"],
    idIndicador: ["ind-6", "ind-7", "ind-8"],
  },
  {
    id: "comp-3",
    nome: "Enfrentar a persistência da violência contra crianças e adolescentes",
    area: "area-1",
    idResponsavel: ["resp-1", "resp-2", "resp-3", "resp-4"],
    idIndicador: ["ind-9", "ind-10", "ind-11", "ind-12"],
  },
  {
    id: "comp-4",
    nome: "Reduzir a violência e exploração sexual em pontos vulneráveis do território",
    area: "area-1",
    idResponsavel: ["resp-1", "resp-2", "resp-3", "resp-4", "resp-5"],
    idIndicador: ["ind-13", "ind-14", "ind-15", "ind-16"],
  },
  {
    id: "comp-5",
    nome: "Proteger crianças e adolescentes no ambiente digital",
    area: "area-1",
    idResponsavel: ["resp-1", "resp-2", "resp-3", "resp-4"],
    idIndicador: ["ind-17", "ind-18", "ind-19", "ind-20"],
  },
  {
    id: "comp-6",
    nome: "Reduzir as mortes de adolescentes em intervenções policiais",
    area: "area-1",
    idResponsavel: ["resp-1", "resp-2", "resp-3"],
    idIndicador: ["ind-21", "ind-22", "ind-23"],
  },
  {
    id: "comp-7",
    nome: "Garantir a segurança do ambiente escolar",
    area: "area-1",
    idResponsavel: ["resp-1", "resp-2", "resp-3"],
    idIndicador: ["ind-24", "ind-25", "ind-26"],
  },
  {
    id: "comp-8",
    nome: "Aprimorar o sistema socioeducativo com foco em proteção integral",
    area: "area-1",
    idResponsavel: ["resp-1", "resp-2", "resp-3", "resp-4"],
    idIndicador: ["ind-27", "ind-28", "ind-29", "ind-30"],
  },

  // ===== Área 2: Saúde =====
  {
    id: "comp-9",
    nome: "Reduzir a gravidez na adolescência com educação e contracepção",
    area: "area-2",
    idResponsavel: ["resp-1", "resp-2", "resp-3"],
    idIndicador: ["ind-31", "ind-32", "ind-33"],
  },
  {
    id: "comp-10",
    nome: "Recuperar e sustentar a cobertura vacinal",
    area: "area-2",
    idResponsavel: ["resp-1", "resp-2", "resp-3"],
    idIndicador: ["ind-34", "ind-35", "ind-36"],
  },
  {
    id: "comp-11",
    nome: "Diminuir a mortalidade materna e infantil por causas evitáveis",
    area: "area-2",
    idResponsavel: ["resp-1", "resp-2", "resp-3"],
    idIndicador: ["ind-37", "ind-38", "ind-39"],
  },
  {
    id: "comp-12",
    nome: "Reduzir as internações pediátricas por condições sensíveis à APS",
    area: "area-2",
    idResponsavel: ["resp-1", "resp-2", "resp-3"],
    idIndicador: ["ind-40", "ind-41", "ind-42"],
  },
  {
    id: "comp-13",
    nome: "Prevenir e reduzir o consumo precoce de álcool e drogas",
    area: "area-2",
    idResponsavel: ["resp-1", "resp-2", "resp-3", "resp-4"],
    idIndicador: ["ind-43", "ind-44", "ind-45"],
  },
  {
    id: "comp-14",
    nome: "Reduzir lesões e mortes de crianças no trânsito",
    area: "area-2",
    idResponsavel: ["resp-1", "resp-2", "resp-3"],
    idIndicador: ["ind-46", "ind-47", "ind-48"],
  },

  // ===== Área 3: Educação =====
  {
    id: "comp-15",
    nome: "Aprimorar e expandir a oferta de educação infantil com qualidade",
    area: "area-3",
    idResponsavel: ["resp-1", "resp-2", "resp-3"],
    idIndicador: ["ind-49", "ind-50", "ind-51"],
  },
  {
    id: "comp-16",
    nome: "Reduzir a distorção idade-série no meio rural",
    area: "area-3",
    idResponsavel: ["resp-1", "resp-2", "resp-3"],
    idIndicador: ["ind-52", "ind-53", "ind-54"],
  },

  // ===== Área 4: Convivência familiar =====
  {
    id: "comp-17",
    nome: "Ampliar o acolhimento familiar e reduzir o tempo de acolhimento",
    area: "area-4",
    idResponsavel: ["resp-1", "resp-2", "resp-3", "resp-4"],
    idIndicador: ["ind-55", "ind-56", "ind-57"],
  },
  {
    id: "comp-18",
    nome: "Impulsionar a adoção de crianças e adolescentes de difícil colocação",
    area: "area-4",
    idResponsavel: ["resp-1", "resp-2", "resp-3", "resp-4"],
    idIndicador: ["ind-58", "ind-59", "ind-60"],
  },

  // ===== Área 5: Trabalho =====
  {
    id: "comp-19",
    nome: "Erradicar o trabalho infantil no Paraná",
    area: "area-5",
    idResponsavel: ["resp-1", "resp-2", "resp-3", "resp-4", "resp-5"],
    idIndicador: ["ind-61", "ind-62", "ind-63"],
  },
  {
    id: "comp-20",
    nome: "Aprimorar a preparação para o mundo do trabalho na adolescência",
    area: "area-5",
    idResponsavel: ["resp-1", "resp-2", "resp-3", "resp-4"],
    idIndicador: ["ind-64", "ind-65", "ind-66"],
  },

  // ===== Área 6: Primeira infância =====
  {
    id: "comp-21",
    nome: "Expandir programas de apoio à parentalidade e desenvolvimento na primeira infância",
    area: "area-6",
    idResponsavel: ["resp-1", "resp-2", "resp-3"],
    idIndicador: ["ind-67", "ind-68", "ind-69"],
  },

  // ===== Área 7: Esporte, lazer e cultura =====
  {
    id: "comp-22",
    nome: "Reduzir desigualdades no acesso à cultura, esporte e lazer",
    area: "area-7",
    idResponsavel: ["resp-1", "resp-2", "resp-3"],
    idIndicador: ["ind-70", "ind-71", "ind-72"],
  },

  // ===== Área 8: Migrantes =====
  {
    id: "comp-23",
    nome: "Qualificar o atendimento a crianças e adolescentes migrantes e refugiados",
    area: "area-8",
    idResponsavel: ["resp-1", "resp-2", "resp-3", "resp-4"],
    idIndicador: ["ind-73", "ind-74", "ind-75"],
  },
];

// funcoes auxiliares -----------------------------------------------

// Dado um ID de área, retorna os compromissos correspondentes
export function getCompromissosByAreaId(areaId: string): CompromissoFiltro[] {
  if (!areaId) return compromissos;
  return compromissos.filter((c) => c.area === areaId);
}

// Dado um ID de compromisso, retorna os responsáveis associados (lista de objetos)
export function getResponsaveisByCompromissoId(
  compromissoId: string,
): ResponsavelFiltro[] {
  const comp = compromissos.find((c) => c.id === compromissoId);
  if (!comp) return responsaveis; // ou []
  return responsaveis.filter((r) => comp.idResponsavel.includes(r.id));
}

// Dado um ID de compromisso, retorna os indicadores associados
export function getIndicadoresByCompromissoId(
  compromissoId: string,
): IndicadorFiltro[] {
  const comp = compromissos.find((c) => c.id === compromissoId);
  if (!comp) return indicadores;
  return indicadores.filter((ind) => comp.idIndicador.includes(ind.id));
}

// Dado um ID de área, retorna todos os responsáveis únicos (para filtrar quando nenhum compromisso selecionado)
export function getResponsaveisByAreaId(areaId: string): ResponsavelFiltro[] {
  if (!areaId) return responsaveis;
  const comps = getCompromissosByAreaId(areaId);
  const respIds = new Set<string>();
  comps.forEach((c) => c.idResponsavel.forEach((id) => respIds.add(id)));
  return responsaveis.filter((r) => respIds.has(r.id));
}

// Similar para indicadores
export function getIndicadoresByAreaId(areaId: string): IndicadorFiltro[] {
  if (!areaId) return indicadores;
  const comps = getCompromissosByAreaId(areaId);
  const indIds = new Set<string>();
  comps.forEach((c) => c.idIndicador.forEach((id) => indIds.add(id)));
  return indicadores.filter((ind) => indIds.has(ind.id));
}

export function getIndicadoresByResponsavelId(
  responsavelId: string,
): IndicadorFiltro[] {
  if (!responsavelId) return indicadores;
  const comps = compromissos.filter((c) =>
    c.idResponsavel.includes(responsavelId),
  );
  const indIds = new Set<string>();
  comps.forEach((c) => c.idIndicador.forEach((id) => indIds.add(id)));
  return indicadores.filter((ind) => indIds.has(ind.id));
}
// mockup feito por IA

export interface LinhaDeAcao {
  id: string
  descricao: string
}

export interface Objetivo {
  id: string
  descricao: string
  linhasDeAcao: LinhaDeAcao[]
}

export interface Compromisso {
  id: string
  numero: number
  titulo: string
  tipo: string
  descricao: string
  objetivos: Objetivo[]
}

export const compromissos: Compromisso[] = [
  {
    id: 'c1',
    numero: 1,
    titulo: 'Proteção Integral',
    tipo: 'Marco Situacional',
    descricao: 'Garantir a proteção integral e prioritária de crianças e adolescentes, fortalecendo políticas públicas de prevenção e enfrentamento de todas as formas de violência no Estado do Paraná.',
    objetivos: [
      {
        id: 'c1-o1',
        descricao: 'Fortalecer a rede de proteção municipal e estadual para atendimento integral de crianças e adolescentes em situação de vulnerabilidade.',
        linhasDeAcao: [
          { id: 'c1-o1-l1', descricao: 'Capacitar profissionais da rede de proteção em metodologias de atendimento especializado.' },
          { id: 'c1-o1-l2', descricao: 'Implantar centros de referência regionais para atendimento integrado.' },
          { id: 'c1-o1-l3', descricao: 'Criar protocolos intersetoriais de fluxo de atendimento entre saúde, assistência e justiça.' },
        ],
      },
      {
        id: 'c1-o2',
        descricao: 'Ampliar a cobertura de programas de prevenção à violência doméstica e intrafamiliar contra crianças e adolescentes.',
        linhasDeAcao: [
          { id: 'c1-o2-l1', descricao: 'Desenvolver campanhas de conscientização em parceria com municípios.' },
          { id: 'c1-o2-l2', descricao: 'Apoiar grupos de apoio a famílias em situação de risco.' },
        ],
      },
    ],
  },
  {
    id: 'c2',
    numero: 2,
    titulo: 'Saúde Integral',
    tipo: 'Marco Situacional',
    descricao: 'Assegurar o atendimento integral em saúde para crianças e adolescentes, com ênfase na saúde mental, prevenção e promoção da qualidade de vida em todo o território paranaense.',
    objetivos: [
      {
        id: 'c2-o1',
        descricao: 'Ampliar o acesso a serviços de saúde mental para crianças e adolescentes nas redes municipais.',
        linhasDeAcao: [
          { id: 'c2-o1-l1', descricao: 'Implantar CAPSij em municípios com mais de 50 mil habitantes.' },
          { id: 'c2-o1-l2', descricao: 'Capacitar equipes de atenção básica para identificação precoce de sofrimento psíquico.' },
        ],
      },
      {
        id: 'c2-o2',
        descricao: 'Reduzir os índices de mortalidade infantil e na adolescência por causas evitáveis.',
        linhasDeAcao: [
          { id: 'c2-o2-l1', descricao: 'Fortalecer o programa de acompanhamento de gestantes de alto risco.' },
          { id: 'c2-o2-l2', descricao: 'Ampliar cobertura vacinal nos municípios com índices abaixo da meta nacional.' },
          { id: 'c2-o2-l3', descricao: 'Criar comitês municipais de prevenção da mortalidade infantil.' },
        ],
      },
    ],
  },
  {
    id: 'c3',
    numero: 3,
    titulo: 'Combate à Violência',
    tipo: 'Marco Situacional',
    descricao: 'Assumir a proteção integral de crianças e adolescentes contra todas as formas de violência como política pública prioritária de Estado, prevenindo e reduzindo ocorrências, subnotificação e reincidência.',
    objetivos: [
      {
        id: 'c3-o1',
        descricao: 'Estruturar sistema integrado de registro e monitoramento de casos de violência contra crianças e adolescentes.',
        linhasDeAcao: [
          { id: 'c3-o1-l1', descricao: 'Implantar plataforma digital unificada de notificação entre órgãos do sistema de garantia de direitos.' },
          { id: 'c3-o1-l2', descricao: 'Criar indicadores estaduais de monitoramento da violência contra a infância.' },
        ],
      },
    ],
  },
  {
    id: 'c4',
    numero: 4,
    titulo: 'Exploração Sexual',
    tipo: 'Marco Situacional',
    descricao: 'Planejar, coordenar, implementar e executar um conjunto de políticas voltado à redução da violência e exploração sexual de crianças e adolescentes em pontos vulneráveis do território.',
    objetivos: [
      {
        id: 'c4-o1',
        descricao: 'Mapear e monitorar pontos vulneráveis de exploração sexual infantojuvenil no estado.',
        linhasDeAcao: [
          { id: 'c4-o1-l1', descricao: 'Realizar diagnóstico territorial participativo com municípios e organizações da sociedade civil.' },
          { id: 'c4-o1-l2', descricao: 'Implantar sistema de alertas e denúncias integrado com forças de segurança.' },
        ],
      },
      {
        id: 'c4-o2',
        descricao: 'Fortalecer ações de responsabilização de autores de violência sexual contra crianças e adolescentes.',
        linhasDeAcao: [
          { id: 'c4-o2-l1', descricao: 'Apoiar a criação de varas especializadas em crimes contra a infância.' },
          { id: 'c4-o2-l2', descricao: 'Capacitar delegacias para atendimento humanizado às vítimas.' },
          { id: 'c4-o2-l3', descricao: 'Fomentar parcerias com o Ministério Público para agilização dos processos.' },
        ],
      },
    ],
  },
  {
    id: 'c5',
    numero: 5,
    titulo: 'Ambiente Digital',
    tipo: 'Marco Situacional',
    descricao: 'Proteger crianças e adolescentes no ambiente digital, investindo em literacia digital e na capacidade de resposta do Estado em termos tecnológicos, de conhecimento e estratégias de prevenção.',
    objetivos: [
      {
        id: 'c5-o1',
        descricao: 'Promover educação digital crítica nas escolas públicas estaduais e municipais.',
        linhasDeAcao: [
          { id: 'c5-o1-l1', descricao: 'Inserir conteúdos de segurança digital no currículo escolar.' },
          { id: 'c5-o1-l2', descricao: 'Formar professores como multiplicadores de literacia digital.' },
          { id: 'c5-o1-l3', descricao: 'Realizar campanhas educativas junto a famílias sobre uso seguro da internet.' },
        ],
      },
    ],
  },
  {
    id: 'c6',
    numero: 6,
    titulo: 'Convivência Familiar',
    tipo: 'Marco Situacional',
    descricao: 'Fortalecer a convivência familiar e comunitária, garantindo suporte às famílias em situação de vulnerabilidade social para proteção de crianças e adolescentes.',
    objetivos: [
      {
        id: 'c6-o1',
        descricao: 'Fortalecer programas de apoio à convivência familiar e comunitária para famílias em situação de vulnerabilidade social.',
        linhasDeAcao: [
          { id: 'c6-o1-l1', descricao: 'Ampliar cobertura de serviços de apoio psicossocial às famílias em territórios prioritários.' },
          { id: 'c6-o1-l2', descricao: 'Fortalecer a articulação entre assistência social, saúde e educação no acompanhamento familiar.' },
        ],
      },
    ],
  },
]
// mockup feito por IA - versão resumida dos 23 compromissos decenais

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
  // ============================================================
  // Compromissos Transversais (CD 1 e 2)
  // ============================================================
  {
    id: 'c1',
    numero: 1,
    titulo: 'Acesso sem Barreiras',
    tipo: 'Transversal',
    descricao: 'Consolidar o acesso sem barreiras como diretriz do Plano Decenal, reduzindo fardos administrativos e qualificando o desenho de políticas para prevenir iniquidades.',
    objetivos: [
      {
        id: 'c1-o1',
        descricao: 'Mitigar barreiras de acesso e fardos administrativos no desenho e na implementação das políticas.',
        linhasDeAcao: [
          { id: 'c1-o1-l1', descricao: 'Incorporar análise ex-ante de barreiras na formulação de políticas.' },
          { id: 'c1-o1-l2', descricao: 'Realizar auditorias periódicas de fricções e simplificar procedimentos.' },
        ],
      },
      {
        id: 'c1-o2',
        descricao: 'Reduzir custos de acesso para famílias, crianças e adolescentes.',
        linhasDeAcao: [
          { id: 'c1-o2-l1', descricao: 'Ampliar horários, transporte e alimentação para reduzir custos de acesso.' },
          { id: 'c1-o2-l2', descricao: 'Desenvolver trilhas de letramento digital e administrativo para a população.' },
        ],
      },
    ],
  },
  {
    id: 'c2',
    numero: 2,
    titulo: 'Governança e Coordenação',
    tipo: 'Transversal',
    descricao: 'Fortalecer a governança das políticas da criança e do adolescente no Paraná, ampliando a articulação e coordenação, qualificando a gestão da informação e estruturando sistemas de monitoramento e avaliação.',
    objetivos: [
      {
        id: 'c2-o1',
        descricao: 'Aprimorar a articulação e coordenação intergovernamental e intersetorial.',
        linhasDeAcao: [
          { id: 'c2-o1-l1', descricao: 'Estabelecer instâncias de governança e pactuações formais.' },
          { id: 'c2-o1-l2', descricao: 'Criar fluxos, protocolos e matrizes de responsabilidade compartilhada.' },
        ],
      },
      {
        id: 'c2-o2',
        descricao: 'Fortalecer a base informacional, o monitoramento e a avaliação de políticas.',
        linhasDeAcao: [
          { id: 'c2-o2-l1', descricao: 'Implementar sistemas interoperáveis de dados e indicadores.' },
          { id: 'c2-o2-l2', descricao: 'Promover o uso de evidências na tomada de decisão e a participação de crianças e adolescentes.' },
        ],
      },
    ],
  },

  // ============================================================
  // Área 1 – Direito à vida, dignidade e proteção contra violências (CD 3 a 8)
  // ============================================================
  {
    id: 'c3',
    numero: 3,
    titulo: 'Enfrentamento à Violência',
    tipo: 'Proteção contra Violências',
    descricao: 'Assumir a proteção integral contra violências como política pública prioritária, prevenindo e reduzindo ocorrências, subnotificação e reincidência.',
    objetivos: [
      {
        id: 'c3-o1',
        descricao: 'Implementar integralmente a Lei 13.431/2017 e fortalecer os Conselhos Tutelares.',
        linhasDeAcao: [
          { id: 'c3-o1-l1', descricao: 'Protocolo estadual de registro, notificação e encaminhamento.' },
          { id: 'c3-o1-l2', descricao: 'Fortalecimento de Conselhos Tutelares e redução de assimetrias territoriais.' },
        ],
      },
      {
        id: 'c3-o2',
        descricao: 'Reduzir recorrência e revitimização com atenção psicossocial informada por trauma.',
        linhasDeAcao: [
          { id: 'c3-o2-l1', descricao: 'Expandir atenção psicossocial informada por trauma.' },
          { id: 'c3-o2-l2', descricao: 'Integrar políticas de proteção à mulher e à criança em situação de violência.' },
        ],
      },
    ],
  },
  {
    id: 'c4',
    numero: 4,
    titulo: 'Exploração Sexual em Pontos Vulneráveis',
    tipo: 'Proteção contra Violências',
    descricao: 'Reduzir a violência e exploração sexual de crianças e adolescentes em pontos vulneráveis do território (rodovias, turismo, portos) com atuação inteligente e integrada.',
    objetivos: [
      {
        id: 'c4-o1',
        descricao: 'Prevenção e repressão nos hotspots com inteligência e coordenação estratégicas.',
        linhasDeAcao: [
          { id: 'c4-o1-l1', descricao: 'Construir e atualizar matrizes de risco para pontos vulneráveis.' },
          { id: 'c4-o1-l2', descricao: 'Realizar fiscalizações integradas regulares.' },
        ],
      },
      {
        id: 'c4-o2',
        descricao: 'Proteção imediata e continuada com atendimento integrado.',
        linhasDeAcao: [
          { id: 'c4-o2-l1', descricao: 'Articular a rede com canais eficazes de denúncia.' },
          { id: 'c4-o2-l2', descricao: 'Implantar equipes móveis ou permanentes em pontos vulneráveis.' },
        ],
      },
      {
        id: 'c4-o3',
        descricao: 'Mobilizar setor privado e fortalecer o poder de polícia administrativa.',
        linhasDeAcao: [
          { id: 'c4-o3-l1', descricao: 'Aprimorar ações de prevenção e sanção com base em polícia administrativa.' },
          { id: 'c4-o3-l2', descricao: 'Firmar pactos e códigos de conduta com o setor privado.' },
        ],
      },
    ],
  },
  {
    id: 'c5',
    numero: 5,
    titulo: 'Proteção no Ambiente Digital',
    tipo: 'Proteção contra Violências',
    descricao: 'Proteger crianças e adolescentes no ambiente digital com literacia digital, capacidade de resposta do Estado, repressão efetiva e prevenção.',
    objetivos: [
      {
        id: 'c5-o1',
        descricao: 'Promover educação digital e literacia midiática para crianças, adolescentes e famílias.',
        linhasDeAcao: [
          { id: 'c5-o1-l1', descricao: 'Programas de educação digital para crianças e adolescentes.' },
          { id: 'c5-o1-l2', descricao: 'Capacitar professores, pais e agentes de linha de frente.' },
        ],
      },
      {
        id: 'c5-o2',
        descricao: 'Reforçar a capacidade de investigação e cooperação institucional contra cibercrimes.',
        linhasDeAcao: [
          { id: 'c5-o2-l1', descricao: 'Reforçar recursos tecnológicos e treinamento contínuo de agentes.' },
          { id: 'c5-o2-l2', descricao: 'Estabelecer parcerias com instituições de pesquisa.' },
        ],
      },
    ],
  },
  {
    id: 'c6',
    numero: 6,
    titulo: 'Redução da Letalidade Policial',
    tipo: 'Proteção contra Violências',
    descricao: 'Reduzir as mortes de adolescentes em intervenções policiais, considerando desigualdades territoriais e raciais, com transparência e controle social.',
    objetivos: [
      {
        id: 'c6-o1',
        descricao: 'Melhorar a capacidade das forças de segurança com tecnologia, gestão de riscos e uso de evidências.',
        linhasDeAcao: [
          { id: 'c6-o1-l1', descricao: 'Implementar câmeras corporais com protocolo de gravação contínua.' },
          { id: 'c6-o1-l2', descricao: 'Criar mecanismos de gestão de riscos e aprendizado organizacional.' },
        ],
      },
      {
        id: 'c6-o2',
        descricao: 'Instituir mecanismos de governança, transparência e controle social da atividade policial.',
        linhasDeAcao: [
          { id: 'c6-o2-l1', descricao: 'Criar comissão de monitoramento com participação do CEDCA-PR e sistema de justiça.' },
          { id: 'c6-o2-l2', descricao: 'Publicar dados desagregados sobre mortes de adolescentes em intervenções policiais.' },
        ],
      },
    ],
  },
  {
    id: 'c7',
    numero: 7,
    titulo: 'Segurança no Ambiente Escolar',
    tipo: 'Proteção contra Violências',
    descricao: 'Garantir a segurança no ambiente escolar, prevenindo violências, reduzindo a sensação de insegurança e promovendo cultura escolar inclusiva e não-violenta.',
    objetivos: [
      {
        id: 'c7-o1',
        descricao: 'Prevenir violências e fortalecer a convivência escolar com participação estudantil.',
        linhasDeAcao: [
          { id: 'c7-o1-l1', descricao: 'Implementar programas de clima escolar, convivência democrática e prevenção ao bullying.' },
          { id: 'c7-o1-l2', descricao: 'Treinar pessoal da educação para identificação precoce de sinais de violência e sofrimento mental.' },
        ],
      },
      {
        id: 'c7-o2',
        descricao: 'Estabelecer gestão de riscos e protocolos de resposta a crises nas escolas.',
        linhasDeAcao: [
          { id: 'c7-o2-l1', descricao: 'Mapear situações de risco e planejar medidas de resposta intersetorial.' },
          { id: 'c7-o2-l2', descricao: 'Articular com rede de saúde mental para retaguarda de atendimento.' },
        ],
      },
    ],
  },
  {
    id: 'c8',
    numero: 8,
    titulo: 'Aprimoramento do Sistema Socioeducativo',
    tipo: 'Proteção contra Violências',
    descricao: 'Aprimorar o sistema socioeducativo com políticas de pós-medida, educação de qualidade, transição para o trabalho e governança equitativa.',
    objetivos: [
      {
        id: 'c8-o1',
        descricao: 'Criar política de pós-medida com acompanhamento individual e reinserção tutorada.',
        linhasDeAcao: [
          { id: 'c8-o1-l1', descricao: 'Desenhar e implementar programa estadual de pós-medida com mentoria.' },
          { id: 'c8-o1-l2', descricao: 'Garantir reinserção escolar com planos individuais de continuidade.' },
        ],
      },
      {
        id: 'c8-o2',
        descricao: 'Qualificar a execução das medidas com PIA efetivo e acesso a educação, cultura e trabalho.',
        linhasDeAcao: [
          { id: 'c8-o2-l1', descricao: 'Implementar Plano Individual de Atendimento (PIA) com participação do adolescente.' },
          { id: 'c8-o2-l2', descricao: 'Ampliar oferta de formação profissional, cultura e esporte nas unidades.' },
        ],
      },
      {
        id: 'c8-o3',
        descricao: 'Garantir financiamento, governança e monitoramento do sistema socioeducativo.',
        linhasDeAcao: [
          { id: 'c8-o3-l1', descricao: 'Instituir comitê de governança com poder deliberativo e previsão orçamentária.' },
          { id: 'c8-o3-l2', descricao: 'Implementar monitoramento com indicadores de resultado e contratualização de metas.' },
        ],
      },
    ],
  },

  // ============================================================
  // Área 2 – Direito à Saúde (CD 9 a 14)
  // ============================================================
  {
    id: 'c9',
    numero: 9,
    titulo: 'Prevenção da Gravidez na Adolescência',
    tipo: 'Saúde',
    descricao: 'Reduzir a gravidez na adolescência com educação sexual integral, acesso à contracepção e serviços acolhedores, com foco em equidade.',
    objetivos: [
      {
        id: 'c9-o1',
        descricao: 'Fortalecer educação e informação em sexualidade e projeto de vida para adolescentes.',
        linhasDeAcao: [
          { id: 'c9-o1-l1', descricao: 'Trilhas de competências socioemocionais para adolescentes mulheres.' },
          { id: 'c9-o1-l2', descricao: 'Ações informacionais para meninos sobre masculinidade responsável.' },
        ],
      },
      {
        id: 'c9-o2',
        descricao: 'Reduzir barreiras de acesso, garantir sigilo e ofertar contracepção eficaz.',
        linhasDeAcao: [
          { id: 'c9-o2-l1', descricao: 'Estruturar serviços amigáveis com confidencialidade explícita.' },
          { id: 'c9-o2-l2', descricao: 'Aplicar técnicas comportamentais para adesão e retorno.' },
        ],
      },
    ],
  },
  {
    id: 'c10',
    numero: 10,
    titulo: 'Cobertura Vacinal',
    tipo: 'Saúde',
    descricao: 'Recuperar e sustentar altas coberturas vacinais com microplanejamento, busca ativa, estratégias comportamentais e comunicação pública.',
    objetivos: [
      {
        id: 'c10-o1',
        descricao: 'Reduzir barreiras de acesso com microplanejamento e busca ativa.',
        linhasDeAcao: [
          { id: 'c10-o1-l1', descricao: 'Microplanejamento orientado por dados e mapeamento de populações zero-dose.' },
          { id: 'c10-o1-l2', descricao: 'Busca ativa com visitas e acompanhamento programado.' },
        ],
      },
      {
        id: 'c10-o2',
        descricao: 'Fortalecer comunicação e mobilização para promover adesão à vacinação.',
        linhasDeAcao: [
          { id: 'c10-o2-l1', descricao: 'Campanhas contínuas de comunicação pró-adesão e enfrentamento da desinformação.' },
          { id: 'c10-o2-l2', descricao: 'Mobilizar agentes políticos e tomadores de decisão para priorizar a vacinação.' },
        ],
      },
    ],
  },
  {
    id: 'c11',
    numero: 11,
    titulo: 'Mortalidade Materno-Infantil',
    tipo: 'Saúde',
    descricao: 'Diminuir a mortalidade materna e infantil por causas evitáveis com linha de cuidado integrada do pré-natal ao puerpério, enfrentando desigualdades de acesso.',
    objetivos: [
      {
        id: 'c11-o1',
        descricao: 'Garantir acesso oportuno, cuidado resolutivo e adesão continuada para gestantes e recém-nascidos.',
        linhasDeAcao: [
          { id: 'c11-o1-l1', descricao: 'Porta única na APS, protocolos e pactuações regionais.' },
          { id: 'c11-o1-l2', descricao: 'Transporte responsivo e seguimento integrado mãe-bebê.' },
        ],
      },
      {
        id: 'c11-o2',
        descricao: 'Implementar gestão do conhecimento com painéis de indicadores e registro de óbitos e near miss.',
        linhasDeAcao: [
          { id: 'c11-o2-l1', descricao: 'Sistematizar painéis de indicadores e base de conhecimento derivada de auditorias.' },
          { id: 'c11-o2-l2', descricao: 'Registrar 100% dos óbitos e near miss com classificação padronizada.' },
        ],
      },
    ],
  },
  {
    id: 'c12',
    numero: 12,
    titulo: 'Internações Pediátricas Evitáveis',
    tipo: 'Saúde',
    descricao: 'Reduzir internações pediátricas por condições sensíveis à atenção primária, com fortalecimento da APS, coordenação do cuidado e apoio às famílias.',
    objetivos: [
      {
        id: 'c12-o1',
        descricao: 'Elevar acesso e qualidade da APS infantil e aprimorar a coordenação do cuidado.',
        linhasDeAcao: [
          { id: 'c12-o1-l1', descricao: 'Expandir oferta conveniente com horários estendidos, teleapoio e unidades móveis.' },
          { id: 'c12-o1-l2', descricao: 'Padronizar linhas de cuidado para condições sensíveis (asma, diarreia, etc.).' },
        ],
      },
      {
        id: 'c12-o2',
        descricao: 'Aumentar adesão das famílias com contrarreferência efetiva, coprodução com escolas e estratégias comportamentais.',
        linhasDeAcao: [
          { id: 'c12-o2-l1', descricao: 'Implementar plano pós-alta e gestão de casos para internações repetidas.' },
          { id: 'c12-o2-l2', descricao: 'Aplicar lembretes, agendamento por padrão e planos de manejo em linguagem simples.' },
        ],
      },
    ],
  },
  {
    id: 'c13',
    numero: 13,
    titulo: 'Prevenção ao Consumo de Drogas',
    tipo: 'Saúde',
    descricao: 'Prevenir o consumo precoce de álcool, drogas e cigarros eletrônicos com fiscalização, educação e ampliação do cuidado integral.',
    objetivos: [
      {
        id: 'c13-o1',
        descricao: 'Prevenir, detectar e cuidar em escolas, saúde e assistência.',
        linhasDeAcao: [
          { id: 'c13-o1-l1', descricao: 'Avaliar e aperfeiçoar programas de prevenção escolar com habilidades para a vida.' },
          { id: 'c13-o1-l2', descricao: 'Treinar linha de frente para identificação de riscos e fluxos de encaminhamento.' },
        ],
      },
      {
        id: 'c13-o2',
        descricao: 'Reduzir acesso e exposição por regulação e fiscalização.',
        linhasDeAcao: [
          { id: 'c13-o2-l1', descricao: 'Reforçar fiscalização com mapeamento de hotspots e operações integradas.' },
          { id: 'c13-o2-l2', descricao: 'Articular autorregulação com setor privado e reduzir exposição digital.' },
        ],
      },
      {
        id: 'c13-o3',
        descricao: 'Apoiar famílias e comunidades com programas parentais e campanhas de conscientização.',
        linhasDeAcao: [
          { id: 'c13-o3-l1', descricao: 'Programas de fortalecimento de vínculos familiares e visitas domiciliares.' },
          { id: 'c13-o3-l2', descricao: 'Campanhas focando literacia sobre danos do consumo precoce.' },
        ],
      },
    ],
  },
  {
    id: 'c14',
    numero: 14,
    titulo: 'Segurança no Trânsito',
    tipo: 'Saúde',
    descricao: 'Reduzir lesões e mortes evitáveis de crianças e adolescentes no trânsito, com prioridade para entornos escolares, gestão de velocidade e fiscalização efetiva.',
    objetivos: [
      {
        id: 'c14-o1',
        descricao: 'Diminuir exposição a riscos com segurança viária e fiscalização.',
        linhasDeAcao: [
          { id: 'c14-o1-l1', descricao: 'Fortalecer fiscalização de velocidade, álcool e dispositivos de segurança.' },
          { id: 'c14-o1-l2', descricao: 'Implantar sistema de gestão de risco com identificação de pontos críticos.' },
        ],
      },
      {
        id: 'c14-o2',
        descricao: 'Qualificar ações educativas como complemento às medidas de ambiente e fiscalização.',
        linhasDeAcao: [
          { id: 'c14-o2-l1', descricao: 'Implementar educação para o trânsito integrada às rotinas escolares.' },
        ],
      },
    ],
  },

  // ============================================================
  // Área 3 – Direito à Educação (CD 15 e 16)
  // ============================================================
  {
    id: 'c15',
    numero: 15,
    titulo: 'Expansão e Qualidade da Educação Infantil',
    tipo: 'Educação',
    descricao: 'Aprimorar e expandir a oferta de educação infantil com qualidade, priorizando a primeira infância e reduzindo desigualdades territoriais.',
    objetivos: [
      {
        id: 'c15-o1',
        descricao: 'Expandir e equalizar oferta e qualificação, priorizando a educação infantil.',
        linhasDeAcao: [
          { id: 'c15-o1-l1', descricao: 'Mapear e monitorar oferta e demanda, apoiando municípios na expansão de vagas.' },
          { id: 'c15-o1-l2', descricao: 'Apoiar provimento de pessoal qualificado e qualificar insumos e jornadas.' },
        ],
      },
      {
        id: 'c15-o2',
        descricao: 'Reduzir barreiras de acesso e permanência com coordenação interfederativa e intersetorial.',
        linhasDeAcao: [
          { id: 'c15-o2-l1', descricao: 'Fortalecer vínculo escola-família com comunicação e mediação cultural.' },
          { id: 'c15-o2-l2', descricao: 'Auditar fluxos de adesão e reduzir fardos administrativos.' },
        ],
      },
    ],
  },
  {
    id: 'c16',
    numero: 16,
    titulo: 'Redução da Distorção Idade-Série no Meio Rural',
    tipo: 'Educação',
    descricao: 'Reduzir a distorção idade-série no meio rural e a desigualdade rural-urbano no fluxo escolar, com equidade territorial e qualidade da oferta.',
    objetivos: [
      {
        id: 'c16-o1',
        descricao: 'Reduzir desigualdades no provimento docente, infraestrutura e acesso à escola no meio rural.',
        linhasDeAcao: [
          { id: 'c16-o1-l1', descricao: 'Política de provimento e retenção docente para áreas rurais com incentivos.' },
          { id: 'c16-o1-l2', descricao: 'Equalizar infraestrutura e transporte escolar com priorização territorial.' },
        ],
      },
      {
        id: 'c16-o2',
        descricao: 'Apoiar aprendizado com tutoria de alta intensidade e estratégias de correção de fluxo.',
        linhasDeAcao: [
          { id: 'c16-o2-l1', descricao: 'Implementar recuperação estruturada com avaliação diagnóstica individual.' },
          { id: 'c16-o2-l2', descricao: 'Ofertar tutoria de alta intensidade para estudantes com maior defasagem.' },
        ],
      },
    ],
  },

  // ============================================================
  // Área 4 – Direito à Convivência Familiar e Comunitária (CD 17 e 18)
  // ============================================================
  {
    id: 'c17',
    numero: 17,
    titulo: 'Acolhimento Familiar e Redução do Tempo de Acolhimento',
    tipo: 'Convivência Familiar e Comunitária',
    descricao: 'Ampliar o acolhimento familiar e reduzir o tempo de acolhimento institucional, com apoio às famílias acolhedoras e reintegração oportuna.',
    objetivos: [
      {
        id: 'c17-o1',
        descricao: 'Expandir o acolhimento familiar com recrutamento contínuo, incentivos e apoio técnico 24/7.',
        linhasDeAcao: [
          { id: 'c17-o1-l1', descricao: 'Plano estadual de expansão com metas territoriais e campanhas de mobilização.' },
          { id: 'c17-o1-l2', descricao: 'Prover apoio técnico multiprofissional e avaliar necessidade de aumento de incentivos.' },
        ],
      },
      {
        id: 'c17-o2',
        descricao: 'Fortalecer equipes multiprofissionais, monitoramento de casos e capacitação de gestores.',
        linhasDeAcao: [
          { id: 'c17-o2-l1', descricao: 'Fortalecer equipes nos serviços e no sistema de justiça.' },
          { id: 'c17-o2-l2', descricao: 'Aprimorar monitoramento com registros orientados sobre reintegração/guarda.' },
        ],
      },
      {
        id: 'c17-o3',
        descricao: 'Promover reintegração familiar e planos de transição para a vida adulta.',
        linhasDeAcao: [
          { id: 'c17-o3-l1', descricao: 'Programas de fortalecimento familiar com visitas e parentalidade positiva.' },
          { id: 'c17-o3-l2', descricao: 'Planos de transição para a vida adulta: moradia, trabalho, saúde mental e mentoria.' },
        ],
      },
    ],
  },
  {
    id: 'c18',
    numero: 18,
    titulo: 'Adoção de Crianças de Difícil Colocação',
    tipo: 'Convivência Familiar e Comunitária',
    descricao: 'Impulsionar a adoção de crianças e adolescentes de difícil colocação (grupos de irmãos, adolescentes, PcD, negros) com apoio pré e pós-adoção.',
    objetivos: [
      {
        id: 'c18-o1',
        descricao: 'Aprimorar a preparação parental e o suporte pós-adoção com base em evidências.',
        linhasDeAcao: [
          { id: 'c18-o1-l1', descricao: 'Atualizar programas de preparação com conteúdos baseados em evidências.' },
          { id: 'c18-o1-l2', descricao: 'Implementar acompanhamento pós-adoção com monitoramento de resultados.' },
        ],
      },
      {
        id: 'c18-o2',
        descricao: 'Implementar busca ativa e campanhas de sensibilização para adoção de perfis específicos.',
        linhasDeAcao: [
          { id: 'c18-o2-l1', descricao: 'Avaliar e aprimorar programa de busca ativa com uso de tecnologias modernas.' },
          { id: 'c18-o2-l2', descricao: 'Realizar campanhas sobre adoção inter-racial, de adolescentes e de crianças com deficiência.' },
        ],
      },
    ],
  },

  // ============================================================
  // Área 5 – Transição para o Trabalho e Erradicação do Trabalho Infantil (CD 19 e 20)
  // ============================================================
  {
    id: 'c19',
    numero: 19,
    titulo: 'Erradicação do Trabalho Infantil',
    tipo: 'Trabalho Infantil',
    descricao: 'Erradicar o trabalho infantil, com prioridade nas piores formas, por meio de prevenção, busca ativa, afastamento protetivo integral e articulação intersetorial.',
    objetivos: [
      {
        id: 'c19-o1',
        descricao: 'Prevenir, identificar e afastar com proteção integral.',
        linhasDeAcao: [
          { id: 'c19-o1-l1', descricao: 'Instituir instância de governança com monitoramento e estudos.' },
          { id: 'c19-o1-l2', descricao: 'Incluir crianças em proteção social e capacitar rede para identificação.' },
        ],
      },
      {
        id: 'c19-o2',
        descricao: 'Ampliar tempo escolar e contraturno com atividades culturais, esportivas e transição segura para o trabalho.',
        linhasDeAcao: [
          { id: 'c19-o2-l1', descricao: 'Ampliar oferta de tempo integral e contraturno em territórios prioritários.' },
          { id: 'c19-o2-l2', descricao: 'Cocriar campanhas de comunicação para desnaturalização do trabalho infantil.' },
        ],
      },
    ],
  },
  {
    id: 'c20',
    numero: 20,
    titulo: 'Transição Protegida para o Mundo do Trabalho',
    tipo: 'Trabalho Infantil',
    descricao: 'Ampliar e diversificar a preparação para o mundo do trabalho para adolescentes, com equidade territorial, inclusão de públicos vulnerabilizados e apoio à permanência.',
    objetivos: [
      {
        id: 'c20-o1',
        descricao: 'Expandir e diversificar oportunidades, reduzindo barreiras de acesso.',
        linhasDeAcao: [
          { id: 'c20-o1-l1', descricao: 'Mapear demanda e oportunidades por território e segmentos específicos.' },
          { id: 'c20-o1-l2', descricao: 'Pactuar com setor produtivo a ampliação e diversificação de vagas.' },
        ],
      },
      {
        id: 'c20-o2',
        descricao: 'Enfrentar barreiras comportamentais e informacionais no acesso ao trabalho.',
        linhasDeAcao: [
          { id: 'c20-o2-l1', descricao: 'Ações informacionais para reduzir preconceitos e difundir boas práticas de contratação.' },
          { id: 'c20-o2-l2', descricao: 'Ofertar trilhas de competências socioemocionais e prontidão para o trabalho.' },
        ],
      },
    ],
  },

  // ============================================================
  // Área 6 – Primeira Infância (CD 21)
  // ============================================================
  {
    id: 'c21',
    numero: 21,
    titulo: 'Desenvolvimento Integral na Primeira Infância',
    tipo: 'Primeira Infância',
    descricao: 'Expandir programas baseados em evidências de apoio à parentalidade e promoção do desenvolvimento na primeira infância, com integração intersetorial e adaptação territorial.',
    objetivos: [
      {
        id: 'c21-o1',
        descricao: 'Expandir e qualificar a oferta de programas de apoio à parentalidade e desenvolvimento infantil.',
        linhasDeAcao: [
          { id: 'c21-o1-l1', descricao: 'Desenvolver portfólio estadual de programas com padrões mínimos de qualidade.' },
          { id: 'c21-o1-l2', descricao: 'Priorizar, monitorar e avaliar a implementação no território com gestão de aprendizado.' },
        ],
      },
      {
        id: 'c21-o2',
        descricao: 'Adaptar programas a diferentes contextos e instituir governança permanente da primeira infância.',
        linhasDeAcao: [
          { id: 'c21-o2-l1', descricao: 'Pactuar diretrizes de adaptação para comunidades tradicionais, PcD, famílias LGBTQIAPN+.' },
          { id: 'c21-o2-l2', descricao: 'Instituir governança permanente com participação de alto nível decisório.' },
        ],
      },
    ],
  },

  // ============================================================
  // Área 7 – Esporte, Lazer e Cultura (CD 22)
  // ============================================================
  {
    id: 'c22',
    numero: 22,
    titulo: 'Cultura, Esporte e Lazer',
    tipo: 'Esporte, Lazer e Cultura',
    descricao: 'Reduzir desigualdades territoriais e entre segmentos no acesso à cultura, esporte e lazer, ampliando diversidade, representatividade e cocriação.',
    objetivos: [
      {
        id: 'c22-o1',
        descricao: 'Reduzir desigualdades no acesso e na produção cultural, com foco em diversidade e cocriação.',
        linhasDeAcao: [
          { id: 'c22-o1-l1', descricao: 'Mapear desigualdades territoriais e entre segmentos no acesso cultural.' },
          { id: 'c22-o1-l2', descricao: 'Fortalecer capilaridade da oferta cultural e criar mecanismos de cocriação.' },
        ],
      },
      {
        id: 'c22-o2',
        descricao: 'Garantir acesso equitativo ao esporte e lazer, com participação continuada e desenho inclusivo.',
        linhasDeAcao: [
          { id: 'c22-o2-l1', descricao: 'Diagnosticar desigualdades no esporte e ampliar oferta com infraestrutura adequada.' },
          { id: 'c22-o2-l2', descricao: 'Promover desenho mais inclusivo, enfrentando estereótipos de gênero, raça e deficiência.' },
        ],
      },
    ],
  },

  // ============================================================
  // Área 8 – Migrantes e Refugiados (CD 23)
  // ============================================================
  {
    id: 'c23',
    numero: 23,
    titulo: 'Proteção e Inclusão de Crianças e Adolescentes Migrantes',
    tipo: 'Migrantes e Refugiados',
    descricao: 'Qualificar o atendimento a crianças e adolescentes migrantes e refugiados, eliminando fardos administrativos, barreiras linguísticas e culturais, com capacitação da linha de frente e articulação intersetorial.',
    objetivos: [
      {
        id: 'c23-o1',
        descricao: 'Consolidar portfólio de serviços centrado no público-alvo e eliminar barreiras de acesso.',
        linhasDeAcao: [
          { id: 'c23-o1-l1', descricao: 'Mapear e mitigar fardos administrativos específicos para migrantes.' },
          { id: 'c23-o1-l2', descricao: 'Interiorizar estruturas de atendimento para municípios com alta concentração migratória.' },
        ],
      },
      {
        id: 'c23-o2',
        descricao: 'Capacitar linha de frente, reduzir desconfiança e mobilizar setor privado contra xenofobia.',
        linhasDeAcao: [
          { id: 'c23-o2-l1', descricao: 'Implementar formação continuada para profissionais em atendimento culturalmente mediado.' },
          { id: 'c23-o2-l2', descricao: 'Articular com setor privado para inclusão laboral de responsáveis por crianças migrantes.' },
        ],
      },
    ],
  },
]
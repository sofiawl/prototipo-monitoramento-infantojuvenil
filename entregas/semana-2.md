## Semana 2
 
### Artefatos produzidos/atualizados:
- `docs/requisitos.md`: reformulação de RF02, RF03, RF07, RF08, RF09, RF11, RF12, RF13, RF14 e RF21 para maior especificidade e verificabilidade; formatação padronizada de marcadores de lista (● → -).
- `docs/conversa-cliente.md`: substituição das questões soltas iniciais por um roteiro estruturado de conversa com o cliente, organizado em blocos temáticos (abertura, contexto e objetivos, pessoas e processos, dados, interface, etc.).
- `docs/organizacao-afazeres.md`: atualização da distribuição de tarefas após a entrega dos documentos iniciais, com nova atualização da divisão de tarefas para a sprint seguinte.
- `docs/regras-negocio.md`: criação da primeira versão das regras de negócio, derivadas dos requisitos funcionais e dos critérios de aceite. O documento define regras como restrições do domínio (o que é permitido, obrigatório ou proibido), não como comportamentos da interface. Conteúdo produzido:
  - **Estrutura e hierarquia do Plano** (RN01–RN02): hierarquia com exatamente cinco níveis; todo item vinculado a exatamente um item do nível superior.
  - **Status e critério de conclusão da Tarefa** (RN03–RN05): tarefa inicia no status *não iniciada*; conclusão depende de aprovação do administrador; tarefa e indicador são dimensões de medição distintas.
  - **Perfis de acesso e matriz de permissões** (RN06–RN11): três perfis fixos (SEDEF, Conselho/Secretarias, Público Geral); SEDEF é o administrador; matriz de ações por perfil documentada em tabela.
  - **Proteção de dados** (RN12–RN13): acesso a conteúdo restrito exige autenticação válida; credenciais não podem trafegar em texto legível.
- `prototipo/sedef-test/`: criação do projeto React com TypeScript, TailwindCSS e ShadcnUI (biblioteca de componentes acessíveis).
  - Componentes criados: `Header.tsx` (navegação principal), `MonitoramentoBars.tsx` (barras de progresso dos compromissos) e `pages/Home.tsx` (página principal com apresentação do sistema).
  - Dados: `data/compromissos.ts` com os 23 compromissos decenais para popular o protótipo com dados reais do domínio.
  - Assets: logos (`logo-monitoramento.svg`, `logo-plano-decenal.svg`, `plano-decenal-texto-logo.svg`), imagens de fundo (`hero.png`, `pagina-quadriculada.png`, `papel-note-quadriculado.svg`) e ícones de histograma (`histograma-pessoas-1.svg`, `histograma-pessoas-2.svg`).
- `README.md`: atualizado com instruções de instalação e execução do protótipo (`npm install`, `npm run dev`); protótipo realocado da raiz para `prototipo/sedef-test/`.
- `docs/casos-uso.md`: criação do documento de casos de uso com 19 casos (UC01–UC19), organizados por ator:
  - **Público Geral:** UC01 (visualizar problemas públicos), UC02 (navegar hierarquia), UC03 (monitorar progresso), UC04 (buscar), UC05 (filtrar), UC06 (exportar), UC07 (última atualização), UC08 (histórico de tarefa), UC10 (alto contraste), UC11 (visualizar gráficos e responsáveis).
  - **Conselho/Secretarias:** UC12 (autenticar), UC13 (inserir registros), UC14 (editar registros), UC15 (importar planilha).
  - **SEDEF/Administrador:** UC16 (gerenciar contas e perfis), UC17 (auditoria de ações), UC18 (aprovar conclusão de tarefa), UC19 (acessar área infantojuvenil).
  - Nota de hierarquia: SEDEF herda todos os casos de uso do Conselho/Secretarias, que herda todos do Público Geral.
### Requisitos adicionados:
Nenhum.
 
### Requisitos removidos:
Nenhum.
 
### Requisitos modificados:
- RF02: Expandido para incluir todos os níveis hierárquicos do Plano Decenal (Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa) e a regra de vínculo entre níveis; antes listava apenas Objetivo → Linha de Ação → Tarefas.
- RF03: Separado o monitoramento de tarefas (status discreto) do de indicadores (valor numérico); antes agrupava os dois num único "(ex...)".
- RF07: Refinado para exibir data e hora da última atualização por item monitorado; antes era genérico ("dados").
- RF08: Especificado o conteúdo de cada entrada do histórico (data, conteúdo anterior e novo conteúdo).
- RF09: Delimitado ao gerenciamento de contas e perfis de acesso; antes incluía "outras funcionalidades" sem definição.
- RF11: Definidas as credenciais (identificador e senha) e o comportamento em caso de sucesso/falha.
- RF12: Fechada a lista de entidades (problemas públicos, compromissos, objetivos, linhas de ação e tarefas); antes usava "etc".
- RF13: Especificado o conteúdo do registro de auditoria (usuário, tipo de ação, data e hora).
- RF14: Definidos mecanismos concretos (hash de credenciais, HTTPS); antes era "medidas de segurança" sem especificação.
- RF21: Especificados os registros editáveis e delimitado o escopo à edição do que já existe, distinto de RF12 (criação).
### Justificativas das alterações:
Requisitos revisados apresentavam linguagem vaga, aberta ou sobreposta a outros, tornando-os difíceis de verificar. O roteiro de conversa foi elaborado para esclarecer as dúvidas que ficaram abertas após o levantamento inicial, com perguntas estruturadas para não conduzir o cliente.
 
Stack escolhida (React TS + TailwindCSS + ShadcnUI) por oferecer componentes acessíveis prontos e identidade visual configurável, facilitando aderência ao RNF06 (consistência visual com o CEDCA-PR) e ao RNF01 (acessibilidade). Os dados dos 23 compromissos foram inseridos para tornar o protótipo representativo do domínio real.
 
Os casos de uso traduzem os requisitos funcionais em fluxos concretos por ator, estabelecendo rastreabilidade entre RF e UC e servindo de base para os testes de aceitação. A organização por ator reflete a hierarquia de permissões já definida nas regras de negócio.
 
### Impactos das mudanças:
- RF02 ampliado impacta os casos de uso de visualização do plano (mais níveis a cobrir).
- RF07, RF08 e RF13 claramente distintos eliminam ambiguidade nos critérios de aceite.
- RF12 e RF21 delimitados facilitam rastreabilidade com as histórias de usuário.
- RN01–RN13 estabelecem base concreta para critérios de aceite e casos de uso.
- A confirmação dos três perfis de usuário (sem mais) restringe o escopo de controle de acesso.
- O fluxo de aprovação de tarefas (RN04) vai gerar um caso de uso específico para o administrador.
- Protótipo valida RF01 (exibição dos 23 compromissos), RF02 (visualização inicial do plano), RNF01 (acessibilidade via ShadcnUI), RNF02 (responsividade via TailwindCSS) e RNF06 (consistência visual).
- README atualizado cumpre parcialmente RNF05 (documentação e instruções de execução).
- Base técnica estabelecida para implementar as telas de monitoramento nas semanas seguintes.
- Rastreabilidade RF → UC estabelecida para os fluxos principais (UC01–UC19).
- UC01–UC19 cobrem todos os atores previstos; qualquer mudança futura nos requisitos implica revisão dos casos de uso correspondentes.
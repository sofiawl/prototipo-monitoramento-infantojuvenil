# Validação de Requisitos

## Objetivo

Este documento registra a validação dos requisitos funcionais e não funcionais do sistema de monitoramento do Plano Decenal Infantojuvenil do Paraná. A validação verifica se cada requisito é correto, completo, consistente, verificável e não ambíguo, e registra o resultado da verificação após a implementação do protótipo.

> **Critério de avaliação:** por se tratar de um protótipo, funcionalidades demonstradas com **dados mockados** são consideradas **Conforme**. Status Parcial ou Não Conforme indicam recursos que ainda não têm lógica implementada (não apenas falta de back-end/persistência).

## Legenda de Status

| Status | Significado |
|--------|-------------|
| Pendente | Ainda não verificado |
| Conforme | Critério verificado e atendido |
| Não Conforme | Critério verificado e não atendido |
| Parcial | Atendido parcialmente ou com ressalvas |


## Requisitos Funcionais

### RF01 — Visualização dos 23 Problemas Públicos

| Critério | Status | Observações |
|----------|--------|-------------|
| CA01.1: O sistema exibe os 23 problemas públicos, cada um com vínculo identificável ao Compromisso Decenal. | Conforme | As telas Início e Plano Decenal exibem os problemas públicos vinculados aos Compromissos. |

**Rastreabilidade:** HU01 · UC01 · T1 — Tela Principal


### RF02 — Visualização Hierárquica do Plano Decenal

| Critério | Status | Observações |
|----------|--------|-------------|
| CA02.1: O usuário navega pela hierarquia completa Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa sem perder o vínculo de cada item ao seu nível superior. | Conforme | Em `/plano-decenal` o accordion navega Compromisso → Objetivo → Linha de Ação com numeração hierárquica (ex.: 1.2.3). |

**Rastreabilidade:** HU02 · UC02 · T3 — Tela de Visualização Detalhada do Plano


### RF03 — Monitoramento de Progresso

| Critério | Status | Observações |
|----------|--------|-------------|
| CA03.1: Tarefas exibem status (não iniciada, em andamento, concluída) e indicadores exibem seu valor atual numérico. | Conforme | Os indicadores são exibidos com valores numéricos em gráficos na tela de Monitoramento. O status de tarefa existe no modelo de dados (`monitoramento.ts`) e há componente `StatusBadge`. |

**Rastreabilidade:** HU03 · UC03 · T2 — Tela de Monitoramento


### RF04 — Busca por Palavra-Chave

| Critério | Status | Observações |
|----------|--------|-------------|
| CA04.1: A busca por palavra-chave retorna registros que contenham o termo buscado. | Parcial | O campo "Buscar..." existe no cabeçalho (`Header.tsx`), porém ainda não está conectado à lógica de busca. |
| CA04.2: A busca não retorna resultados filtrados por responsável, compromisso ou período (escopo do RF05). | Não Conforme | Não verificável enquanto a busca não estiver funcional. |

**Rastreabilidade:** HU04 · UC04 · Todas as telas


### RF05 — Filtros Estruturados

| Critério | Status | Observações |
|----------|--------|-------------|
| CA05.1: Os filtros por compromisso, indicador, período e responsável reduzem a listagem de forma coerente com o critério escolhido. | Conforme | A tela de Monitoramento possui filtros encadeados (Marco Situacional, Compromisso, Responsável, Período, Indicador) com botão "Aplicar Filtros"; os resultados (gráficos) refletem a seleção. |
| CA05.2: Ao remover os filtros, a visualização padrão é restaurada. | Conforme | Botão "Limpar Filtros" reseta os filtros pendentes e aplicados ao estado vazio, voltando à mensagem "Selecione algum filtro". |

**Rastreabilidade:** HU05 · UC05 · T2 — Tela de Monitoramento


### RF06 — Exportação de Dados

| Critério | Status | Observações |
|----------|--------|-------------|
| CA06.1: É possível exportar o conjunto filtrado em Excel, CSV e PDF. | Parcial | O botão "Exportar Dados" é ilustrativo (o próprio `title` informa: "a exportação não está disponível neste protótipo"). |
| CA06.2: Os arquivos exportados contêm os mesmos registros e campos exibidos após o filtro (ver RNF04). | Não Conforme | Não verificável: não há geração de arquivos. |

**Rastreabilidade:** HU06 · UC06 · T2 — Tela de Monitoramento


### RF07 — Data e Hora da Última Atualização

| Critério | Status | Observações |
|----------|--------|-------------|
| CA07.1: Cada item monitorado exibe a data/hora da última atualização, que muda após nova edição. | Conforme | A tela de Monitoramento exibe "Última atualização: dd/mm/aaaa hh:mm" (mais recente do conjunto), a partir do campo `ultimaAtualizacao` dos dados mockados de cada indicador. |

**Rastreabilidade:** HU07 · UC07 · T2 — Tela de Monitoramento


### RF08 — Histórico de Atualizações de Tarefa

| Critério | Status | Observações |
|----------|--------|-------------|
| CA08.1: Toda alteração em uma tarefa gera entrada no histórico com data, conteúdo anterior e novo conteúdo. | Conforme | A aba Histórico do Painel Admin exibe registros com usuário, ação, data e valor anterior → novo. |
| CA08.2: O histórico mantém registros anteriores em ordem cronológica. | Conforme | Os registros mockados são listados em ordem cronológica. |

**Rastreabilidade:** HU19 · UC08 · T6 — Painel Administrativo · aba Histórico


### RF09 — Painel de Administração

| Critério | Status | Observações |
|----------|--------|-------------|
| CA09.1: Apenas usuário administrador acessa o painel de administração. | Conforme | A rota `/painel-admin` redireciona para `/acessar` se não houver usuário logado. |
| CA09.2: O administrador pode elevar ou reduzir permissões de outro usuário, com efeito verificável no login desse usuário. | Conforme | A aba Contas permite alterar o cargo/permissões de um usuário (dados mockados). |

**Rastreabilidade:** HU16 · UC15 · T6 — Painel Administrativo · aba Contas


### RF10 — Modo de Alto Contraste

| Critério | Status | Observações |
|----------|--------|-------------|
| CA10.1: O usuário ativa e desativa o modo de alto contraste, com mudança visível de contraste na interface. | Parcial | O botão no cabeçalho alterna a classe `high-contrast` no `<html>`, mas ainda não há regra CSS definindo `.high-contrast`, então o toggle não produz mudança visual. Falta criar os estilos de alto contraste. |

**Rastreabilidade:** HU10 · UC16 · Todas as telas


### RF11 — Autenticação de Usuário (Login)

| Critério | Status | Observações |
|----------|--------|-------------|
| CA11.1: Login com credenciais válidas concede acesso às áreas restritas. | Conforme | A tela `/acessar` autentica via `AuthContext`; com a credencial mock correta, redireciona para `/painel-admin`. |
| CA11.2: Credenciais inválidas são recusadas e exibem mensagem de erro; área restrita não é acessada. | Conforme | Credencial incorreta exibe "E-mail ou senha incorretos." e não navega para a área restrita. |

**Rastreabilidade:** — (sem HU dedicada) · UC11 · T5 — Tela de Acesso


### RF12 — Inserção de Registros

| Critério | Status | Observações |
|----------|--------|-------------|
| CA12.1: Perfil autorizado cadastra problema público, compromisso, objetivo, linha de ação e tarefa; o registro aparece na navegação hierárquica. | Não Conforme | A aba Dados permite editar valores anuais de indicadores e há um botão "Criar Novo Indicador" (sem ação). Não há cadastro das cinco entidades da hierarquia (problema, compromisso, objetivo, linha de ação, tarefa). |

**Rastreabilidade:** HU13 · UC12 · T6 — Painel Administrativo · aba Dados


### RF13 — Registro de Auditoria

| Critério | Status | Observações |
|----------|--------|-------------|
| CA13.1: Ações que alteram o estado do sistema (criar, editar, excluir, alterar permissões) ficam registradas com usuário, tipo de ação e data/hora consultáveis. | Conforme | A aba Histórico apresenta o registro de auditoria com usuário, cargo, ação e data/hora consultáveis (dados mockados). |

**Rastreabilidade:** HU17 · UC20 · T6 — Painel Administrativo · aba Histórico


### RF14 — Segurança dos Dados (Hash + HTTPS)

| Critério | Status | Observações |
|----------|--------|-------------|
| CA14.1: Credenciais são armazenadas em formato criptografado (hash), não em texto puro, verificável no banco de dados de teste. | Não Conforme | A credencial está em texto puro no front-end (`AuthContext.tsx`). Não há banco nem hashing. |
| CA14.2: A comunicação ocorre por HTTPS; dados sensíveis não trafegam em texto puro. | Não Conforme | Protótipo roda localmente (Vite), sem back-end nem camada HTTPS. Item de infraestrutura ainda não atendido. |

**Rastreabilidade:** — (sem HU) · — (infra) · Infraestrutura


### RF16 — Gráficos de Progresso de Indicadores

| Critério | Status | Observações |
|----------|--------|-------------|
| CA16.1: Indicadores com dados numéricos exibem gráfico de progresso coerente com os valores cadastrados. | Conforme | O componente `GraficoIndicador` renderiza gráficos SVG (barra/linha) com eixos escalados aos valores do histórico anual de cada indicador. |

**Rastreabilidade:** HU08 · UC09 · T2 — Tela de Monitoramento


### RF17 — Filtro de Gráficos por Ano

| Critério | Status | Observações |
|----------|--------|-------------|
| CA17.1: Ao filtrar por ano, a visualização muda conforme os dados daquele ano (testar com pelo menos dois anos no dataset). | Conforme | O filtro "Período de Tempo" define `anoMin`/`anoMax` e o gráfico filtra o `historicoAnual` pelo intervalo (ex.: 2016–2020, 2021–2025, últimos 3 anos). |

**Rastreabilidade:** HU08 · UC09 · T2 — Tela de Monitoramento


### RF18 — Diferenciação Visual de Tipos de Indicador

| Critério | Status | Observações |
|----------|--------|-------------|
| CA18.1: Tipos diferentes de indicador são distinguíveis visualmente (cor, ícone ou legenda). | Conforme | Cada indicador exibe um badge com cor e rótulo por tipo, via `TIPO_INDICADOR_CONFIG` (ex.: percentual, absoluto, progressivo). |

**Rastreabilidade:** HU08 · UC09 · T2 — Tela de Monitoramento


### RF19 — Responsável e Colaboradores da Linha de Ação

| Critério | Status | Observações |
|----------|--------|-------------|
| CA19.1: A tela da linha de ação exibe Responsável Principal e Colaboradores quando cadastrados. | Não Conforme | No Plano Decenal, a `LinhaDeAcao` possui apenas `id` e `descricao`; não há Responsável Principal nem Colaboradores na tela. O componente `ResponsaveisSection` existe, mas não é usado. |

**Rastreabilidade:** HU09 · UC10 · T3 — Tela de Visualização Detalhada do Plano


### RF20 — Três Perfis de Usuário

| Critério | Status | Observações |
|----------|--------|-------------|
| CA20.1: Existem contas dos três perfis: SEDEF, Conselho/Secretarias e público geral, documentadas para teste. | Parcial | No momento existe uma conta mock que é utilizada para admin e para secretarias. |
| CA20.2: O perfil público geral não realiza operações reservadas a perfis internos. | Conforme | As páginas públicas já são destinadas ao público geral e nada pode ser alterado por lá. |

**Rastreabilidade:** HU16 · UC15 · T6 — Painel Administrativo · aba Contas


### RF21 — Importação por Planilha

| Critério | Status | Observações |
|----------|--------|-------------|
| CA21.1: Planilha no formato definido importa registros válidos com sucesso. | Não Conforme | Não há funcionalidade de upload/importação de planilha em nenhuma tela. |
| CA21.2: Planilha com erros gera recusa ou relatório de erro, sem importar linhas inválidas silenciosamente. | Não Conforme | Não aplicável: importação inexistente. |

**Rastreabilidade:** HU15 · UC14 · T6 — Painel Administrativo · aba Dados


### RF22 — Edição de Registros

| Critério | Status | Observações |
|----------|--------|-------------|
| CA22.1: Perfil autorizado edita dados permitidos; a alteração reflete na visualização e no histórico (RF07/RF08). | Conforme | A aba Dados edita valores anuais de indicadores e a aba Contas edita contas (estado mockado), com a alteração refletida na própria tela. |

**Rastreabilidade:** HU14 · UC13 · T6 — Painel Administrativo · aba Dados


### RF23 — Controle de Sessão por Token

| Critério | Status | Observações |
|----------|--------|-------------|
| CA23.1: Após login, rotas protegidas exigem tokens de sessão autenticados. | Parcial | Há proteção básica de rota (`/painel-admin` redireciona se não houver usuário no contexto), mas baseada apenas em estado React em memória — ainda sem token de sessão. |
| CA23.2: Token inválido ou sessão encerrada bloqueia acesso a rotas protegidas. | Não Conforme | Não há token a invalidar. A sessão não persiste (recarregar a página desloga) e não há validação de token. |

**Rastreabilidade:** HU12 · UC11 · T5 — Tela de Acesso


### RF24 — Controle de Acesso por Perfil

| Critério | Status | Observações |
|----------|--------|-------------|
| CA24.1: Perfil somente leitura visualiza dados mas não consegue salvar alterações (botão ausente ou operação bloqueada). | Conforme | O perfil de somente leitura é o mesmo perfil público, que acessa as páginas fora da área restrita e não altera dados. |
| CA24.2: Perfil com permissão de edição altera apenas entidades previstas na matriz perfil × permissão. | Parcial | A matriz funciona para o perfil admin e o perfil público (todos que acessam o site), mas não foi implementada especificamente para secretarias. |

**Rastreabilidade:** HU16, HU18 · UC15 / UC11–UC14 · T6 — Painel Administrativo · aba Contas / Todas as telas restritas


### RF25 — Validação de Formato dos Dados

| Critério | Status | Observações |
|----------|--------|-------------|
| CA25.1: A interface rejeita data inválida, percentual fora de 0–100 e status fora da lista, com mensagem ao usuário. | Parcial | Há validação básica: campos obrigatórios na criação de conta (alerta de campo vazio) e `type="number"` na edição de valores. Faltam validações de data, faixa de percentual (0–100) e lista de status com mensagens ao usuário. |
| CA25.2: A importação por planilha aplica as mesmas regras e informa linhas rejeitadas. | Não Conforme | Não aplicável: importação inexistente. |

**Rastreabilidade:** HU13, HU14, HU15 · UC12, UC13, UC14 · T6 — Painel Administrativo · aba Dados


### RF26 — Interface em Português e Espanhol

| Critério | Status | Observações |
|----------|--------|-------------|
| CA26.1: O seletor de idioma alterna rótulos e menus principais entre português e espanhol em pelo menos as telas de navegação, login e busca. | Não Conforme | O cabeçalho exibe apenas um ícone de bandeira do Brasil, sem ação de troca de idioma. Não há infraestrutura de i18n nem textos em espanhol. |

**Rastreabilidade:** HU11 · UC17 · Todas as telas públicas


### RF27 — Área Dedicada a Crianças e Adolescentes

| Critério | Status | Observações |
|----------|--------|-------------|
| CA27.1: Existe seção/área identificável para crianças e adolescentes, acessível a partir da navegação principal. | Conforme | A tela `/sobre` ("Sobre", no menu principal) é dedicada a crianças e adolescentes ("Você que é criança ou adolescente"). |
| CA27.2: O conteúdo explica o Compromisso Decenal em linguagem simples, sem jargão técnico ou jurídico. | Conforme | O texto usa linguagem acessível (ex.: "uma grande lista de promessas") e cards explicativos com ícones, sem jargão jurídico. |

**Rastreabilidade:** HU20 · UC18 · T4 — Tela Sobre


### RF28 — Canais de Acolhimento e Socorro

| Critério | Status | Observações |
|----------|--------|-------------|
| CA28.1: A página "Procure ajuda" apresenta canais de acolhimento com nome, descrição e forma de contato. | Conforme | A seção "Precisa de ajuda?" da tela Sobre lista passos de acolhimento e contatos (Disque 100, Conselho Tutelar, SAMU 192, Polícia 190) com nome e número. |
| CA28.2: Telefones e links conferem com fontes oficiais antes da entrega. | Parcial | O próprio protótipo declara que os contatos "são apenas exemplos" (ex.: Conselho Tutelar "(00) 0000-0000"). Pendente validação dos números oficiais com o cliente. |

**Rastreabilidade:** HU21 · UC19 · T4 — Tela Sobre


## Requisitos Não Funcionais

### RNF01 — Acessibilidade (Design Universal)

| Critério | Status | Observações |
|----------|--------|-------------|
| CAN01.1: Textos e botões principais atendem contraste adequado no modo normal e no alto contraste (RF10). | Parcial | Modo normal não auditado com ferramenta; modo de alto contraste ainda não produz efeito (ver RF10 — falta CSS `.high-contrast`). |
| CAN01.2: É possível ajustar tamanho da fonte ou o layout permanece legível com zoom do navegador. | Conforme | O cabeçalho tem controles A+/A- que ajustam `font-size` da raiz (50%–180%). |

### RNF02 — Responsividade

| Critério | Status | Observações |
|----------|--------|-------------|
| CAN02.1: As funções principais permanecem utilizáveis em desktop, tablet (~768px) e mobile (~375px). | Parcial | Há uso de classes responsivas (`sm/md/lg`), especialmente no Login. Porém algumas telas usam larguras fixas grandes (ex.: `w-180` no logo) que podem quebrar em mobile. Requer teste no DevTools. |

### RNF03 — Capacidade de Armazenamento (10 anos)

| Critério | Status | Observações |
|----------|--------|-------------|
| CAN03.1: A documentação técnica descreve retenção de dados por pelo menos 10 anos. | Não Conforme | Não há documentação de retenção/persistência de dados. |
| CAN03.2: O dataset de teste inclui registros com datas que simulam evolução ao longo do período (ligado a RNF07). | Conforme | O histórico anual dos indicadores cobre 2016–2025 (10 anos), simulando a evolução ao longo do período. |

### RNF04 — Integridade da Exportação

| Critério | Status | Observações |
|----------|--------|-------------|
| CAN04.1: Exportações CSV/Excel têm a mesma quantidade de linhas e colunas esperadas. | Não Conforme | Não há exportação funcional (ver RF06). |
| CAN04.2: O PDF exportado exibe os dados de forma legível, sem perda sistemática de informação. | Não Conforme | Não há geração de PDF de dados. (Existe apenas download de um PDF estático do Plano Decenal, que não é exportação de dados filtrados.) |

### RNF05 — Documentação no Repositório

| Critério | Status | Observações |
|----------|--------|-------------|
| CAN05.1: O repositório contém README em português com stack, versões e instruções de execução. | Conforme | README do protótipo em elaboração, em português, com stack, versões e instruções de execução. |
| CAN05.2: Há matriz de rastreabilidade e registro das principais decisões técnicas. | Conforme | Existe `docs/matriz-rastreabilidade.md` e demais documentos (`requisitos.md`, `regras-negocio.md`, `casos-uso.md`). |

### RNF06 — Identidade Visual CEDCA-PR

| Critério | Status | Observações |
|----------|--------|-------------|
| CAN06.1: Paleta e tipografia estão alinhadas ao site https://www.cedca.pr.gov.br/. | Conforme | O protótipo adota paleta azul/laranja/rosa e os logotipos do Plano Decenal. |
| CAN06.2: Termos e ícones seguem o vocabulário institucional do Conselho. | Conforme | Vocabulário (Compromisso, Marco Situacional, Linha de Ação) é coerente com o do Conselho. |

### RNF07 — Dataset de Referência em Escala Estadual

| Critério | Status | Observações |
|----------|--------|-------------|
| CAN07.1: O dataset inclui os 23 compromissos, hierarquia de exemplo e histórico simulado de 10 anos, documentado no repositório. | Parcial | Há hierarquia de exemplo e histórico de 10 anos; o dataset de Monitoramento cobre os compromissos, mas falta documentar o conjunto completo no repositório. |
| CAN07.2: Busca, filtros e importação funcionam sobre esse dataset sem perda de integridade. | Parcial | Filtros funcionam sobre o dataset; busca (RF04) e importação (RF21) ainda não funcionam. |

### RNF08 — Expiração de Sessão por Inatividade

| Critério | Status | Observações |
|----------|--------|-------------|
| CAN08.1: Após 30 minutos sem interação, o usuário precisa autenticar-se novamente para acessar áreas restritas. | Não Conforme | Não há controle de expiração por inatividade; a sessão é apenas estado em memória (perdido ao recarregar). |


## Observações Gerais

- Funcionalidades demonstradas com **dados mockados** são contadas como Conforme. Os status Parcial/Não Conforme restantes apontam recursos sem lógica implementada, não apenas ausência de back-end.
- Principais lacunas ainda abertas: **busca por palavra-chave** (RF04, campo sem lógica), **exportação** (RF06/RNF04), **importação por planilha** (RF21), **alto contraste** (RF10, falta o CSS `.high-contrast`) e **idioma PT/ES** (RF26, sem i18n).
- Componentes já existentes no código que ainda não estão integrados às telas: `StatusBadge` (RF03), `ResponsaveisSection` (RF19), `HistoricoTarefa` e `IndicadorChart` — integrá-los reforça os critérios correspondentes.
- Requisitos de segurança/infraestrutura (RF14 hash/HTTPS, RF23.2 token, RNF08 expiração de sessão) dependem de back-end e permanecem Não Conforme.
- A validação dos contatos de RF28 depende de aprovação pelo cliente (SEDEF/CEDCA-PR) antes da entrega — em especial os números oficiais (RF28.2).

# Validação de Requisitos

## Objetivo

Este documento registra a validação dos requisitos funcionais e não funcionais do sistema de monitoramento do Plano Decenal Infantojuvenil do Paraná. A validação verifica se cada requisito é correto, completo, consistente, verificável e não ambíguo, e registra o resultado da verificação após a implementação do protótipo.

## Métodos de Verificação

| Método | Descrição |
|--------|-----------|
| Inspeção | Revisão direta de código, banco de dados ou documento |
| Demonstração | Execução do sistema com observação do comportamento esperado |
| Teste | Execução com entradas específicas e verificação da saída esperadAnálise  |
| Análise | Revisão de arquitetura, documentação ou cálculo, sem execução |

## Legenda de Status

| Status | Significado |
|--------|-------------|
| Pendente| Ainda não verificado |
| Conforme | Critério verificado e atendido |
| Não Conforme | Critério verificado e não atendido |
| Parcial| Atendido parcialmente ou com ressalvas |


## Requisitos Funcionais

### RF01 — Visualização dos 23 Problemas Públicos

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA01.1: O sistema exibe os 23 problemas públicos, cada um com vínculo identificável ao Compromisso Decenal. | Demonstração  | Pendente| |

**Rastreabilidade:** HU01 · UC01 · T1 — Tela Principal


### RF02 — Visualização Hierárquica do Plano Decenal

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA02.1: O usuário navega pela hierarquia completa Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa sem perder o vínculo de cada item ao seu nível superior. | Demonstração  | Pendente| |
| CA02.2: Ao abrir uma tarefa, são exibidos os dados de monitoramento associados (quando cadastrados). | Demonstração  | Pendente| |

**Rastreabilidade:** HU02 · UC02 · T3 — Tela de Visualização Detalhada do Plano


### RF03 — Monitoramento de Progresso

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA03.1: Tarefas exibem status (não iniciada, em andamento, concluída) e indicadores exibem seu valor atual numérico. | Demonstração  | Pendente| |

**Rastreabilidade:** HU03 · UC03 · T2 — Tela de Monitoramento


### RF04 — Busca por Palavra-Chave

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA04.1: A busca por palavra-chave retorna registros que contenham o termo buscado. | Teste  | Pendente| Entrada: termo presente no dataset; Saída esperada: registros correspondentes |
| CA04.2: A busca não retorna resultados filtrados por responsável, compromisso ou período (escopo do RF05). | Teste  | Pendente| Verificar separação entre RF04 e RF05 |

**Rastreabilidade:** HU04 · UC04 · Todas as telas


### RF05 — Filtros Estruturados

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA05.1: Os filtros por compromisso, indicador, período e responsável reduzem a listagem de forma coerente com o critério escolhido. | Teste  | Pendente| |
| CA05.2: Ao remover os filtros, a visualização padrão é restaurada. | Teste  | Pendente| |

**Rastreabilidade:** HU05 · UC05 · T2 — Tela de Monitoramento


### RF06 — Exportação de Dados

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA06.1: É possível exportar o conjunto filtrado em Excel, CSV e PDF. | Teste  | Pendente| Verificar os três formatos |
| CA06.2: Os arquivos exportados contêm os mesmos registros e campos exibidos após o filtro (ver RNF04). | Teste  | Pendente| Comparar contagem de linhas/colunas |

**Rastreabilidade:** HU06 · UC06 · T2 — Tela de Monitoramento


### RF07 — Data e Hora da Última Atualização

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA07.1: Cada item monitorado exibe a data/hora da última atualização, que muda após nova edição. | Teste  | Pendente| Editar um registro e verificar se o carimbo mudAnálise  |

**Rastreabilidade:** HU07 · UC07 · T2 — Tela de Monitoramento


### RF08 — Histórico de Atualizações de Tarefa

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA08.1: Toda alteração em uma tarefa gera entrada no histórico com data, conteúdo anterior e novo conteúdo. | Teste  | Pendente| |
| CA08.2: O histórico mantém registros anteriores em ordem cronológica. | Teste  | Pendente| |

**Rastreabilidade:** HU19 · UC08 · T8 — Tela de Logs de Mudanças


### RF09 — Painel de Administração

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA09.1: Apenas usuário administrador acessa o painel de administração. | Teste  | Pendente| Tentar acessar com perfil Conselho/Secretaria e público geral |
| CA09.2: O administrador pode elevar ou reduzir permissões de outro usuário, com efeito verificável no login desse usuário. | Demonstração  | Pendente| |

**Rastreabilidade:** HU16 · UC15 · T6 — Tela de Perfil Administrador


### RF10 — Modo de Alto Contraste

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA10.1: O usuário ativa e desativa o modo de alto contraste, com mudança visível de contraste na interface. | Demonstração  | Pendente| |

**Rastreabilidade:** HU10 · UC16 · Todas as telas


### RF11 — Autenticação de Usuário (Login)

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA11.1: Login com credenciais válidas concede acesso às áreas restritas. | Teste  | Pendente| |
| CA11.2: Credenciais inválidas são recusadas e exibem mensagem de erro; área restrita não é acessada. | Teste  | Pendente| Testar: senha errada, usuário inexistente |

**Rastreabilidade:** — (sem HU dedicada) · UC11 · T5 — Tela de Acesso


### RF12 — Inserção de Registros

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA12.1: Perfil autorizado cadastra problema público, compromisso, objetivo, linha de ação e tarefa; o registro aparece na navegação hierárquica. | Teste  | Pendente| Verificar as cinco entidades da hierarquiAnálise  |

**Rastreabilidade:** HU13 · UC12 · T7 — Tela de Inserção de Dados


### RF13 — Registro de Auditoria

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA13.1: Ações que alteram o estado do sistema (criar, editar, excluir, alterar permissões) ficam registradas com usuário, tipo de ação e data/hora consultáveis. | Teste  | Pendente| Executar cada tipo de ação e verificar o log |

**Rastreabilidade:** HU17 · UC20 · T6 — Tela de Perfil Administrador


### RF14 — Segurança dos Dados (Hash + HTTPS)

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA14.1: Credenciais são armazenadas em formato criptografado (hash), não em texto puro, verificável no banco de dados de teste. | Inspeção  | Pendente| Consultar diretamente o banco |
| CA14.2: A comunicação ocorre por HTTPS; dados sensíveis não trafegam em texto puro. | Inspeção  | Pendente| Verificar protocolo na URL e cabeçalhos HTTP |

**Rastreabilidade:** — (sem HU) · — (infra) · Infraestrutura


### RF16 — Gráficos de Progresso de Indicadores

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA16.1: Indicadores com dados numéricos exibem gráfico de progresso coerente com os valores cadastrados. | Demonstração  | Pendente| |

**Rastreabilidade:** HU08 · UC09 · T2 — Tela de Monitoramento


### RF17 — Filtro de Gráficos por Ano

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA17.1: Ao filtrar por ano, a visualização muda conforme os dados daquele ano (testar com pelo menos dois anos no dataset). | Teste  | Pendente| |

**Rastreabilidade:** HU08 · UC09 · T2 — Tela de Monitoramento


### RF18 — Diferenciação Visual de Tipos de Indicador

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA18.1: Tipos diferentes de indicador são distinguíveis visualmente (cor, ícone ou legenda). | Demonstração  | Pendente| |

**Rastreabilidade:** HU08 · UC09 · T2 — Tela de Monitoramento


### RF19 — Responsável e Colaboradores da Linha de Ação

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA19.1: A tela da linha de ação exibe Responsável Principal e Colaboradores quando cadastrados. | Demonstração  | Pendente| |

**Rastreabilidade:** HU09 · UC10 · T3 — Tela de Visualização Detalhada do Plano


### RF20 — Três Perfis de Usuário

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA20.1: Existem contas dos três perfis: SEDEF, Conselho/Secretarias e público geral, documentadas para teste. | Inspeção  | Pendente| |
| CA20.2: O perfil público geral não realiza operações reservadas a perfis internos. | Teste  | Pendente| Tentar criar/editar registros com conta públicAnálise  |

**Rastreabilidade:** HU16 · UC15 · T6 — Tela de Perfil Administrador


### RF21 — Importação por Planilha

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA21.1: Planilha no formato definido importa registros válidos com sucesso. | Teste  | Pendente| |
| CA21.2: Planilha com erros gera recusa ou relatório de erro, sem importar linhas inválidas silenciosamente. | Teste  | Pendente| Testar com planilha intencionalmente incorretAnálise  |

**Rastreabilidade:** HU15 · UC14 · T7 — Tela de Inserção de Dados


### RF22 — Edição de Registros

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA22.1: Perfil autorizado edita dados permitidos; a alteração reflete na visualização e no histórico (RF07/RF08). | Teste  | Pendente| Verificar propagação para RF07 e RF08 |

**Rastreabilidade:** HU14 · UC13 · T7 — Tela de Inserção de Dados


### RF23 — Controle de Sessão por Token

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA23.1: Após login, rotas protegidas exigem tokens de sessão autenticados. | Teste  | Pendente| Tentar acessar rota protegida sem token |
| CA23.2: Token inválido ou sessão encerrada bloqueia acesso a rotas protegidas. | Teste  | Pendente| Invalidar token manualmente e tentar acessar |

**Rastreabilidade:** HU12 · UC11 · T5 — Tela de Acesso


### RF24 — Controle de Acesso por Perfil

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA24.1: Perfil somente leitura visualiza dados mas não consegue salvar alterações (botão ausente ou operação bloqueada). | Teste  | Pendente| |
| CA24.2: Perfil com permissão de edição altera apenas entidades previstas na matriz perfil × permissão. | Teste  | Pendente| |
| CA24.3: A matriz de permissões está documentada em `regras-negocio.md` e coberta pelos testes acima. | Inspeção  | Pendente| |

**Rastreabilidade:** HU16, HU18 · UC15 / UC11–UC14 · T6 / Todas as telas restritas


### RF25 — Validação de Formato dos Dados

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA25.1: A interface rejeita data inválida, percentual fora de 0–100 e status fora da lista, com mensagem ao usuário. | Teste  | Pendente| |
| CA25.2: A importação por planilha aplica as mesmas regras e informa linhas rejeitadas. | Teste  | Pendente| |

**Rastreabilidade:** HU13, HU14, HU15 · UC12, UC13, UC14 · T7 — Tela de Inserção de Dados


### RF26 — Interface em Português e Espanhol

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA26.1: O seletor de idioma alterna rótulos e menus principais entre português e espanhol em pelo menos as telas de navegação, login e busca. | Demonstração  | Pendente| |

**Rastreabilidade:** HU11 · UC17 · Todas as telas públicas


### RF27 — Área Dedicada a Crianças e Adolescentes

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA27.1: Existe seção/área identificável para crianças e adolescentes, acessível a partir da navegação principal. | Demonstração  | Pendente| |
| CA27.2: O conteúdo explica o Compromisso Decenal em linguagem simples, sem jargão técnico ou jurídico. | Inspeção  | Pendente| Revisão editorial do conteúdo |

**Rastreabilidade:** HU20 · UC18 · T4 — Tela Sobre


### RF28 — Canais de Acolhimento e Socorro

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CA28.1: A página "Procure ajuda" apresenta canais de acolhimento com nome, descrição e forma de contato. | Demonstração  | Pendente| |
| CA28.2: Telefones e links conferem com fontes oficiais antes da entrega. | Inspeção  | Pendente| Validar com cliente |

**Rastreabilidade:** HU21 · UC19 · T4 — Tela Sobre


## Requisitos Não Funcionais

### RNF01 — Acessibilidade (Design Universal)

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CAN01.1: Textos e botões principais atendem contraste adequado no modo normal e no alto contraste (RF10). | Inspeção  | Pendente| Usar ferramenta de contraste (ex: axe, Lighthouse) |
| CAN01.2: É possível ajustar tamanho da fonte ou o layout permanece legível com zoom do navegador. | Demonstração  | Pendente| |
| CAN01.3: Formulários e navegação são utilizáveis por teclado e possuem rótulos para leitores de tela nos fluxos de login e busca. | Teste  | Pendente| Navegar com teclado e leitor de telAnálise  |


### RNF02 — Responsividade

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CAN02.1: As funções principais permanecem utilizáveis em desktop, tablet (~768px) e mobile (~375px). | Demonstração  | Pendente| Testar no DevTools do navegador |


### RNF03 — Capacidade de Armazenamento (10 anos)

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CAN03.1: A documentação técnica descreve retenção de dados por pelo menos 10 anos. | Análise  | Pendente| |
| CAN03.2: O dataset de teste inclui registros com datas que simulam evolução ao longo do período (ligado a RNF07). | Inspeção  | Pendente| |


### RNF04 — Integridade da Exportação

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CAN04.1: Exportações CSV/Excel têm a mesma quantidade de linhas e colunas esperadas. | Teste  | Pendente| |
| CAN04.2: O PDF exportado exibe os dados de forma legível, sem perda sistemática de informação. | Demonstração  | Pendente| |


### RNF05 — Documentação no Repositório

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CAN05.1: O repositório contém README em português com stack, versões e instruções de execução. | Inspeção  | Pendente| |
| CAN05.2: Há matriz de rastreabilidade e registro das principais decisões técnicas. | Inspeção  | Pendente| |


### RNF06 — Identidade Visual CEDCA-PR

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CAN06.1: Paleta e tipografia estão alinhadas ao site https://www.cedca.pr.gov.br/. | Inspeção  | Pendente| Comparar visualmente com o site institucional |
| CAN06.2: Termos e ícones seguem o vocabulário institucional do Conselho. | Inspeção  | Pendente| |


### RNF07 — Dataset de Referência em Escala Estadual

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CAN07.1: O dataset inclui os 23 compromissos, hierarquia de exemplo e histórico simulado de 10 anos, documentado no repositório. | Inspeção  | Pendente| |
| CAN07.2: Busca, filtros e importação funcionam sobre esse dataset sem perda de integridade. | Teste  | Pendente| |


### RNF08 — Expiração de Sessão por Inatividade

| Critério | Método | Status | Observações |
|----------|--------|--------|-------------|
| CAN08.1: Após 30 minutos sem interação, o usuário precisa autenticar-se novamente para acessar áreas restritas. | Teste  | Pendente| Simular inatividade ou ajustar timeout para teste |


## Resumo da Validação

| CategoriAnálise  | Total de Critérios | Conforme | Não Conforme | Parcial| Pendente|
|-----------|-------------------|------------|----------------|-----------|------------|
| Requisitos Funcionais | 38 | 0 | 0 | 0 | 38 |
| Requisitos Não Funcionais | 12 | 0 | 0 | 0 | 12 |
| **Total** | **50** | **0** | **0** | **0** | **50** |


## Observações Gerais

- **RF11** não possui história de usuário dedicada na `historias-usuario.md`;
- **RNF07** não possui história de usuário vinculada; os casos de uso UC04, UC05 e UC14 cobrem parcialmente o requisito.
- A validação dos campos de conteúdo de RF27 e RF28 depende de aprovação pelo cliente (SEDEF/CEDCA-PR) antes da entrega.

# Casos de Uso

Os casos de uso estão divididos com base nos atores que podem realizar esse fluxo. Note que há uma hierarquia de possíbilidades nesse contexto:
- SEDEF pode ser o usuário de todos os casos de uso do Conselho/Secretarias e Público Geral
- Conselho/Secretarias pode ser o usuárioo para todos os casos de uso do Público Geral

## Público Geral

### UC01: Visualizar Problemas Públicos e Compromissos
**Descrição:** O usuário visualiza os 23 problemas públicos do Plano Decenal, cada um vinculado a um Compromisso Decenal.
**Fluxo principal:**
1. O usuário acessa a área de visualização do Plano Decenal.
2. O sistema exibe a lista dos 23 problemas públicos com seus respectivos compromissos vinculados.
3. O usuário seleciona um problema público para ver detalhes.


### UC02: Visualizar Estrutura Hierárquica do Plano
**Descrição:** O usuário navega pela estrutura hierárquica completa do Plano Decenal (Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa).
**Fluxo principal:**
1. O usuário seleciona um Problema Público ou Compromisso.
2. O sistema exibe os Objetivos vinculados.
3. O usuário expande um Objetivo e o sistema exibe as Linhas de Ação vinculadas.
4. O usuário expande uma Linha de Ação e o sistema exibe as Tarefas vinculadas.
5. O sistema preserva e exibe o vínculo de cada item ao seu nível superior em todas as etapas.


### UC03: Monitorar Progresso de Tarefas e Indicadores
**Descrição:** O usuário acompanha o status das tarefas e os valores atuais dos indicadores.
**Fluxo principal:**
1. O usuário acessa uma Tarefa ou Indicador específico.
2. O sistema exibe o status da tarefa (não iniciada, em andamento, concluída) ou o valor atual do indicador.
3. O usuário visualiza a informação atualizada de progresso.


### UC04: Buscar Informações no Sistema
**Descrição:** O usuário realiza buscas por texto livre (palavra-chave) sobre os registros do Plano Decenal.
**Fluxo principal:**
1. O usuário insere um termo de busca no campo de pesquisa.
2. O sistema processa a busca nos registros do Plano Decenal.
3. O sistema exibe os itens cujo conteúdo contém o termo buscado.


### UC05: Aplicar Filtros de Visualização
**Descrição:** O usuário filtra as informações exibidas por compromisso, indicador, período de tempo ou responsável.
**Fluxo principal:**
1. O usuário seleciona um ou mais critérios de filtro.
2. O sistema aplica os filtros sobre os dados.
3. O sistema exibe somente as informações correspondentes aos critérios selecionados.


### UC06: Exportar Dados de Monitoramento
**Descrição:** O usuário exporta um conjunto filtrado de dados de monitoramento em Excel, CSV ou PDF.
**Fluxo principal:**
1. O usuário aplica filtros desejados (UC05).
2. O usuário seleciona a opção de exportação e o formato (Excel, CSV ou PDF).
3. O sistema gera o arquivo preservando integridade dos dados e formatação.
4. O sistema disponibiliza o arquivo para download.


### UC07: Visualizar Data e Hora da Última Atualização
**Descrição:** O usuário visualiza, junto a cada item monitorado, a data e hora da última atualização.
**Fluxo principal:**
1. O usuário acessa um item monitorado (tarefa, indicador, etc.).
2. O sistema exibe a data e hora da última atualização daquele item.


### UC08: Visualizar Histórico de Atualizações de Tarefa
**Descrição:** O usuário consulta o histórico de alterações de uma tarefa, incluindo data, conteúdo anterior e novo conteúdo.
**Fluxo principal:**
1. O usuário acessa uma Tarefa específica.
2. O usuário seleciona a opção de visualizar histórico.
3. O sistema exibe a lista de alterações em ordem cronológica, com data, conteúdo anterior e novo conteúdo de cada uma.


### UC09: Visualizar Gráficos de Progresso de Indicadores
**Descrição:** O usuário visualiza gráficos de progresso para cada indicador, podendo filtrar por ano e diferenciar visualmente por tipo.
**Fluxo principal:**
1. O usuário acessa a tela de um Indicador.
2. O sistema exibe o gráfico de progresso correspondente, com diferenciação visual por tipo de indicador.
3. O usuário aplica filtro por ano.
4. O sistema atualiza o gráfico conforme o período selecionado.


### UC10: Visualizar Responsáveis por Ação
**Descrição:** O usuário visualiza o Responsável Principal e os Colaboradores de cada Linha de Ação.
**Fluxo principal:**
1. O usuário acessa uma Linha de Ação.
2. O sistema exibe o Responsável Principal e a lista de Colaboradores vinculados.


### UC16: Alternar Modo de Alto Contraste
**Descrição:** O usuário ativa o modo de alto contraste para melhor acessibilidade visual.
**Fluxo principal:**
1. O usuário acessa as configurações de acessibilidade.
2. O usuário ativa o modo de alto contraste.
3. O sistema aplica o novo esquema visual em toda a interface.


### UC17: Alternar Idioma da Interface
**Descrição:** O usuário altera o idioma da interface entre português e espanhol.
**Fluxo principal:**
1. O usuário acessa o seletor de idioma.
2. O usuário escolhe o idioma desejado (português ou espanhol).
3. O sistema atualiza todos os textos da interface para o idioma selecionado.


### UC18: Acessar Área Dedicada a Crianças e Adolescentes
**Descrição:** O usuário acessa uma área com explicação acessível dos Compromissos Decenais voltada ao público infantojuvenil.
**Fluxo principal:**
1. O usuário acessa a área dedicada a crianças e adolescentes.
2. O sistema exibe o conteúdo explicativo em linguagem acessível sobre os Compromissos Decenais.


### UC19: Acessar Canais de Ajuda e Acolhimento
**Descrição:** O usuário acessa informações de procure ajuda e canais de acolhimento e socorro.
**Fluxo principal:**
1. O usuário acessa a área de procure ajuda.
2. O sistema exibe os canais de acolhimento e socorro disponíveis para crianças e adolescentes.


## Conselho/Secretarias

> Este ator herda todos os casos de uso do Público Geral (UC01–UC10, UC16–UC19), além dos casos de uso abaixo.

### UC11: Autenticar-se no Sistema
**Descrição:** O usuário cadastrado se autentica usando identificador e senha.
**Fluxo principal:**
1. O usuário insere identificador e senha na tela de login.
2. O sistema valida as credenciais.
3. Se válidas, o sistema concede acesso conforme o perfil do usuário.
**Fluxo de exceção:**
3a. Se inválidas, o sistema exibe mensagem de erro e mantém o usuário na tela de login.


### UC12: Inserir Novos Registros via Interface Gráfica
**Descrição:** O usuário autorizado insere novos registros de problemas públicos, compromissos, objetivos, linhas de ação ou tarefas.
**Fluxo principal:**
1. O usuário acessa o formulário de cadastro da entidade desejada.
2. O usuário preenche os campos obrigatórios.
3. O sistema valida o formato e os campos obrigatórios.
4. O sistema salva o novo registro e o vincula ao nível hierárquico superior correspondente.
**Fluxo de exceção:**
3a. Se a validação falhar, o sistema recusa o registro e informa o erro ao usuário.


### UC13: Alterar Registros Existentes via Interface Gráfica
**Descrição:** O usuário autorizado edita registros já existentes de problemas públicos, compromissos, objetivos, linhas de ação ou tarefas.
**Fluxo principal:**
1. O usuário seleciona um registro existente.
2. O usuário edita os campos desejados.
3. O sistema valida o formato e os campos obrigatórios.
4. O sistema salva as alterações e atualiza o histórico (UC08) e o registro de auditoria (UC20).
**Fluxo de exceção:**
3a. Se a validação falhar, o sistema recusa a alteração e informa o erro ao usuário.


### UC14: Carregar Dados por Meio de Planilha
**Descrição:** O usuário importa dados para o sistema através de upload de planilha.
**Fluxo principal:**
1. O usuário seleciona a opção de importação por planilha.
2. O usuário faz upload do arquivo.
3. O sistema valida o formato e os campos obrigatórios dos dados da planilha.
4. O sistema importa os registros válidos para a base de dados.
**Fluxo de exceção:**
3a. Se houver dados inválidos, o sistema recusa os registros correspondentes e informa o erro ao usuário.


## SEDEF

> Este ator herda todos os casos de uso do Conselho/Secretarias (e, por consequência, do Público Geral), além do caso de uso abaixo.

### UC15: Gerenciar Contas e Perfis de Usuário
**Descrição:** O administrador gerencia contas de usuário e atribui ou altera perfis de acesso (SEDEF, Conselho/Secretarias, público geral).
**Fluxo principal:**
1. O administrador acessa o painel de administração.
2. O administrador seleciona uma conta de usuário.
3. O administrador atribui ou altera o perfil de acesso da conta.
4. O sistema salva a alteração e registra a ação no log de auditoria (UC20).

### UC20: Consultar Registro de Auditoria
**Descrição:** O administrador consulta o log de auditoria com as ações que alteraram o estado do sistema.
**Fluxo principal:**
1. O administrador acessa o painel de auditoria.
2. O sistema exibe a lista de ações registradas, com usuário responsável, tipo de ação, data e hora.
3. O administrador consulta as entradas desejadas.

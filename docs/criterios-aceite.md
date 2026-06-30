# Critérios de Aceite

Critérios derivados de [requisitos.md](./requisitos.md).

## Critérios de Aceite Requisitos Funcionais

### RF01
- [ ] CA01.1: O sistema exibe os 23 problemas públicos, cada um com vínculo identificável ao Compromisso Decenal correspondente.

### RF02
- [ ] CA02.1: O usuário navega pela hierarquia Compromisso → Objetivo → Linha de Ação sem perder o vínculo de cada item ao seu nível superior.

### RF03
- [ ] CA03.1: Tarefas exibem status (não iniciada, em andamento, concluída) e indicadores exibem seu valor atual numérico.

### RF04
- [ ] CA04.1: A busca por palavra-chave retorna registros que contenham o termo buscado.
- [ ] CA04.2: A busca por palavra-chave não retorna resultados de outros critérios (responsável, compromisso, período), que pertencem aos filtros do RF05.

### RF05
- [ ] CA05.1: Os filtros por compromisso, indicador, período e responsável reduzem a listagem de forma coerente com o critério escolhido.
- [ ] CA05.2: Ao remover os filtros, a visualização padrão da listagem é restaurada.

### RF06
- [ ] CA06.1: É possível exportar o conjunto filtrado em Excel, CSV e PDF.
- [ ] CA06.2: Os arquivos exportados contêm os mesmos registros e campos principais exibidos após o filtro (ver RNF04).

### RF07
- [ ] CA07.1: Cada dado monitorado exibe a data/hora da última atualização, que muda após uma nova edição.

### RF08
- [ ] CA08.1: Toda alteração em uma tarefa gera entrada no histórico contendo a data, o conteúdo anterior e o novo conteúdo.
- [ ] CA08.2: O histórico mantém registros anteriores e permite visualizar a evolução em ordem cronológica.

### RF09
- [ ] CA09.1: Apenas usuário administrador acessa o painel de administração.
- [ ] CA09.2: O administrador pode elevar ou reduzir permissões de outro usuário, com efeito verificável no login desse usuário.

### RF10
- [ ] CA10.1: O usuário ativa e desativa o modo de alto contraste, com mudança visível de contraste na interface.

### RF11
- [ ] CA11.1: Login com credenciais válidas concede acesso às áreas restritas.
- [ ] CA11.2: Credenciais inválidas são recusadas, sem liberar área restrita, e uma mensagem de erro é exibida ao usuário.

### RF12
- [ ] CA12.1: Perfil autorizado cadastra problema público, compromisso, objetivo, linha de ação e tarefa pela interface e o registro aparece na navegação hierárquica.

### RF13
- [ ] CA13.1: Ações que alteram o estado do sistema (criar, editar, excluir, alterar permissões) ficam registradas com usuário e data/hora consultáveis.

### RF14
- [ ] CA14.1: Credenciais de usuário são armazenadas em formato criptografado (hash), não em texto puro, verificável no banco de dados de teste.
- [ ] CA14.2: A comunicação entre cliente e servidor ocorre por conexão segura (HTTPS), sem trafegar dados sensíveis em texto puro.

### RF15
- *requisito removido por duplicação*

### RF16
- [ ] CA16.1: Indicadores com dados numéricos exibem gráfico de progresso coerente com os valores cadastrados.

### RF17
- [ ] CA17.1: Ao filtrar gráficos por ano, a visualização muda conforme os dados daquele ano (com pelo menos dois anos no dataset de teste).

### RF18
- [ ] CA18.1: Tipos diferentes de indicador são distinguíveis visualmente (cor, ícone ou legenda).

### RF19
- [ ] CA19.1: A tela da ação exibe Responsável Principal e Colaboradores quando estiverem cadastrados.

### RF20
- [ ] CA20.1: Existem contas dos três perfis: SEDEF, Conselho/Secretarias e público geral (documentadas para teste).
- [ ] CA20.2: O perfil público geral não realiza operações reservadas a perfis internos (conforme matriz em regras de negócio).

### RF21
- [ ] CA21.1: Planilha no formato definido importa registros válidos com sucesso.
- [ ] CA21.2: Planilha com erros de formato ou campos obrigatórios gera recusa ou relatório de erro, sem importar linhas inválidas silenciosamente.

### RF22
- [ ] CA22.1: Perfil autorizado edita dados permitidos pela interface e a alteração reflete na visualização e no histórico (RF07/RF08).

### RF23
- [ ] CA23.1: Após login, rotas protegidas exigem tokens de sessão autenticados.
- [ ] CA23.2: Token inválido ou sessão encerrada impede acesso a rotas protegidas.

### RF24
- [ ] CA24.1: Perfil somente leitura visualiza dados mas não consegue salvar alterações (botão ausente ou operação bloqueada).
- [ ] CA24.2: Perfil com permissão de edição altera apenas entidades previstas na matriz perfil × permissão.

### RF25
- [ ] CA25.1: A interface rejeita data inválida, percentual fora de 0–100 e status fora da lista permitida, com mensagem ao usuário.
- [ ] CA25.2: A importação por planilha (RF21) aplica as mesmas regras e informa linhas rejeitadas.

### RF26
- [ ] CA26.1: O seletor de idioma alterna rótulos e menus principais entre português e espanhol em pelo menos as telas de navegação, login e busca.

### RF27
- [ ] CA27.1: Existe seção/área identificável para crianças e adolescentes, acessível a partir da navegação principal.
- [ ] CA27.2: O conteúdo explica o Compromisso Decenal em linguagem simples e estrutura adequada ao público infantojuvenil.

### RF28
- [ ] CA28.1: A página “Procure ajuda” apresenta orientação clara e canais de acolhimento definidos com o cliente.
- [ ] CA28.2: Telefones e links de socorro exibidos conferem com fontes oficiais validadas antes da entrega.

## Critérios de Aceite Requisitos Não Funcionais

### RNF01
- [ ] CAN01.1: Textos e botões principais atendem contraste adequado no modo normal e no alto contraste (RF10).
- [ ] CAN01.2: É possível ajustar tamanho da fonte ou o layout permanece legível com zoom do navegador.

### RNF02
- [ ] CAN02.1: As funções principais permanecem utilizáveis em desktop, tablet (~768px) e mobile (~375px).

### RNF03
- [ ] CAN03.1: A documentação técnica descreve retenção de dados por pelo menos 10 anos.
- [ ] CAN03.2: O dataset de teste inclui registros com datas que simulam evolução ao longo do período (ligado a RNF07).

### RNF04
- [ ] CAN04.1: Exportações CSV/Excel do conjunto filtrado têm a mesma quantidade de linhas e colunas esperadas.
- [ ] CAN04.2: O PDF exportado exibe os dados filtrados de forma legível, sem perda sistemática de informação.

### RNF05
- [ ] CAN05.1: O repositório contém README em português com stack, versões e instruções para executar o protótipo.
- [ ] CAN05.2: Há matriz de rastreabilidade requisito ↔ implementação/tela e registro das principais decisões técnicas.

### RNF06
- [ ] CAN06.1: Paleta e tipografia estão alinhadas ao site https://www.cedca.pr.gov.br/ (cores/fontes registradas no projeto).
- [ ] CAN06.2: Termos e ícones das telas principais seguem o vocabulário institucional do Conselho.

### RNF07
- [ ] CAN07.1: O dataset de referência inclui os 23 compromissos, hierarquia de exemplo e histórico simulado de 10 anos, documentado no repositório.
- [ ] CAN07.2: Busca, filtros e importação por planilha funcionam sobre esse dataset sem perda de integridade dos dados.

### RNF08
- [ ] CAN08.1: Após 30 minutos sem interação, o usuário precisa autenticar-se novamente para acessar áreas restritas.

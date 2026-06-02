# Critérios de Aceite

Critérios derivados de [requisitos.md](./requisitos.md).

## Critérios de Aceite Requisitos Funcionais

### RF01
- [ ] CA01.1: O sistema exibe os 23 problemas públicos, cada um com vínculo identificável ao Compromisso Decenal correspondente.

### RF02
- [ ] CA02.1: O usuário navega na ordem Objetivo → Linhas de Ação → Tarefas sem perder o contexto hierárquico.
- [ ] CA02.2: Ao abrir uma tarefa, são exibidos os dados de monitoramento associados (quando cadastrados).

### RF03
- [ ] CA03.1: Tarefas/indicadores exibem percentual concluído quando informado.
- [ ] CA03.2: É possível definir e visualizar os status: não iniciada, em andamento e concluída.

### RF04
- [ ] CA04.1: A busca por palavra-chave retorna registros que contenham o termo buscado.
- [ ] CA04.2: A busca por Responsável, eixo do Plano Decenal e Compromisso retorna resultados corretos para dados conhecidos no sistema.

### RF05
- [ ] CA05.1: Os filtros por compromisso, indicador, período e responsável reduzem a listagem de forma coerente com o critério escolhido.
- [ ] CA05.2: Ao remover os filtros, a visualização padrão da listagem é restaurada.

### RF06
- [ ] CA06.1: É possível exportar o conjunto filtrado em Excel, CSV e PDF.
- [ ] CA06.2: Os arquivos exportados contêm os mesmos registros e campos principais exibidos após o filtro (ver RNF04).

### RF07
- [ ] CA07.1: Cada dado monitorado exibe a data/hora da última atualização, que muda após uma nova edição.

### RF08
- [ ] CA08.1: Toda alteração em uma tarefa gera entrada no histórico com data e identificação do usuário (quando autenticado).
- [ ] CA08.2: O histórico mantém registros anteriores e permite visualizar a evolução em ordem cronológica.

### RF09
- [ ] CA09.1: Apenas usuário administrador acessa o painel de administração.
- [ ] CA09.2: O administrador pode elevar ou reduzir permissões de outro usuário, com efeito verificável no login desse usuário.

### RF10
- [ ] CA10.1: O usuário ativa e desativa o modo de alto contraste, com mudança visível de contraste na interface.

### RF11
- [ ] CA11.1: Login com credenciais válidas concede acesso às áreas restritas.
- [ ] CA11.2: Credenciais inválidas são recusadas, sem liberar área restrita.

### RF12
- [ ] CA12.1: Perfil autorizado cadastra problema, compromisso ou objetivo pela interface e o registro aparece na navegação hierárquica.

### RF13
- [ ] CA13.1: Ações que alteram o estado do sistema (criar, editar, excluir, alterar permissões) ficam registradas com usuário e data/hora consultáveis.

### RF14
- [ ] CA14.1: Entradas maliciosas em campos de texto (ex.: script) são rejeitadas ou sanitizadas, sem execução na interface nem corrupção dos dados.

### RF15
- [ ] CA15.1: Indicadores com dados numéricos exibem gráfico de progresso coerente com os valores cadastrados.

### RF16
- [ ] CA16.1: Ao filtrar gráficos por ano, a visualização muda conforme os dados daquele ano (com pelo menos dois anos no dataset de teste).

### RF17
- [ ] CA17.1: Tipos diferentes de indicador são distinguíveis visualmente (cor, ícone ou legenda).

### RF18
- [ ] CA18.1: A tela da ação exibe Responsável Principal e Colaboradores quando estiverem cadastrados.

### RF19
- [ ] CA19.1: Existem contas dos três perfis: SEDEF, Conselho/Secretarias e público geral (documentadas para teste).
- [ ] CA19.2: O perfil público geral não realiza operações reservadas a perfis internos (conforme matriz em regras de negócio).

### RF20
- [ ] CA20.1: Planilha no formato definido importa registros válidos com sucesso.
- [ ] CA20.2: Planilha com erros de formato ou campos obrigatórios gera recusa ou relatório de erro, sem importar linhas inválidas silenciosamente.

### RF21
- [ ] CA21.1: Perfil autorizado edita dados permitidos pela interface e a alteração reflete na visualização e no histórico (RF07/RF08).

### RF22
- [ ] CA22.1: Após login, rotas protegidas exigem token JWT válido.
- [ ] CA22.2: Token inválido ou sessão encerrada impede acesso a rotas protegidas.

### RF23
- [ ] CA23.1: Perfil somente leitura visualiza dados mas não consegue salvar alterações (botão ausente ou operação bloqueada).
- [ ] CA23.2: Perfil com permissão de edição altera apenas entidades previstas na matriz perfil × permissão.
- [ ] CA23.3: A matriz de permissões está documentada em `regras-negocio.md` e coberta pelos testes acima.

### RF24
- [ ] CA24.1: A interface rejeita data inválida, percentual fora de 0–100 e status fora da lista permitida, com mensagem ao usuário.
- [ ] CA24.2: A importação por planilha (RF20) aplica as mesmas regras e informa linhas rejeitadas.

### RF25
- [ ] CA25.1: O seletor de idioma alterna rótulos e menus principais entre português e espanhol em pelo menos as telas de navegação, login e busca.

### RF26
- [ ] CA26.1: Existe seção/área identificável para crianças e adolescentes, acessível a partir da navegação principal.
- [ ] CA26.2: O conteúdo explica o Compromisso Decenal em linguagem simples e estrutura adequada ao público infantojuvenil.

### RF27
- [ ] CA27.1: A página “Procure ajuda” apresenta orientação clara e canais de acolhimento definidos com o cliente.
- [ ] CA27.2: Telefones e links de socorro exibidos conferem com fontes oficiais validadas antes da entrega.

## Critérios de Aceite Requisitos Não Funcionais

### RNF01
- [ ] CAN01.1: Textos e botões principais atendem contraste adequado no modo normal e no alto contraste (RF10).
- [ ] CAN01.2: É possível ajustar tamanho da fonte ou o layout permanece legível com zoom do navegador.
- [ ] CAN01.3: Formulários e navegação principais são utilizáveis por teclado e possuem rótulos para leitores de tela nos fluxos de login e busca.

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
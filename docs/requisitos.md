# Requisitos
[Levantamento de Requisitos fornecido](https://moodle.c3sl.ufpr.br/pluginfile.php/239367/mod_resource/content/0/Requisitos%20plano%20decenal%20-%20Resultado%20Final.pdf)

**Alterações:**
- RNF05:
    - Antes: O sistema deve ser bem documentado.
    - Depois: O sistema deve possuir documentação no repositório, em português, incluindo stack e versões das ferramentas, justificativas das decisões técnicas principais, instruções de execução do protótipo e matriz de rastreabilidade requisito.
    - Porque a mudança foi necessária? Porque o requisito antigo estava muito vago e seria difícil de verificar ele.
- RNF06:
  - Antes: O design e a experiência devem ser minimamente semelhantes à interface do Conselho Estadual da Criança e do Adolescente.
  - Depois: A interface do protótipo deve manter consistência visual e de navegação com o site institucional do Conselho Estadual da Criança e do Adolescente do Paraná (https://www.cedca.pr.gov.br/), reproduzindo no mínimo: paleta de cores e tipografia institucionais e nomenclatura e ícones compatíveis com o vocabulário já usado pelo Conselho.
  - Porque a mudança foi necessária? O texto original era subjetivo (“minimamente semelhantes”), não indicava referência nem critérios de verificação
- RNF07:
    - Antes: O sistema deve suportar a inserção de um número arbitrário (grande) de dados.
    - Depois: O protótipo deve demonstrar suporte a um dataset de referência que represente o Plano Decenal em escala estadual (mínimo: dados dos 23 compromissos, hierarquia completa de exemplo e histórico simulado de 10 anos), com importação por planilha e consultas (busca/filtro) funcionais sem falha de integridade
    - Porque a mudança foi necessária? “Número arbitrário (grande)” não define limites nem como validar
- RF03:
    - Antes: O sistema deve permitir o monitoramento contínuo das tarefas/indicadores (ex. percentual concluído, status: não iniciada, em andamento, concluída).
    - Depois: O sistema deve permitir o monitoramento contínuo do progresso, exibindo o status das tarefas (não iniciada, em andamento, concluída) e o valor atual dos indicadores.
    - Por que a mudança foi necessária? A versão original agrupava tarefas e indicadores num mesmo "(ex...)", sem deixar claro que cada um se mede de forma distinta. A nova versão separa os dois comportamentos: tarefa tem status (estado discreto) e indicador tem valor (medida numérica).
- RF04:
    - Antes: O sistema deve permitir que o usuário faça buscas no sistema para a exibição das informações correspondentes. (palavra-chave, Responsável, eixos do Plano Decenal, Compromisso)
    - Depois: Restringido a busca por texto livre (palavra-chave). Os demais critérios (responsável, compromisso, período) são escopo do RF05.
    - Por que a mudança foi necessária? A versão original listava critérios que se sobrepunham ao RF05 (filtros estruturados), tornando os dois requisitos ambíguos. A separação – texto livre no RF04, seleções predefinidas no RF05 – elimina a sobreposição e deixa claro o que cada requisito exige.
- RF07:
    - Antes: O sistema deve mostrar quando foi feita a última atualização dos dados.
    - Depois: O sistema deve exibir, junto a cada item monitorado, a data e a hora de sua última atualização.
    - Por que a mudança foi necessária? A versão original não definia a granularidade ("dados" de quê), o que a fazia parecer sobreposta ao RF08. A nova versão deixa claro que o RF07 é o carimbo de última atualização exibido por item, distinto do histórico de conteúdo (RF08) e da auditoria de ações (RF13)
- RF08:
    - Antes: O sistema deve manter um histórico de todas as atualizações feitas em uma tarefa, permitindo ver a evolução.
    - Depois: O sistema deve manter e exibir o histórico de atualizações de cada tarefa, registrando, para cada alteração, a data, o conteúdo anterior e o novo conteúdo, permitindo acompanhar a evolução ao longo do tempo.
    - Por que a mudança foi necessária? A versão original não especificava o que cada entrada do histórico contém. A nova versão define o conteúdo registrado e delimita o escopo do requisito. 
- RF09:
    - Antes: O sistema deve possuir um painel de administrador, para elevar ou reduzir permissões de usuários e outras funcionalidades por usuários autorizados.
    - Depois: O sistema deve disponibilizar um painel de administração que permita a usuários autorizados gerenciar contas de usuário e atribuir ou alterar seus perfis de acesso (SEDEF, Conselho/Secretarias, público geral).
    - Por que a mudança foi necessária? A expressão "e outras funcionalidades" era vaga e não verificável. A nova versão delimita o que o painel faz (gerenciar contas e perfis) e esclarece que o RF09 trata da administração das permissões.
- RF11:
    - Antes: O sistema deve possuir um login de usuários.
    - Depois: O sistema deve permitir que usuários cadastrados se autentiquem por meio de credenciais (identificador e senha), concedendo acesso apenas quando as credenciais forem válidas e exibindo mensagem de erro quando forem inválidas.
    - Por que a mudança foi necessária ? A versão original apenas afirmava a existência de login, sem definir as credenciais usadas, o comportamento em caso de sucesso/falha e nem critério de verificação.
- RF12:
    - Antes: O sistema deve fornecer a possibilidade de inserção de problemas, compromissos, objetivos, etc via interface gráfica.
    - Depois: O sistema deve permitir, via interface gráfica, a inserção de novos registros de problemas públicos, compromissos, objetivos, linhas de ação e tarefas.
    - Por que a mudança foi necessária? O "etc" deixava a lista de entidades aberta e não verificável. A nova versão fecha a lista com base na hierarquia do Plano Decenal e deixa explícito que o RF12 trata da criação de registros.
- RF13:
    - Antes: O sistema deve registrar e armazenar ações dos usuários que podem alterar o estado do sistema.
    - Depois:  O sistema deve manter um registro de auditoria das ações que alteram o estado do sistema, armazenando, para cada ação, o usuário responsável, o tipo de ação realizada, a data e a hora.
    - Por que a mudança foi necessária ? A versão original era vaga sobre o que se registra ("ações que podem alterar o estado"), sem indicar quais dados o registro guarda nem como verificá-lo. A nova versão especifica o conteúdo do log (usuário, ação, data/hora) e o caracteriza como auditoria, distinguindo-o do RF08 (histórico de conteúdo da tarefa) e do RF07 (data da última atualização).
- RF14:
    - Antes: O sistema deve aplicar medidas de segurança nos dados inseridos.
    - Depois: O sistema deve proteger os dados inseridos contra acesso não autorizado, armazenando credenciais de forma criptografada (hash) e trafegando os dados por conexão segura (HTTPS), de modo que dados sensíveis não sejam expostos em texto puro.
    - Por que a mudança foi necessária? "Medidas de segurança" era vago e não verificável, a versão revisada especifica mecanismos concretos e delimita o escopo do RF14 para não se sobrepor a RF22 (tokens de sessão autenticados), RF25 (validação) e RF13 (registro de ações).
- RF15: 
    - Foi excluído porque estava duplicado (RF09). 
- RF20: 
    - Antes: O sistema deve permitir a existência de diferentes usuários (no mínimo três
    camadas: SEDEF, Conselho Estadual/Secretarias, público geral).
    - Depois: O sistema deve permitir a existência de  três diferentes usuários: SEDEF, Conselho Estadual/Secretarias, público geral.
    - Porque da mudança: O termo "no mínimo três camadas" abria margem para uma ambiguidade de escopo sem fim (o sistema poderia ter 4, 5 ou 10 níveis de acesso não planejados). A versão revisada define de forma exata e fechada quais são os perfis de usuários previstos, facilitando a modelagem do banco de dados, o controle de acessos e a homologação dos testes de perfil.
- RF22:
    - Antes: O sistema deve permitir a alteração de dados por meio da interface do sistema.
    - Depois: O sistema deve permitir, via interface gráfica, a alteração de registros já existentes de problemas públicos, compromissos, objetivos, linhas de ação e tarefas. 
    - Por que a mudança foi necessária? "Alteração de dados" era genérico. A nova versão especifica quais registros podem ser editados e delimita o escopo do RF22 como edição do que já existe, distinguindo-o do RF12 (criação). 
- RF23:
    - Antes: O sistema deve utilizar Tokens JWT para aumentar a segurança.
    - Depois: O sistema deve controlar o acesso a rotas e recursos protegidos por meio de tokens de sessão autenticados, garantindo que apenas sessões válidas e vigentes tenham acesso, e que o acesso seja revogado ao encerrar a sessão ou após expiração por inatividade.
    - Por que a mudança foi necessária? O texto original prescrevia a tecnologia de implementação (JWT) em vez do comportamento esperado do sistema. Requisitos funcionais devem descrever o *quê*, não o *como*.

**Inclusões**
- RF24: Controle de acesso por perfil (quem pode visualizar ou alterar)
- RF25: Validação de formato dos dados inseridos (interface e planilha)
- RF26: Área pública disponível em português e espanhol, com alternância de idioma
- RF27/RF28: Área dedicada a crianças e adolescentes (informação e ajuda/socorro)

## Requisitos Funcionais
- RF01: O sistema deve permitir que o usuário visualize os 23 problemas públicos, cada um vinculado a um Compromisso Decenal da criança e adolescente.
- RF02: O sistema deve permitir que o usuário visualize a estrutura do Plano Decenal de forma hierárquica, exibindo os níveis Compromisso → Objetivo → Linha de Ação, preservando o vínculo de cada item ao seu nível superior.
- RF03: O sistema deve permitir o monitoramento contínuo do progresso, exibindo o status das tarefas (não iniciada, em andamento, concluída) e o valor atual dos indicadores.
- RF04: O sistema deve permitir que o usuário faça buscas no sistema por texto livre (palavra-chave) sobre os registros do Plano Decenal, retornando os items cujo conteúdo contenha o termo de buscado. 
- RF05: O sistema deve permitir que o usuário aplique filtros (ex. compromisso, indicador,
período de tempo, responsável) para a exibição das informações do sistema.
- RF06: O sistema deve disponibilizar funcionalidade de exportação (Excel, CSV, PDF)
dos dados de monitoramento de um conjunto filtrado.
- RF07: O sistema deve exibir, junto a cada item monitorado, a data e a hora de sua última atualização.
- RF08: O sistema deve manter e exibir o histórico de atualizações de cada tarefa, registrando, para cada alteração, a data, o conteúdo anterior e o novo conteúdo, permitindo acompanhar a evolução ao longo do tempo.
- RF09: O sistema deve disponibilizar um painel de administração que permita a usuários autorizados gerenciar contas de usuário e atribuir ou alterar seus perfis de acesso (SEDEF, Conselho/Secretarias, público geral).
- RF10: O sistema deve fornecer um modo de alto contraste para os usuários.
- RF11: O sistema deve permitir que usuários cadastrados se autentiquem por meio de credenciais 
(identificador e senha), concedendo acesso apenas quando as credenciais forem válidas e exibindo
 mensagem de erro quando forem inválidas.
- RF12: O sistema deve permitir, via interface gráfica, a inserção de novos registros de problemas públicos, compromissos, objetivos, linhas de ação e tarefas.
- RF13: O sistema deve manter um registro de auditoria das ações que alteram o estado do sistema, armazenando, para cada ação, o usuário responsável, o tipo de ação realizada, a data e a hora.
- RF14: O sistema deve proteger os dados inseridos contra acesso não autorizado, armazenando credenciais de forma 
criptografada (hash) e trafegando os dados por conexão segura (HTTPS), de modo que dados sensíveis não sejam expostos em texto puro.
- RF16: O sistema deve exibir gráficos de progresso para cada indicador.
- RF17: O sistema deve permitir que o usuário filtre gráficos de indicadores por ano.
- RF18: O sistema deve diferenciar visualmente indicadores por seu respectivo tipo.
- RF19: O sistema deve exibir o Responsável Principal e os Colaboradores para cada Ação.
- RF20: O sistema deve permitir a existência de  três diferentes usuários: SEDEF, Conselho Estadual/Secretarias, público geral.
- RF21: O sistema deve permitir o carregamento de dados por meio de planilhas.
- RF22: O sistema deve permitir, via interface gráfica, a alteração de registros já existentes de problemas públicos, compromissos, objetivos, linhas de ação e tarefas.
- RF23: O sistema deve controlar o acesso a rotas e recursos protegidos por meio de tokens de sessão autenticados, garantindo que apenas sessões válidas e vigentes tenham acesso, e que o acesso seja revogado ao encerrar a sessão ou após expiração por inatividade.
- RF24: O sistema deve controlar o acesso a recursos conforme a matriz de perfis e permissões, garantindo que o perfil SEDEF (Administrador) possua controle total, incluindo gerenciamento de contas; o perfil Conselho Estadual/Secretarias possua permissão para visualizar conteúdos restritos, além de inserir, alterar e importar dados; e o perfil público geral possua acesso restrito a conteúdos públicos, buscas, filtros e exportações, sendo estritamente bloqueado para qualquer ação de adição, alteração ou administração.
- RF25: O sistema deve validar formato e campos obrigatórios dos dados inseridos pela interface e por planilha (RF21), recusando registros inválidos e informando o erro ao usuário.
- RF26: O sistema deve disponibilizar a área pública (conteúdos visíveis sem autenticação) em português e em espanhol, permitindo ao usuário alternar entre os dois idiomas.
- RF27: O sistema deve disponibilizar uma área dedicada a adolescentes (10–17 anos) com explicação dos Compromissos Decenais em linguagem simples e direta, sem jargão técnico ou jurídico, utilizando frases curtas e exemplos concretos do cotidiano.
- RF28: O sistema deve disponibilizar, na área dedicada a adolescentes, uma seção “Procure ajuda” com canais oficiais de acolhimento e socorro (nome do canal, descrição breve e forma de contato).

## Requisitos Não Funcionais
- RNF01: A interface deve ser acessível conforme os princípios do Design Universal,
incluindo contraste adequado, configuração de tamanho da fonte e suporte a leitores de
tela.
- RNF02: O sistema deve ser responsivo (adequado para desktop, tablet e dispositivos
móveis).
- RNF03: O sistema deve ter capacidade de armazenamento para guardar dados de pelo
menos 10 anos.
- RNF04: O sistema deve garantir a integridade dos dados exportados (Excel/PDF/CSV),
sem perda de informações ou formatações incorretas.
- RNF05: O sistema deve possuir documentação no repositório, em português, incluindo stack e versões das ferramentas, justificativas das decisões técnicas principais, instruções de execução do protótipo e matriz de rastreabilidade.
- RNF06: A interface do sistema deve manter consistência visual e de navegação com o site institucional do Conselho Estadual da Criança e do Adolescente do Paraná (https://www.cedca.pr.gov.br/), reproduzindo no mínimo: paleta de cores e tipografia institucionais e nomenclatura e ícones compatíveis com o vocabulário já usado pelo Conselho.
- RNF07: O sistema deve demonstrar suporte a um dataset de referência que represente o Plano Decenal em escala estadual (mínimo: dados dos 23 compromissos, hierarquia completa de exemplo e histórico simulado de 10 anos), com importação por planilha e consultas (busca/filtro) funcionais sem falha de integridade.
- RNF08: O sistema deve encerrar a sessão do usuário automaticamente após 30 minutos de inatividade.

### * Nota de consistência 
- RF07, RF08 e RF13: os três tratam de mudanças ao longo do tempo, mas não se sobrepõem: o RF07 mostra quando foi a última atualização de um item, o RF08 mostra o que mudou no conteúdo de uma tarefa (valor anterior e novo), e o RF13 registra quem realizou cada ação, para fins de auditoria. Cada um cumpre um propósito distinto e se vincula a telas e casos de uso diferentes.
- RF09 e RF24: Não se sobrepõem. O RF09 é a administração das permissões (onde o administrador define quem tem qual perfil); o RF24 é a aplicação dessas permissões (o sistema bloqueando ou liberando ações conforme o perfil de cada um).
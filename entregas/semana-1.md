## Semana 1

### Artefatos produzidos/atualizados:
- `README.md`: criação do arquivo inicial do repositório.
- Estrutura de diretórios definida em equipe: `docs/`, `entregas/`, `prototipo/docs/`, `prototipo/mockups/`.
- Arquivos de documentação criados (vazios, para preenchimento posterior): `docs/casos-uso.md`, `docs/conversa-cliente.md`, `docs/criterios-aceite.md`, `docs/historias-usuario.md`, `docs/historico-versoes.md`, `docs/matriz-rastreabilidade.md`, `docs/organizacao-afazeres.md`, `docs/regras-negocio.md`, `docs/requisitos.md`, `docs/validacao-requisitos.md`, `docs/visao-geral.md`.
- Arquivos de entrega criados (estrutura): `entregas/entrega-final.md`, `entregas/guia-escrita.md`, `entregas/semana-1.md`, `entregas/semana-2.md`, `entregas/semana-3.md`.
- `docs/requisitos.md`: inserção dos requisitos funcionais (RF01–RF23) e não funcionais (RNF01–RNF08) iniciais, com base no levantamento fornecido pelo cliente (documento "Requisitos Plano Decenal – Resultado Final"); posteriormente refinado, com renumeração de RFs, adição de RF24–RF27 e modificação de RNF05, RNF06 e RNF07 para torná-los verificáveis. O próprio arquivo passou a incluir um log de mudanças documentando a motivação de cada alteração.
- `docs/conversa-cliente.md`: registro das primeiras questões levantadas a partir da leitura do documento do cliente (ex.: quem preenche o plano, quem é o usuário administrador, quem é criador do plano), seguido da inserção de novos tópicos a esclarecer, surgidos a partir do levantamento de requisitos e dos critérios de aceite.
- `docs/visao-geral.md`: início e posterior adição do conteúdo do documento de visão geral do problema — contexto do Plano Decenal dos Direitos da Criança e do Adolescente, ausência de monitoramento eficiente e motivação para o sistema.
- `docs/organizacao-afazeres.md`: distribuição inicial de responsabilidades entre os membros da equipe e definição de prazos internos, com atualização posterior da distribuição de tarefas.
- `docs/matriz-rastreabilidade.md`: criação da estrutura do documento de rastreabilidade (vazia, para preenchimento posterior).
- `entregas/guia-escrita.md`: preenchimento inicial com orientações de escrita adotadas pelo grupo, com atualização posterior das orientações.
- `docs/criterios-aceite.md`: criação da primeira versão completa dos critérios de aceite para todos os requisitos funcionais (RF01–RF27) e não funcionais. Cada critério documentado com checkboxes no formato `- [ ] CAxx.y: descrição do critério`.
- `docs/historias-usuario.md`: criação da primeira versão das histórias de usuário, com 8 histórias cobrindo os perfis cidadão, membro de secretaria, criança/adolescente e usuário PCD.
- `prototipo/mockups/`: criação de 4 imagens de mockup das telas (tela inicial, visualização do plano, monitoramento com filtros e monitoramento sem filtros).

### Requisitos adicionados:
- RF01 a RF23 (versão inicial): visualização do plano, monitoramento, busca, filtros, exportação, histórico, painel admin, acessibilidade, login, inserção e alteração de dados, JWT, controle de acesso, validação, idioma e área infantojuvenil.
- RNF01 a RNF08 (versão inicial): acessibilidade, responsividade, armazenamento, integridade de exportação, documentação, consistência visual, dataset de referência e encerramento de sessão por inatividade.
- RF24: Controle de acesso por perfil (quem pode visualizar ou alterar).
- RF25: Validação de formato dos dados inseridos (interface e planilha).
- RF26: Interface em português e espanhol.
- RF27: Área dedicada a crianças e adolescentes (informação e ajuda/socorro).

### Requisitos removidos:
- RF15 (antigo): estava duplicado com RF09 (painel de administrador). Requisitos subsequentes renumerados.

### Requisitos modificados:
- RNF05: Antes vago ("O sistema deve ser bem documentado"); refinado para especificar conteúdo mínimo da documentação (stack, versões, justificativas técnicas, instruções de execução e matriz de rastreabilidade).
- RNF06: Antes subjetivo ("minimamente semelhantes"); refinado para definir critérios verificáveis de consistência visual (paleta, tipografia, nomenclatura) com referência ao site do CEDCA-PR.
- RNF07: Antes indefinido ("número arbitrário (grande)"); refinado para especificar dataset mínimo de referência (23 compromissos, 10 anos de histórico simulado, importação por planilha).
- RF01: Correção de erro tipográfico ("adolescentel" → "adolescente").

### Justificativas das alterações:
Criação da estrutura base do repositório para organizar a documentação, os artefatos de entrega e o protótipo. A convenção de pastas foi definida em equipe para facilitar a colaboração. Os arquivos de telas do protótipo foram criados como esboço do planejamento de telas a implementar.

Primeiros requisitos levantados com base no documento fornecido pelo cliente. A equipe identificou dúvidas internas sobre papéis de usuário e fluxo de preenchimento do plano que precisariam ser esclarecidas com o cliente em uma conversa futura.

Os três RNFs eram vagos e não verificáveis. A remoção de RF15 eliminou duplicidade com RF09. Os quatro RFs adicionados cobrem lacunas identificadas: controle de acesso por perfil, validação de dados, suporte a espanhol e área infantojuvenil. Os critérios de aceite e as histórias de usuário foram elaborados em paralelo para guiar as próximas etapas de desenvolvimento e validação.

### Impactos das mudanças:
- Estabelece a organização do projeto. Todos os commits seguintes partem desta estrutura.
- Linha de base dos requisitos estabelecida. Todos os demais artefatos (histórias de usuário, critérios de aceite, casos de uso, regras de negócio) derivam deste documento.
- Renumeração a partir de RF15 impacta toda referência futura a esses requisitos.
- RF24–RF27 adicionados impactam histórias de usuário, critérios de aceite e casos de uso futuros.
- Mockups de 4 telas servem de referência visual para o protótipo a ser desenvolvido.
- Critérios de aceite e histórias de usuário estabelecem base para validação dos requisitos.
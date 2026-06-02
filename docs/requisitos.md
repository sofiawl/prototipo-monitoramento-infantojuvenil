# Requisitos
[Levantamento de Requisitos fornecido](https://moodle.c3sl.ufpr.br/pluginfile.php/239367/mod_resource/content/0/Requisitos%20plano%20decenal%20-%20Resultado%20Final.pdf)


## Log de mudanças:
### 25/05: Adição dos requisitos iniciais

### 28/05: Levantamento de mudanças dos requisitos iniciais
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
- RF15: 
  - Foi excluído porque estava duplicado (FN09). Depois alterado os números restantes para manter o padrão em ordem
**Inclusões**
- RF24: Controle de acesso por perfil (quem pode visualizar ou alterar)
- RF25: Validação de formato dos dados inseridos (interface e planilha)
- RF26: Interface em português e espanhol
- RF27: Área dedicada a crianças e adolescentes (informação e ajuda/socorro


## Requisitos Funcionais
● RF01: O sistema deve permitir que o usuário visualize os 23 problemas públicos, cada
um vinculado a um Compromisso Decenal da criança e adolescentel.
● RF02: O sistema deve permitir a visualização hierárquica de: Objetivo ➔ Linhas de Ação
➔ Tarefas
● RF03: O sistema deve permitir o monitoramento contínuo das tarefas/indicadores (ex.
percentual concluído, status: não iniciada, em andamento, concluída)
● RF04: O sistema deve permitir que o usuário faça buscas no sistema para a exibição
das informações correspondentes. (palavra-chave, Responsável, eixos do Plano
Decenal, Compromisso)
● RF05: O sistema deve permitir que o usuário aplique filtros (ex. compromisso, indicador,
período de tempo, responsável) para a exibição das informações do sistema.
● RF06: O sistema deve disponibilizar funcionalidade de exportação (Excel, CSV, PDF)
dos dados de monitoramento de um conjunto filtrado.
● RF07: O sistema deve mostrar quando foi feita a última atualização dos dados
● RF08: O sistema deve manter um histórico de todas as atualizações feitas em uma
tarefa, permitindo ver a evolução.
● RF09: O sistema deve possuir um painel de administrador, para elevar ou reduzir
permissões de usuários e outras funcionalidades por usuários autorizados.
● RF10: O sistema deve fornecer um modo de alto contraste para os usuários.
● RF11: O sistema deve possuir um login de usuários.
● RF12: O sistema deve fornecer a possibilidade de inserção de problemas,
compromissos, objetivos, etc via interface gráfica.
● RF13: O sistema deve registrar e armazenar ações dos usuários que podem alterar o
estado do sistema.
● RF14: O sistema deve aplicar medidas de segurança nos dados inseridos.
permissões de usuários e outras funcionalidades por usuários autorizados.
● RF15: O sistema deve exibir gráficos de progresso para cada indicador.
● RF16: O sistema deve permitir que o usuário filtre gráficos de indicadores por ano.
● RF17: O sistema deve diferenciar visualmente indicadores por seu respectivo tipo.
● RF18: O sistema deve exibir o Responsável Principal e os Colaboradores para cada
Ação.
● RF19: O sistema deve permitir a existência de diferentes usuários (no mínimo três
camadas: SEDEF, Conselho Estadual/Secretárias, público geral).
● RF20: O sistema deve permitir o carregamento de dados por meio de planilhas.
● RF21: O sistema deve permitir a alteração de dados por meio da interface do
sistema.
● RF22: O sistema deve utilizar Tokens JWT para aumentar a segurança.
● RF23: O sistema deve controlar, por perfil de usuário (SEDEF, Conselho/Secretarias, público geral), o que cada um pode visualizar e o que pode alterar, bloqueando edição para perfis sem permissão.
● RF24: O sistema deve validar formato e campos obrigatórios dos dados inseridos pela interface e por planilha (RF21), recusando registros inválidos e informando o erro ao usuário.
● RF25: O sistema deve permitir alternar o idioma da interface entre português e espanhol.
● RF26: O sistema deve disponibilizar área para crianças e adolescentes com explicação acessível do Compromisso Decenal
● RF27: O sistema deve disponibilizar informações de “Procure ajuda” e informações de canais de acolhimento e socorro para crianças e adolescentes.

## Requisitos Não Funcionais
● RNF01: A interface deve ser acessível conforme os princípios do Design Universal,
incluindo contraste adequado, configuração de tamanho da fonte e suporte a leitores de
tela.
● RNF02: O sistema deve ser responsivo (adequado para desktop, tablet e dispositivos
móveis).
● RNF03: O sistema deve ter capacidade de armazenamento para guardar dados de pelo
menos 10 anos.
● RNF04: O sistema deve garantir a integridade dos dados exportados (Excel/PDF/CSV),
sem perda de informações ou formatações incorretas.
● RNF05: O sistema deve possuir documentação no repositório, em português, incluindo stack e versões das ferramentas, justificativas das decisões técnicas principais, instruções de execução do protótipo e matriz de rastreabilidade requisito.
● RNF06:A interface do sistema deve manter consistência visual e de navegação com o site institucional do Conselho Estadual da Criança e do Adolescente do Paraná (https://www.cedca.pr.gov.br/), reproduzindo no mínimo: paleta de cores e tipografia institucionais e nomenclatura e ícones compatíveis com o vocabulário já usado pelo Conselho.
● RNF07: O sistema deve demonstrar suporte a um dataset de referência que represente o Plano Decenal em escala estadual (mínimo: dados dos 23 compromissos, hierarquia completa de exemplo e histórico simulado de 10 anos), com importação por planilha e consultas (busca/filtro) funcionais sem falha de integridade.
● RNF08: O sistema deve encerrar a sessão do usuário automáticamente após 30
minutos de inatividade.
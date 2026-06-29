# Regras de Negócio (ordenado por requisito)

Regras derivadas de [requisitos.md](./requisitos.md) e dos critérios em [criterios-aceite.md](./criterios-aceite.md).

Uma regra de negócio descreve uma **condição ou restrição do domínio** (o que é permitido, obrigatório ou proibido), e não a ação operacional que o sistema executa. Por isso, regras aqui são redigidas como restrições sobre os dados e sobre quem pode agir, deixando o comportamento da interface para os requisitos funcionais e os fluxos para os casos de uso. Quando uma regra não é satisfeita, ela dá origem a um **fluxo alternativo** no caso de uso correspondente.

Para regras com múltiplas origens, a seção é a do primeiro RF listado.

#### RF01 — Visualização dos 23 problemas públicos
- **RN01** — O Plano Decenal possui exatamente 23 Problemas Públicos, cada um vinculado a exatamente um Compromisso Decenal, em relação biunívoca. 

#### RF02 — Hierarquia do Plano Decenal
- **RN02** — A hierarquia possui exatamente cinco níveis, nesta ordem: Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa. 
- **RN03** — Todo item, exceto o Problema Público (raiz), está vinculado a exatamente um item do nível imediatamente superior; não existe item órfão. 
  - *Fluxo alternativo:* tentativa de criar um item sem informar o item-pai é recusada.

#### RF03 e RF24 — Monitoramento de tarefas e indicadores
- **RN04** — Toda Tarefa recém-criada inicia no status *não iniciada*. 
- **RN05** — A mudança do status de uma Tarefa de *em andamento* para *concluída* depende de aprovação do perfil administrador. 
  - *Fluxo alternativo:* perfil sem permissão de aprovação que tente concluir a tarefa tem a operação bloqueada / fica pendente de aprovação.
- **RN06** — Tarefa é medida por status (estado discreto); indicador é medido por valor (medida numérica). São dimensões distintas. 
  - *Fluxo alternativo:* tentativa de colocar valores inválidos em cada tipo de medição é recusada.

#### RF07 — Data e hora de última atualização
- **RN07** — Todo item monitorado deve ter registrada a data e a hora de sua última atualização, atualizada a cada edição. 

#### RF08 — Histórico de atualizações de tarefas
- **RN08** — Toda alteração no conteúdo de uma Tarefa deve ser registrada preservando o conteúdo anterior e o novo, com data, de modo a permitir reconstruir sua evolução. 

#### RF09 — Painel de administração
- **RN09** — A função de administrador (gerência de contas, atribuição de perfis e aprovações) é exercida pelo perfil **SEDEF**. *(Origem: RF09 e RF24)*
- **RN10** — A administração de contas e a atribuição/alteração de perfis é exclusiva do administrador (SEDEF). 

#### RF11 — Autenticação
- **RN11** — O acesso a conteúdo restrito e qualquer ação de escrita exigem autenticação válida; tentativas com credenciais inválidas são recusadas e o usuário é informado. 
  - *Fluxo alternativo:* credenciais inválidas levam ao fluxo de erro de login, sem liberar área restrita.

#### RF12 — Inserção de registros
- **RN12** — Conselho/Secretarias cria e edita registros do Plano e importa planilhas, mas não gerencia contas nem permissões. *(Origem: RF12, RF21, RF22)*


#### RF13 — Registro de auditoria
- **RN13** — Toda ação que altera o estado do sistema deve ficar registrada com o usuário responsável, o tipo de ação e a data/hora (auditoria). 

#### RF14 — Proteção de dados
- **RN14** — Credenciais e dados sensíveis só podem ser acessados por quem tem autorização; não são expostos a terceiros nem trafegam de forma legível por não autorizados. 

#### RF19 — Responsável Principal e Colaboradores
- **RN15** — Toda Linha de Ação deve ter exatamente um Responsável Principal; o número de Colaboradores é zero ou mais. 

#### RF20 — Perfis de usuário
- **RN16** — Existem apenas perfis de acesso ao sistema: SEDEF, Conselho/Secretarias e Público Geral. *(Origem: RF20, RF24)*

#### RF21 — Importação por planilha
- **RN17** — As mesmas validações de formato e obrigatoriedade valem tanto para inserção via interface quanto para importação por planilha. *(Origem: RF21, RF25)*
- **RN18** — Na importação por planilha, o documento só é importado se todas as linhas forem válidas; havendo qualquer linha inválida, o documento é recusado e o usuário é notificado. *(Origem: RF21, RF25)*
  - *Fluxo alternativo:* planilha com erro gera recusa/relatório de erro, sem importar linhas inválidas silenciosamente.

#### RF24 — Controle de acesso por perfil
- **RN19** — 
O perfil Público Geral possui direitos estritos de somente leitura e exclusivamente sobre dados classificados como públicos. Este perfil não pode visualizar conteúdos restritos e é totalmente bloqueado para ações de criação, edição ou importação. 
- **RN20** — 
O perfil Conselho Estadual/Secretarias possui permissão para visualizar conteúdos restritos e realizar operações de escrita (inserir, alterar e importar dados via planilha). No entanto, este perfil é estritamente proibido de gerenciar contas de usuários, alterar perfis de acesso ou aprovar formalmente a conclusão de Tarefas, tendo essas tentativas bloqueadas pelo sistema.
- **RN21** — 
O perfil SEDEF (Administrador) possui nível máximo de privilégio no sistema (controle total). É o único perfil com permissão para gerenciar contas de usuários, atribuir ou modificar perfis de acesso e aprovar a conclusão de Tarefas. Além disso, possui direitos irrestritos para visualizar, inserir, alterar e importar qualquer dado ou conteúdo no sistema.

#### Matriz perfil × permissão
| Ação                                              | Público Geral | Conselho/Secretarias | SEDEF (admin) |
|---------------------------------------------------|:-------------:|:--------------------:|:-------------:|
| Visualizar conteúdo público                       | ✔             | ✔                    | ✔             |
| Visualizar conteúdo restrito                      | ✘             | ✔                    | ✔             |
| Buscar e filtrar conteúdo acessível ao perfil     | ✔             | ✔                    | ✔             |
| Exportar dados do conjunto acessível (RF06)       | ✔ (público)   | ✔                    | ✔             |
| Criar/editar registros do Plano (RF12, RF22)      | ✘             | ✔                    | ✔             |
| Importar dados por planilha (RF21)                | ✘             | ✔                    | ✔             |
| Aprovar conclusão de Tarefa (RN05)                | ✘             | ✘                    | ✔             |
| Gerenciar contas e atribuir perfis (RF09)         | ✘             | ✘                    | ✔             |

#### RF25 — Validação de dados
- **RN22** — Os campos obrigatórios de cada entidade devem estar preenchidos; registros incompletos são recusados, com o erro informado ao usuário. 
  - *Fluxo alternativo:* registro com campo obrigatório ausente é rejeitado.

#### RF26 — Idioma da interface
- **RN23** — O idioma padrão da interface é o português; o usuário pode alternar para espanhol a qualquer momento sem que isso afete os dados do Plano armazenados. 

#### RF28 — Área "Procure ajuda"
- **RN24** — As informações de "Procure ajuda" (canais de acolhimento/socorro) devem vir de fonte oficial e ser validadas antes da publicação. 

#### RNF03 — Retenção de dados
- **RN25** — Os dados do Plano permanecem acessíveis por, no mínimo, 10 anos. 

#### RNF08 — Expiração de sessão
- **RN26** — A sessão autenticada expira após período de inatividade (valor de referência: 30 minutos), exigindo nova autenticação para acessar áreas restritas.



# Regras de Negócio

Regras derivadas de [requisitos.md](./requisitos.md) e dos critérios em [criterios-aceite.md](./criterios-aceite.md).

Uma regra de negócio descreve uma **condição ou restrição do domínio** (o que é permitido, obrigatório ou proibido), e não a ação operacional que o sistema executa. Por isso, regras aqui são redigidas como restrições sobre os dados e sobre quem pode agir, deixando o comportamento da interface para os requisitos funcionais e os fluxos para os casos de uso. Quando uma regra não é satisfeita, ela dá origem a um **fluxo alternativo** no caso de uso correspondente (ver coluna "Fluxo alternativo" das regras aplicáveis).

## 1. Estrutura e hierarquia do Plano

- **RN01** — A hierarquia possui exatamente cinco níveis, nesta ordem: Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa. *(Origem: RF02)*
- **RN02** — Todo item, exceto o Problema Público (raiz), está vinculado a exatamente um item do nível imediatamente superior; não existe item órfão. *(Origem: RF02)*
  - *Fluxo alternativo:* tentativa de criar um item sem informar o item-pai é recusada.

## 2. Status e critério de conclusão da Tarefa

- **RN03** — Toda Tarefa recém-criada inicia no status *não iniciada*. *(Origem: RF03)*
- **RN04** — A mudança do status de uma Tarefa de *em andamento* para *concluída* depende de aprovação do perfil administrador (ver RN12). *(Origem: RF03; validar em [3.8](./conversa-cliente.md))*
  - *Fluxo alternativo:* perfil sem permissão de aprovação que tente concluir a tarefa tem a operação bloqueada / fica pendente de aprovação.
- **RN05** — Tarefa é medida por **status** (estado discreto); indicador é medido por **valor** (medida numérica). São dimensões distintas. *(Origem: RF03)*
  - *Fluxo alternativo:* tentativa de colocar valores inválidos em cada tipo de medição é recusada. 


## 4. Perfis de acesso e matriz de permissões

- **RN06** — Existem apenas três perfis de acesso ao sistema: **SEDEF**, **Conselho/Secretarias** e **Público Geral**. *(Origem: RF19, RF23)*
- **RN07** — A função de **administrador** (gerência de contas, atribuição de perfis e aprovações) é exercida pelo perfil **SEDEF**;
- **RN08** — O Público Geral tem acesso **somente leitura** ao conteúdo público. *(Origem: RF23)*
  - *Fluxo alternativo:* qualquer tentativa de escrita por esse perfil é negada.
- **RN09** — Conselho/Secretarias cria e edita registros do Plano e importa planilhas, mas **não** gerencia contas nem permissões. *(Origem: RF12, RF20, RF21)*
- **RN10** — A administração de contas e a atribuição/alteração de perfis é exclusiva do administrador (SEDEF). *(Origem: RF09)*
- **RN11** — Um perfil sem permissão de escrita não consegue, sob nenhuma forma, alterar dados; a operação é negada pelo sistema. *(Origem: RF23)*
  - *Fluxo alternativo:* o controle de escrita é ausente na interface e a requisição é rejeitada no servidor.

### Matriz perfil × permissão

| Ação                                              | Público Geral | Conselho/Secretarias | SEDEF (admin) |
|---------------------------------------------------|:-------------:|:--------------------:|:-------------:|
| Visualizar conteúdo público                       | ✔             | ✔                    | ✔             |
| Visualizar conteúdo restrito                       | ✘             | ✔                    | ✔             |
| Buscar e filtrar conteúdo acessível ao perfil      | ✔             | ✔                    | ✔             |
| Exportar dados do conjunto acessível (RF06)        | ✔ (público)   | ✔                    | ✔             |
| Criar/editar registros do Plano (RF12, RF21)       | ✘             | ✔                    | ✔             |
| Importar dados por planilha (RF20)                 | ✘             | ✔                    | ✔             |
| Aprovar conclusão de Tarefa (RN06)                 | ✘             | ✘                    | ✔             |
| Gerenciar contas e atribuir perfis (RF09)          | ✘             | ✘                    | ✔             |

## 5. Proteção de dados e acesso autorizado

- **RN12** — O acesso a conteúdo restrito e qualquer ação de escrita exigem autenticação válida; tentativas com credenciais inválidas são recusadas e o usuário é informado. *(Origem: RF11)*
  - *Fluxo alternativo:* credenciais inválidas levam ao fluxo de erro de login, sem liberar área restrita.
- **RN13** — Credenciais e dados sensíveis só podem ser acessados por quem tem autorização; não são expostos a terceiros nem trafegam de forma legível por não autorizados. *(Origem: RF14)*
- **RN14** — A sessão autenticada expira após período de inatividade (valor de referência: 30 minutos), exigindo nova autenticação para acessar áreas restritas. *(Origem: RNF08)*

## 6. Validação de dados (entrada manual e por planilha)

- **RN15** — Os campos obrigatórios de cada entidade devem estar preenchidos; registros incompletos são recusados, com o erro informado ao usuário. *(Origem: RF24)*
  - *Fluxo alternativo:* registro com campo obrigatório ausente é rejeitado.
- **RN16** — As mesmas validações de formato e obrigatoriedade valem tanto para inserção via interface quanto para importação por planilha. *(Origem: RF20, RF24)*
- **RN17** — Na importação por planilha, o documento só é importado se **todas** as linhas forem válidas; havendo qualquer linha inválida, o documento é recusado e o usuário é notificado. *(Origem: RF20, RF24)*
  - *Fluxo alternativo:* planilha com erro gera recusa/relatório de erro, sem importar linhas inválidas silenciosamente.

## 7. Rastreabilidade de mudanças

*(Regras de obrigatoriedade sobre o dado; o comportamento de exibição está em RF07, RF08 e RF13.)*

- **RN18** — Todo item monitorado deve ter registrada a data e a hora de sua última atualização, atualizada a cada edição. *(Origem: RF07)*
- **RN19** — Toda alteração no conteúdo de uma Tarefa deve ser registrada preservando o conteúdo anterior e o novo, com data, de modo a permitir reconstruir sua evolução. *(Origem: RF08)*
- **RN20** — Toda ação que altera o estado do sistema deve ficar registrada com o usuário responsável, o tipo de ação e a data/hora (auditoria). *(Origem: RF13)*

## 9. Retenção de dados

- **RN21** — Os dados do Plano permanecem acessíveis por, no mínimo, 10 anos. *(Origem: RNF03)*

## 10. Conformidade legal e normativa (candidatas)

- **RN22** — O tratamento de dados pessoais de crianças e adolescentes deve respeitar a LGPD e o ECA. 
- **RN23** — As informações de "Procure ajuda" (canais de acolhimento/socorro) devem vir de fonte oficial e ser validadas antes da publicação. *(Origem: RF27; validar fonte e mantenedor em [4.2](./conversa-cliente.md))*

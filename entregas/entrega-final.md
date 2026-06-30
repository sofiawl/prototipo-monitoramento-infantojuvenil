# Entrega Final

Consolidação final do projeto — retrato fechado do estado do protótipo, da documentação e da validação do sistema de monitoramento do Plano Decenal dos Direitos da Criança e do Adolescente do Paraná. Este documento resume e referencia os artefatos; não reproduz seu conteúdo integral. A narrativa de evolução dos requisitos está em [`docs/historico-versoes.md`](../docs/historico-versoes.md); a prova de entrega de cada etapa, em [`entregas/semana-1.md`](semana-1.md), [`entregas/semana-2.md`](semana-2.md) e [`entregas/semana-3.md`](semana-3.md).

## 1. Resumo do que foi entregue

- **Protótipo funcional** — aplicação React + TypeScript + Vite em [`prototipo/sedef-test/`](../prototipo/sedef-test/), com **seis rotas navegáveis** (página inicial, plano decenal, monitoramento, sobre, acesso e painel administrativo). Instruções de execução no [`README.md`](../README.md).
- **Documentação de requisitos** — [`docs/requisitos.md`](../docs/requisitos.md): conjunto fechado **RF01–RF28 (exceto RF15, removido) e RNF01–RNF08**, com log de mudanças que registra a motivação de cada alteração.
- **Artefatos de modelagem** — [`docs/historias-usuario.md`](../docs/historias-usuario.md) (HU01–HU22), [`docs/criterios-aceite.md`](../docs/criterios-aceite.md) (CA01–CA28, sem o 15), [`docs/casos-uso.md`](../docs/casos-uso.md) (UC01–UC20), [`docs/regras-negocio.md`](../docs/regras-negocio.md) (RN01–RN26) e [`docs/matriz-rastreabilidade.md`](../docs/matriz-rastreabilidade.md) (RF → HU → UC → Tela, telas T1–T6).
- **Validação realizada** — [`docs/validacao-requisitos.md`](../docs/validacao-requisitos.md), com a verificação critério a critério de cada RF/RNF após a implementação do protótipo.
- **Histórico de evolução** — [`docs/historico-versoes.md`](../docs/historico-versoes.md): registro acumulado das adições, remoções e modificações de requisitos ao longo das Semanas 1 a 3, com justificativa e impacto de cada mudança.
- **Apresentação por tela** — [`docs/apresentacao.md`](../docs/apresentacao.md): mapeia, tela a tela (T1–T6), quais requisitos cada uma cumpre e onde isso acontece no código, com o status retirado da validação.
- **Contexto de origem** — [`docs/conversa-cliente.md`](../docs/conversa-cliente.md) (roteiro e respostas do cliente, com mapeamento para os RF/RNF) e [`docs/visao-geral.md`](../docs/visao-geral.md).
- **Mockups** — [`prototipo/mockups/`](../prototipo/mockups/) (tela inicial, visualização do plano e monitoramento com/sem filtros).

## 2. Requisitos alterados desde a Semana 3

A grande rodada de alterações de requisitos foi a registrada na Semana 3 (ver [`entregas/semana-3.md`](semana-3.md) e [`docs/historico-versoes.md`](../docs/historico-versoes.md)): adição do RF28, remoção do RF22 antigo (JWT) e do RF15 (duplicado do RF09), renumeração a partir do RF15 e refinamentos de RF04, RF20, RF23, RF24, RF26 e RF27.

Depois da Semana 3 houve **uma modificação de escopo**, no RF02:

- **Adicionados desde a Semana 3:** nenhum.
- **Removidos desde a Semana 3:** nenhum.
- **Modificados desde a Semana 3:** **RF02** — a hierarquia foi estreitada de cinco níveis (Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa) para os **três níveis efetivamente navegáveis no protótipo** (Compromisso → Objetivo → Linha de Ação). CA02.1, UC02 e a validação foram alinhados a essa redação; o Problema Público é coberto pelo RF01 e o detalhamento de Tarefa/Responsáveis pelo RF19.

As demais edições em `docs/requisitos.md` após a Semana 3 foram **editoriais** (detalhamento de redação de RF20, RF24, RF26–RF28, correção de referências cruzadas e remoção de linhas redundantes), sem mudança de identificador. O conjunto permanece **RF01–RF28 (exceto RF15) e RNF01–RNF08**.

O conjunto fechado permanece **RF01–RF28 (exceto RF15) e RNF01–RNF08**.

## 3. Resultado da validação (seção 8 do edital)

A validação está consolidada em [`docs/validacao-requisitos.md`](../docs/validacao-requisitos.md). O arquivo `prototipo/docs/validacao-prototipo.md` mencionado em semanas anteriores **não existe mais no repositório** (removido junto aos demais arquivos vazios de planejamento de telas) — toda a validação foi unificada em `docs/validacao-requisitos.md`.

**Critério adotado:** por se tratar de protótipo, funcionalidades demonstradas com dados mockados são consideradas *Conforme*; *Parcial* e *Não Conforme* indicam ausência de lógica implementada, não apenas de back-end.

**Problemas e lacunas encontrados:**

- Busca por palavra-chave (RF04): campo presente no `Header`, sem lógica de filtragem.
- Exportação de dados (RF06/RNF04): botão ilustrativo, sem geração de arquivo.
- Importação por planilha (RF21): inexistente.
- Cadastro das cinco entidades da hierarquia (RF12): a aba Dados só edita valores anuais de indicadores.
- Modo de alto contraste (RF10): o toggle alterna a classe no `<html>`, mas falta o CSS `.high-contrast`.
- Idioma PT/ES (RF26): sem infraestrutura de i18n.
- Segurança e sessão (RF14 hash/HTTPS, RF23.2 token, RNF08 expiração por inatividade): *Não Conforme* por dependerem de back-end — a sessão atual é apenas estado React em memória.

**Inconsistências entre código e telas identificadas pela validação:** componentes já implementados, porém ainda não integrados às telas — `ResponsaveisSection` (RF19, por isso *Não Conforme*), além de `StatusBadge`, `HistoricoTarefa` e `IndicadorChart`. Registrar essa integração pendente foi um dos resultados diretos da verificação.

**Inconsistência de documentação corrigida após a validação:** a matriz de rastreabilidade tratava as abas do Painel Administrativo (Contas, Dados e Histórico) como telas separadas (T6, T7 e T8), divergindo da validação e da apresentação. Foi unificada para **6 telas = 6 rotas reais**, com o Painel Administrativo (T6) reunindo as três abas; `matriz-rastreabilidade.md`, `validacao-requisitos.md` e `apresentacao.md` ficaram alinhados.

**Decisão pendente de cliente:** os contatos da seção "Procure ajuda" (RF28.2) estão como exemplos e dependem de validação dos números oficiais com a SEDEF/CEDCA-PR antes da entrega ao cliente.

**Requisitos alterados por causa da validação:** nenhum. Nenhum RF/RNF foi reescrito ou removido em função do que foi verificado; os achados foram registrados como status de conformidade e lacunas de implementação a endereçar, mantendo o conjunto de requisitos da Semana 3. A única ação documental decorrente da validação foi a correção de consistência das telas descrita acima.

## 4. Status final do protótipo

As seis rotas de [`prototipo/sedef-test/src/App.tsx`](../prototipo/sedef-test/src/App.tsx) estão implementadas e navegáveis. Mapeamento das **10 telas mínimas exigidas** (com a tela correspondente da matriz, T1–T6):

| # | Tela mínima exigida | Tela (matriz) | Onde está | Status |
|---|---------------------|---------------|-----------|--------|
| 1 | Inicial pública | T1 | `Home.tsx` (`/`) | Implementada e navegável |
| 2 | Busca / filtros | T2 | `Monitoramento.tsx` (`/monitoramento`) | Filtros funcionam; busca por palavra-chave sem lógica (campo no `Header`) |
| 3 | Indicadores | T2 | `Monitoramento.tsx` (`/monitoramento`) | Implementada (gráficos por indicador, filtro por ano, badges por tipo) |
| 4 | Detalhamento de objetivos/tarefas | T3 | `PlanoDecenal.tsx` (`/plano-decenal`) | Implementada (accordion Compromisso → Objetivo → Linha de Ação); não exibe tarefas nem responsáveis (RF19) |
| 5 | Histórico de atualizações | T6 · aba Histórico | `PainelAdmin.tsx` (`/painel-admin`) | Implementada (dados mockados) |
| 6 | Login | T5 | `Login.tsx` (`/acessar`) | Implementada e navegável |
| 7 | Painel administrativo | T6 | `PainelAdmin.tsx` (`/painel-admin`) | Implementada, com proteção básica de rota |
| 8 | Gerenciamento de usuários | T6 · aba Contas | `PainelAdmin.tsx` (`/painel-admin`) | Implementada (alteração de cargo/permissões, dados mockados) |
| 9 | Exportação de dados | T2 | botão em `Monitoramento.tsx` | Botão presente, porém ilustrativo (sem geração de arquivo) |
| 10 | Acessibilidade | transversal (`Header`) | controles A+/A- e alto contraste no `Header.tsx` | Ajuste de fonte funciona; alto contraste sem efeito visual (falta CSS) |

> Além das 10 telas mínimas, o protótipo implementa a **Tela Sobre** (T4, `Sobre.tsx`, `/sobre`) — a área dedicada a crianças e adolescentes, que cobre RF27 (linguagem acessível) e RF28 (seção "Procure ajuda").

**Limitações conhecidas:**

- Cadastro/importação de dados (aba **Dados** do Painel Administrativo, T6) **não foi implementado** como cadastro das cinco entidades da hierarquia nem como importação por planilha (RF12, RF21); a aba apenas edita valores anuais de indicadores.
- Busca por palavra-chave (RF04), exportação (RF06) e seletor de idioma PT/ES (RF26) não têm lógica funcional.
- Autenticação, controle de sessão e segurança (RF14, RF23, RNF08) são simulados em memória, sem back-end nem persistência (recarregar a página desloga).
- O modo de alto contraste (RF10) alterna a classe no `<html>`, mas falta a regra CSS correspondente.

## 5. Consistência entre artefatos

[`docs/requisitos.md`](../docs/requisitos.md), [`docs/historias-usuario.md`](../docs/historias-usuario.md), [`docs/criterios-aceite.md`](../docs/criterios-aceite.md), [`docs/casos-uso.md`](../docs/casos-uso.md), [`docs/regras-negocio.md`](../docs/regras-negocio.md) e [`docs/matriz-rastreabilidade.md`](../docs/matriz-rastreabilidade.md) estão alinhados na mesma numeração — **RF01–RF28** e **CA01–CA28** (ambos sem o nº 15, intencionalmente removido), **HU01–HU22**, **UC01–UC20** e **RN01–RN26** —, sem divergência de identificadores.

A hierarquia do RF02 (Compromisso → Objetivo → Linha de Ação, três níveis) está consistente entre `requisitos.md` (RF02), `criterios-aceite.md` (CA02.1), `casos-uso.md` (UC02) e `validacao-requisitos.md`, e bate com o accordion do protótipo.

As telas da matriz (**T1–T6**) correspondem às seis rotas do protótipo; o Painel Administrativo (T6) reúne as abas Contas, Dados e Histórico. A mesma numeração de telas é usada de forma consistente em [`matriz-rastreabilidade.md`](../docs/matriz-rastreabilidade.md), [`validacao-requisitos.md`](../docs/validacao-requisitos.md) e [`apresentacao.md`](../docs/apresentacao.md). A única lacuna de cobertura entre requisitos e código é a aba **Dados** (RF12 cadastro de entidades e RF21 importação por planilha), sinalizada na própria matriz.

## 6. Repositório e apresentação final

- **Repositório Git:** `git@github.com:sofiawl/prototipo-monitoramento-infantojuvenil.git` — <https://github.com/sofiawl/prototipo-monitoramento-infantojuvenil>.
- **Apresentação por tela:** [`docs/apresentacao.md`](../docs/apresentacao.md) — material que percorre cada tela (T1–T6) relacionando-a aos requisitos cumpridos e às pendências, servindo de base para a apresentação final.
- **Slides da defesa:** ainda **não adicionados** ao repositório (não existe pasta `apresentacao/` com o `slides.pdf`). Caso o edital exija o deck em PDF, ele deve ser incluído antes da entrega final.

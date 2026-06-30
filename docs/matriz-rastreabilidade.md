# Matriz de Rastreabilidade

## Telas do protótipo

As telas correspondem às **6 rotas** do protótipo (`prototipo/sedef-test/src/App.tsx`). O Painel Administrativo é uma única tela com três abas internas (Contas, Dados, Histórico).

| Sigla | Nome completo (rota) | Descrição |
|-------|---------------------|-----------|
| **T1** | Tela Principal (`/`) | Exibe os 23 compromissos decenais; ponto de entrada do sistema |
| **T2** | Tela de Monitoramento (`/monitoramento`) | Painel de filtros + gráficos de indicadores + exportação |
| **T3** | Tela de Visualização Detalhada do Plano (`/plano-decenal`) | Navegação hierárquica por compromisso (Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa) |
| **T4** | Tela Sobre (`/sobre`) | Área dedicada a crianças e adolescentes: curiosidades do projeto + canais de ajuda e acolhimento |
| **T5** | Tela de Acesso (`/acessar`) | Login / logout / controle de sessão |
| **T6** | Painel Administrativo (`/painel-admin`) | Tela única com três abas — **Contas**: gerência de contas, perfis e permissões (SEDEF); **Dados**: inserção/edição de dados e importação por planilha (Conselho/Secretarias e SEDEF); **Histórico**: logs de mudanças e auditoria (data, conteúdo anterior e novo) |

---

## Rastreabilidade: Requisito → História → Caso de Uso → Tela

| Requisito | História | Caso de Uso | Tela |
|-----------|----------|-------------|------|
| RF01 | HU01 | UC01 | T1 — Tela Principal |
| RF02 | HU02 | UC02 | T3 — Tela de Visualização Detalhada do Plano |
| RF03 | HU03 | UC03 | T2 — Tela de Monitoramento |
| RF04 | HU04 | UC04 | Todas as telas |
| RF05 | HU05 | UC05 | T2 — Tela de Monitoramento |
| RF06 | HU06 | UC06 | T2 — Tela de Monitoramento |
| RF07 | HU07 | UC07 | T2 — Tela de Monitoramento |
| RF08 | HU19 | UC08 | T6 — Painel Administrativo · aba Histórico |
| RF09 | HU16 | UC15 | T6 — Painel Administrativo · aba Contas |
| RF10 | HU10 | UC16 | Todas as telas  |
| RF11 | — | UC11 | T5 — Tela de Acesso |
| RF12 | HU13 | UC12 | T6 — Painel Administrativo · aba Dados |
| RF13 | HU17 | UC20 | T6 — Painel Administrativo · aba Histórico |
| RF14 | — | — | Infraestrutura / sem tela dedicada (hash de credenciais + HTTPS) |
| RF16 | HU08 | UC09 | T2 — Tela de Monitoramento |
| RF17 | HU08 | UC09 | T2 — Tela de Monitoramento |
| RF18 | HU08 | UC09 | T2 — Tela de Monitoramento |
| RF19 | HU09 | UC10 | T3 — Tela de Visualização Detalhada do Plano |
| RF20 | HU16 | UC15 | T6 — Painel Administrativo · aba Contas |
| RF21 | HU15 | UC14 | T6 — Painel Administrativo · aba Dados |
| RF22 | HU14 | UC13 | T6 — Painel Administrativo · aba Dados |
| RF23 | HU12 | UC11 | T5 — Tela de Acesso |
| RF24 | HU16, HU18 | UC15 (configuração) / UC11–UC14 (aplicação) | T6 — Painel Administrativo · aba Contas (configuração) / Todas as telas restritas (aplicação) |
| RF25 | HU13, HU14, HU15 | UC12, UC13, UC14 | T6 — Painel Administrativo · aba Dados |
| RF26 | HU11 | UC17 | Todas as telas públicas (seletor de idioma global PT/ES) |
| RF27 | HU20 | UC18 | T4 — Tela Sobre |
| RF28 | HU21 | UC19 | T4 — Tela Sobre |
| RNF01 | HU22 | UC16 | Todas as telas (alto contraste, fonte configurável, leitor de tela) |
| RNF02 | — | — | Todas as telas (layout responsivo) |
| RNF03 | — | — | Infraestrutura / Banco de Dados (sem tela) |
| RNF04 | HU06 | UC06 | T2 — Tela de Monitoramento (integridade do arquivo exportado) |
| RNF05 | — | — | Repositório / README (sem tela) |
| RNF06 | — | — | Todas as telas (identidade visual CEDCA-PR) |
| RNF07 | — | UC04, UC05, UC14 | T2 — Tela de Monitoramento / T6 — Painel Administrativo · aba Dados |
| RNF08 | HU12 | UC11 | T5 — Tela de Acesso (expiração de sessão por inatividade) |


**Nota de implementação:** o Painel Administrativo (T6) está implementado com as três abas (Contas, Dados e Histórico), com dados mockados. A lacuna conhecida é o escopo da aba **Dados**: não há cadastro das cinco entidades da hierarquia (RF12) nem importação por planilha (RF21) — apenas edição de valores anuais de indicadores (RF22). O detalhe de conformidade de cada requisito está em [`validacao-requisitos.md`](validacao-requisitos.md).
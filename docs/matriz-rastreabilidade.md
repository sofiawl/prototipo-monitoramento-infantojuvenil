# Matriz de Rastreabilidade

## Telas do protótipo

| Sigla | Nome completo | Descrição |
|-------|---------------|-----------|
| **T1** | Tela Principal | Exibe os 23 compromissos decenais; ponto de entrada do sistema |
| **T2** | Tela de Monitoramento | Painel de filtros + gráficos de indicadores + exportação |
| **T3** | Tela de Visualização Detalhada do Plano | Navegação hierárquica por compromisso (Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa) |
| **T4** | Tela Sobre | Curiosidades do projeto + canais de ajuda e acolhimento para crianças e adolescentes |
| **T5** | Tela de Acesso | Login / logout / controle de sessão |
| **T6** | Tela de Perfil Administrador | Gerenciamento de contas, perfis, permissões e auditoria (acesso exclusivo SEDEF) |
| **T7** | Tela de Inserção de Dados | Formulários de cadastro, edição e importação por planilha (acesso Conselho/Secretarias e SEDEF) |
| **T8** | Tela de Logs de Mudanças | Histórico de atualizações de cada tarefa: data, conteúdo anterior e novo conteúdo |

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
| RF08 | HU19 | UC08 | T8 — Tela de Logs de Mudanças |
| RF09 | HU16 | UC15 | T6 — Tela de Perfil Administrador |
| RF10 | HU10 | UC16 | Todas as telas  |
| RF11 | — | UC11 | T5 — Tela de Acesso |
| RF12 | HU13 | UC12 | T7 — Tela de Inserção de Dados |
| RF13 | HU17 | UC20 | T6 — Tela de Perfil Administrador |
| RF14 | — | — | Infraestrutura / sem tela dedicada (hash de credenciais + HTTPS) |
| RF16 | HU08 | UC09 | T2 — Tela de Monitoramento |
| RF17 | HU08 | UC09 | T2 — Tela de Monitoramento |
| RF18 | HU08 | UC09 | T2 — Tela de Monitoramento |
| RF19 | HU09 | UC10 | T3 — Tela de Visualização Detalhada do Plano |
| RF20 | HU16 | UC15 | T6 — Tela de Perfil Administrador |
| RF21 | HU15 | UC14 | T7 — Tela de Inserção de Dados |
| RF22 | HU14 | UC13 | T7 — Tela de Inserção de Dados |
| RF23 | HU12 | UC11 | T5 — Tela de Acesso |
| RF24 | HU16, HU18 | UC15 (configuração) / UC11–UC14 (aplicação) | T6 — Tela de Perfil Administrador (configuração) / Todas as telas restritas (aplicação) |
| RF25 | HU13, HU14, HU15 | UC12, UC13, UC14 | T7 — Tela de Inserção de Dados |
| RF26 | HU11 | UC17 | Todas as telas públicas (seletor de idioma global PT/ES) |
| RF27 | HU20 | UC18 | T4 — Tela Sobre |
| RF28 | HU21 | UC19 | T4 — Tela Sobre |
| RNF01 | HU22 | UC16 | Todas as telas (alto contraste, fonte configurável, leitor de tela) |
| RNF02 | — | — | Todas as telas (layout responsivo) |
| RNF03 | — | — | Infraestrutura / Banco de Dados (sem tela) |
| RNF04 | HU06 | UC06 | T2 — Tela de Monitoramento (integridade do arquivo exportado) |
| RNF05 | — | — | Repositório / README (sem tela) |
| RNF06 | — | — | Todas as telas (identidade visual CEDCA-PR) |
| RNF07 | — | UC04, UC05, UC14 | T2 — Tela de Monitoramento / T7 — Tela de Inserção de Dados |
| RNF08 | HU12 | UC11 | T5 — Tela de Acesso (expiração de sessão por inatividade) |


** telas T7 e T8 não foram implementadas.
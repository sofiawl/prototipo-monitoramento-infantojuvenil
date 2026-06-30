# Requisitos por Tela — Protótipo Monitoramento Plano Decenal

> Documento de apoio (fora do repositório). Mapeia, **tela a tela** (T1 a T8 da matriz de rastreabilidade), quais requisitos cada tela cumpre e **onde** isso acontece no código. Quando um requisito previsto para a tela **não** está cumprido, indica-se **onde ele poderia estar**.
>
> Critério: dados mockados contam como **Conforme**. Status retirados de `docs/validacao-requisitos.md`.
>
> **Observação de implementação:** as telas T6, T7 e T8 da matriz foram implementadas como **abas de uma única tela** — o Painel Administrador (`/painel-admin`): aba **Contas** (T6), aba **Dados** (T7) e aba **Histórico** (T8).

## Mapa Tela → Arquivo/Rota

| Sigla | Tela | Rota | Arquivo |
|-------|------|------|---------|
| T1 | Tela Principal | `/` | `src/pages/Home.tsx` |
| T2 | Tela de Monitoramento | `/monitoramento` | `src/pages/Monitoramento.tsx` |
| T3 | Visualização Detalhada do Plano | `/plano-decenal` | `src/pages/PlanoDecenal.tsx` |
| T4 | Tela Sobre | `/sobre` | `src/pages/Sobre.tsx` |
| T5 | Tela de Acesso | `/acessar` | `src/pages/Login.tsx` |
| T6 | Perfil Administrador | `/painel-admin` (aba Contas) | `src/components/admin/AbaContas.tsx` |
| T7 | Inserção de Dados | `/painel-admin` (aba Dados) | `src/components/admin/AbaDados.tsx` |
| T8 | Logs de Mudanças | `/painel-admin` (aba Histórico) | `src/components/admin/AbaHistorico.tsx` |

---

## T1 — Tela Principal (`/` · `Home.tsx`)

**Requisitos cumpridos aqui:**

- **RF01 — Visualização dos Problemas Públicos** ✅ Conforme
  - `SectionCompromissos` exibe os compromissos em carrossel (`compromissos.ts`); cada card tem número, marco e link "Ver Detalhes" → `/plano-decenal?compromisso=N`, mantendo o vínculo problema/compromisso.
- **RF03 (parcial de entrada)** — `SectionMonitoramento` e `SectionProgresso` dão o atalho "Acesse Já" para a Tela de Monitoramento (T2).

**Requisitos transversais que aparecem nesta tela (via `Header`/`Footer`):** RF04, RF10, RF26, RNF01, RNF02, RNF06 — ver seção "Requisitos transversais" no fim.

**Nada previsto para T1 está faltando** além dos transversais.

---

## T2 — Tela de Monitoramento (`/monitoramento` · `Monitoramento.tsx`)

**Requisitos cumpridos aqui:**

- **RF03 — Monitoramento de Progresso** ✅ Conforme — indicadores exibidos com valores numéricos em gráficos (`GraficoIndicador`).
- **RF05 — Filtros Estruturados** ✅ Conforme — painel lateral com filtros encadeados (Marco, Compromisso, Responsável, Período, Indicador) + botões "Aplicar"/"Limpar Filtros".
- **RF07 — Última Atualização** ✅ Conforme — rodapé "Última atualização: dd/mm/aaaa hh:mm" calculado do campo `ultimaAtualizacao`.
- **RF16 — Gráficos de Progresso** ✅ Conforme — `GraficoIndicador` (SVG barra/linha).
- **RF17 — Filtro por Ano** ✅ Conforme — `PERIODO_OPCOES` define `anoMin`/`anoMax` e filtra `historicoAnual`.
- **RF18 — Diferenciação de Tipos de Indicador** ✅ Conforme — badge com cor/rótulo via `TIPO_INDICADOR_CONFIG`.

**Requisitos previstos para T2 e NÃO cumpridos — onde poderiam estar:**

- **RF06 — Exportação de Dados** ⚠️ Parcial — o botão "Exportar Dados" já existe no JSX (`<button>` com ícone `Download`), mas é ilustrativo.
  - **Onde implementar:** no `onClick` desse botão, gerar CSV/Excel a partir de `resultados` (ex.: biblioteca `xlsx`/`papaparse`) e PDF (ex.: `jspdf`).
- **RF06.2 / RNF04 — Integridade da Exportação** ❌ Não Conforme — depende do item acima; validar que o arquivo gerado tem as mesmas linhas/colunas de `resultados`.
- **RNF07 — Dataset Estadual** ⚠️ Parcial — os filtros já operam sobre o dataset; falta documentar o conjunto completo (23 compromissos) em `monitoramento.ts`.

---

## T3 — Visualização Detalhada do Plano (`/plano-decenal` · `PlanoDecenal.tsx`)

**Requisitos cumpridos aqui:**

- **RF02 — Visualização Hierárquica** ✅ Conforme — accordion Compromisso → Objetivo → Linha de Ação, com numeração hierárquica (1.2.3) e deep-link `?compromisso=N`.

**Requisitos previstos para T3 e NÃO cumpridos — onde poderiam estar:**

- **RF19 — Responsável e Colaboradores da Linha de Ação** ❌ Não Conforme — hoje a `LinhaDeAcao` (`planoDecenal.ts`) só tem `id` e `descricao`.
  - **Onde implementar:** adicionar campos `responsavelPrincipal` e `colaboradores[]` à interface `LinhaDeAcao` e renderizá-los no componente `LinhasDeAcao`. O componente pronto **`ResponsaveisSection`** (já existe, não usado) pode ser plugado aqui.
- **RF02 (níveis faltantes)** — a hierarquia da matriz prevê também **Problema Público** (topo) e **Tarefa** (base). Hoje só há 3 dos 5 níveis.
  - **Onde implementar:** um nível agregador "Problema Público" acima do Compromisso, e um nível "Tarefa" dentro da Linha de Ação (abrindo a tarefa para mostrar os dados de monitoramento — ligação com T2).

---

## T4 — Tela Sobre (`/sobre` · `Sobre.tsx`)

**Requisitos cumpridos aqui:**

- **RF27 — Área Dedicada a Crianças e Adolescentes** ✅ Conforme — `SectionHero`/`SectionExplicacao`/`SectionDireitos` em linguagem simples ("uma grande lista de promessas").
- **RF28.1 — Canais de Acolhimento** ✅ Conforme — `SectionBusqueAjuda` lista passos e contatos (Disque 100, Conselho Tutelar, SAMU 192, Polícia 190).

**Requisito previsto e NÃO cumprido — onde:**

- **RF28.2 — Telefones conferem com fontes oficiais** ❌ Não Conforme — os contatos são exemplos (ex.: Conselho Tutelar "(00) 0000-0000").
  - **Onde implementar:** substituir os valores em `contatosAjuda` (array em `Sobre.tsx`) pelos números oficiais validados com o cliente.

---

## T5 — Tela de Acesso (`/acessar` · `Login.tsx`)

**Requisitos cumpridos aqui:**

- **RF11 — Autenticação (Login)** ✅ Conforme — `handleSubmit` chama `login()` do `AuthContext`; credencial válida → `/painel-admin`, inválida → mensagem de erro.

**Requisitos previstos para T5 e NÃO cumpridos — onde poderiam estar:**

- **RF23 — Controle de Sessão por Token** ⚠️ Parcial — hoje a proteção é só estado React em memória (`AuthContext`), sem token.
  - **Onde implementar:** emitir/guardar um token (ex.: `localStorage` ou cookie) no `login()` do `AuthContext` e exigi-lo nas rotas protegidas (um wrapper `RequireAuth`).
- **RNF08 — Expiração por Inatividade (30 min)** ❌ Não Conforme.
  - **Onde implementar:** timer de inatividade no `AuthContext` (listeners de eventos + `setTimeout`), chamando `logout()` ao expirar.

---

## T6 — Perfil Administrador (`/painel-admin` → aba Contas · `AbaContas.tsx`)

**Requisitos cumpridos aqui:**

- **RF09 — Painel de Administração** ✅ Conforme — `PainelAdmin.tsx` redireciona para `/acessar` se não houver usuário; cabeçalho do perfil + abas.
- **RF09.2 / RF20 (perfis) / RF24 — Controle de Acesso por Perfil** — aba Contas gerencia contas e cargos:
  - **RF20** ⚠️ Parcial — só há uma conta mock (admin/secretarias). **Onde melhorar:** adicionar contas mock dos três perfis (SEDEF, Conselho/Secretarias, público) em `data/admin.ts`.
  - **RF24.1** ✅ Conforme (perfil público = somente leitura nas telas abertas).
  - **RF24.2** ⚠️ Parcial — matriz não aplicada para "secretarias". **Onde implementar:** checagem de cargo do `usuario` (AuthContext) condicionando ações de edição.

**Requisito mapeado para T6 mas implementado em T8:**

- **RF13 — Registro de Auditoria** ✅ Conforme — implementado na aba **Histórico** (`AbaHistorico.tsx`), ver T8.

---

## T7 — Inserção de Dados (`/painel-admin` → aba Dados · `AbaDados.tsx`)

**Requisitos cumpridos aqui:**

- **RF22 — Edição de Registros** ✅ Conforme — `EditarDados` edita valores anuais por indicador (cascata Área → Compromisso → Responsável → Indicador → tabela ano/valor); `VerificarDados` aprova/rejeita submissões.

**Requisitos previstos para T7 e NÃO cumpridos — onde poderiam estar:**

- **RF12 — Inserção de Registros (5 entidades)** ❌ Não Conforme — só há edição de valores e um botão "Criar Novo Indicador" sem ação.
  - **Onde implementar:** formulários de cadastro para Problema Público, Compromisso, Objetivo, Linha de Ação e Tarefa (nova sub-aba "Cadastrar"), gravando no dataset e refletindo em T3.
- **RF21 — Importação por Planilha** ❌ Não Conforme — inexistente.
  - **Onde implementar:** `<input type="file">` na aba Dados + parser (`xlsx`) com relatório de erros por linha.
- **RF25 — Validação de Formato** ⚠️ Parcial — hoje só campo obrigatório + `type="number"`.
  - **Onde implementar:** validar data, percentual 0–100 e lista de status nos `onChange`/`salvarLinha`, com mensagem ao usuário; aplicar as mesmas regras à importação (RF25.2).

---

## T8 — Logs de Mudanças (`/painel-admin` → aba Histórico · `AbaHistorico.tsx`)

**Requisitos cumpridos aqui:**

- **RF08 — Histórico de Atualizações** ✅ Conforme — lista registros com usuário, cargo, ação, indicador, valor anterior → novo e data; em ordem cronológica (mock `historicoMock`).
- **RF13 — Registro de Auditoria** ✅ Conforme — mesma lista serve de trilha de auditoria (usuário/ação/data consultáveis).

**Melhoria futura:** gerar as entradas automaticamente a partir das edições reais da aba Dados (hoje os registros são mock estáticos).

---

## Requisitos Transversais (aparecem em "todas as telas" — `Header.tsx`)

| Requisito | Status | Onde está / onde implementar |
|-----------|--------|------------------------------|
| **RF04 — Busca por palavra-chave** | ⚠️ Parcial | Campo "Buscar..." no `Header`. **Falta:** estado + `onChange` + filtragem (e página/dropdown de resultados). |
| **RF10 — Alto contraste** | ⚠️ Parcial | Botão no `Header` alterna a classe `high-contrast`. **Falta:** definir as regras CSS `.high-contrast` em `index.css`. |
| **RF26 — Idioma PT/ES** | ❌ Não Conforme | Só o ícone de bandeira no `Header`. **Falta:** infraestrutura i18n (ex.: `react-i18next`) e textos em espanhol. |
| **RNF01 — Acessibilidade** | ⚠️ Parcial | A+/A- (fonte) ok no `Header`; faltam contraste (RF10) e auditoria de teclado/leitor de tela. |
| **RNF02 — Responsividade** | ⚠️ Parcial | Classes `sm/md/lg` presentes; revisar larguras fixas (ex.: `w-180`) para mobile (~375px). |
| **RNF06 — Identidade Visual CEDCA-PR** | ✅ Conforme | Paleta azul/laranja/rosa + logotipos do Plano Decenal aplicados no layout global. |

---

## Requisitos sem Tela (Infraestrutura / Repositório)

| Requisito | Status | Onde poderia estar |
|-----------|--------|--------------------|
| **RF14 — Hash + HTTPS** | ❌ Não Conforme | Back-end/infra: hashing de senha no servidor de autenticação + deploy HTTPS. Hoje credencial em texto puro no `AuthContext.tsx`. |
| **RNF03 — Armazenamento 10 anos** | ❌ Não Conforme (doc) / ✅ dataset simula | Documentação técnica de retenção + banco de dados. Dataset já cobre 2016–2025. |
| **RNF05 — Documentação no Repositório** | ✅ Conforme | `README.md` (em elaboração) + `docs/matriz-rastreabilidade.md` e demais docs. |

---

## Resumo de Cobertura por Tela

| Tela | Requisitos cumpridos | Pendências principais |
|------|----------------------|------------------------|
| T1 Principal | RF01 | — (só transversais) |
| T2 Monitoramento | RF03, RF05, RF07, RF16, RF17, RF18 | RF06 export, RNF04 |
| T3 Plano Detalhado | RF02 | RF19 responsáveis, níveis Problema/Tarefa |
| T4 Sobre | RF27, RF28.1 | RF28.2 contatos oficiais |
| T5 Acesso | RF11 | RF23 token, RNF08 expiração |
| T6 Admin/Contas | RF09, RF24.1 | RF20 perfis, RF24.2 matriz secretarias |
| T7 Inserção/Dados | RF22 | RF12 cadastro entidades, RF21 importação, RF25 validação |
| T8 Logs/Histórico | RF08, RF13 | geração automática de logs |
| Transversais | RNF06 | RF04 busca, RF10 contraste, RF26 idioma |

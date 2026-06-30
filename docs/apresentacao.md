# Requisitos por Tela — Protótipo Monitoramento Plano Decenal

Documento de apresentação. Mapeia, tela a tela (T1 a T6 da matriz de rastreabilidade), quais requisitos cada tela cumpre e onde isso acontece no código. Quando um requisito previsto para a tela não está cumprido, indica-se onde ele poderia estar.

Critério: dados mockados contam como Conforme. Status retirados de `docs/validacao-requisitos.md`.

Observação de implementação: o Painel Administrativo (T6, `/painel-admin`) é uma única tela com três abas — **Contas**, **Dados** e **Histórico** —, apresentadas abaixo como subseções de T6.

## Mapa Tela para Arquivo/Rota

| Sigla | Tela | Rota | Arquivo |
|-------|------|------|---------|
| T1 | Tela Principal | `/` | `src/pages/Home.tsx` |
| T2 | Tela de Monitoramento | `/monitoramento` | `src/pages/Monitoramento.tsx` |
| T3 | Visualização Detalhada do Plano | `/plano-decenal` | `src/pages/PlanoDecenal.tsx` |
| T4 | Tela Sobre | `/sobre` | `src/pages/Sobre.tsx` |
| T5 | Tela de Acesso | `/acessar` | `src/pages/Login.tsx` |
| T6 | Painel Administrativo (abas Contas / Dados / Histórico) | `/painel-admin` | `src/components/admin/AbaContas.tsx`, `AbaDados.tsx`, `AbaHistorico.tsx` |

---

## T1 — Tela Principal (`/` · `Home.tsx`)

### RF01 — Visualização dos 23 Problemas Públicos — Status: Conforme
Requisito: "O sistema deve permitir que o usuário visualize os 23 problemas públicos, cada um vinculado a um Compromisso Decenal da criança e adolescente."

Onde está: `SectionCompromissos` exibe os compromissos em carrossel (`compromissos.ts`); cada card tem número, marco e o link "Ver Detalhes" para `/plano-decenal?compromisso=N`, mantendo o vínculo problema/compromisso.

Requisitos transversais que aparecem nesta tela (via `Header`/`Footer`): RF04, RF10, RF26, RNF01, RNF02, RNF06 — ver a seção "Requisitos Transversais" no fim do documento.

Nada previsto para T1 está faltando além dos transversais.

---

## T2 — Tela de Monitoramento (`/monitoramento` · `Monitoramento.tsx`)

### RF03 — Monitoramento de Progresso — Status: Conforme
Requisito: "O sistema deve permitir o monitoramento contínuo do progresso, exibindo o status das tarefas (não iniciada, em andamento, concluída) e o valor atual dos indicadores."

Onde está: indicadores exibidos com valores numéricos em gráficos (`GraficoIndicador`). O status de tarefa existe no modelo de dados (`monitoramento.ts`) e há o componente `StatusBadge`.

### RF05 — Filtros Estruturados — Status: Conforme
Requisito: "O sistema deve permitir que o usuário aplique filtros (ex. compromisso, indicador, período de tempo, responsável) para a exibição das informações do sistema."

Onde está: painel lateral com filtros encadeados (Marco, Compromisso, Responsável, Período, Indicador) e os botões "Aplicar Filtros" e "Limpar Filtros".

### RF07 — Data e Hora da Última Atualização — Status: Conforme
Requisito: "O sistema deve exibir, junto a cada item monitorado, a data e a hora de sua última atualização."

Onde está: rodapé "Última atualização: dd/mm/aaaa hh:mm", calculado a partir do campo `ultimaAtualizacao` dos indicadores.

### RF16 — Gráficos de Progresso de Indicadores — Status: Conforme
Requisito: "O sistema deve exibir gráficos de progresso para cada indicador."

Onde está: componente `GraficoIndicador` (gráficos SVG de barra/linha com eixos escalados aos valores do histórico anual).

### RF17 — Filtro de Gráficos por Ano — Status: Conforme
Requisito: "O sistema deve permitir que o usuário filtre gráficos de indicadores por ano."

Onde está: filtro "Período de Tempo" define `anoMin`/`anoMax` e filtra o `historicoAnual` pelo intervalo (ex.: 2016 a 2020, 2021 a 2025, últimos 3 anos).

### RF18 — Diferenciação Visual de Tipos de Indicador — Status: Conforme
Requisito: "O sistema deve diferenciar visualmente indicadores por seu respectivo tipo."

Onde está: cada indicador exibe um badge com cor e rótulo por tipo, via `TIPO_INDICADOR_CONFIG` (ex.: percentual, absoluto, progressivo).

### RF06 — Exportação de Dados — Status: Parcial
Requisito: "O sistema deve disponibilizar funcionalidade de exportação (Excel, CSV, PDF) dos dados de monitoramento de um conjunto filtrado."

Situação: o botão "Exportar Dados" já existe no JSX (com ícone `Download`), mas é ilustrativo.
Onde poderia estar: no `onClick` desse botão, gerar CSV/Excel a partir de `resultados` (ex.: bibliotecas `xlsx`/`papaparse`) e PDF (ex.: `jspdf`).

### RNF04 — Integridade da Exportação — Status: Não Conforme
Requisito: "O sistema deve garantir a integridade dos dados exportados (Excel/PDF/CSV), sem perda de informações ou formatações incorretas."

Onde poderia estar: depende do RF06; após gerar o arquivo, validar que ele tem as mesmas linhas e colunas de `resultados`.

### RNF07 — Dataset de Referência em Escala Estadual — Status: Parcial
Requisito: "O sistema deve demonstrar suporte a um dataset de referência que represente o Plano Decenal em escala estadual (mínimo: dados dos 23 compromissos, hierarquia completa de exemplo e histórico simulado de 10 anos), com importação por planilha e consultas (busca/filtro) funcionais sem falha de integridade."

Situação: os filtros já operam sobre o dataset; falta documentar o conjunto completo (23 compromissos) em `monitoramento.ts`, além de busca (RF04) e importação (RF21).

---

## T3 — Visualização Detalhada do Plano (`/plano-decenal` · `PlanoDecenal.tsx`)

### RF02 — Visualização Hierárquica do Plano Decenal — Status: Conforme
Requisito: "O sistema deve permitir que o usuário visualize a estrutura completa do Plano Decenal de forma hierárquica, exibindo os níveis compromisso para Objetivo para Linha de Ação, preservando o vínculo de cada item ao seu nível superior."

Onde está: accordion Compromisso para Objetivo para Linha de Ação, com numeração hierárquica (1.2.3) e deep-link `?compromisso=N`.

### RF19 — Responsável e Colaboradores da Linha de Ação — Status: Não Conforme
Requisito: "O sistema deve exibir o Responsável Principal e os Colaboradores para cada Ação."

Situação: hoje a `LinhaDeAcao` (`planoDecenal.ts`) só tem `id` e `descricao`.
Onde poderia estar: adicionar os campos `responsavelPrincipal` e `colaboradores[]` à interface `LinhaDeAcao` e renderizá-los no componente `LinhasDeAcao`. O componente pronto `ResponsaveisSection` (já existe, não usado) pode ser plugado aqui.

---

## T4 — Tela Sobre (`/sobre` · `Sobre.tsx`)

### RF27 — Área Dedicada a Crianças e Adolescentes — Status: Conforme
Requisito: "O sistema deve disponibilizar uma área dedicada a adolescentes (10 a 17 anos) com explicação dos Compromissos Decenais em linguagem simples e direta, sem jargão técnico ou jurídico, utilizando frases curtas e exemplos concretos do cotidiano."

Onde está: seções `SectionHero`, `SectionExplicacao` e `SectionDireitos`, em linguagem simples (ex.: "uma grande lista de promessas").

### RF28 — Canais de Acolhimento e Socorro — Status: Parcial
Requisito: "O sistema deve disponibilizar, na área dedicada a adolescentes, uma seção 'Procure ajuda' com canais oficiais de acolhimento e socorro (nome do canal, descrição breve e forma de contato)."

Onde está: a seção `SectionBusqueAjuda` lista passos e contatos (Disque 100, Conselho Tutelar, SAMU 192, Polícia 190) com nome e número.
Pendência (CA28.2): os contatos são exemplos (ex.: Conselho Tutelar "(00) 0000-0000"). Onde corrigir: substituir os valores em `contatosAjuda` (array em `Sobre.tsx`) pelos números oficiais validados com o cliente.

---

## T5 — Tela de Acesso (`/acessar` · `Login.tsx`)

### RF11 — Autenticação de Usuário (Login) — Status: Conforme
Requisito: "O sistema deve permitir que usuários cadastrados se autentiquem por meio de credenciais (identificador e senha), concedendo acesso apenas quando as credenciais forem válidas e exibindo mensagem de erro quando forem inválidas."

Onde está: `handleSubmit` chama `login()` do `AuthContext`; credencial válida leva a `/painel-admin`, inválida exibe a mensagem de erro.

### RF23 — Controle de Sessão por Token — Status: Parcial
Requisito: "O sistema deve controlar o acesso a rotas e recursos protegidos por meio de tokens de sessão autenticados, garantindo que apenas sessões válidas e vigentes tenham acesso, e que o acesso seja revogado ao encerrar a sessão ou após expiração por inatividade."

Situação: hoje a proteção é apenas estado React em memória (`AuthContext`), sem token.
Onde poderia estar: emitir e guardar um token (ex.: `localStorage` ou cookie) no `login()` do `AuthContext` e exigi-lo nas rotas protegidas (um wrapper `RequireAuth`).

### RNF08 — Expiração de Sessão por Inatividade — Status: Não Conforme
Requisito: "O sistema deve encerrar a sessão do usuário automaticamente após 30 minutos de inatividade."

Onde poderia estar: um timer de inatividade no `AuthContext` (listeners de eventos mais `setTimeout`), chamando `logout()` ao expirar.

---

## T6 — Painel Administrativo · aba Contas (`/painel-admin` · `AbaContas.tsx`)

### RF09 — Painel de Administração — Status: Conforme
Requisito: "O sistema deve disponibilizar um painel de administração que permita a usuários autorizados gerenciar contas de usuário e atribuir ou alterar seus perfis de acesso (SEDEF, Conselho/Secretarias, público geral)."

Onde está: `PainelAdmin.tsx` redireciona para `/acessar` se não houver usuário; cabeçalho do perfil e abas. A aba Contas gerencia contas e cargos (criar, editar, ver detalhes).

### RF20 — Três Perfis de Usuário — Status: Parcial
Requisito: "O sistema deve permitir a existência de três diferentes usuários: SEDEF, Conselho Estadual/Secretarias, público geral."

Situação: só há uma conta mock (admin/secretarias).
Onde poderia estar: adicionar contas mock dos três perfis (SEDEF, Conselho/Secretarias, público) em `data/admin.ts`.

### RF24 — Controle de Acesso por Perfil — Status: Parcial
Requisito: "O sistema deve controlar o acesso a recursos conforme a matriz de perfis e permissões, garantindo que o perfil SEDEF (Administrador) possua controle total, incluindo gerenciamento de contas; o perfil Conselho Estadual/Secretarias possua permissão para visualizar conteúdos restritos, além de inserir, alterar e importar dados; e o perfil público geral possua acesso restrito a conteúdos públicos, buscas, filtros e exportações, sendo estritamente bloqueado para qualquer ação de adição, alteração ou administração."

Situação: o perfil público (somente leitura) já é atendido pelas telas abertas; a matriz ainda não foi aplicada especificamente para o perfil Conselho/Secretarias.
Onde poderia estar: checagem do cargo do `usuario` (AuthContext) condicionando as ações de edição em cada tela restrita.

### RF13 — Registro de Auditoria — Status: Conforme (implementado na aba Histórico)
Requisito: "O sistema deve manter um registro de auditoria das ações que alteram o estado do sistema, armazenando, para cada ação, o usuário responsável, o tipo de ação realizada, a data e a hora."

Onde está: a aba Histórico (`AbaHistorico.tsx`) serve de trilha de auditoria — ver a subseção · aba Histórico abaixo.

---

## T6 — Painel Administrativo · aba Dados (`/painel-admin` · `AbaDados.tsx`)

### RF22 — Edição de Registros — Status: Conforme
Requisito: "O sistema deve permitir, via interface gráfica, a alteração de registros já existentes de problemas públicos, compromissos, objetivos, linhas de ação e tarefas."

Onde está: `EditarDados` edita valores anuais por indicador (cascata Área para Compromisso para Responsável para Indicador para tabela ano/valor); `VerificarDados` aprova ou rejeita submissões.

### RF12 — Inserção de Registros — Status: Não Conforme
Requisito: "O sistema deve permitir, via interface gráfica, a inserção de novos registros de problemas públicos, compromissos, objetivos, linhas de ação e tarefas."

Situação: só há edição de valores e um botão "Criar Novo Indicador" sem ação.
Onde poderia estar: formulários de cadastro para Problema Público, Compromisso, Objetivo, Linha de Ação e Tarefa (nova sub-aba "Cadastrar"), gravando no dataset e refletindo em T3.

### RF21 — Importação por Planilha — Status: Não Conforme
Requisito: "O sistema deve permitir o carregamento de dados por meio de planilhas."

Situação: inexistente.
Onde poderia estar: um `<input type="file">` na aba Dados, com parser (`xlsx`) e relatório de erros por linha.

### RF25 — Validação de Formato dos Dados — Status: Parcial
Requisito: "O sistema deve validar formato e campos obrigatórios dos dados inseridos pela interface e por planilha (RF21), recusando registros inválidos e informando o erro ao usuário."

Situação: hoje só há campo obrigatório e `type="number"`.
Onde poderia estar: validar data, percentual de 0 a 100 e lista de status nos `onChange`/`salvarLinha`, com mensagem ao usuário; aplicar as mesmas regras à importação (RF25.2).

---

## T6 — Painel Administrativo · aba Histórico (`/painel-admin` · `AbaHistorico.tsx`)

### RF08 — Histórico de Atualizações de Tarefa — Status: Conforme
Requisito: "O sistema deve manter e exibir o histórico de atualizações de cada tarefa, registrando, para cada alteração, a data, o conteúdo anterior e o novo conteúdo, permitindo acompanhar a evolução ao longo do tempo."

Onde está: lista registros com usuário, cargo, ação, indicador, valor anterior para novo e data, em ordem cronológica (mock `historicoMock`).

### RF13 — Registro de Auditoria — Status: Conforme
Requisito: "O sistema deve manter um registro de auditoria das ações que alteram o estado do sistema, armazenando, para cada ação, o usuário responsável, o tipo de ação realizada, a data e a hora."

Onde está: a mesma lista serve de trilha de auditoria (usuário, ação e data consultáveis).

Melhoria futura: gerar as entradas automaticamente a partir das edições reais da aba Dados (hoje os registros são mock estáticos).

---

## Requisitos Transversais (aparecem em todas as telas — `Header.tsx`)

### RF04 — Busca por Palavra-Chave — Status: Parcial
Requisito: "O sistema deve permitir que o usuário faça buscas no sistema por texto livre (palavra-chave) sobre os registros do Plano Decenal, retornando os itens cujo conteúdo contenha o termo buscado."

Situação: o campo "Buscar..." existe no `Header`, mas sem lógica.
Onde poderia estar: estado mais `onChange` mais filtragem no `Header`, com página ou dropdown de resultados.

### RF10 — Modo de Alto Contraste — Status: Parcial
Requisito: "O sistema deve fornecer um modo de alto contraste para os usuários."

Situação: o botão no `Header` alterna a classe `high-contrast` no `<html>`.
Onde poderia estar: definir as regras CSS `.high-contrast` em `index.css` para produzir a mudança visual.

### RF26 — Interface em Português e Espanhol — Status: Não Conforme
Requisito: "O sistema deve disponibilizar a área pública (conteúdos visíveis sem autenticação) em português e em espanhol, permitindo ao usuário alternar entre os dois idiomas."

Situação: só há o ícone de bandeira no `Header`.
Onde poderia estar: infraestrutura de i18n (ex.: `react-i18next`) e os textos em espanhol.

### RNF01 — Acessibilidade (Design Universal) — Status: Parcial
Requisito: "A interface deve ser acessível conforme os princípios do Design Universal, incluindo contraste adequado, configuração de tamanho da fonte e suporte a leitores de tela."

Situação: controles A+/A- (tamanho da fonte) funcionam no `Header`; faltam o contraste (RF10) e a auditoria de teclado e leitor de tela.

### RNF02 — Responsividade — Status: Parcial
Requisito: "O sistema deve ser responsivo (adequado para desktop, tablet e dispositivos móveis)."

Situação: classes responsivas (`sm/md/lg`) presentes; revisar larguras fixas (ex.: `w-180`) para mobile (~375px).

### RNF06 — Identidade Visual CEDCA-PR — Status: Conforme
Requisito: "A interface do sistema deve manter consistência visual e de navegação com o site institucional do Conselho Estadual da Criança e do Adolescente do Paraná, reproduzindo no mínimo: paleta de cores e tipografia institucionais e nomenclatura e ícones compatíveis com o vocabulário já usado pelo Conselho."

Onde está: paleta azul/laranja/rosa e logotipos do Plano Decenal aplicados no layout global.

---

## Requisitos sem Tela (Infraestrutura / Repositório)

### RF14 — Segurança dos Dados (Hash + HTTPS) — Status: Não Conforme
Requisito: "O sistema deve proteger os dados inseridos contra acesso não autorizado, armazenando credenciais de forma criptografada (hash) e trafegando os dados por conexão segura (HTTPS), de modo que dados sensíveis não sejam expostos em texto puro."

Onde poderia estar: back-end e infraestrutura — hashing de senha no servidor de autenticação mais deploy em HTTPS. Hoje a credencial está em texto puro no `AuthContext.tsx`.

### RNF03 — Capacidade de Armazenamento (10 anos) — Status: Não Conforme (documentação) / dataset simula
Requisito: "O sistema deve ter capacidade de armazenamento para guardar dados de pelo menos 10 anos."

Onde poderia estar: documentação técnica de retenção mais banco de dados. O dataset já cobre 2016 a 2025.

### RNF05 — Documentação no Repositório — Status: Conforme
Requisito: "O sistema deve possuir documentação no repositório, em português, incluindo stack e versões das ferramentas, justificativas das decisões técnicas principais, instruções de execução do protótipo e matriz de rastreabilidade."

Onde está: `README.md` (em elaboração) mais `docs/matriz-rastreabilidade.md` e os demais documentos da pasta `docs`.

---

## Resumo de Cobertura por Tela

| Tela | Requisitos cumpridos | Pendências principais |
|------|----------------------|------------------------|
| T1 Principal | RF01 | apenas transversais |
| T2 Monitoramento | RF03, RF05, RF07, RF16, RF17, RF18 | RF06 exportação, RNF04 |
| T3 Plano Detalhado | RF02 | RF19 responsáveis, níveis Problema/Tarefa |
| T4 Sobre | RF27, RF28 (parcial) | RF28 contatos oficiais |
| T5 Acesso | RF11 | RF23 token, RNF08 expiração |
| T6 Painel · aba Contas | RF09, RF13 | RF20 perfis, RF24 matriz Conselho/Secretarias |
| T6 Painel · aba Dados | RF22 | RF12 cadastro de entidades, RF21 importação, RF25 validação |
| T6 Painel · aba Histórico | RF08, RF13 | geração automática de logs |
| Transversais | RNF06 | RF04 busca, RF10 contraste, RF26 idioma |

# Histórico de Versões

Registro acumulado da **evolução dos requisitos** do sistema de monitoramento do Plano Decenal dos Direitos da Criança e do Adolescente. Diferente da [entrega final](../entregas/entrega-final.md) — que é o retrato fechado do estado final — este documento cresce a cada versão e conta *o que mudou e por quê*. Diferente também das provas de entrega [`semana-1`](../entregas/semana-1.md), [`semana-2`](../entregas/semana-2.md) e [`semana-3`](../entregas/semana-3.md), que registram *o que foi entregue* em cada ponto do cronograma; aqui o foco é a **adição, remoção e modificação de requisitos** e o **impacto** de cada mudança nos demais artefatos.

## Formato de Escrita

Cada bloco de versão/semana acumula em ordem cronológica e contém:

```
## Semana N — breve descrição da etapa
### Artefatos produzidos/atualizados
- arquivo: frase curta do que mudou
### Requisitos adicionados
- identificador: resumo
### Requisitos removidos
- identificador: motivo da remoção
### Requisitos modificados
- identificador: antes → depois (resumido; detalhe no log de docs/requisitos.md)
### Justificativas das alterações
### Impactos das mudanças
```

Os blocos não repetem responsáveis nem horários. O detalhamento completo de redação de cada requisito vive no log de mudanças de [`docs/requisitos.md`](requisitos.md); aqui mantém-se a versão resumida com o porquê e o impacto.

---

# Histórico

## Semana 1 — Estrutura base e linha de base dos requisitos

> Detalhe da entrega: [`entregas/semana-1.md`](../entregas/semana-1.md)

### Artefatos produzidos/atualizados
- `docs/requisitos.md`: inserção dos RF01–RF23 e RNF01–RNF08 iniciais, com base no levantamento do cliente ("Requisitos Plano Decenal – Resultado Final"); posterior renumeração, adição de RF24–RF27 e refino de RNF05–RNF07. Passou a incluir log próprio de mudanças.
- `docs/criterios-aceite.md`: primeira versão completa dos critérios de aceite (RF01–RF27 e RNFs), em formato de checklist.
- `docs/historias-usuario.md`: primeira versão com 8 histórias cobrindo cidadão, secretaria, criança/adolescente e usuário PCD.
- `docs/conversa-cliente.md`, `docs/visao-geral.md`, `docs/organizacao-afazeres.md`, `docs/matriz-rastreabilidade.md`: criação/início de conteúdo.
- `prototipo/mockups/`: 4 mockups de tela (inicial, visualização do plano, monitoramento com e sem filtros).
- Estrutura de diretórios e arquivos-base do repositório.

### Requisitos adicionados
- **RF01–RF23** (linha de base): visualização do plano, monitoramento, busca, filtros, exportação, histórico, painel admin, acessibilidade, login, inserção e alteração de dados, JWT, controle de acesso, validação, idioma e área infantojuvenil.
- **RNF01–RNF08** (linha de base): acessibilidade, responsividade, armazenamento, integridade de exportação, documentação, consistência visual, dataset de referência e encerramento de sessão por inatividade.
- **RF24**: controle de acesso por perfil (quem pode visualizar ou alterar).
- **RF25**: validação de formato dos dados inseridos (interface e planilha).
- **RF26**: interface em português e espanhol.
- **RF27**: área dedicada a crianças e adolescentes (informação e ajuda/socorro).

### Requisitos removidos
- **RF15 (antigo)**: duplicado com RF09 (painel de administrador); requisitos subsequentes renumerados.

### Requisitos modificados
- **RNF05**: "deve ser bem documentado" → conteúdo mínimo da documentação (stack, versões, justificativas, execução, matriz de rastreabilidade).
- **RNF06**: "minimamente semelhantes" → critérios verificáveis de consistência visual (paleta, tipografia, nomenclatura) com referência ao CEDCA-PR.
- **RNF07**: "número arbitrário (grande)" → dataset mínimo (23 compromissos, 10 anos de histórico simulado, importação por planilha).
- **RF01**: correção tipográfica ("adolescentel" → "adolescente").

### Justificativas das alterações
Requisitos iniciais levantados a partir do documento do cliente. Os três RNFs eram vagos e não verificáveis, e foram tornados objetivos. A remoção de RF15 eliminou duplicidade. Os RF24–RF27 cobrem lacunas identificadas (controle por perfil, validação, espanhol e área infantojuvenil). Critérios de aceite e histórias de usuário foram elaborados em paralelo para guiar as etapas seguintes.

### Impactos das mudanças
- Estabelece a **linha de base** de requisitos: todos os demais artefatos (histórias, critérios, casos de uso, regras) derivam deste conjunto.
- A renumeração a partir de RF15 impacta toda referência futura a esses requisitos.
- RF24–RF27 impactam histórias de usuário, critérios de aceite e casos de uso futuros.
- Mockups das 4 telas servem de referência visual para o protótipo.

## Semana 2 — Verificabilidade dos RFs, regras de negócio e casos de uso

> Detalhe da entrega: [`entregas/semana-2.md`](../entregas/semana-2.md)

### Artefatos produzidos/atualizados
- `docs/requisitos.md`: reformulação de RF02, RF03, RF07, RF08, RF09, RF11, RF12, RF13, RF14 e RF21 para maior especificidade e verificabilidade.
- `docs/regras-negocio.md`: primeira versão das regras de negócio (RN01–RN13), derivadas dos RFs e critérios de aceite — domínio, status de tarefa, perfis/permissões e proteção de dados.
- `docs/casos-uso.md`: criação dos casos de uso UC01–UC19, organizados por ator (Público Geral, Conselho/Secretarias, SEDEF).
- `docs/conversa-cliente.md`: roteiro estruturado de conversa com o cliente, em blocos temáticos.
- `prototipo/sedef-test/`: projeto React + TypeScript + TailwindCSS + ShadcnUI; componentes iniciais (`Header`, `MonitoramentoBars`, `Home`) e dados dos 23 compromissos.

### Requisitos adicionados
Nenhum.

### Requisitos removidos
Nenhum.

### Requisitos modificados
- **RF02**: passou a cobrir todos os níveis (Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa) e a regra de vínculo; antes listava só Objetivo → Linha de Ação → Tarefa.
- **RF03**: separou monitoramento de tarefas (status discreto) do de indicadores (valor numérico).
- **RF07**: passou a exigir data e hora da última atualização por item; antes genérico ("dados").
- **RF08**: especificou o conteúdo de cada entrada do histórico (data, conteúdo anterior e novo).
- **RF09**: delimitado a gerência de contas e perfis; antes incluía "outras funcionalidades".
- **RF11**: definiu credenciais (identificador e senha) e comportamento em sucesso/falha.
- **RF12**: fechou a lista de entidades (problemas, compromissos, objetivos, linhas de ação, tarefas); antes usava "etc".
- **RF13**: especificou o conteúdo do registro de auditoria (usuário, ação, data e hora).
- **RF14**: definiu mecanismos concretos (hash de credenciais, HTTPS); antes "medidas de segurança".
- **RF21**: especificou os registros editáveis e delimitou o escopo à edição, distinto de RF12 (criação).

### Justificativas das alterações
Os requisitos revisados tinham linguagem vaga, aberta ou sobreposta, dificultando a verificação. As regras de negócio traduziram os RFs em restrições de domínio, e os casos de uso os traduziram em fluxos por ator, estabelecendo rastreabilidade RF → UC e base para testes de aceitação.

### Impactos das mudanças
- RF02 ampliado exige mais cobertura nos casos de uso de visualização.
- RF07, RF08 e RF13 distintos eliminam ambiguidade nos critérios de aceite.
- RF12 e RF21 delimitados facilitam rastreabilidade com as histórias de usuário.
- RN01–RN13 e UC01–UC19 estabelecem base para critérios de aceite e testes; a confirmação dos três perfis restringe o escopo de controle de acesso.
- O fluxo de aprovação de tarefas (RN04) origina um caso de uso específico do administrador.

## Semana 3 — Renumeração, comportamento vs. tecnologia e desmembramento da área infantojuvenil

> Detalhe da entrega: [`entregas/semana-3.md`](../entregas/semana-3.md)

### Artefatos produzidos/atualizados
- `docs/requisitos.md`: mudanças de conteúdo em RF04, RF20, RF22, RF23, RF24; adição de RF28; renumeração a partir de RF15; notas de consistência (RF07/RF08/RF13 e RF09/RF24).
- `docs/casos-uso.md`: renumeração de UC01–UC19 e adição de UC20 (cobre RF28).
- `docs/criterios-aceite.md`: renumeração e refino dos critérios; CA15 marcada como removida por duplicação; ajustes em CA02, CA03, CA04, CA08, CA11, CA14.
- `docs/historias-usuario.md`: reestruturação completa — de 8 para ~20 histórias por perfil, cada uma vinculada ao RF/RNF de origem.
- `docs/regras-negocio.md`: reorganização por requisito de origem (rastreabilidade bidirecional RF ↔ RN).
- `docs/conversa-cliente.md`: mapeamento de cada pergunta do roteiro para o RF/RNF correspondente.
- `prototipo/sedef-test/`: telas de visualização do plano (accordion hierárquico) e de monitoramento (status, indicadores, responsáveis, histórico, gráficos, exportação); dataset de 10 anos em `monitoramento.ts`.

### Requisitos adicionados
- **RF28**: seção "Procure ajuda" na área de adolescentes, com canais oficiais de acolhimento (nome, descrição e contato) — desmembrado do antigo RF27 para verificação independente.

### Requisitos removidos
- **RF22 (antigo, "utilizar Tokens JWT")**: prescrevia tecnologia em vez de comportamento; substituído pelo RF23 reformulado.
- **Renumeração a partir de RF15**: RF15 antigo → RF16 e demais redistribuídos.

### Requisitos modificados
- **RF04**: restrito à busca por texto livre (palavra-chave); critérios de responsável/compromisso/período migraram para RF05 (filtros), eliminando sobreposição.
- **RF19 → RF20**: "no mínimo três camadas" → três perfis fechados e definidos (SEDEF, Conselho/Secretarias, Público Geral).
- **RF22 (antigo) → RF23**: "utilizar Tokens JWT" → "controlar acesso a rotas e recursos por tokens de sessão autenticados" (comportamento, não tecnologia).
- **RF23 (antigo) → RF24**: descrição geral → matriz completa de permissões por perfil.
- **RF26 (antigo) → RF27**: especificou público-alvo (adolescentes 10–17 anos) e linguagem (simples, sem jargão, frases curtas, exemplos do cotidiano).
- **RF21 → RF22, RF24 → RF25, RF25 → RF26**: renumeração sem alteração de conteúdo.

### Justificativas das alterações
RF04 sobrepunha-se a RF05; RF19 abria margem para perfis não planejados; o antigo RF22 (JWT) descrevia o *como* em vez do *quê*; o antigo RF23 era genérico demais para servir de critério de teste, virando matriz verificável; o antigo RF27 misturava conteúdo educativo e canal de socorro, separados em RF27 e RF28. As reorganizações de histórias, critérios e regras foram necessárias para manter os artefatos coerentes após as mudanças de numeração.

### Impactos das mudanças
- A renumeração a partir de RF15 propagou para todos os casos de uso (UC01–UC20 renumerados) e referências em critérios e regras.
- UC20 adicionado para cobrir RF28; critérios de aceite passam a cobrir RF28 e a nova matriz de permissões (RF24).
- Histórias de usuário (de 8 para ~20) e regras de negócio reorganizadas tornam a verificação na entrega final mais direta e a rastreabilidade bidirecional.
- O protótipo passou a cobrir RF01–RF03, RF06–RF08, RF16–RF19 e RNF01/RNF02/RNF06/RNF07 com dados mockados.

## Consolidação final — sem novas mudanças de escopo

> Retrato fechado: [`entregas/entrega-final.md`](../entregas/entrega-final.md)

### Requisitos adicionados / removidos / modificados
Nenhum. Desde a Semana 3 **não houve adição, remoção ou modificação de escopo, identificador ou semântica** de nenhum RF/RNF. As edições posteriores em `docs/requisitos.md` foram **editoriais** (detalhamento de redação de RF20, RF24, RF26–RF28, correção de referências cruzadas e remoção de linhas redundantes).

### Justificativa
A validação do protótipo ([`docs/validacao-requisitos.md`](validacao-requisitos.md)) registrou status de conformidade e lacunas de implementação, mas **não motivou reescrita de requisitos** — os achados são pendências de implementação, não de especificação.

### Impactos das mudanças
- Conjunto de requisitos **fechado em RF01–RF28 (exceto RF15) e RNF01–RNF08**.
- Numeração alinhada entre `requisitos.md`, `historias-usuario.md` (HU01–HU22), `criterios-aceite.md` (CA01–CA28 sem o 15), `casos-uso.md` (UC01–UC20) e `regras-negocio.md` (RN01–RN26).
- Pendência registrada para validação com o cliente: contatos oficiais da seção "Procure ajuda" (RF28.2).

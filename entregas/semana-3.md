## [23/06/26] 14:07: Atualização do protótipo (página principal completa e visualização do plano), conversa-cliente e limpeza do repositório

**Responsáveis:** Nadia (protótipo + limpeza), Luíza (conversa-cliente)

### artefatos produzidos/atualizados:
- `prototipo/sedef-test/` *(Nadia)*: grande atualização do protótipo com novos componentes e páginas:
  - Componentes ShadcnUI adicionados: `accordion.tsx` e `collapsible.tsx` para exibir a hierarquia do Plano Decenal de forma expansível e interativa.
  - `pages/Home.tsx`: página principal completa com apresentação do sistema, resumo dos 23 compromissos e navegação para as demais seções.
  - Página de visualização do plano: hierarquia Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa exibida com accordion interativo.
  - Ajustes de estilo e identidade visual: paleta de cores e tipografia do CEDCA-PR aplicadas via TailwindCSS.
  - Novas dependências: `country-flag-icons` (alternância de idioma), `embla-carousel-react`, `lucide-react`, `radix-ui` e `react-icons`.
- `prototipo/docs/tela-*.md` e `prototipo/docs/validacao-prototipo.md` *(Nadia)*: 11 arquivos vazios removidos (limpeza do repositório).
- `prototipo/mockups/`: imagens reorganizadas para nova localização (mockups de tela inicial, visualização do plano e monitoramento com/sem filtros mantidos).
- `docs/conversa-cliente.md` *(Luíza)*: atualização com novas informações coletadas do cliente sobre o fluxo de aprovação de tarefas e sobre a área infantojuvenil.

### justificativas das alterações:
O protótipo foi evoluído para cobrir as duas telas de maior prioridade: a página principal e a visualização hierárquica do Plano. O accordion interativo implementa RF02 de forma fiel à hierarquia definida no requisito. Arquivos vazios criados no início do projeto como planejamento de telas foram removidos, pois o protótipo já evoluiu além deles.

### impactos das mudanças:
- Protótipo passa a cobrir: RF01 (23 problemas públicos na página principal), RF02 (hierarquia completa expansível), RNF01 (acessibilidade via ShadcnUI), RNF02 (responsividade) e RNF06 (consistência visual com CEDCA-PR).
- Conversa com cliente atualizada subsidia as revisões de requisitos planejadas para o final da semana.

---

## [25/06/26] 14:49: Tela de monitoramento completa e botão de exportar dados

**Responsável:** Sofia Lima

### artefatos produzidos/atualizados:
- `prototipo/sedef-test/src/data/monitoramento.ts` *(Sofia)*: dados de exemplo de monitoramento — simulação de histórico de indicadores e status de tarefas por compromisso, cobrindo 10 anos de dados para satisfazer RNF07.
- `prototipo/sedef-test/src/pages/Monitoramento.tsx` *(Sofia)*: tela de monitoramento completa com exibição de status de tarefas, valores de indicadores, responsáveis e última atualização.
- Novos componentes criados *(Sofia)*:
  - `GraficoIndicador.tsx`: gráfico de progresso para cada indicador *(RF16)*.
  - `HistoricoTarefa.tsx`: exibição do histórico de atualizações de uma tarefa com data e conteúdo anterior/novo *(RF08)*.
  - `IndicadorChart.tsx`: gráfico de indicadores filtrável por ano *(RF17)*.
  - `ResponsaveisSection.tsx`: exibição do Responsável Principal e Colaboradores de cada ação *(RF19)*.
  - `StatusBadge.tsx`: badge visual para status de tarefa (não iniciada / em andamento / concluída) com diferenciação visual por tipo *(RF18)*.
  - `UltimaAtualizacao.tsx`: carimbo de data e hora da última atualização por item *(RF07)*.
- `prototipo/sedef-test/src/App.tsx` *(Sofia)*: roteamento atualizado para incluir a tela de monitoramento.
- `prototipo/sedef-test/src/components/Header.tsx` *(Sofia)*: navegação atualizada com link para a tela de monitoramento.
- `prototipo/sedef-test/src/pages/Home.tsx` *(Sofia)*: ajustes de layout para integrar o acesso à tela de monitoramento.
- `prototipo/sedef-test/src/pages/Monitoramento.tsx` *(Sofia, commit adicional)*: adição do botão de exportar dados com seleção de formato (Excel, CSV, PDF) *(RF06)*.
- Build do protótipo (`dist/`) atualizado.

### justificativas das alterações:
A tela de monitoramento era o próximo passo prioritário para cobrir o núcleo funcional do sistema. Os componentes foram criados individualmente para manter separação de responsabilidades. O botão de exportar foi adicionado na própria tela de monitoramento, onde o usuário já tem o contexto dos dados filtrados.

### impactos das mudanças:
- Protótipo passa a cobrir: RF03 (monitoramento de status e indicadores), RF06 (exportação), RF07 (última atualização por item), RF08 (histórico de tarefa), RF16 (gráficos de indicadores), RF17 (filtro por ano), RF18 (diferenciação visual por tipo), RF19 (responsáveis por ação).
- Dataset simulado em `monitoramento.ts` demonstra suporte ao histórico de 10 anos exigido por RNF07.

---

## [28/06/26] 17:02 – [29/06/26] 00:10: Revisão geral dos requisitos e atualização de todos os artefatos de documentação

**Responsável:** Luíza

### artefatos produzidos/atualizados:
- `docs/requisitos.md` *(Luíza, múltiplos commits)*: correções de pontuação e numeração, remoção de comentários internos, alterações de conteúdo em RF04, RF20, RF22, RF23, RF24, adição de RF28, renumeração a partir de RF15 e adição de nota de consistência esclarecendo a distinção entre RF07/RF08/RF13 e entre RF09/RF24.
- `docs/casos-uso.md` *(Luíza)*: renumeração de todos os casos de uso (UC01–UC19) para refletir as mudanças de numeração dos RFs; adição de UC20, cobrindo o novo RF28 (seção "Procure ajuda" para adolescentes).
- `docs/conversa-cliente.md` *(Luíza)*: mapeamento de cada pergunta do roteiro de conversa para o RF/RNF correspondente, tornando explícita a rastreabilidade entre a entrevista com o cliente e os requisitos do sistema.
- `docs/criterios-aceite.md` *(Luíza)*: renumeração dos RFs nas referências e refinamento dos critérios de aceite para refletir as mudanças de requisitos. Ajustes notáveis:
  - CA02.1: atualizado para incluir todos os cinco níveis hierárquicos (antes listava apenas Objetivo → Linha de Ação → Tarefas).
  - CA03.1: separado o critério de tarefas (status) do de indicadores (valor numérico).
  - CA04.2: invertido para afirmar que busca por palavra-chave *não* retorna resultados de outros critérios (responsável, compromisso), que pertencem ao RF05.
  - CA08.1: especificado que o histórico contém conteúdo anterior e novo conteúdo (não apenas data e usuário).
  - CA11.2: adicionada a exigência de exibir mensagem de erro ao usuário em caso de credenciais inválidas.
  - CA14: substituído critério genérico de segurança por dois critérios específicos (hash de credenciais e HTTPS).
  - CA15 marcada como *requisito removido por duplicação*; CA16–CA28 renumeradas.
- `docs/historias-usuario.md` *(Luíza)*: expansão e reestruturação completa das histórias por perfil. A versão anterior (Nadia, 02/06) tinha 8 histórias genéricas; a nova versão tem ~20 histórias organizadas em seções por perfil (Público Geral, Conselho/Secretarias, SEDEF/Administrador, Crianças e Adolescentes, Usuário PCD), cada uma vinculada explicitamente ao RF/RNF de origem.
- `docs/regras-negocio.md` *(Luíza)*: reorganização completa das regras de negócio por requisito de origem, tornando rastreabilidade bidirecional (RF → RN e RN → RF). Atualização da matriz de permissões para referenciar RF24 (em vez de RF23 antigo) e adição de regras para os novos RFs.
- `docs/requisitos.md` *(Luíza, commit final)*: detalhamento adicional de RF20, RF24, RF26, RF27 e RF28; correção de referências cruzadas entre requisitos.

### requisitos adicionados:
- RF28: O sistema deve disponibilizar, na área dedicada a adolescentes, uma seção "Procure ajuda" com canais oficiais de acolhimento e socorro (nome do canal, descrição breve e forma de contato). [separado do antigo RF27 em dois requisitos distintos, para permitir verificação independente]

### requisitos removidos:
- RF22 (antigo "utilizar Tokens JWT"): removido por prescrever tecnologia de implementação em vez de comportamento esperado; substituído pelo RF23 reformulado.
- Renumeração a partir de RF15: RF15 antigo renomeado para RF16, e todos os subsequentes redistribuídos.

### requisitos modificados:
- RF04: Antes listava critérios de busca (responsável, compromisso, período) que se sobrepunham ao RF05 (filtros); refinado para restringir RF04 à busca por texto livre (palavra-chave) somente.
- RF19 → RF20: "no mínimo três camadas" substituído por exatamente três perfis definidos e fechados (SEDEF, Conselho Estadual/Secretarias, público geral).
- RF21 → RF22: Conteúdo de edição via interface gráfica mantido; ajuste de numeração.
- RF22 (antigo) → RF23: Substituído de "utilizar Tokens JWT" para "controlar o acesso a rotas e recursos protegidos por meio de tokens de sessão autenticados", descrevendo comportamento em vez de tecnologia.
- RF23 (antigo) → RF24: Expandido de descrição geral de controle de acesso para a matriz completa de permissões por perfil (SEDEF: controle total incluindo gerência de contas; Conselho/Secretarias: visualização de conteúdo restrito, inserção, alteração e importação; Público Geral: somente conteúdo público, buscas, filtros e exportações).
- RF24 → RF25 e RF25 → RF26: Renumeração sem alteração de conteúdo.
- RF26 (antigo) → RF27: Refinado para especificar o público-alvo (adolescentes 10–17 anos) e os requisitos de linguagem (simples, sem jargão técnico, frases curtas, exemplos concretos do cotidiano).

### justificativas das alterações:
- RF04: sobreposição com RF05 tornava a divisão busca/filtro ambígua para implementação e verificação.
- RF19→RF20: "no mínimo três" abria margem para perfis não planejados, dificultando modelagem de banco de dados e testes de perfil.
- RF22 antigo (JWT): requisitos funcionais devem descrever o *quê* (comportamento), não o *como* (tecnologia de implementação).
- RF23→RF24 (matriz): a versão anterior era genérica demais para servir de critério de teste; a matriz detalha cada permissão verificável de forma independente.
- RF26→RF27 + RF28: o antigo RF27 misturava dois escopos distintos (conteúdo educativo e canal de socorro); a separação permite verificar cada um de forma autônoma.
- Reorganização de historias-usuario, criterios-aceite e regras-negocio: necessária para manter todos os artefatos coerentes após as mudanças de numeração dos RFs.

### impactos das mudanças:
- Renumeração a partir de RF15 impactou todos os casos de uso (UC01–UC20 renumerados no mesmo dia).
- UC20 adicionado para cobrir RF28 (seção "Procure ajuda").
- Conversa-cliente com mapeamento RF permite rastrear a origem de cada requisito até a entrevista com o cliente.
- Histórias de usuário expandidas (de 8 para ~20) com vinculação a RF tornam a verificação na entrega final mais direta.
- Critérios de aceite revisados cobrem RF28 e a nova matriz de permissões (RF24).
- Regras de negócio reorganizadas por RF de origem tornam a rastreabilidade bidirecional.

# Conversa com o cliente
Questões em aberto · [requisitos.md](./requisitos.md)

 Os blocos e perguntas são uma base, não um script fixo. Se o cliente trouxer um assunto novo no meio da conversa, explorar antes de voltar ao roteiro.
 Postura: perguntas neutras e abertas; deixar o cliente descrever a realidade dele em vez de confirmar o que já supomos.
 Cada pergunta está marcada com seu propósito:
 - **(V) Validar** — confirmar/corrigir um requisito ou suposição que já temos.
 - **(D) Descobrir** — preencher uma lacuna ou revelar algo que ainda não sabemos.
 Tomar notas.

## Bloco 0 — Abertura e Contexto Geral
*Meta: aquecer a conversa e entender a origem e a visão do projeto, deixando o cliente falar livremente antes de afunilar para as perguntas específicas.*

- **0.1 (D)** Pra começar, me conta com suas palavras: o que é esse projeto pra vocês e como surgiu a ideia de criá-lo?
- **0.2 (D)** Existe alguma iniciativa, instituição ou sistema parecido — aqui ou em outro lugar — que sirva de inspiração ou referência pra vocês?
    - *Pode revelar um modelo a seguir (ou a evitar) e referências de design/funcionalidade.*
- **0.3 (D)** Imaginando o sistema pronto e em uso: como você descreveria, num parágrafo, o que ele faz pelo Conselho no dia a dia?
    - *Captura a visão geral e a expectativa do cliente, com as palavras dele.*

## Bloco 1 — Contexto e Objetivos
*Meta: entender a dor real que motivou o projeto e o que significa sucesso para o cliente.*

- **1.1 (D)** Como é feito hoje o acompanhamento do Plano Decenal? Me conta um pouco como funciona esse processo no dia a dia.
- **1.2 (D)** Me conta da última vez que vocês precisaram apresentar ou prestar contas do andamento do Plano para alguém — o que deu mais trabalho nesse momento?
    - *Dor concreta: uma história específica revela mais do que "qual sua maior frustração?".*
- **1.3 (D)** Fora esse episódio, qual é a maior dificuldade recorrente que vocês enfrentam nesse acompanhamento hoje?
- **1.4 (D)** Quando esse sistema estiver funcionando, como vocês vão saber que ele está ajudando? O que vai ser diferente na rotina de vocês?
- **1.5 (D)** Quem, além de vocês aqui, vai sentir o impacto desse sistema no trabalho diário?
- *Se o cliente mencionar uma "solução" (ex.: "queremos um dashboard"), perguntar:* "Entendido. Quando vocês tiverem esse painel em mãos, qual é a primeira decisão ou ação que vão tomar com base nele?"

## Bloco 2 — Pessoas e Processos 
*Meta: mapear quem usa, como trabalham hoje e onde estão as gambiarras e exceções.*

### Quem usa o sistema
- **2.1 (V)** Quais são os tipos de pessoas que vão interagir com esse sistema? (ex.: quem alimenta os dados, quem consulta, quem aprova)
    - *Validar contra os perfis que assumimos: SEDEF, Conselho/Secretarias, público geral.*
- **2.2 (V)** Para cada perfil que você mencionou: o que eles precisam fazer no sistema? 
- **2.3 (V)** Para cada perfil que você mencionou: o que eles **não** podem fazer?
- **2.4 (D)** Existe algum perfil ou grupo de usuários que vocês acham que poderíamos estar esquecendo?

### Como os dados chegam e circulam
- **2.5 (D)** Me conta como é o fluxo desde que uma informação (como o avanço de uma tarefa) acontece no mundo real até chegar registrada hoje — quem faz isso, em qual ferramenta, com qual frequência?
- **2.6 (V)** Existe alguma planilha, formulário ou documento que vocês usam hoje para registrar esse progresso? Se sim, poderia compartilhar um exemplo?
    - *Confirma a viabilidade da importação por planilha (RF20) e revela os campos reais.*
- **2.7 (D)** Quando há um erro nessa entrada de dados — digamos, uma linha com informação faltando — o que acontece? Como vocês resolvem isso hoje?
    - *Alimenta a regra do RF24: importar linhas válidas ou rejeitar tudo?*
- **2.8 (D)** Com que frequência os indicadores e o status das tarefas precisam ser atualizados?
- **2.9 (D)** Quantas pessoas costumam usar/alimentar o sistema ao mesmo tempo, em um dia normal? E em picos (ex.: época de relatório)?
    - *Volume e concorrência — dado quantitativo destacado pelo guia. Calibra RNF02 (responsividade) e dimensiona a carga.*

### Estrutura e volume do Plano Decenal
- **2.10 (V)** A estrutura do Plano (Problema Público - Compromisso - Objetivo - Linha de Ação - Tarefa) já está definida em uma fonte oficial, ou o sistema precisa permitir montá-la do zero? 
- **2.11 (V)** Quem é responsável por cada ação/tarefa do Plano? Essa atribuição já existe em algum documento?
    - *Valida o RF18 (Responsável Principal e Colaboradores).*
- **2.12 (D)** Quanto tempo de dados vocês precisam manter acessível? Há exigência de guardar histórico por um período mínimo?
    - *Valida o RNF03 (10 anos) — veio do cliente ou foi suposição nossa? Também dimensiona o volume total (RNF07).*
- **2.13 (D)** O Plano é organizado ou acompanhado por município/região? Vocês precisam consultar e comparar os dados por localidade?
    - *Os exemplos da disciplina citam dados "por município"/regionais — pode ser uma dimensão ausente nos nossos requisitos.*

## Bloco 3 — Restrições e Fronteiras
*Meta: identificar regras de negócio, limites de escopo, normas e dependências externas.*

### Perfis de acesso e dados sensíveis
- **3.1 (V)** Para o perfil público, o que está liberado para visualização e o que está restrito?
    - *Valida o controle de acesso por perfil (RF23).*
- **3.2 (V)** Quem vai ser o administrador do sistema? Quem gerencia outros usuários, cria contas, define permissões?
    - *Valida o RF09 e revela quem cadastra os usuários (lacuna: não há requisito de cadastro de usuário).*

### Histórico, transparência e rastreio de mudanças
- **3.3 (V)** Vocês precisam conseguir ver como uma tarefa ou indicador evoluiu ao longo do tempo — o que era antes e o que mudou?
    - *Valida o RF08 (histórico de conteúdo). Confirma se é necessidade real ou suposição nossa.*
- **3.4 (V)** É importante saber *quem* fez cada alteração no sistema (registro de autoria)? Isso é uma exigência de transparência, prestação de contas ou de alguma norma?
    - *Valida o RF13 (auditoria). Se não houver exigência, reavaliar o esforço nesse requisito.*

### Exportação e uso dos dados
- **3.5 (D)** Quando vocês precisam tirar dados do sistema (relatório, planilha), pra que isso serve depois? Quem recebe e o que faz com esse material?
    - *Necessidade por trás do RF06 — pergunta o uso, não o formato. Pode revelar quais formatos (Excel/CSV/PDF) importam de verdade.*
- **3.6 (D)** Quando vocês precisam encontrar uma tarefa ou indicador específico hoje, como fazem essa busca? Por quais critérios costumam procurar ou agrupar?
    - *Revela os filtros que importam de verdade (RF04/RF05) — pode confirmar ou substituir os que assumimos.*

### Regras e validações
- **3.7 (D)** Como são medidos os indicadores? (ex.: percentual, número absoluto, sim/não?) Existe algum tipo que funciona de forma diferente dos outros?
    - *Alimenta o RF03 (status de tarefa vs. valor de indicador) e o RF17 (tipos de indicador).*
- **3.8 (D)** Existe alguma regra que determina quando uma tarefa muda de status? (ex.: só pode ser "concluída" se tiver indicador preenchido?)
- **3.9 (D)** E se alguma regra não se aplicar em determinado caso — existe exceção a alguma dessas regras?
- **3.10 (D)** O protótipo deve cobrir o Plano inteiro no estado, ou começa com um piloto menor?


### Escopo e limites
- **3.10 (D)** Tem alguma funcionalidade ou área que, por algum motivo, está definitivamente fora do escopo deste projeto?
- **3.11 (D)** Existe prazo, lei, norma ou sistema legado com o qual o novo sistema vai precisar se conectar ou respeitar?

## Bloco 4 — Área Pública e Acessibilidade
*Meta: entender as necessidades específicas da área voltada ao cidadão e a crianças/adolescentes.*

- **4.1 (D)** A área destinada a crianças e adolescentes — como vocês imaginam que uma criança ou adolescente chegaria a esse conteúdo? Por onde acessariam?
    - *Alimenta o RF26.*
- **4.2 (D)** Os canais de "Procure ajuda" (acolhimento, socorro) — existe uma lista oficial? Quem a mantém atualizada?
    - *Alimenta o RF27.*
- **4.3 (V)** A interface em espanhol — quais partes precisam estar traduzidas? (só os menus de navegação, ou também o conteúdo do Plano?)
    - *Valida o escopo do RF25.*
- **4.4 (D)** Existe algum usuário ou grupo com necessidade especial de acessibilidade que vocês já conhecem e que devemos priorizar?
    - *Alimenta o RNF01 e o RF10 (alto contraste).*
- **4.5 (V)** Para o sistema "conversar a mesma língua" do Conselho, podemos usar o site institucional (cedca.pr.gov.br) como referência de cores, termos e ícones? Há algum manual de identidade visual?
    - *Valida o RNF06.*

## Encerramento (5 min)
- **5.1 (D)** Tem algo que você esperava que a gente perguntasse e ainda não perguntou?
- **5.2 (D)** Se você pudesse escolher **apenas uma** coisa que o sistema tem que fazer bem, qual seria?
    - *Força a priorização — revela o requisito mais crítico na visão do cliente.*
- **5.3 (D)** Qual é o seu maior medo em relação à implantação do sistema e à usabilidade dele?
    - *Revela riscos e resistências que o cliente não verbaliza espontaneamente.*

 Agradecer, confirmar como será o contato para dúvidas pontuais e combinar o próximo passo.


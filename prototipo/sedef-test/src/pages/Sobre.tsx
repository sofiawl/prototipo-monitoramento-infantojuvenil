import {
  ListChecks,
  CalendarHeart,
  ShieldCheck,
  Heart,
  GraduationCap,
  Shield,
  Users,
  Wifi,
  Home,
  Phone,
  HeartHandshake,
  type LucideIcon,
} from 'lucide-react'
import { Card, CardContent } from '/@/components/ui/card'

function SectionHero() {
  return (
    <section
      className="relative w-full py-20 flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'url(/src/assets/pagina-quadriculada.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gray-100/65" />

      <div className="relative z-10 flex flex-col items-center gap-4 text-center px-4 max-w-2xl mx-auto">
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl">
          Você que é criança ou adolescente
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-gray-700 uppercase tracking-tight">
          entenda o que é o plano decenal
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed py-4">
          É uma grande lista de promessas que o governo do Paraná fez para cuidar de
          todas as crianças e adolescentes. São metas para garantir que você e toda criança e
          adolescente do Paraná tenham saúde,
          educação, proteção e muitos outros direitos importantes em dez anos.
        </p>
      </div>
    </section>
  )
}

const explicacaoCards = [
  {
    icon: ListChecks,
    cor: 'bg-sky-500',
    titulo: 'Uma lista de promessas',
    texto:
      'O plano reúne compromissos que o Estado assumiu para melhorar a vida de crianças e adolescentes em todo o Paraná.',
  },
  {
    icon: CalendarHeart,
    cor: 'bg-pink-600',
    titulo: 'Por 10 anos',
    texto:
      '“Decenal” significa dez anos. É um tempo longo para planejar e fazer coisas boas acontecerem de verdade.',
  },
  {
    icon: ShieldCheck,
    cor: 'bg-amber-500',
    titulo: 'Para te proteger',
    texto:
      'Tudo no plano existe para garantir seus direitos: estudar, brincar, ser ouvido e estar seguro.',
  },
] as const

function SectionExplicacao() {
  return (
    <section className="relative w-full py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {explicacaoCards.map((card) => {
            const Icon = card.icon
            return (
              <Card
                key={card.titulo}
                className="bg-white border border-gray-200 shadow-xl rounded-xl"
              >
                <CardContent className="flex flex-col items-center gap-4 px-6 py-8 text-center">
                  <span
                    className={
                      'w-14 h-14 rounded-full flex items-center justify-center text-white ' +
                      card.cor
                    }
                  >
                    <Icon size={28} />
                  </span>
                  <h3 className="text-lg font-bold text-gray-800">{card.titulo}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.texto}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const direitosItems: {
  icon: LucideIcon
  label: string
  cor: string
  bg: string
}[] = [
  { icon: Heart, label: 'Saúde', cor: 'text-pink-700', bg: 'bg-pink-100 border-pink-200' },
  { icon: GraduationCap, label: 'Escola', cor: 'text-sky-700', bg: 'bg-sky-100 border-sky-200' },
  { icon: Shield, label: 'Proteção', cor: 'text-amber-800', bg: 'bg-amber-100 border-amber-200' },
  { icon: Users, label: 'Brincar e conviver', cor: 'text-green-700', bg: 'bg-green-100 border-green-200' },
  { icon: Wifi, label: 'Internet segura', cor: 'text-purple-700', bg: 'bg-purple-100 border-purple-200' },
  { icon: Home, label: 'Família', cor: 'text-orange-700', bg: 'bg-orange-100 border-orange-200' },
]

function SectionDireitos() {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-white">
      <div
        className="absolute left-0 top-0 h-full w-48 bg-repeat-y opacity-50 pointer-events-none"
        style={{
          backgroundImage: 'url(/src/assets/histograma-pessoas-1.svg)',
          backgroundSize: 'contain',
        }}
      />
      <div
        className="absolute right-0 top-0 h-full w-48 bg-repeat-y opacity-50 pointer-events-none scale-x-[-1]"
        style={{
          backgroundImage: 'url(/src/assets/histograma-pessoas-1.svg)',
          backgroundSize: 'contain',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-gray-400 text-sm uppercase tracking-widest font-medium">
          O plano cuida de você
        </p>
        <h2 className="text-3xl font-black text-gray-700 mt-1 mb-4 uppercase tracking-tight">
          Seus direitos importam
        </h2>
        <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
          O Plano Decenal fala sobre coisas que toda criança e todo adolescente devem ter.
          Veja alguns exemplos:
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {direitosItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className={
                  'flex items-center gap-3 px-5 py-3 rounded-full border shadow-sm ' +
                  item.bg
                }
              >
                <Icon size={22} className={item.cor} />
                <span className={'font-bold text-sm ' + item.cor}>{item.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const passosAjuda = [
  {
    numero: 1,
    titulo: 'Fale com um adulto de confiança',
    texto: 'Pode ser seu pai, sua mãe, um responsável, um professor ou alguém em quem você confia.',
  },
  {
    numero: 2,
    titulo: 'Ligue para um número de ajuda',
    texto: 'Existem telefones gratuitos e sigilosos. Você não precisa dizer seu nome se não quiser.',
  },
  {
    numero: 3,
    titulo: 'Procure o Conselho Tutelar',
    texto: 'É um lugar da sua cidade que existe para proteger crianças e adolescentes.',
  },
] as const

const contatosAjuda = [
  { nome: 'Disque 100: Direitos Humanos', numero: '100', icon: Phone },
  { nome: 'Conselho Tutelar', numero: '(00) 0000-0000', icon: Users },
  { nome: 'SAMU: Emergência médica', numero: '192', icon: HeartHandshake },
  { nome: 'Polícia: Emergência', numero: '190', icon: Shield },
] as const

function SectionBusqueAjuda() {
  return (
    <section className="relative w-full py-16 bg-sky-900 overflow-hidden">
      <div className="absolute inset-0 bg-sky-500/20" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Precisa de ajuda?
          </h2>
          <p className="text-sky-100 text-lg mt-3 font-medium">
            Você não está sozinho(a). Veja o que fazer:
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-10">
          {passosAjuda.map((passo) => (
            <Card
              key={passo.numero}
              className="bg-white/95 border border-sky-200 shadow-lg rounded-xl"
            >
              <CardContent className="px-5 py-6">
                <span className="inline-flex w-10 h-10 rounded-full bg-sky-500 text-white font-black text-lg items-center justify-center mb-3">
                  {passo.numero}
                </span>
                <h3 className="font-bold text-gray-800 text-base mb-2">{passo.titulo}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{passo.texto}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {contatosAjuda.map((contato) => {
            const Icon = contato.icon
            return (
              <div
                key={contato.nome}
                className="flex items-center gap-4 bg-white/10 border border-white/30 rounded-xl px-5 py-4"
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-sky-400 flex items-center justify-center text-white">
                  <Icon size={22} />
                </span>
                <div className="text-left min-w-0">
                  <p className="text-white font-semibold text-sm leading-snug">{contato.nome}</p>
                  <p className="text-sky-100 text-xl font-black tracking-wide">{contato.numero}</p>
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center text-sky-200/80 text-xs mt-8 italic">
          Estes contatos são apenas exemplos para o protótipo. Em uma situação real, use sempre
          números oficiais e validados.
        </p>
      </div>
    </section>
  )
}

export default function Sobre() {
  return (
    <main className="w-full bg-white">
      <SectionHero />
      <SectionExplicacao />
      <SectionDireitos />
      <SectionBusqueAjuda />
    </main>
  )
}

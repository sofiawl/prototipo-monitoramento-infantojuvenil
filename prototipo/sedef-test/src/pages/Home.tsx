import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '/@/components/ui/carousel'
import { Card, CardContent } from '/@/components/ui/card'
import { compromissos } from '@/data/compromissos'
import MonitoramentoBars from '@/components/MonitoramentoBars'

// seção 1 - hero section
function SectionHero() {
    return (
        <section 
            className='relative w-full min-h-[420px] bg-gray-100 flex flex-col items-center justify-center py-5'
        >
            <img 
                src="/src/assets/papel-note-quadriculado.svg"
                alt="Papel Anotaçõees Quadriculado"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            {/* overlay levemente branco para suavizar o fundo */}
            <div className="absolute inset-0 bg-white/60" />


                <div className="relative flex flex-col items-center gap-3 text-center px-4">
                    <img
                        src="/src/assets/logo-plano-decenal.svg"
                        alt="Logo Plano Decenal"
                        className="w-22 h-22 object-contain drop-shadow-md"
                    />
                    <img
                        src="/src/assets/plano-decenal-texto-logo.svg"
                        alt="Plano Decenal"
                        className="w-180 h-25"
                    />
                    <p className="text-gray-600 text-xl max-w-md leading-relaxed pb-8">
                    dos Direitos da Criança e do Adolescente<br />
                    do Estado do Paraná
                    </p>
                </div>
        </section>
    )
}

function SectionMonitoramento() {
  return (
    <section className="relative w-full min-h-[420px] flex flex-col items-center justify-center py-20 overflow-hidden" >

        <MonitoramentoBars />

        {/* overlay azul escuro semitransparente */}
        <div className="absolute inset-0 bg-blue-900/85" />

        <div className="relative z-10 flex flex-col items-center gap-6 text-center px-4">
            <p className="text-blue-200 text-lg font-medium uppercase tracking-widest">
            Sistema de
            </p>
            <h2 className="text-6xl font-black text-white uppercase tracking-tight drop-shadow-lg">
            Monitoramento
            </h2>
            <button
            className="mt-4 bg-blue-500 hover:bg-blue-400 text-white font-bold px-10 py-3 text-base uppercase tracking-widest rounded-lg transition-colors"
            >
            Acesse Já
            </button>
      </div>
    </section>
  )
}

function SectionProgresso() {
    return (
        <section className="relative w-full min-h-[420px] flex flex-col items-center justify-center py-24 overflow-hidden bg-gray-50">
        {/* pessoas — lateral esquerda */}
        <div
            className="absolute left-0 top-0 -ml-20 h-full w-120 bg-repeat-y opacity-90"
            style={{
            backgroundImage: "url(/src/assets/histograma-pessoas-1.svg)",
            backgroundSize: "contain",
            }}
        />

        {/* pessoas — lateral direita (espelhada) */}
        <div
            className="absolute right-0 top-0 -mr-20 h-full w-120 bg-repeat-y opacity-90 scale-x-[-1]"
            style={{
            backgroundImage: "url(/src/assets/histograma-pessoas-1.svg)",
            backgroundSize: "contain",
            }}
        />

        {/* conteudo central */}
        <div className="relative z-10 flex flex-col items-center gap-4 text-center px-4">
            <p className="text-gray-500 text-3xl font-medium uppercase tracking-widest">
            Acompanhe o
            </p>
            <span className="bg-blue-500 text-white font-black text-4xl uppercase px-10 py-2 rounded-full tracking-widest">
            Progresso
            </span>
            <p className="text-gray-600 text-2xl mt-2">
            do cumprimento dos <br></br>
            <strong>compromissos</strong>
            </p>
        </div>
        </section>
    );
}

function SectionCompromissos() {
    return (
        <section 
            className='relative w-full min-h-[420px] flex flex-col items-center justify-center py-5'
            style={{ backgroundImage: 'url(/src/assets/pagina-quadriculada.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >

        </section>
    )
}


export default function Home() {
    return (
        <main className="w-full">
        <SectionHero />
        <SectionMonitoramento />
        <SectionProgresso />
        <SectionCompromissos />
        </main>
    )
}
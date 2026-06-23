import React from 'react'
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
            id="inicio"
            className='relative w-full min-h-[420px] bg-gray-100 flex flex-col items-center justify-center py-5'
        >
            <img 
                src="/src/assets/papel-note-quadriculado.svg"
                alt="Papel Anotaçõees Quadriculado"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
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
                    <p className="text-gray-500 text-xl max-w-md leading-relaxed pb-8">
                    dos Direitos da Criança e do Adolescente<br />
                    do Estado do Paraná
                    </p>
                </div>
        </section>
    )
}

function SectionMonitoramento() {
  return (
        <section id="monitoramento" className="relative bg-sky-900 w-full min-h-[420px] flex flex-col items-center justify-center py-20 overflow-hidden" >

        <MonitoramentoBars />

        {/* overlay azul escuro semitransparente */}
        <div className="absolute inset-0 bg-sky-500/40" />
        <div className="absolute m-2 py-20 px-36 border-2 border-white rounded-lg">
            <div className="relative z-10 flex flex-col items-center gap-6 text-center px-4 ">
                <p className="text-white text-lg font-medium uppercase tracking-widest">
                Sistema de
                </p>
                <h2 className="text-6xl font-black text-white uppercase tracking-tight drop-shadow-lg">
                Monitoramento
                </h2>
                <button
                className="mt-4 bg-blue-500 hover:bg-blue-400 text-white font-bold drop-shadow-lg hover:inset-shadow-blue-500 px-10 py-3 text-base uppercase tracking-widest rounded-lg transition-colors"
                >
                Acesse Já
                </button>

        </div>

      </div>
    </section>
  )
}

function SectionProgresso() {
    return (
        <section id="progresso" className="relative w-full min-h-[420px] flex flex-col items-center justify-center py-24 overflow-hidden bg-gray-50">
        {/* pessoas — lateral esquerda */}
        <div
            className="absolute left-0 top-0 -ml-20 h-full w-120 bg-repeat-y opacity-70"
            style={{
            backgroundImage: "url(/src/assets/histograma-pessoas-1.svg)",
            backgroundSize: "contain",
            }}
        />

        {/* pessoas — lateral direita (espelhada) */}
        <div
            className="absolute right-0 top-0 -mr-20 h-full w-120 bg-repeat-y opacity-70 scale-x-[-1]"
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
    const [api, setApi] = React.useState<any>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return
        }

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const totalItems = compromissos.length;

    return (
        <section 
            id="compromissos"
            className='relative w-full min-h-[520px] flex flex-col items-center justify-center py-16 px-4'
            style={{ backgroundImage: 'url(/src/assets/pagina-quadriculada.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            { /* carrosel de cards de compromissos, codigo baseado na documentação do shadcn/ui, mas adaptado para o nosso design */ }
            <div className="absolute inset-0 bg-white/70" />

            <p className="relative z-10 text-gray-500 text-lg font-medium uppercase tracking-widest">
                Conheça os
            </p>
            <h2 className="relative z-10 text-5xl font-black text-gray-600 mb-4 uppercase tracking-tight drop-shadow-lg">
                Compromissos
            </h2>

            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <Carousel
                    opts={{ align: 'center', loop: true }}
                    className="w-full"
                    setApi={setApi}
                >
                    <CarouselContent className="-ml-3 p-8">
                        {compromissos.map((item, index) => {
                            // calcular opacidade baseado na posição atual do carrosel
                            const distance = Math.min(
                                Math.abs(index - current),
                                totalItems - Math.abs(index - current)
                            );
                            
                            let opacityClass = 'opacity-100 scale-100';
                            if (distance === 1) {
                                opacityClass = 'opacity-60 scale-95';
                            } else if (distance > 1) {
                                opacityClass = 'opacity-30 scale-90';
                            }
                            
                            return (
                            <CarouselItem key={item.numero} className="pl-3 basis-full sm:basis-1/2 lg:basis-1/3 flex justify-center">
                                <Card className={`bg-white border border-gray-200 shadow-xl rounded-xl w-full h-full transition-all duration-500 inset-shadow-sm ${opacityClass}`}>
                                    <CardContent className="flex flex-col gap-1 px-8 py-2 h-full min-h-[380px]">
                                        {/* cabecalho do card */}
                                        <div className="flex items-center justify-between gap-1">
                                            <p className="text-gray-500 text-2xl font-bold uppercase tracking-wider flex-1">
                                                Compromisso
                                            </p>
                                            <span className="bg-gray-500 text-white font-black text-3xl w-14 h-14 rounded-full flex items-center justify-center">
                                                {item.numero}
                                            </span>
                                        </div>
                                        
                                        {/* tag do tipo*/}
                                        <span className="self-start bg-sky-50 text-sky-400 text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-sky-400">
                                            {item.marco}
                                        </span>
                                        
                                        {/* descricao */}
                                        <p className="text-gray-700 text-sm mt-4 leading-relaxed flex-1 line-clamp-5">
                                            {item.descricao}
                                        </p>

                                        <button className="w-full bg-blue-500 text-white rounded-md font-semibold text-sm uppercase tracking-wider py-3 mt-auto hover:bg-blue-400 transition-colors">
                                            Ver Detalhes
                                        </button>
                            
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        )})}
                    </CarouselContent>

                    <CarouselPrevious className="left-2 -translate-y-1/2 text-gray-600 bg-white border-2 border-gray-300 hover:bg-gray-100 hover:text-blue-600 transition-all duration-200 shadow-lg z-20"/>
                    <CarouselNext className="right-2 translate-y-1/2 text-gray-600 bg-white border-2 border-gray-300 hover:bg-gray-100 hover:text-blue-600 transition-all duration-200 shadow-lg z-20"/>
                </Carousel>
            </div>
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
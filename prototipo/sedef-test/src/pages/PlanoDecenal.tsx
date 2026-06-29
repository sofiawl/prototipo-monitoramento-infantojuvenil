import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from '/@/components/ui/accordion'
import { compromissos } from '@/data/planoDecenal'
import type { Objetivo } from '@/data/planoDecenal'
import { HiOutlineDownload } from "react-icons/hi";

function getCompromissoIdByNumero(numero: number) {
  return compromissos.find((c) => c.numero === numero)?.id
}


function BannerSection() {
return (
    <section
    className="relative w-full py-20 flex flex-col items-center justify-center"
    style={{ backgroundImage: 'url(/src/assets/pagina-quadriculada.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
    <div className="absolute inset-0 bg-gray-100/65" />

    <div className="relative z-10 flex flex-col items-center gap-4 text-center px-4 max-w-2xl mx-auto">
        <img
        src="/src/assets/plano-decenal-texto-logo.svg"
        alt="Logo Plano Decenal"
        className="w-180 h-25 object-contain drop-shadow-md"
        />

        <div className="flex flex-col gap-1">
        <p className="text-sky-600 font-medium text-xl">
            dos Direitos da Criança e do Adolescente do Estado do Paraná
        </p>
        </div>

        <p className="text-gray-600 text-base leading-relaxed py-4">
        O Plano Decenal é um instrumento de planejamento de longo prazo que estabelece
        diretrizes, metas e estratégias para garantir os direitos fundamentais de crianças
        e adolescentes no Estado do Paraná pelo período de dez anos.
        </p>

        <a
        href="/src/data/plano-decenal.pdf"
        download
        className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white text-2xl font-semibold px-6 py-3 rounded-lg transition-colors shadow-md"
        >
        <HiOutlineDownload size={30} />
        Baixar PDF do Plano Decenal
        </a>
    </div>
    </section>
)
}

interface LinhasDeAcaoProps {
linhas: Objetivo['linhasDeAcao']
numCompromisso: number
numObjetivo: number
}

function LinhasDeAcao({ linhas, numCompromisso, numObjetivo }: LinhasDeAcaoProps) {
return (
    <div className="flex flex-col gap-2 mt-2">
    {linhas.map((linha, index) => (
        <div
        key={linha.id}
        className="flex items-start gap-3 bg-orange-50 border border-orange-200 rounded-lg px-4 py-3"
        >
        <span className="flex-shrink-0 w-9 h-9 rounded-full bg-amber-600 text-white text-xs font-bold flex items-center justify-center mt-0.5">
            {numCompromisso}.{numObjetivo}.{index + 1}
        </span>
        <p className="text-gray-600 text-sm leading-relaxed">
            {linha.descricao}
        </p>
        </div>
    ))}
    </div>
)
}

interface ObjetivosProps {
objetivos: Objetivo[]
numCompromisso: number
}

function Objetivos({ objetivos, numCompromisso }: ObjetivosProps) {
return (
    <Accordion type="multiple" className="flex flex-col gap-2 mt-4">
    {objetivos.map((objetivo, index) => (
        <AccordionItem
        key={objetivo.id}
        value={objetivo.id}
        className="border border-gray-300 rounded-lg overflow-hidden"
        >
        <AccordionTrigger className="px-4 py-3 bg-gray-50 hover:bg-pink-100 transition-colors text-left [&>svg]:text-blue-600 hover:no-underline">
            <div className="flex items-center gap-3">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-700 text-white text-sm font-bold flex items-center justify-center">
                {numCompromisso}.{index + 1}
            </span>
            <span className="text-gray-700 text-sm font-medium leading-snug">
                {objetivo.descricao}
            </span>
            </div>
        </AccordionTrigger>

        <AccordionContent className="px-4 pb-4 pt-2 bg-white">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
            Linhas de Ação
            </p>
            <LinhasDeAcao linhas={objetivo.linhasDeAcao} numCompromisso={numCompromisso} numObjetivo={index + 1}/>
        </AccordionContent>
        </AccordionItem>
    ))}
    </Accordion>
)
}

function CompromissosSection() {
const [searchParams] = useSearchParams()
const compromissoParam = searchParams.get('compromisso')

const [openIds, setOpenIds] = useState<string[]>(() => {
    if (!compromissoParam) return []
    const numero = parseInt(compromissoParam, 10)
    if (Number.isNaN(numero)) return []
    const id = getCompromissoIdByNumero(numero)
    return id ? [id] : []
})

useEffect(() => {
    if (!compromissoParam) return
    const numero = parseInt(compromissoParam, 10)
    if (Number.isNaN(numero)) return
    const id = getCompromissoIdByNumero(numero)
    if (!id) return
    setOpenIds([id])
    const timer = setTimeout(() => {
        document.getElementById(`compromisso-${numero}`)?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        })
    }, 350)
    return () => clearTimeout(timer)
}, [compromissoParam])

return (
    <section className="relative w-full py-16 bg-gray-50 overflow-hidden">

    {/* Pessoas — lateral esquerda */}
    <div
        className="absolute left-0 top-0 h-full w-48 bg-repeat-y opacity-50 pointer-events-none"
        style={{ backgroundImage: 'url(/src/assets/histograma-pessoas-1.svg)', backgroundSize: 'contain' }}
    />

    {/* Pessoas — lateral direita espelhada */}
    <div
        className="absolute right-0 top-0 h-full w-48 bg-repeat-y opacity-50 pointer-events-none scale-x-[-1]"
        style={{ backgroundImage: 'url(/src/assets/histograma-pessoas-1.svg)', backgroundSize: 'contain' }}
    />

    <div className="relative z-10 max-w-3xl mx-auto px-6">

        {/* Título da seção */}
        <div className="text-center mb-10">
        <p className="text-gray-400 text-sm uppercase tracking-widest font-medium">
            Conheça os
        </p>
        <h2 className="text-3xl font-black text-gray-700 mt-1">
            Compromissos do Plano
        </h2>
        </div>

        {/* Accordion de compromissos "multiple" = vários abertos */}
        <Accordion
            type="multiple"
            className="flex flex-col gap-3"
            value={openIds}
            onValueChange={setOpenIds}
        >
        {compromissos.map((compromisso) => (
            <AccordionItem
            key={compromisso.id}
            id={`compromisso-${compromisso.numero}`}
            value={compromisso.id}
            className="border border-gray-300 rounded-xl overflow-hidden shadow-sm bg-white"
            >
            {/* Cabeçalho do compromisso */}
            <AccordionTrigger className="px-5 py-4 hover:bg-sky-100 transition-colors text-left [&>svg]:text-blue-600">
                <div className="flex items-center gap-4">
                {/* Número */}
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-500 text-white font-black text-base flex items-center justify-center shadow-sm">
                    {compromisso.numero}
                </span>

                <div className="flex flex-col gap-0.5">
                    {/* Badge do tipo */}
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                    {compromisso.tipo}
                    </span>
                    {/* Título */}
                    <span className="text-gray-800 font-semibold text-base leading-snug">
                    {compromisso.titulo}
                    </span>
                </div>
                </div>
            </AccordionTrigger>

            {/* Conteúdo expandido */}
            <AccordionContent className="px-5 pb-5 pt-1 bg-white">
                {/* Descrição do compromisso */}
                <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-sky-200 pl-4 mb-4">
                {compromisso.descricao}
                </p>

                {/* Label objetivos */}
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                Objetivos
                </p>

                {/* Accordion de objetivos */}
                <Objetivos objetivos={compromisso.objetivos} numCompromisso={compromisso.numero} />
            </AccordionContent>
            </AccordionItem>
        ))}
        </Accordion>
    </div>
    </section>
)
}

export default function PlanoDecenal() {
return (
    <main className="w-full">
    <BannerSection />
    <CompromissosSection />
    </main>
)
}
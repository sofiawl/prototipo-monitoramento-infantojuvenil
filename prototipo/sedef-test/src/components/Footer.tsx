function Footer() {
	return (
		<footer className="w-full border-t border-white/10 bg-gray-100 text-slate-200">
			<div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 md:items-start md:px-8">
				<div className="space-y-3">
					<p className="text-sm font-bold uppercase tracking-widest text-sky-500">
						Plano Decenal
					</p>
					<p className="max-w-sm text-sm leading-relaxed text-slate-400">
						Direitos da Criança e do Adolescente do Estado do Paraná.
					</p>
				</div>

				<nav className="space-y-3">
					<p className="text-sm font-bold uppercase tracking-wider text-sky-500">
						Links principais
					</p>
					<div className="flex flex-col gap-2 text-sm text-slate-400">
						<a className="transition-colors hover:text-sky-300" href="#inicio">
							Início
						</a>
						<a className="transition-colors hover:text-sky-300" href="#monitoramento">
							Monitoramento
						</a>
						<a className="transition-colors hover:text-sky-300" href="#progresso">
							Progresso
						</a>
						<a className="transition-colors hover:text-sky-300" href="#compromissos">
							Compromissos
						</a>
					</div>
				</nav>

				<div className="space-y-3 md:text-right">
					<p className="text-sm font-bold uppercase tracking-wider text-sky-500">
						Navegação
					</p>
					<p className="text-sm leading-relaxed text-slate-400">
						Acesse rapidamente as principais seções da página e acompanhe o plano.
					</p>
				</div>
			</div>

			<div className="border-t border-slate-300 px-6 py-4 text-center text-xs text-slate-500 md:px-8">
				© 2026 Plano Decenal — Sistema de monitoramento | C3SL
			</div>
		</footer>
	)
}

export default Footer

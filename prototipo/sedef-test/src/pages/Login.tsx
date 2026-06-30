import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const ok = login(email, senha);
    if (ok) {
      navigate("/painel-admin");
    } else {
      setErro("E-mail ou senha incorretos.");
    }
  }

  return (
    <section
      className="relative h-full min-h-[65vh] w-full overflow-hidden bg-gray-100 text-gray-900 items-center justify-center py-6"
      style={{
        backgroundImage: "url(/src/assets/pagina-quadriculada.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-white/35" />

      <div className="relative z-10 mx-auto flex min-h-full w-full justify-center px-3 py-4 sm:px-4 sm:py-6 md:px-6 lg:py-12">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-xl lg:grid-cols-2 lg:divide-x lg:divide-blue-100">
          <div className="relative order-1 flex min-h-[220px] flex-col justify-between bg-sky-600 p-5 text-white sm:min-h-[260px] md:min-h-[420px] md:p-8">
            <img
              src="/src/assets/histograma-pessoas-2.svg"
              alt="Gráfico de pessoas"
              className="pointer-events-none absolute -right-14 -bottom-10 z-0 hidden h-64 w-64 opacity-20 sm:block md:h-80 md:w-80"
            />

            <div className="relative z-10 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide sm:gap-3 sm:px-4 sm:py-1.5 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                Plataforma Oficial
              </div>

              <div className="space-y-2 sm:space-y-3">
                <img
                  src="/src/assets/logo-plano-decenal.svg"
                  alt="Plano Decenal"
                  className="h-12 w-12 object-contain sm:h-16 sm:w-16"
                />
                <h1 className="max-w-sm text-xl font-black leading-tight sm:text-2xl md:text-3xl">
                  Bem-vindo ao Sistema de Monitoramento do Plano Decenal
                </h1>
                <p className="max-w-md text-sm leading-relaxed text-blue-50 sm:text-blue-100 md:text-base">
                  Acesse sua conta para acompanhar compromissos, indicadores,
                  progresso das ações e inserir novos dados.
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-5 border-t border-white/30 pt-3 text-xs text-blue-50 sm:mt-6 sm:pt-4 sm:text-sm sm:text-blue-100">
              Secretaria do Desenvolvimento Social e Família do Estado do Paraná
            </div>
          </div>

          <div className="order-2 bg-white/95 p-5 backdrop-blur-sm sm:p-6 md:p-7 lg:h-full lg:min-h-0 lg:p-8">
            <div className="mb-5 space-y-2 sm:mb-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-600 sm:text-xs">
                Área Restrita
              </p>
              <h2 className="text-xl font-black text-gray-900 sm:text-2xl">
                Entrar no sistema
              </h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Informe seus dados para continuar.
              </p>
            </div>

            {/* Mensagem de erro */}
            {erro && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3">
                {erro}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-700"
                >
                  E-mail institucional
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="nome@exemplo.pr.gov.br"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErro("");
                  }}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="senha"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Senha
                  </label>
                  <button
                    type="button"
                    className="text-xs font-semibold text-sky-600 hover:text-blue-500"
                  >
                    Esqueci minha senha
                  </button>
                </div>
                <input
                  id="senha"
                  type="password"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => {
                    setSenha(e.target.value);
                    setErro("");
                  }}
                  className="w-full rounded-xl border border-gray-300 text-gray-700 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-sky-500 px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-sky-400"
                >
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

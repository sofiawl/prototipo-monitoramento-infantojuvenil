import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "/@/components/ui/tabs";
import { Badge } from "/@/components/ui/badge";
import { Pencil } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";

import { useAuth } from "@/context/AuthContext";
import AbaContas from "@/components/admin/AbaContas";
import AbaDados from "@/components/admin/AbaDados";
import AbaHistorico from "@/components/admin/AbaHistorico";

// Tipo das abas principais
type Aba = "contas" | "dados" | "historico";

const abasPrincipais: { id: Aba; label: string }[] = [
  { id: "contas", label: "Contas" },
  { id: "dados", label: "Dados" },
  { id: "historico", label: "Histórico" },
];

export default function PainelAdmin() {
  const { usuario } = useAuth();
  const navigate = useNavigate();
  const [abaAtiva, setAbaAtiva] = useState<Aba>("contas");

  // Redireciona se não estiver logado — proteção de rota
  useEffect(() => {
    if (!usuario) navigate("/acessar");
  }, [usuario, navigate]);

  if (!usuario) return null;

  return (
    <div
      className="min-h-screen py-10 px-4"
      style={{
        backgroundImage: "url(/src/assets/pagina-quadriculada.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-white/35" />
      <div className="relative max-w-5xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
        {/* ── Cabeçalho do perfil ── */}
        <div className="flex items-center gap-5 px-8 py-6 border-b border-gray-100">
          <div className="flex items-center justify-center flex-shrink-0">
            <FaUserCircle className="w-15 h-15 text-gray-500" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-black text-gray-700">
                {usuario.nome}
              </h1>
              <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-sky-500 transition-colors">
                <Pencil className="w-3 h-3" /> Editar perfil
              </button>
            </div>
            <span className="w-fit text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-orange-100 text-orange-400 border border-orange-400">
              {usuario.cargo}
            </span>
          </div>
        </div>

        {/* ── Tabs principais ── */}

        <div className="flex gap-2 m-6">
          {abasPrincipais.map((aba) => (
            <button
              key={aba.id}
              onClick={() => setAbaAtiva(aba.id)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold border transition-colors
                  ${
                    abaAtiva === aba.id
                      ? "bg-sky-500 text-white border-sky-500"
                      : "bg-white text-gray-600 border-gray-300 hover:border-gray-400"
                  }`}
            >
              {aba.label}
            </button>
          ))}
        </div>

        <div className="border border-gray-200 rounded-xl bg-gray-50 m-6 p-6">
          {abaAtiva === "contas" && <AbaContas />}
          {abaAtiva === "dados" && <AbaDados />}
          {abaAtiva === "historico" && <AbaHistorico />}
        </div>
      </div>
    </div>
  );
}

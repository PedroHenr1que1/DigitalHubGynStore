import { ShieldCheck, Lock } from "lucide-react";

const FooterSection = () => (
  <footer className="px-5 pb-8">
    <div className="rounded-xl bg-card/40 backdrop-blur-xl border border-white/[0.08] p-4 text-center">
      <div className="flex items-center justify-center gap-4 mb-3">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <ShieldCheck className="w-4 h-4 text-success" />
          <span>Loja Verificada</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Lock className="w-4 h-4 text-primary" />
          <span>Dados Protegidos</span>
        </div>
      </div>
      <div className="h-px bg-border mb-3" />
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} <span className="text-gradient font-semibold">Henrique Cell</span>. Todos os direitos reservados.
      </p>
      <p className="text-[10px] text-muted-foreground/60 mt-1">CNPJ: 00.000.000/0001-00</p>
    </div>
  </footer>
);

export default FooterSection;

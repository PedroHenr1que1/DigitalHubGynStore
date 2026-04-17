import { CreditCard, QrCode, Banknote, ShieldCheck } from "lucide-react";

const PaymentSection = () => {
  return (
    <section className="px-5">
      <h2 className="font-bold text-foreground mb-4">Formas de Pagamento</h2>
      
      <div className="bg-card border border-border shadow-sm rounded-xl p-5 relative overflow-hidden">
        <div className="grid grid-cols-2 gap-3 relative z-10">
          
          {/* Pix */}
          <div className="bg-background border border-border p-3.5 rounded-xl flex flex-col gap-2 shadow-sm hover:border-primary/50 transition-colors">
            <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center glow-box-primary text-xl font-black">
              <QrCode className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-[13px] text-foreground leading-tight">Pix</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">Aprovação imediata e segura</p>
            </div>
          </div>

          {/* Cartão de Crédito */}
          <div className="bg-background border border-border p-3.5 rounded-xl flex flex-col gap-2 shadow-sm hover:border-primary/50 transition-colors">
            <div className="w-9 h-9 rounded-full bg-secondary text-foreground flex items-center justify-center">
              <CreditCard className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-[13px] text-foreground leading-tight">Cartão de Crédito</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">Até 18x com taxas da máquina</p>
            </div>
          </div>

          {/* Dinheiro */}
          <div className="bg-background border border-border p-3.5 rounded-xl flex flex-col gap-2 shadow-sm hover:border-primary/50 transition-colors col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-success/10 text-success flex items-center justify-center">
                <Banknote className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-[13px] text-foreground leading-tight">Dinheiro</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">Pagamento em espécie na entrega ou balcão</p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-4 pt-4 border-t border-border flex items-center gap-3 relative z-10">
          <div className="w-8 h-8 rounded-full bg-success/15 flex items-center justify-center text-success shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <p className="text-[11px] text-muted-foreground leading-snug">
            Pagamentos feitos presencialmente na entrega ou direto no balcão da nossa loja! Máxima segurança pra você.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;

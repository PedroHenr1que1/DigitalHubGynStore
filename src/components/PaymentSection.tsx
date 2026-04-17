import { CreditCard, QrCode, Banknote, ShieldCheck } from "lucide-react";

const PaymentSection = () => {
  return (
    <section className="px-5">
      <h2 className="font-bold text-foreground mb-4">Formas de Pagamento</h2>
      
      <div className="bg-card border border-border shadow-sm rounded-xl p-5 relative overflow-hidden">
        <div className="grid grid-cols-2 gap-4 relative z-10">
          
          {/* Pix */}
          <div className="bg-background border border-border p-4 rounded-xl flex flex-col gap-2 shadow-sm hover:border-primary/50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center glow-box-primary text-xl font-black">
              {/* Using a custom icon or text for pix because lucide doesn't have an exact pix icon */}
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm text-foreground">Pix</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">Aprovação imediata e desconto de 5%</p>
            </div>
          </div>

          {/* Cartão de Crédito */}
          <div className="bg-background border border-border p-4 rounded-xl flex flex-col gap-2 shadow-sm hover:border-primary/50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-secondary text-foreground flex items-center justify-center">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm text-foreground">Cartão de Crédito</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">Em até 18x com taxas da máquina</p>
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

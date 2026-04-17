import { motion } from "framer-motion";
import { Repeat, ArrowRight } from "lucide-react";

const TradeInBanner = () => (
  <section className="px-5">
    <motion.a
      href="https://wa.me/556285177744?text=Olá! Quero avaliar meu aparelho usado para trade-in."
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl overflow-hidden gradient-primary p-[1px]"
      whileTap={{ scale: 0.98 }}
    >
      <div className="rounded-[11px] bg-card/60 backdrop-blur-xl p-4 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
          <Repeat className="w-6 h-6 text-primary-foreground" />
        </div>
        <div className="flex-1">
          <p className="font-bold text-foreground text-sm">Trade-In</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Avalie seu aparelho usado e ganhe desconto na compra do novo!
          </p>
        </div>
        <ArrowRight className="w-5 h-5 text-primary shrink-0" />
      </div>
    </motion.a>
  </section>
);

export default TradeInBanner;

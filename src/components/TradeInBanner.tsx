import { motion } from "framer-motion";
import { Repeat, ArrowRight } from "lucide-react";

const TradeInBanner = () => (
  <section className="px-5">
    <motion.a
      href="https://wa.me/556285177744?text=Olá! Quero avaliar meu aparelho usado para trade-in."
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-card border border-border shadow-sm rounded-xl p-4 overflow-hidden group hover:border-primary/50 transition-colors"
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-4 h-full w-full">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex flex-col items-center justify-center shrink-0">
          <Repeat className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
        </div>
        <div className="flex-1">
          <p className="font-bold text-foreground text-sm tracking-tight leading-none uppercase">Upgrade</p>
          <p className="text-xs text-muted-foreground mt-1 leading-tight">
            Use seu aparelho antigo como entrada no novo hoje!
          </p>
        </div>
        <div className="w-8 h-8 rounded-full bg-secondary text-foreground flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.a>
  </section>
);

export default TradeInBanner;

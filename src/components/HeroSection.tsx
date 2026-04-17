import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BadgeCheck, MessageCircle, MapPin, Star } from "lucide-react";
import logoHC from "@/assets/HenriqueCellLogo.png";
import banner1 from "@/assets/banner-1.jpg";
import banner2 from "@/assets/banner-2.jpg";
import banner3 from "@/assets/banner-3.png";

const banners = [banner1, banner2, banner3];

const isOpen = () => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  if (day === 0) return false;
  if (day === 6) return hour >= 8 && hour < 17;
  return hour >= 8 && hour < 18;
};

interface HeroSectionProps {
  onRequestQuote?: () => void;
}

const HeroSection = ({ onRequestQuote }: HeroSectionProps) => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const open = isOpen();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      {/* Banner Rotativo */}
      <div className="relative h-44 overflow-hidden rounded-b-2xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentBanner}
            src={banners[currentBanner]}
            alt="Banner Henrique Cell"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

      </div>

      {/* Profile */}
      <div className="px-5 -mt-12 relative z-10">
        <div className="flex items-end gap-4">
          <div className="w-24 h-24 rounded-2xl border-4 border-background overflow-hidden gradient-card glow-box-primary">
            <img src={logoHC} alt="Henrique Cell" width={96} height={96} className="w-full h-full object-cover" />
          </div>
          <div className="pb-1 flex-1">
            <div className="flex items-center gap-1.5">
              <h1 className="text-xl font-bold text-foreground">Henrique Cell</h1>
              <BadgeCheck className="w-5 h-5 text-primary fill-primary/20" />
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-medium text-foreground/80">Soluções em Smartphones</p>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-primary" />
                Assistência Técnica Especializada
              </span>
            </div>
          </div>
        </div>

        {/* Status + Info */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${
              open
                ? "bg-success/15 text-success"
                : "bg-destructive/15 text-destructive"
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${open ? "bg-success animate-pulse" : "bg-destructive"}`} />
            {open ? "Aberto agora" : "Fechado"}
          </span>
          <span className="text-xs text-muted-foreground inline-flex items-center gap-1 bg-muted/50 px-2 py-0.5 rounded-md">
            <MapPin className="w-3 h-3" />
            Goiânia, GO - <span className="text-foreground font-bold italic ml-0.5">Stand 260 e 261</span>
          </span>
          <span className="text-xs text-muted-foreground inline-flex items-center gap-1">
            <Star className="w-3 h-3 text-warning fill-warning" />
            4.9
          </span>
        </div>

        {/* CTA */}
        <motion.button
          onClick={onRequestQuote}
          className="mt-4 w-full flex items-center justify-center gap-2 gradient-primary text-primary-foreground font-semibold py-3 rounded-xl glow-box-primary"
          whileTap={{ scale: 0.97 }}
        >
          <MessageCircle className="w-5 h-5" />
          Solicitar Orçamento
        </motion.button>

        {/* Reparo Destaque */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="bg-card backdrop-blur-xl border border-border rounded-2xl p-3.5 flex flex-col gap-2 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <BadgeCheck className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-foreground">Peças Originais</p>
              <p className="text-[9px] text-muted-foreground leading-tight mt-0.5">Garantia total em todos os reparos.</p>
            </div>
          </div>
          <div className="bg-primary/5 backdrop-blur-xl border border-primary/20 rounded-2xl p-3.5 flex flex-col gap-2 relative overflow-hidden group shadow-sm">
            <div className="absolute -right-2 -top-2 w-12 h-12 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors" />
            <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20">
              <Star className="w-4 h-4 fill-current" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-primary">Técnica Avançada</p>
              <p className="text-[9px] text-primary/70 leading-tight mt-0.5">Especialistas em Apple e Android.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

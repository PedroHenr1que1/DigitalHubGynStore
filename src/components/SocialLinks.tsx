import { Instagram, Music2 } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/henrique_cell168/", color: "from-pink-500 to-purple-600" },
  { icon: Music2, label: "Tiktok", href: "https://www.tiktok.com/@henrique_cell168", color: "from-black to-black" },
];

const SocialLinks = () => (
  <section className="px-5">
    <h2 className="font-bold text-foreground mb-3">Redes Sociais</h2>
    <div className="grid grid-cols-2 gap-3">
      {socials.map((s) => {
        const Icon = s.icon;
        return (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors shadow-sm"
            whileTap={{ scale: 0.95 }}
          >
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-[10px] text-muted-foreground font-medium">{s.label}</span>
          </motion.a>
        );
      })}
    </div>
  </section>
);

export default SocialLinks;

import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

const SocialLinks = () => (
  <section className="px-5">
    <h2 className="font-bold text-foreground mb-3">Redes Sociais</h2>
    <div className="flex flex-col gap-3">
      <motion.a
        href="https://www.instagram.com/gyn_store26/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors shadow-sm w-full"
        whileTap={{ scale: 0.98 }}
      >
        <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center shrink-0">
          <Instagram className="w-5 h-5 text-white" />
        </div>
        <span className="text-sm font-bold text-foreground">Siga a Gyn Store no Instagram</span>
      </motion.a>
    </div>
  </section>
);

export default SocialLinks;


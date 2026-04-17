import { useState } from "react";
import { MapPin, Navigation, Copy, Check, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ADDRESS = "Hiper Camelódromo OK - Stand 260 e 261, Goiânia - GO";
const MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8248!2d-49.2882704!3d-16.674159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef3f3bd3069e1%3A0x4a9a2de2045d7456!2sHiper%20Camel%C3%B3dromo%20OK!5e0!3m2!1spt-BR!2sbr!4v1713237800000";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=-16.6741642,-49.2856955";
const WAZE_URL = "https://waze.com/ul?ll=-16.6741642,-49.2856955&navigate=yes";

const LocationSection = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-5">
      <h2 className="font-bold text-foreground mb-3 flex items-center gap-2">
        <MapPin className="w-5 h-5 text-primary" />
        Localização
      </h2>

      <div className="rounded-xl overflow-hidden border border-border shadow-sm">
        <iframe
          src={MAP_EMBED}
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa Gyn Store"
        />

        <div className="bg-card p-4">
          <p className="text-sm text-muted-foreground mb-3">{ADDRESS}</p>

          <div className="flex gap-2">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg gradient-primary text-primary-foreground text-xs font-medium"
            >
              <Navigation className="w-3.5 h-3.5" />
              Google Maps
            </a>
            <a
              href={WAZE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-secondary border border-border text-secondary-foreground text-xs font-medium"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Waze
            </a>
            <motion.button
              onClick={copyAddress}
              className="px-3 py-2 rounded-lg bg-muted text-muted-foreground text-xs flex items-center gap-1"
              whileTap={{ scale: 0.95 }}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

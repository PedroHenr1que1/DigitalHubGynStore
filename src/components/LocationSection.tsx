import { useState } from "react";
import { MapPin, Navigation, Copy, Check, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ADDRESS = "Camelódromo Campinas 2 Av. Anhanguera,\nSt. Campinas, Goiânia - GO";
const MAP_EMBED = "https://maps.google.com/maps?q=Camel%C3%B3dromo%20Campinas%202,%20Av.%20Anhanguera,%207840&t=&z=16&ie=UTF8&iwloc=&output=embed";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=Camelódromo+Campinas+2,+Av.+Anhanguera,+7840,+Goiânia+-+GO";
const WAZE_URL = "https://waze.com/ul?q=Camelódromo%20Campinas%202%20Goiânia&navigate=yes";

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

      <div className="bg-card border border-border shadow-sm rounded-xl overflow-hidden">
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

        <div className="p-5">
          <p className="text-sm text-foreground/80 mb-4 whitespace-pre-line">{ADDRESS}</p>

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

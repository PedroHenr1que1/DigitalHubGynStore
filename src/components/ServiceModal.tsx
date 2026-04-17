import { motion, AnimatePresence } from "framer-motion";
import { Headphones, X, Copy, MessageCircle, Clock, Check } from "lucide-react";
import { useState, useEffect } from "react";

interface Attendant {
  name: string;
  phone: string;
  specialty: string;
  online: boolean;
  avgResponse: string;
  avatar: string;
}

const attendants: Attendant[] = [
  {
    name: "Henrique",
    phone: "5585999999999",
    specialty: "Vendas & Orçamentos",
    online: true,
    avgResponse: "~5 min",
    avatar: "H",
  },
  {
    name: "Lucas",
    phone: "5585988888888",
    specialty: "Assistência Técnica Especializada",
    online: true,
    avgResponse: "~10 min",
    avatar: "L",
  },
  {
    name: "Amanda",
    phone: "5585977777777",
    specialty: "Acessórios & Capinhas",
    online: false,
    avgResponse: "~15 min",
    avatar: "A",
  },
];

interface ServiceModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  showTrigger?: boolean;
}

const ServiceModal = ({ open: controlledOpen, onOpenChange, showTrigger = true }: ServiceModalProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const setOpen = (v: boolean) => {
    if (onOpenChange) onOpenChange(v);
    else setInternalOpen(v);
  };

  const copyNumber = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopied(phone);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="w-full max-w-lg bg-card border-t border-border rounded-t-2xl p-5 max-h-[80vh] overflow-y-auto"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >

              <div className="space-y-3">
                {attendants.map((att) => (
                  <div key={att.phone} className="p-4 rounded-xl bg-secondary/50 border border-border">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                          {att.avatar}
                        </div>
                        <span
                          className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-card ${
                            att.online ? "bg-success" : "bg-muted-foreground"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{att.name}</p>
                        <div className="flex items-center gap-1.5">
                          <p className="text-xs text-primary font-bold">{att.specialty}</p>
                          {att.name === "Lucas" && (
                            <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-md border border-primary/20">
                              Expert
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 mt-0.5 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{att.avgResponse}</span>
                          <span className="mx-1">•</span>
                          <span>{att.online ? "Online" : "Offline"}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-3">
                      <a
                        href={`https://wa.me/${att.phone}?text=Olá ${att.name}! Vim pelo link da Gyn Store.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg gradient-primary text-primary-foreground text-sm font-medium"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Conversar
                      </a>
                      <button
                        onClick={() => copyNumber(att.phone)}
                        className="px-3 py-2 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground text-sm flex items-center gap-1"
                      >
                        {copied === att.phone ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServiceModal;

import { useState, useEffect } from "react";
import { Clock, Timer } from "lucide-react";

const SCHEDULE = [
  { label: "Seg - Sex", open: "08:00", close: "18:00" },
  { label: "Sábado", open: "08:00", close: "14:00" },
  { label: "Domingo", open: "Fechado", close: "" },
];

const HOURS_BY_DAY = [
  { open: "08:00", close: "18:00" }, // seg
  { open: "08:00", close: "18:00" }, // ter
  { open: "08:00", close: "18:00" }, // qua
  { open: "08:00", close: "18:00" }, // qui
  { open: "08:00", close: "18:00" }, // sex
  { open: "08:00", close: "17:00" }, // sab
  { open: "Fechado", close: "" },    // dom
];

const getGroupIdx = () => {
  const day = new Date().getDay();
  if (day === 0) return 2;
  if (day === 6) return 1;
  return 0;
};

const BusinessHours = () => {
  const [countdown, setCountdown] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const todayGroup = getGroupIdx();

  useEffect(() => {
    const tick = () => {
      const n = new Date();
      const dayIdx = n.getDay() === 0 ? 6 : n.getDay() - 1;
      const h = HOURS_BY_DAY[dayIdx];
      if (h.close === "") { 
        setCountdown(""); 
        setIsOpen(false);
        return; 
      }
      
      const [oh, om] = h.open.split(":").map(Number);
      const [ch, cm] = h.close.split(":").map(Number);
      
      const now = n.getHours() * 60 + n.getMinutes();
      const openTimeMins = oh * 60 + om;
      const closeTimeMins = ch * 60 + cm;
      
      setIsOpen(now >= openTimeMins && now < closeTimeMins);

      const closeTime = new Date(n);
      closeTime.setHours(ch, cm, 0, 0);
      const diff = closeTime.getTime() - n.getTime();
      
      if (now >= openTimeMins && diff > 0 && diff <= 3600000) {
        const mins = Math.floor(diff / 60000);
        const secs = Math.floor((diff % 60000) / 1000);
        setCountdown(`${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`);
      } else {
        setCountdown("");
      }
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="px-5">
      <div className="bg-card border border-border shadow-sm rounded-xl p-4 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            <h2 className="font-bold text-foreground">Horários</h2>
          </div>
          <div className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border flex items-center gap-1.5 ${isOpen ? "bg-success/10 text-success border-success/20" : "bg-destructive/10 text-destructive border-destructive/20"}`}>
            <div className={`w-1.5 h-1.5 rounded-full ${isOpen ? "bg-success animate-pulse" : "bg-destructive"}`} />
            {isOpen ? "Aberto" : "Fechado"}
          </div>
        </div>

        {countdown && (
          <div className="mb-4 flex items-center gap-2 px-3 py-2.5 rounded-lg bg-warning/10 border border-warning/20">
            <Timer className="w-4 h-4 text-warning" />
            <span className="text-sm text-warning font-medium">Fechamos em {countdown}</span>
          </div>
        )}

        <div className="space-y-2">
          {SCHEDULE.map((s, i) => (
            <div
              key={s.label}
              className={`flex justify-between items-center text-sm px-3 py-2.5 rounded-lg transition-colors ${
                i === todayGroup
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/30 text-muted-foreground hover:bg-secondary/50"
              }`}
            >
              <span className={`font-semibold ${i === todayGroup ? "text-primary-foreground" : "text-foreground/80"}`}>
                {s.label}
              </span>
              <span className={`font-mono text-xs ${i === todayGroup ? "text-primary-foreground font-bold" : "font-medium"}`}>
                {s.open === "Fechado" ? "Fechado" : `${s.open} - ${s.close}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;

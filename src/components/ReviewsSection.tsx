import { Star, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

interface Review {
  name: string;
  stars: number;
  date: string;
  text: string;
  bought: string;
}

const reviews: Review[] = [
  {
    name: "Maria S.",
    stars: 5,
    date: "15/03/2026",
    text: "Atendimento excelente! Comprei meu iPhone e veio tudo certinho. Super recomendo!",
    bought: "iPhone 15",
  },
  {
    name: "João P.",
    stars: 5,
    date: "02/03/2026",
    text: "Fiz o trade-in do meu Galaxy antigo e consegui um preço ótimo no S24. Nota 10!",
    bought: "Galaxy S24",
  },
  {
    name: "Ana C.",
    stars: 4,
    date: "20/02/2026",
    text: "Ótimas capinhas e acessórios. Preço justo e entrega rápida.",
    bought: "Acessórios",
  },
  {
    name: "Carlos R.",
    stars: 5,
    date: "10/02/2026",
    text: "Consertaram meu celular em menos de 1 hora. Muito profissionais!",
    bought: "Assistência Técnica",
  },
];

const ReviewsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="px-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-foreground">Avaliações</h2>
        <div className="flex items-center gap-1.5 bg-card border border-border rounded-lg px-2.5 py-1 shadow-sm">
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-4 h-4"
            loading="lazy"
            width={16}
            height={16}
          />
          <span className="text-sm font-bold text-foreground">4.9</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-warning fill-warning" />
            ))}
          </div>
        </div>
      </div>

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {reviews.map((r, i) => (
            <CarouselItem key={i} className="pl-2 basis-[85%] sm:basis-[70%]">
              <div className="bg-card border border-border rounded-2xl p-5 h-full flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md bg-secondary border border-border flex items-center justify-center text-foreground text-sm font-bold shadow-sm">
                        {r.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground leading-none mb-1">{r.name}</p>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, j) => (
                            <Star
                              key={j}
                              className={`w-2.5 h-2.5 ${j < r.stars ? "text-warning fill-warning" : "text-muted-foreground/30"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] text-muted-foreground/60">{r.date}</span>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed italic">"{r.text}"</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-medium bg-secondary/50 text-foreground/70 px-2 py-1.5 rounded-md border border-border/50">
                    <ShoppingBag className="w-3 h-3" />
                    {r.bought}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center gap-1.5 mt-4">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? "w-4 h-1.5 bg-primary" : "w-1.5 h-1.5 bg-muted-foreground/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;

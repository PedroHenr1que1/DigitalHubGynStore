import { useState, useEffect } from "react";
import { Smartphone, Apple, Headphones, Shield, ShoppingCart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import productSamsung from "@/assets/product-samsung-s24.jpg";
import productIphone from "@/assets/product-iphone-15.jpg";
import productXiaomi from "@/assets/product-xiaomi.jpg";
import productAirpods from "@/assets/product-airpods.jpg";
import productCharger from "@/assets/product-charger.jpg";
import productCases from "@/assets/product-cases.jpg";

const categories = [
  { label: "Marcas", icon: Apple },
  { label: "Acessórios", icon: Headphones },
  { label: "Películas", icon: Shield },
  { label: "Capinhas", icon: Smartphone },
];

interface Product {
  name: string;
  category: string;
  badge?: string;
  image: string;
}

const products: Product[] = [
  { name: "Samsung", category: "Marcas", badge: "Novo", image: productSamsung },
  { name: "iPhone", category: "Marcas", badge: "Top", image: productIphone },
  { name: "Xiaomi", category: "Marcas", image: productXiaomi },
  { name: "POCO", category: "Marcas", image: productIphone },
  { name: "AirPods", category: "Acessórios", image: productAirpods },
  { name: "Carregadores", category: "Acessórios", image: productCharger },
  { name: "Fones", category: "Acessórios", image: productAirpods },
  { name: "Película de Vidro", category: "Películas", image: productCases },
  { name: "Película de Privacidade", category: "Películas", image: productCases },
  { name: "Capinha iPhone", category: "Capinhas", image: productCases },
  { name: "Capinha Samsung", category: "Capinhas", image: productCases },
];

const ProductCarousel = () => {
  const [activeCategory, setActiveCategory] = useState("Marcas");
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const filtered = products.filter((p) => p.category === activeCategory);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Reset rotation when category changes
  useEffect(() => {
    if (api) {
      api.scrollTo(0);
      setCurrent(0);
    }
  }, [activeCategory, api]);

  return (
    <section className="px-5">
      <h2 className="font-bold text-foreground mb-4">Catálogo de Produtos</h2>

      {/* Category tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.label)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat.label
                   ? "gradient-primary text-primary-foreground glow-box-primary scale-105"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/30"
              }`}
            >
              <Icon className="w-4 h-4" />
              {cat.label}
            </button>
          );
        })}
      </div>

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: filtered.length > 1,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-3">
          {filtered.map((product, i) => (
            <CarouselItem key={i} className="pl-3 basis-[75%] sm:basis-[60%]">
              <div className="bg-card border border-border rounded-[2rem] p-4 flex flex-col h-full group hover:border-primary/20 transition-all duration-500 shadow-sm">
                <div className="relative aspect-square w-full mb-4 rounded-3xl overflow-hidden bg-secondary/50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-md text-primary-foreground text-[9px] font-black uppercase tracking-tighter px-2 py-1 rounded-md">
                      {product.badge}
                    </div>
                  )}
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-foreground text-sm line-clamp-1 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  
                  <button 
                    onClick={() => window.open(`https://wa.me/556285177744?text=Olá! Gostaria de saber mais sobre ${product.name}`, "_blank")}
                    className="mt-4 w-full py-2.5 rounded-xl bg-primary/10 text-primary text-[11px] font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots */}
      {filtered.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-6">
          {filtered.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? "w-6 h-1.5 bg-primary" : "w-1.5 h-1.5 bg-muted-foreground/20"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductCarousel;

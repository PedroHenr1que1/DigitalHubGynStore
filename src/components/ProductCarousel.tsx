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
      <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
               key={cat.label}
               onClick={() => setActiveCategory(cat.label)}
               className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                 activeCategory === cat.label
                   ? "bg-primary text-primary-foreground scale-[1.02]"
                   : "bg-secondary/50 text-muted-foreground hover:bg-secondary/70"
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
              <div className="bg-card border border-border rounded-xl p-3.5 flex flex-col h-full group hover:border-primary/40 transition-colors shadow-sm relative overflow-hidden">
                <div className="relative aspect-square w-full mb-3 rounded-lg overflow-hidden bg-secondary/30 border border-border/50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {product.badge && (
                    <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold uppercase px-2 py-1 rounded">
                      {product.badge}
                    </div>
                  )}
                </div>
                
                <div className="flex-1 flex flex-col justify-end">
                  <h3 className="font-bold text-foreground text-sm line-clamp-2 leading-tight mb-3">
                    {product.name}
                  </h3>
                  
                  <button 
                    onClick={() => window.open(`https://wa.me/556285177744?text=Olá! Gostaria de saber mais sobre ${product.name}`, "_blank")}
                    className="w-full py-2.5 rounded-lg bg-primary/10 text-primary text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Eu Quero
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

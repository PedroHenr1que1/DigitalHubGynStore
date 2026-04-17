import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Os produtos são originais?",
    answer: "Sim! Trabalhamos apenas com produtos 100% originais e com garantia de fábrica. Nossa linha Apple e acessórios têm procedência validada."
  },
  {
    question: "Vocês parcelam em quantas vezes?",
    answer: "Dividimos suas compras em até 18x no cartão de crédito! As taxas variam conforme a bandeira e quantidade de parcelas. Consulte as condições no WhatsApp."
  },
  {
    question: "A loja faz entregas em toda Goiânia?",
    answer: "Fazemos envios via Motoboy para toda Goiânia e região metropolitana com rapidez e total segurança. Você pode optar por pagar na hora de receber!"
  },
  {
    question: "O orçamento do conserto é gratuito?",
    answer: "Sim! Não cobramos taxas para fazer um diagnóstico ou orçamento do seu aparelho. Traga no nosso Stand que avaliamos na hora."
  }
];

const FAQSection = () => {
  return (
    <section className="px-5">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="font-bold text-foreground">Perguntas Frequentes</h2>
        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
          <HelpCircle className="w-3.5 h-3.5" />
        </div>
      </div>
      
      <div className="bg-card border border-border shadow-sm rounded-xl p-2">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="px-3 border-border last:border-0 hover:bg-secondary/40 transition-colors rounded-xl">
              <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline py-3.5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[12px] text-muted-foreground pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

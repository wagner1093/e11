import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

interface WhatsAppCTAProps {
  title: string;
  buttonText: string;
}

const WhatsAppCTA = ({ title, buttonText }: WhatsAppCTAProps) =>
<section className="section-padding bg-secondary">
    <AnimatedSection className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{title}</h2>
      <div className="w-16 h-0.5 bg-primary mx-auto mb-8 px-[100px]" />
      <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold uppercase tracking-wider text-sm px-10 gap-2">
        <a href="https://api.whatsapp.com/send/?phone=5511995327361&text=Olá%21+Vim+pelo+site+e+gostaria+de+mais+informações%21&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
          <MessageCircle size={20} />
          {buttonText}
        </a>
      </Button>
    </AnimatedSection>
  </section>;


export default WhatsAppCTA;
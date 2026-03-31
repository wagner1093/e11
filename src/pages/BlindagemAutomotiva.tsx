import { Shield, Fingerprint, Clock, Feather, Eye, Layers, Hexagon, Zap, CalendarDays, BadgeCheck, FileText } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import heroImg from "@/assets/hero-blindagem-new.jpg";
import imgRoubo from "@/assets/roubo.jpg";
import imgTabela from "@/assets/tabela-blindagem.jpg";
import imgVidros from "@/assets/IMG_2459.png";
import imgAco from "@/assets/IMG_8982.png";
import imgManta from "@/assets/manta-balistica.jpg";
import imgTensylon from "@/assets/tensylon-new.png";

const pilaresDetail = [
  { icon: Shield, title: "Segurança", desc: "Uma proteção que assegura a sua tranquilidade em todas as situações, impedindo qualquer ameaça de comprometer a sua segurança." },
  { icon: Clock, title: "Durabilidade", desc: "Projetada com materiais de alta resistência, nossa blindagem é feita para durar, mantendo a eficiência e segurança do seu veículo por muitos anos." },
  { icon: Feather, title: "Leveza", desc: "Aplicamos tecnologias avançadas para desenvolver uma blindagem leve, que preserva o conforto e a agilidade do seu veículo sem sacrificar a segurança." },
  { icon: Fingerprint, title: "Originalidade", desc: "Atende as necessidades específicas do veículo, garantindo que o acabamento se mantenha original de fábrica." },
];

const componentes = [
  { icon: Eye, title: "Vidros Balísticos", desc: "Podem ser de policarbonato ou de SpallShield. Espessura varia de 21 até 18 mm.", img: imgVidros },
  { icon: Layers, title: "Aço Balístico", desc: "INOX AISI 304L de 2,5 até 3 mm de espessura.", img: imgAco },
  { icon: Hexagon, title: "Manta Balística", desc: "Feita de Kevlar da DuPont. Pode variar de 8 até 12 camadas.", img: imgManta },
  { icon: Zap, title: "Tensylon", desc: "Polietileno de alta performance e ultra-alto peso molecular. 5 vezes mais leve que o aço balístico.", img: imgTensylon },
];

const highlights = [
  { icon: CalendarDays, title: "Tempo de produção", desc: "30 dias", accent: "from-primary/20 to-primary/5" },
  { icon: BadgeCheck, title: "Garantia", desc: "10 anos", accent: "from-primary/30 to-primary/10" },
  { icon: FileText, title: "Documentação", desc: "Assessoria completa", accent: "from-primary/20 to-primary/5" },
];

const BlindagemAutomotiva = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Blindagem automotiva" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/80" />
      <AnimatedSection className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
          BLINDAGEM AUTOMOTIVA <span className="gold-text">KNOX</span>
        </h1>
      </AnimatedSection>
    </section>

    {/* Importance */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold mb-6">A IMPORTÂNCIA DA BLINDAGEM AUTOMOTIVA</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Em um cenário onde a segurança pessoal é prioridade, a blindagem automotiva se tornou uma necessidade para quem busca proteção efetiva no dia a dia. Com o aumento dos índices de violência urbana, proteger seu veículo é proteger quem você mais ama.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A E11 Blindagens oferece soluções completas de proteção balística, combinando tecnologia de ponta com materiais certificados para garantir máxima segurança sem comprometer o conforto e a dirigibilidade do seu veículo.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="aspect-[4/3] rounded-lg border border-border overflow-hidden relative">
              <img src={imgRoubo} alt="Importância da blindagem automotiva" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Ballistic Table */}
    <section className="section-padding bg-secondary">
      <AnimatedSection className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">TABELA BALÍSTICA</h2>
        <div className="rounded-lg border border-border overflow-hidden">
          <img src={imgTabela} alt="Tabela Balística E11" className="w-full h-auto" />
        </div>
      </AnimatedSection>
    </section>

    {/* Pilares Detail (boxes only) */}
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">OS 4 PILARES DA BLINDAGEM <span className="gold-text">KNOX</span></h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pilaresDetail.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1} className="bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <p.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{p.title.toUpperCase()}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Componentes - stacked rows */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">COMPONENTES DA BLINDAGEM</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </AnimatedSection>
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {componentes.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.1}>
              <div className={`flex flex-col md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-6 bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-colors`}>
                <div className="w-full md:w-2/5 h-48 md:h-56 relative bg-gradient-to-br from-card to-muted">
                  {c.img ? (
                    <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <c.icon size={64} className="text-primary/20" />
                    </div>
                  )}
                </div>
                <div className="flex-1 p-6 md:p-8 flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <c.icon size={26} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold mb-2">{c.title.toUpperCase()}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Highlights - Premium Dynamic */}
    <section className="section-padding relative">
      {/* Subtle ambient light behind the cards */}
      <div className="absolute inset-0 bg-primary/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {highlights.map((h, i) => (
            <AnimatedSection key={h.title} delay={i * 0.15} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-3xl bg-card border border-border/60 hover:border-primary/50 p-8 md:p-10 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                
                {/* Moving blob */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10 flex flex-col items-center justify-between h-full">
                  <div>
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:ring-4 ring-primary/10 transition-all duration-500">
                      <h.icon size={36} className="text-primary group-hover:-rotate-6 transition-transform duration-500" />
                    </div>
                    <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-[0.2em]">{h.title}</p>
                  </div>
                  <p className="text-primary font-display font-bold text-3xl mt-auto">
                    {h.desc}
                  </p>
                </div>
                
                {/* Floating shine line at the top */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-colors duration-700" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <WhatsAppCTA title="QUERO BLINDAR MEU VEÍCULO" buttonText="Enviar mensagem via WhatsApp" />
  </div>
);

export default BlindagemAutomotiva;

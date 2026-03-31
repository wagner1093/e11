import { Shield, Fingerprint, Clock, Feather, Eye, Layers, Hexagon, Zap, CalendarDays, BadgeCheck, FileText } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import heroImg from "@/assets/hero-blindagem-new.jpg";
import imgRoubo from "@/assets/roubo.jpg";
import imgTabela from "@/assets/tabela-blindagem.jpg";
import imgVidros from "@/assets/vidros-forever.jpg";

const pilaresDetail = [
  { icon: Shield, title: "Segurança", desc: "Uma proteção que assegura a sua tranquilidade em todas as situações, impedindo qualquer ameaça de comprometer a sua segurança." },
  { icon: Clock, title: "Durabilidade", desc: "Projetada com materiais de alta resistência, nossa blindagem é feita para durar, mantendo a eficiência e segurança do seu veículo por muitos anos." },
  { icon: Feather, title: "Leveza", desc: "Aplicamos tecnologias avançadas para desenvolver uma blindagem leve, que preserva o conforto e a agilidade do seu veículo sem sacrificar a segurança." },
  { icon: Fingerprint, title: "Originalidade", desc: "Atende as necessidades específicas do veículo, garantindo que o acabamento se mantenha original de fábrica." },
];

const componentes = [
  { icon: Eye, title: "Vidros Balísticos", desc: "Podem ser de policarbonato ou de SpallShield. Espessura varia de 21 até 18 mm.", img: imgVidros },
  { icon: Layers, title: "Aço Balístico", desc: "INOX AISI 304L de 2,5 até 3 mm de espessura.", img: null },
  { icon: Hexagon, title: "Manta Balística", desc: "Feita de Kevlar da DuPont. Pode variar de 8 até 12 camadas.", img: null },
  { icon: Zap, title: "Tensylon", desc: "Polietileno de alta performance e ultra-alto peso molecular. 5 vezes mais leve que o aço balístico.", img: null },
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

    {/* Highlights - modern */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {highlights.map((h, i) => (
            <AnimatedSection key={h.title} delay={i * 0.15}>
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${h.accent} border border-primary/20 p-8 text-center group hover:border-primary/50 transition-all duration-300`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <h.icon size={30} className="text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">{h.title}</p>
                  <p className="text-primary font-display font-bold text-2xl">{h.desc}</p>
                </div>
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

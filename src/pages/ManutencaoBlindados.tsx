import { Search, Layers, Settings, Package, Droplets, Paintbrush, ShieldCheck, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import heroImg from "@/assets/foto-fundo-04.png";
import imgManutencaoDetail from "@/assets/IMG_1436.png";
import imgSeguradora from "@/assets/funilaria-blindados.jpeg";

const services = [
  { icon: Search, title: "Revisão da blindagem", desc: "Inspeção completa de todos os componentes balísticos do veículo." },
  { icon: Layers, title: "Troca de vidros delaminados", desc: "Substituição de vidros balísticos com perda de transparência." },
  { icon: Settings, title: "Manutenção do sistema de abertura", desc: "Regulagem e reparo dos sistemas de abertura de portas e vidros." },
  { icon: Package, title: "Porta-malas elétrico", desc: "Instalação e manutenção do sistema elétrico do porta-malas." },
  { icon: Droplets, title: "Infiltração de vento e água", desc: "Correção de infiltrações causadas pelo peso adicional da blindagem." },
  { icon: Paintbrush, title: "Funilaria e pintura para blindados", desc: "Serviço especializado de funilaria e pintura para veículos blindados." },
];

const ManutencaoBlindados = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Manutenção de blindados" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-black/75" />
      <AnimatedSection className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-3xl md:text-5xl lg:text-[54px] font-display font-black uppercase tracking-tight text-white leading-[1.1]">
          MANUTENÇÃO ESPECIALIZADA<br />
          EM <span className="gold-text">VEÍCULOS BLINDADOS</span>
        </h1>
      </AnimatedSection>
    </section>

    {/* Why maintenance */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold mb-6">Por que a manutenção especializada é essencial?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Veículos blindados exigem cuidados específicos que vão além da manutenção convencional. O peso adicional da blindagem, os vidros balísticos e os sistemas de abertura reforçados necessitam de profissionais qualificados e equipamentos adequados.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Na E11, oferecemos manutenção completa e especializada, garantindo que seu veículo mantenha a proteção e o desempenho originais ao longo do tempo.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="aspect-[4/3] rounded-lg border border-border overflow-hidden relative shadow-2xl shadow-primary/5">
              <img src={imgManutencaoDetail} alt="Detalhe da manutenção especializada" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Referência em manutenção de blindados</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08} className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <s.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-2">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={services.length * 0.08} className="mt-8 text-center">
          <p className="font-display font-bold text-xl text-primary">E muito mais!</p>
        </AnimatedSection>
      </div>
    </section>

    {/* Insurance */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold mb-6">
              Bateu o blindado?{" "}
              <span className="gold-text">Atendemos sua seguradora!</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A E11 Blindagens trabalha com as principais seguradoras do Brasil, oferecendo reparo especializado para veículos blindados com agilidade e eficiência na tramitação junto às seguradoras.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nossa equipe cuida de todo o processo, desde a abertura do sinistro até a entrega do veículo reparado, garantindo que a blindagem e o acabamento sejam restaurados ao padrão original.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="aspect-[4/3] rounded-lg border border-border overflow-hidden relative shadow-2xl shadow-primary/5">
              <img src={imgSeguradora} alt="Funilaria e oficina para blindados" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Gallery */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Nossa Instalação</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="aspect-square rounded-lg bg-gradient-to-br from-charcoal to-card border border-border hover:border-primary/30 transition-colors" />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Differentiator */}
    <section className="section-padding">
      <AnimatedSection className="container mx-auto text-center max-w-3xl">
        <ShieldCheck size={48} className="text-primary mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          Só quem blinda, <span className="gold-text">sabe manter</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Essa expertise integrada nos permite conhecer cada componente instalado no seu veículo e garantir que todos estejam funcionando exatamente como deveriam.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Manter o blindado revisado não é um detalhe: é a única forma de assegurar que a proteção estará disponível quando você mais precisar. Em segurança, não há espaço para falhas.
        </p>
      </AnimatedSection>
    </section>

    <WhatsAppCTA title="Agendar manutenção" buttonText="Agendar pelo WhatsApp" />
  </div>
);

export default ManutencaoBlindados;

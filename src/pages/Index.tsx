import { Link } from "react-router-dom";
import { Shield, Award, Users, Headphones, Wrench, Quote, MessageCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import heroImg from "@/assets/hero-home.jpg";
import whyBgImg from "@/assets/img-809232.jpg";
import blindagemBgImg from "@/assets/img-2608.jpg";
import manutencaoBgImg from "@/assets/manutencao-2.jpg";

const whyCards = [
{ icon: Shield, title: "Tecnologia de ponta", desc: "Equipamentos e processos rigorosos de aplicação e qualidade de última geração para blindagem automotiva." },
{ icon: Award, title: "Materiais certificados", desc: "Utilizamos os melhores materiais certificados pelo exército e com rastreabilidade." },
{ icon: Users, title: "Equipe especializada", desc: "Profissionais qualificados e treinados, com anos de experiência no setor de segurança." },
{ icon: Headphones, title: "Atendimento exclusivo", desc: "Equipe técnica com acompanhamento personalizado do início ao fim do processo." },
{ icon: Wrench, title: "Manutenção especializada", desc: "Somos referência em serviços de manutenção para veículos blindados." }];


const testimonials = [
{ name: "Emerson Lima", text: "Ótima blindadora!! pode fazer o serviço garantido blindagem perfeita o pós vendas nem se fala são muitos prestativos parabéns continuem assim." },
{ name: "Eduardo Morelli", text: "O Atendimento é ótimo! Super atenciosos desde a venda, durante a a execução e produção, e principalmente no pós venda.\nA blindagem é ótima, super bem acabada e Super silenciosa" },
{ name: "Felipe Caetano", text: "Atendimento incrivelmente diferenciado. A consultora teve uma paciência e habilidade durante o atendimento que são pouco vistos no mercado." }];


const Home = () =>
<div>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Veículo blindado premium" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-balance">
            Soluções de blindagem para proteger{" "}
            <span className="gold-text">a sua vida</span> e a da sua família
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Há mais de 25 anos entregando excelência e qualidade para milhares de clientes por todo o Brasil

        </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold uppercase tracking-wider text-sm px-8">
              <Link to="/blindagem-automotiva">Conheça a nossa Blindagem Knox</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/40 text-foreground hover:bg-primary/10 font-semibold uppercase tracking-wider text-sm px-8">
              <a href="https://api.whatsapp.com/send/?phone=5511995327361&text=Olá%21+Vim+pelo+site+e+gostaria+de+mais+informações%21&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">Fale Conosco</a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Video Section */}
    <section className="section-padding bg-secondary">
      <AnimatedSection className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Conheça um pouco da E11 Blindagens!</h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-10 px-[100px]" />
        <div className="relative max-w-4xl mx-auto aspect-video rounded-lg border border-border overflow-hidden">
          <iframe
          src="https://www.youtube.com/embed/UqWQxUEq_OU"
          title="E11 Blindagens"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full" />
        
        </div>
        
      </AnimatedSection>
    </section>

    {/* Why E11 */}
    <section className="section-padding relative overflow-hidden">
      <img src={whyBgImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/85" />
      <div className="container mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Por que escolher a E11?</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto px-[100px]" />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {whyCards.map((card, i) =>
        <AnimatedSection key={card.title} delay={i * 0.1} className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/40 transition-colors">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <card.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-2">{card.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
            </AnimatedSection>
        )}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Nossos Serviços</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto px-[100px]" />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
        { title: "Blindagem Automotiva", desc: "Proteção balística completa com acabamento original de fábrica e projetos personalizados para cada veículo.", to: "/blindagem-automotiva" },
        { title: "Manutenção de Blindados", desc: "Somos referência em manutenção de veículos blindados, com serviços especializados, infraestrutura própria e técnicos qualificados.", to: "/manutencao-de-blindados" }].
        map((svc, i) =>
        <AnimatedSection key={svc.title} delay={i * 0.15}>
               <div className="group relative border border-border rounded-lg p-8 hover:border-primary/40 transition-all h-full flex flex-col overflow-hidden">
                 <img src={i === 0 ? blindagemBgImg : manutencaoBgImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                 <div className="absolute inset-0 bg-card/80" />
                 <div className="relative z-10 flex flex-col h-full">
                   <h3 className="text-2xl font-display font-bold mb-3">{svc.title}</h3>
                   <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{svc.desc}</p>
                   <Button asChild variant="outline" className="border-primary/40 text-foreground hover:bg-primary/10 gap-2 self-start">
                     <Link to={svc.to}>
                       Saiba mais <ChevronRight size={16} />
                     </Link>
                   </Button>
                 </div>
               </div>
             </AnimatedSection>
        )}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">O QUE NOSSOS CLIENTES DIZEM?</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto px-[100px]" />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) =>
        <AnimatedSection key={t.name} delay={i * 0.1} className="bg-card border border-border rounded-lg p-8">
              <Quote size={24} className="text-primary/40 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
              <p className="text-sm font-semibold text-primary">— {t.name}</p>
            </AnimatedSection>
        )}
        </div>
      </div>
    </section>

    <WhatsAppCTA title="Precisa de mais informações sobre blindagem ou manutenção?" buttonText="Clique aqui para enviar uma mensagem" />
  </div>;


export default Home;
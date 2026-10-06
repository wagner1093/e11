import { Link } from "react-router-dom";
import { Instagram, Youtube, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () =>
<footer className="bg-background">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <img src="/lovable-uploads/Logo_E11.png" alt="E11 Blindagens" className="h-12 w-auto mb-3" />
          <p className="text-muted-foreground text-sm leading-relaxed italic">
            "A sua segurança começa na escolha da blindadora"
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Navegação</h4>
          <div className="space-y-2">
            <Link to="/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link to="/blindagem-automotiva" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Blindagem Automotiva</Link>
            <Link to="/manutencao-de-blindados" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Manutenção de Blindados</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Contato</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Phone size={14} className="text-primary" /> (11) 99532-7361</div>
            <div className="flex items-center gap-2"><Mail size={14} className="text-primary" /> Contato@e11blindagens.com.br</div>
            <div className="flex items-start gap-2"><MapPin size={14} className="text-primary mt-0.5" /> Av. Conselheiro Furtado, 2573 - Cremação, Belém - PA</div>
            <div className="flex items-center gap-2"><Clock size={14} className="text-primary" /> Seg-Sex: 8h às 18h</div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Redes Sociais</h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/e11_blindagens/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://www.youtube.com/@e11blindagens" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <Youtube size={18} />
            </a>
            <a href="https://www.tiktok.com/@e11blindagens" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.11v-3.5a6.37 6.37 0 00-.82-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.86a8.28 8.28 0 004.76 1.5v-3.4a4.85 4.85 0 01-1-.27z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="mt-10">
        <iframe
          src="https://maps.google.com/maps?q=Avenida%20Conselheiro%20Furtado%2C%202573%20-%20Crema%C3%A7%C3%A3o%2C%20Bel%C3%A9m%20-%20PA&hl=pt-BR&z=16&output=embed"
          width="100%"
          height="200"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização E11 Blindagens"
        />
      </div>

      <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} E11 Blindagens. Todos os direitos reservados.
      </div>
    </div>
  </footer>;


export default Footer;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
{ label: "Home", to: "/" },
{ label: "Blindagem Automotiva", to: "/blindagem-automotiva" },
{ label: "Manutenção de Blindados", to: "/manutencao-de-blindados" }];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center">
          <img alt="E11 Blindagens" className="h-10 md:h-14 w-auto font-thin py-0 mx-0 px-0 rounded-none object-fill" src="/lovable-uploads/Logo_E11.png" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
          <Link
            key={link.to}
            to={link.to}
            className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-primary ${
            location.pathname === link.to ? "text-primary" : "text-muted-foreground"}`
            }>
            
              {link.label}
            </Link>
          )}
          <Button asChild className="ml-4 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold uppercase tracking-wider text-xs px-6">
            <a href="https://api.whatsapp.com/send/?phone=5511995327361&text=Olá%21+Vim+pelo+site+e+gostaria+de+mais+informações%21&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              Solicitar Orçamento
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open &&
      <div className="lg:hidden bg-background border-b border-border px-4 pb-6 space-y-4">
          {navLinks.map((link) =>
        <Link
          key={link.to}
          to={link.to}
          onClick={() => setOpen(false)}
          className={`block text-sm font-medium uppercase tracking-widest py-2 transition-colors hover:text-primary ${
          location.pathname === link.to ? "text-primary" : "text-muted-foreground"}`
          }>
          
              {link.label}
            </Link>
        )}
          <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold uppercase tracking-wider text-xs">
            <a href="https://api.whatsapp.com/send/?phone=5511995327361&text=Olá%21+Vim+pelo+site+e+gostaria+de+mais+informações%21&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              Solicitar Orçamento
            </a>
          </Button>
        </div>
      }
    </nav>);

};

export default Navbar;
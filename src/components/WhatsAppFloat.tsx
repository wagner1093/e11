import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5511995327361&text=Olá%21+Vim+pelo+site+e+gostaria+de+mais+informações%21&type=phone_number&app_absent=0";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale conosco pelo WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppFloat;

import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "263771234567"; // Replace with actual number
  const message = "Hello! I'm interested in learning more about STEMobile Solutions.";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-glow"
      style={{ boxShadow: "0 0 20px rgba(37, 211, 102, 0.4)" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
};

export default WhatsAppButton;

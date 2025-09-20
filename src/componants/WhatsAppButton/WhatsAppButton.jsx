import { BsWhatsapp } from "react-icons/bs";

export default function WhatsAppButton() {
  const phoneNumber = "93785032858";
  const message = "Hello! I want to contact you.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110 z-50"
    >
      <BsWhatsapp size={28} />
    </a>
  );
}

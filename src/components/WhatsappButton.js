import { FaWhatsapp } from "react-icons/fa";
import { footerDetails } from "@/data/footer";

const href = 'https://wa.me/' + footerDetails.telephone;

const WhatsappButton = () => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsappButton;

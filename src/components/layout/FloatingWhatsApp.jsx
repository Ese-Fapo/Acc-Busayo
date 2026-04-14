import { FaWhatsapp } from "react-icons/fa6";

const PHONE_NUMBER = "2348012345678";
const MESSAGE = encodeURIComponent(
  "Hello Acc. Busayo, I would like to inquire about your accounting and advisory services."
);

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${PHONE_NUMBER}?text=${MESSAGE}`}
      className="floating-whatsapp"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}

import { FaWhatsapp } from "react-icons/fa";
import SocialIcons from "../ui/SocialIcons";
import copyData from "../../data/copy.json";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        w-screen
        min-h-screen
        bg-[url('/images/contact-bg.png')]
        bg-no-repeat
        bg-center
        bg-cover
        bg-secondary
        flex
        justify-center
        items-center
        flex-col
        max-w-5xl
        gap-8
    "
    >
      <a
        href={copyData.contact.whatsApp.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-white text-3xl hover:text-tertiary transition"
      >
        {copyData.contact.whatsApp.label} <FaWhatsapp className="w-8 h-8 md:w-12 md:h-12 color-white hover:text-tertiary transition" />
      </a>
      <SocialIcons color="white" />
      <a
        href="#home"
        className="text-white text-3xl hover:text-tertiary transition"
      >
        {copyData.contact.goToTop}
      </a>
    </section>
  );
}

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
    "
    >
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

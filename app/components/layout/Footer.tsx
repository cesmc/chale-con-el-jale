import Image from "next/image";
import logoMini from "../../../public/images/logo-mini.png";
import copyData from "../../data/copy.json";

export default function Footer() {
  return (
  <footer className="w-full bg-secondary text-white p-10 flex flex-center items-center flex-col md:flex-row">
    <Image
          src={logoMini}
          alt="logo-mini"
          width={160}
          className="h-auto mb-10 md:mb-0"
        />
        <div className="w-full flex flex-col items-center justify-center">
            <p className="font-sans">{copyData.footer.description}</p>
            <p className="font-sans">{copyData.footer.label}</p>
        </div>
  </footer>
  )
}

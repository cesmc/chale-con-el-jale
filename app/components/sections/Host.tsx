"use client";

import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import hostTitle from "../../../public/images/host-title.png";
import hostImg from "../../../public/images/host.png";
import copyData from "../../data/copy.json";

export default function Host() {
  return (
    <section id="host" className="w-full max-w-5xl bg-white flex flex-col items-center gap-8 p-10 md:p-20">
      {/* Title */}
      <Image
        src={hostTitle}
        alt="About"
        width={350}
        className="w-auto h-auto"
      />

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Image */}
        <Image
          src={hostImg}
          alt="About"
          width={250}
          className="w-auto h-auto md:w-1/3"
        />

        {/* Description */}
        <div className="w-full md:w-2/3 md:text-start text-center">
          <h2 className="text-secondary text-4xl md:text-5xl md:p-0">
            {copyData.host.name}
          </h2>
          <br />
          <h2 className="text-secondary text-3xl md:text-4xl">
            {copyData.host.description}
          </h2>
        </div>
      </div>

      <a
        href={copyData.host.whatsAppGroup.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-secondary text-3xl md:text-4xl hover:text-tertiary transition"
      >
        {copyData.host.whatsAppGroup.label} <FaWhatsapp className="w-8 h-8 md:w-12 md:h-12 color-secondary hover:text-tertiary transition" />
      </a>
    </section>
  );
}

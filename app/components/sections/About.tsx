"use client";

import Image from "next/image";
import aboutImg from "../../../public/images/about-title.png";
import copyData from "../../data/copy.json";
import SocialIcons from "../ui/SocialIcons";

export default function About() {
  return (
    <section id="about" className="w-full flex flex-col items-center justify-center gap-8 pb-32 pt-10 px-10 md:px-20 md:pt-20">
      {/* Image */}
      <div className="mb-4">
        <Image
          src={aboutImg}
          alt="About"
          width={400}
          className="rounded-xl h-auto"
        />
      </div>

      {/* Description */}
      <div className="w-full md:w-1/2 text-center">
        <h2 className="text-secondary text-3xl md:text-4xl">
          {copyData.about.description}
        </h2>
      </div>

      <SocialIcons />
    </section>
  );
}

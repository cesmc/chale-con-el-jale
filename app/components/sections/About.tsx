"use client";

import Image from "next/image";
import aboutImg from "../../../public/images/about-title.png";
import copyData from "../../data/copy.json";
import SocialIcons from "../ui/SocialIcons";

export default function About() {
  return (
    <section className="w-full pb-20 flex flex-col items-center justify-center gap-8 px-20">
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-4">
        <Image
          src={aboutImg}
          alt="About"
          width={400}
          height={400}
          className="rounded-xl"
        />
      </div>

      {/* Description */}
      <div className="w-full md:w-1/2 text-center">
        <h2 className="text-secondary text-3xl md:text-4xl font-bold mb-4">
          {copyData.about.description}
        </h2>
      </div>

      <SocialIcons />
    </section>
  );
}

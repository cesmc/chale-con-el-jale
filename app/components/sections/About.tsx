"use client";

import Image from "next/image";
import aboutImg from "../../../public/images/about-title.png";
import copyData from "../../data/copy.json";
import SocialIcons from "../ui/SocialIcons";

export default function About() {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-8 p-10 md:p-20">
      {/* Image */}
      <div className="mb-4">
        <Image
          src={aboutImg}
          alt="About"
          width={550}
          className="rounded-xl w-auto h-auto"
        />
      </div>

      {/* Description */}
      <div className="w-full md:w-1/2 text-center">
        <h2 className="text-secondary text-3xl md:text-4xl font-bold pb-10">
          {copyData.about.description}
        </h2>
      </div>

      <SocialIcons />
    </section>
  );
}

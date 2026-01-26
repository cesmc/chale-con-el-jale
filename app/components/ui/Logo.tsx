"use client";

import Image from "next/image";
import logoImg from "../../../public/images/logo.png";

export default function Logo() {
  return (
    <div className="flex justify-center items-center px-10 pt-10 md:px-20 md:pt-20">
      <Image
        src={logoImg}
        alt="Logo"
        width={600}
        className="w-auto h-auto"
        priority
      />
    </div>
  );
}

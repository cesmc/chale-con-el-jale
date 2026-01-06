"use client";

import Image from "next/image";
import logoImg from "../../../public/images/logo.png";

export default function Logo() {
  return (
    <div className="flex justify-center items-center p-10 md:p-20">
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

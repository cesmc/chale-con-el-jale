"use client";

import Image from "next/image";
import logoImg from "../../../public/images/logo.png";

interface LogoProps {
  size?: "small" | "large";
  className?: string;
}

export default function Logo({ size = "large", className = "" }: LogoProps) {
  const dimensions =
    size === "large" ? { width: 450, height: 450 } : { width: 100, height: 100 };

  return (
    <div className="flex flex-col justify-center items-center py-20 px-10">
      <Image
        src={logoImg}
        alt="Logo"
        width={dimensions.width}
        height={dimensions.height}
        className={className}
        priority
      />
    </div>
  );
}

"use client";

import HeroContainer from "./components/layout/HeroContainer";
import Navbar from "./components/ui/Navbar";
import Logo from "./components/ui/Logo";
import About from "./components/sections/About";

export default function Home() {
  return (
    <main className="bg-primary text-secondary flex items-center justify-center w-full font-north">
      <HeroContainer>
        <Navbar />
        <Logo size="large" />
        <About />
      </HeroContainer>
    </main>
  );
}

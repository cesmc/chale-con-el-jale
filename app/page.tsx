"use client";

import HeroContainer from "./components/layout/HeroContainer";
import Navbar from "./components/ui/Navbar";
import Logo from "./components/ui/Logo";
import About from "./components/sections/About";
import Host from "./components/sections/Host";

export default function Home() {
  return (
    <main className="bg-primary text-secondary flex flex-col items-center justify-center w-full font-north">
      <HeroContainer>
        <Navbar />
        <Logo />
        <About />
      </HeroContainer>
      <Host />
    </main>
  );
}

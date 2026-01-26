"use client";

import HeroContainer from "./components/layout/HeroContainer";
import Navbar from "./components/layout/Navbar";
import Logo from "./components/ui/Logo";
import About from "./components/sections/About";
import Host from "./components/sections/Host";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main
      className="text-secondary flex flex-col items-center justify-center w-full font-north 
        bg-[url('/images/contact-bg.png')]
        bg-no-repeat
        bg-center
        bg-cover
        bg-secondary"
    >
      <HeroContainer>
        <Navbar />
        <Logo />
        <About />
      </HeroContainer>
      <Host />
      <Contact />
      <Footer />
    </main>
  );
}

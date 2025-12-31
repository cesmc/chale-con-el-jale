import Image from "next/image";
import HeroContainer from "./components/layout/HeroContainer";
import Navbar from "./components/ui/Navbar";

export default function Home() {
  return (
    <main className="bg-primary text-secondary flex items-center justify-center w-full font-north">
      <HeroContainer>
        <Navbar />
      </HeroContainer>
    </main>
  );
}

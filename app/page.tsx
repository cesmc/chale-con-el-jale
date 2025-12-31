import Image from "next/image";
import HeroContainer from "./components/layout/HeroContainer";

export default function Home() {
  return (
    <main className="bg-white text-secondary flex items-center justify-center w-full">
      <HeroContainer>
        <h1 className="text-4xl font-bold text-accent">
          Chale con el Jale
        </h1>
      </HeroContainer>
    </main>
  );
}

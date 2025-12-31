import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function HeroContainer({ children }: Props) {
  return (
    <section
      className="
        w-screen
        min-h-screen
        bg-[url('/images/hero-bg.png')]
        bg-no-repeat
        bg-center
        bg-cover
      "
    >
      {children}
    </section>
  );
}

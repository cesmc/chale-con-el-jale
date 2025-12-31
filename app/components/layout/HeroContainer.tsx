import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function HeroContainer({ children }: Props) {
  return (
    <section className="w-full bg-primary">
      <div
        className="
          mx-auto
          max-w-[1100px]
          min-h-screen
          bg-[url('/images/hero-bg.png')]
          bg-no-repeat
          bg-top
          bg-contain
        "
      >
        {children}
      </div>
    </section>

  )
}

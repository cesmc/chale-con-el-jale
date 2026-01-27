"use client";

import { useRef, useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import copyData from "../../data/copy.json";

const sectionMap: Record<string, string> = {
  INICIO: "home",
  CONÓCENOS: "about",
  HOSTING: "host",
  CONTACTO: "contact",
};

export default function Navbar() {
  const menuRef = useRef<HTMLUListElement | null>(null);
  const [active, setActive] = useState(copyData.navbarItems[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleNavigate = (item: string) => {
    const sectionId = sectionMap[item];
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(item);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80); // ajusta el número
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-end md:justify-center">
      <div className={`max-w-7xl transition-all duration-300
        ${isSticky ? "p-2" : "p-10 pb-0 md:pb-10"}`}>
        {/* MOBILE HEADER */}
        <div className="flex md:hidden bg-secondary/20 rounded-xl p-2 shadow-md">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <IoMenu className="text-secondary text-5xl" />
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <ul ref={menuRef} className="fixed top-0 left-0 right-0 z-1 flex flex-col gap-2 rounded-2xl bg-secondary p-4 md:hidden m-10">
            {copyData.navbarItems.map((item) => {
              const isActive = active === item;

              return (
                <li
                  key={item}
                  onClick={() => handleNavigate(item)}
                  className={`
                    cursor-pointer rounded-full px-6 py-3 text-lg font-medium transition
                    ${isActive
                      ? "bg-white text-secondary"
                      : "text-white hover:bg-white/10"
                    }
                  `}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        )}

        {/* DESKTOP MENU */}
        <div className="hidden md:flex justify-center">
          <ul className="flex items-center gap-4 lg:gap-20 rounded-full bg-secondary px-2 py-2">
            {copyData.navbarItems.map((item) => {
              const isActive = active === item;

              return (
                <li
                  key={item}
                  onClick={() => handleNavigate(item)}
                  className={`
                    cursor-pointer rounded-full px-10 py-2 text-2xl font-medium transition
                    ${isActive
                      ? "bg-white text-secondary"
                      : "text-white hover:bg-white/10"
                    }
                  `}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

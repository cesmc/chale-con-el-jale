"use client";

import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import copyData from "../../data/copy.json";

export default function Navbar() {
  const [active, setActive] = useState(copyData.navbarItems[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="w-full flex items-center justify-end md:justify-center">
      <div className="max-w-7xl p-10 pb-0 md:pb-10">
        {/* MOBILE HEADER */}
        <div className="flex md:hidden">
        <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <IoMenu className="text-secondary text-5xl" />
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <ul className="fixed top-0 left-0 right-0 z-1 flex flex-col gap-2 rounded-2xl bg-secondary p-4 md:hidden m-10">
            {copyData.navbarItems.map((item) => {
              const isActive = active === item;

              return (
                <li
                  key={item}
                  onClick={() => {
                    setActive(item);
                    setIsOpen(false);
                  }}
                  className={`
                    cursor-pointer rounded-full px-6 py-3 text-lg font-medium transition
                    ${
                      isActive
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
                  onClick={() => setActive(item)}
                  className={`
                    cursor-pointer rounded-full px-10 py-2 text-2xl font-medium transition
                    ${
                      isActive
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

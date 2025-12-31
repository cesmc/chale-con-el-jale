"use client";

import { useState } from "react";
import copyData from "../../data/copy.json";

export default function Navbar() {
  const [active, setActive] = useState(copyData.navbarItems[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="w-full">
      <div className="mx-auto max-w-7xl px-6 mt-8">
        {/* ===== MOBILE HEADER ===== */}
        <div className="flex items-center justify-between md:hidden">
          <span className="text-white text-2xl font-bold">LOGO</span>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl"
            aria-label="Menu"
          >
            ☰
          </button>
        </div>

        {/* ===== MOBILE MENU ===== */}
        {isOpen && (
          <ul className="mt-4 flex flex-col gap-3 rounded-2xl bg-secondary p-4 md:hidden">
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

        {/* ===== DESKTOP MENU ===== */}
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

'use client'

import { useState } from 'react'

const items = ['INICIO', 'CONÓCENOS', 'HOSTING', 'CONTACTO']

export default function Navbar() {
  const [active, setActive] = useState('INICIO')

  return (
    <nav className="w-full">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="flex justify-center">
          <ul className="flex items-center gap-20 rounded-full bg-secondary px-2 py-2 mt-8">

            {items.map(item => {
              const isActive = active === item

              return (
                <li
                  key={item}
                  onClick={() => setActive(item)}
                  className={`
                    cursor-pointer rounded-full px-10 font-medium transition text-2xl
                    ${isActive
                      ? 'bg-white text-secondary'
                      : 'text-white hover:bg-white/10'}
                  `}
                >
                  {item}
                </li>
              )
            })}

          </ul>
        </div>
      </div>
    </nav>
  )
}

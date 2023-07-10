"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react"

export default function Home() {
  const [active, setActive] = useState<number>(0)

  const handleClick = (index: number) => {
    setActive(index)
  }

  const pages = [
    { "name": "Prospects", "url": "/" },
    { "name": "Verification", "url": "/verification" },
    { "name": "Field Agents", "url": "/agents" },
  ]
  return (
    <main>
      <header className='flex items-center justify-around h-20 bg-fd0'>
        <div className='flex items-center bg-black h-20 w-48 relative right-24 pl-12  text-mycolor cursor-pointer'>
          <Image src="/max-logo.svg" alt="max-logo" width={30} height={30} />
          <span className='ml-5'>PAMS</span>
        </div>

        <div className='flex gap-24 relative right-20 text-#000 font-muli font-medium tracking-normal' >
          {pages?.map((page, index) => {
            return (
              <nav key={page.name} onClick={() => handleClick(index)}>
                <Link href={page.url}>
                  {page.name}
                </Link>
                <div className={index === active ? "border-b-8 border-mycolor translate-y-[1.5rem] " : ""}></div>
              </nav>
            )
          })}
        </div>

        <span className='flex items-center text-[13px] font-medium'>
          <h3>
            Anita Oghenakhogie
            <br />
            <span className='relative top-[-5px] text-[12px] font-normal '>
              Super(GOM)
            </span>
          </h3>
          <Image src="/chevron-down.svg" alt="chevron-down" width={18} height={18} className='ml-3' />
        </span>
      </header>
    </main>
  )
}

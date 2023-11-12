'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <>
      <nav className="relative w-full h-[64px] py-[23px] flex items-center justify-between px-5 bg-white z-50 md:py-0 md:h-[74px] md:px-10 lg:px-0 lg:h-[80px]">

        <div className="md:flex items-center justify-between md:w-full lg:w-5/6 lg:m-auto">
        <Image
          src='logo.svg'
          alt="logo"
          width={150}
          height={100}
        />

        <ul className="hidden md:flex items-center gap-4 md:gap-6 lg:gap-8">
          <Link href='/' className="navLink-desktop">
            <li className="link-text">Home</li>
          </Link>
          <Link href='/about' className="navLink-desktop">
            <li className="link-text">About</li>
          </Link>
          <Link href='/contact' className="navLink-desktop">
            <li className="link-text">Contact</li>
          </Link>
          <Link href='/blog' className="navLink-desktop">
            <li className="link-text">Blog</li>
          </Link>
          <Link href='/careers' className="navLink-desktop">
            <li className="link-text">Careers</li>
          </Link>
        </ul>

        <button className="hidden md:block btn whitespace-nowrap">Request Invite</button>
        </div>

        {!toggleMenu && <Image
          src='icon-hamburger.svg'
          alt="logo"
          width={28}
          height={100}
          className="cursor-pointer md:hidden"
          onClick={() => setToggleMenu((prev) => !prev)}
        />}
        {toggleMenu && <Image
          src='icon-close.svg'
          alt="logo"
          width={18}
          height={100}
          className="cursor-pointer md:hidden"
          onClick={() => setToggleMenu((prev) => !prev)}
        />}
      </nav>

      {toggleMenu && (
        <div className="absolute top-0 left-0 bottom-0 right-0 z-40 md:hidden">
          <div className="overlay" />
          <div className="bg-white mt-[84px] mx-5 rounded-md py-8">
            <ul className="flex flex-col items-center gap-4 ">
              <Link href='/' className="navLink-mobile">Home</Link>
              <Link href='/about' className="navLink-mobile">About</Link>
              <Link href='/contact' className="navLink-mobile">Contact</Link>
              <Link href='/blog' className="navLink-mobile">Blog</Link>
              <Link href='/careers' className="navLink-mobile">Careers</Link>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

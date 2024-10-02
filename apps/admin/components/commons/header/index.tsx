"use client";

import Image from "next/image";
import { Turn as Hamburger } from "hamburger-react";
import Register from "@/components/Register";

const Header = () => {
  return (
    <header
      className={`flex items-center justify-center bg-cyan-600 text-white w-full h-[7vh] sticky top-0 z-50 `}
    >
      <Register />
      <button
        className={`${"text-2xl "} py-3 flex-1 text-center z-40 cursor-pointer`}
      >
        <div className="w-full px-16">
          <Image
            src="/longLogo.png"
            width={100}
            height={100}
            className=" w-full text-center"
            alt="logo"
          />
        </div>
      </button>

      <Hamburger size={24} aria-controls="drawer-content" />
    </header>
  );
};

export default Header;

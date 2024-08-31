"use client";

import { useRouter } from "next/navigation";
import { Turn as Hamburger } from "hamburger-react";
import HamburgerDrawerComponent from "./drawer";
import { useState } from "react";

const HeaderComponent = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleHeaderClick = () => {
    router.push(`/`);
  };

  return (
    <header className="flex items-center justify-center h-[8vh] bg-cyan-600 text-white px-2">
      <button
        className="text-3xl py-3 flex-1 text-center z-40 cursor-pointer"
        onClick={handleHeaderClick}
      >
        Hamam Pass
      </button>

      <HamburgerDrawerComponent
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        trigger={
          <Hamburger
            toggled={isOpen}
            size={24}
            aria-expanded={isOpen}
            aria-controls="drawer-content"
          />
        }
      />
    </header>
  );
};

export default HeaderComponent;

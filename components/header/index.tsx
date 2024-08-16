"use client";

import { useRouter } from "next/navigation";
import { Turn as Hamburger } from "hamburger-react";
import HamburgerDrawerComponent from "./drawer";
import { useState } from "react";

const HeaderComponent = () => {
  const router = useRouter();

  const handleHeaderClick = () => {
    router.push(`/`);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-center  h-[8vh] bg-cyan-600 text-white px-2">
      <h1
        className="text-3xl py-3 flex-1 text-center "
        onClick={handleHeaderClick}
      >
        Hamam Pass
      </h1>

      <HamburgerDrawerComponent
        setOpen={setIsOpen}
        trigger={
          <Hamburger
            toggled={isOpen}
            toggle={() => setIsOpen(!isOpen)}
            size={24}
          />
        }
      />
    </header>
  );
};

export default HeaderComponent;

"use client";

import { useRouter } from "next/navigation";
import { Turn as Hamburger } from "hamburger-react";
import HamburgerDrawerComponent from "./drawer";
import { IoChevronBack } from "react-icons/io5";
import { useState } from "react";

const HeaderGeneral = ({
  isHome = true,
  title,
}: {
  isHome?: boolean;
  title?: string;
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogo = () => {
    isHome ? router.push(`/`) : window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <header
      className={`flex items-center justify-center  bg-cyan-600 text-white px-2  ${
        isHome ? "h-[8vh]" : " h-[7vh]   sticky top-0 z-50"
      }   `}
    >
      {!isHome && <IoChevronBack size={20} onClick={handleBack} />}
      <button
        className={`${
          isHome ? "text-3xl" : "text-2xl "
        } py-3 flex-1 text-center z-40 cursor-pointer`}
        onClick={handleLogo}
      >
        {isHome ? "Hamampass" : title}
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

export default HeaderGeneral;

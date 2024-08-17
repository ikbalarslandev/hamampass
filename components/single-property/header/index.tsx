"use client";

import { Turn as Hamburger } from "hamburger-react";
import HamburgerDrawerComponent from "./drawer";
import { useState } from "react";
import { useParams } from "next/navigation";
import { IoChevronBack } from "react-icons/io5";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { title }: { title: string } = useParams();
  const h_title = title.split("-").join(" ");

  const handleBack = () => {
    window.history.back();
  };

  return (
    <header className="flex items-center justify-center  h-[7vh] bg-cyan-600 text-white px-2 sticky top-0 z-50">
      <IoChevronBack size={20} onClick={handleBack} />

      <h1 className="text-2xl  flex-1 text-center z-40 ">{h_title}</h1>

      <HamburgerDrawerComponent
        setOpen={setIsOpen}
        trigger={
          <Hamburger
            toggled={isOpen}
            toggle={() => setIsOpen(!isOpen)}
            size={20}
          />
        }
      />
    </header>
  );
};

export default HeaderComponent;

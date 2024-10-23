"use client";

import Image from "next/image";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";
import HamburgerDrawerComponent from "./drawer";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Header = ({ isSticky = false }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const handleCartUpdated = () => {
      setCartItemCount(
        Object.values(
          JSON.parse(localStorage.getItem("cart") || "{}")?.products || {}
        ).reduce((acc: number, item: any) => acc + item.count, 0)
      );
    };

    // Initial load
    handleCartUpdated();

    // Add event listener
    window.addEventListener("cartUpdated", handleCartUpdated);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdated);
    };
  }, []);

  return (
    <header
      className={` flex justify-between items-center ${isSticky ? (isOpen ? "text-white" : "text-primary-10") : "text-white"} `}
    >
      <Image
        src={
          isSticky
            ? isOpen
              ? "/longLogo.png"
              : "/darkLongLogo.png"
            : "/longLogo.png"
        }
        width={200}
        height={200}
        alt="logo"
        className="z-40"
      />

      <HamburgerDrawerComponent
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        cartItemCount={cartItemCount}
        trigger={
          <div className="relative ">
            <Hamburger
              toggled={isOpen}
              size={24}
              aria-expanded={isOpen}
              aria-controls="drawer-content"
            />
            {cartItemCount > 0 && (
              <span className="absolute top-2 right-1 text-xs bg-cyan-900  text-center border  text-white aspect-square rounded-full px-1">
                {cartItemCount}
              </span>
            )}
          </div>
        }
      />
    </header>
  );
};

export default Header;

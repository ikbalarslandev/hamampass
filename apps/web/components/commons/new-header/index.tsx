"use client";

import Image from "next/image";
import { Turn as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import HamburgerDrawerComponent from "./drawer";
import { useRouter } from "next/navigation";

interface HeaderProps {
  variant?: "default" | "sticky" | "white";
}

const Header = ({ variant = "default" }: HeaderProps) => {
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

  // Determine styles and logo based on the variant
  const isSticky = variant === "sticky";
  const isWhite = variant === "white";

  const textColor = isSticky
    ? isOpen
      ? "text-white"
      : "text-primary-10"
    : isWhite
      ? "text-primary-10"
      : "text-white";

  const logoSrc = isSticky
    ? isOpen
      ? "/longLogo.png"
      : "/darkLongLogo.png"
    : isWhite
      ? "/darkLongLogo.png"
      : "/longLogo.png";

  const backgroundColor = isWhite ? "bg-white" : "";

  return (
    <header
      className={`flex justify-between items-center ${textColor} ${backgroundColor}`}
    >
      <Image
        src={logoSrc}
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
          <div className="relative">
            <Hamburger
              toggled={isOpen}
              size={24}
              color={isWhite ? "#2F90A1" : undefined} // Use primary-10 color for hamburger when variant is white
              aria-expanded={isOpen}
              aria-controls="drawer-content"
            />
            {cartItemCount > 0 && (
              <span className="absolute top-2 right-1 text-xs bg-cyan-900 text-center border text-white aspect-square rounded-full px-1">
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

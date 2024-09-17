"use client";

import { useRouter } from "next/navigation";
import { Turn as Hamburger } from "hamburger-react";
import HamburgerDrawerComponent from "./drawer";
import { IoChevronBack } from "react-icons/io5";
import { useState, useEffect } from "react";
import Image from "next/image";

const HeaderGeneral = ({
  isHome = true,
  title,
  isBgNone = false,
}: {
  isHome?: boolean;
  title?: string;
  isBgNone?: boolean;
}) => {
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

  const handleLogo = () => {
    isHome ? router.push(`/`) : window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <header
      className={`flex items-center justify-center  ${
        isBgNone ? "bg-none" : "bg-cyan-600"
      }   text-white px-2  ${
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
        {isHome ? (
          <Image
            src="/longLogo.png"
            width={100}
            height={100}
            className=" w-full text-center px-10"
            alt="logo"
          />
        ) : (
          title
        )}
      </button>

      <HamburgerDrawerComponent
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        cartItemCount={cartItemCount}
        trigger={
          <div className="relative">
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

export default HeaderGeneral;

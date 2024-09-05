"use client";
import { useEffect, useRef } from "react";
import HamburgerContent from "./content";

const HamburgerDrawerComponent = ({
  trigger,
  setIsOpen,
  isOpen,
  cartItemCount,
}: {
  trigger: React.ReactNode;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  cartItemCount: number;
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && drawerRef.current) {
      drawerRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="relative z-30">
      <button
        onClick={handleToggle}
        className="text-sm z-40 relative"
        aria-controls="drawer-content"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {trigger}
      </button>

      <div
        ref={drawerRef}
        id="drawer-content"
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        className={`fixed bottom-0 left-0 w-full bg-gray-800 text-white transition-transform transform z-20 h-full touch-none ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="p-4 pt-40">
          <HamburgerContent cartItemCount={cartItemCount} setOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
};

export default HamburgerDrawerComponent;

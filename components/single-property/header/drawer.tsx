"use client";

import React, { useState, useEffect } from "react";
import HamburgerContent from "./content";

const HamburgerDrawerComponent = ({
  trigger,
  setOpen,
}: {
  trigger: React.ReactNode;
  setOpen: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div className="relative z-30">
      <button onClick={toggleDrawer} className="text-sm z-40 relative">
        {trigger}
      </button>

      <div
        className={`fixed bottom-0 left-0 w-full bg-gray-800 text-white transition-transform transform z-20 h-full ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="p-4 pt-40">
          <HamburgerContent setOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
};

export default HamburgerDrawerComponent;

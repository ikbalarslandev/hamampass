"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import React from "react";
import { Button } from "../ui/button";
import { IoClose } from "react-icons/io5";
import VibeComponent from "./vibe";
import AmenityComponent from "./amenity";

interface DrawerComponentProps {
  trigger: React.ReactNode;
}

const DrawerComponent = ({ trigger }: DrawerComponentProps) => {
  return (
    <Drawer>
      <DrawerTrigger className=" border-l  p-2">{trigger}</DrawerTrigger>
      <DrawerContent className="h-[98%]">
        <DrawerHeader className="flex items-center justify-between">
          <DrawerClose>
            <IoClose size={28} />
          </DrawerClose>
          <DrawerTitle className="text-lg ">Filters</DrawerTitle>

          <Button className="mx-0 px-0" variant="link">
            clear all
          </Button>
        </DrawerHeader>
        <hr />
        <div className="mx-5">
          <VibeComponent />
          <AmenityComponent />
        </div>
        <DrawerFooter>
          <hr />
          <Button className="mt-3">Apply</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;

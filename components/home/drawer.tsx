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
import { IoClose } from "react-icons/io5";
import VibeComponent from "./vibe";
import AmenityComponent from "./amenity";
import { useTranslations } from "next-intl";
import SortComponent from "./sort";

interface DrawerComponentProps {
  trigger: React.ReactNode;
}

const DrawerComponent = ({ trigger }: DrawerComponentProps) => {
  const t = useTranslations("filter");
  return (
    <Drawer>
      <DrawerTrigger className=" border-l  p-2">{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex items-center justify-between">
          <DrawerTitle className="text-lg ">{t("title")}</DrawerTitle>{" "}
          <DrawerClose>
            <IoClose size={28} />
          </DrawerClose>
        </DrawerHeader>
        <hr />
        <div className="mx-5">
          <SortComponent />
          <VibeComponent />
          <AmenityComponent />
        </div>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;

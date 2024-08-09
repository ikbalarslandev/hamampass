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
import SexComponent from "./sex";
import { useSearchParams } from "next/navigation";
import PaymentMethodComponent from "./pay";

interface DrawerComponentProps {
  trigger: React.ReactNode;
}

const DrawerComponent = ({ trigger }: DrawerComponentProps) => {
  const t = useTranslations("filter");
  const searchParams = useSearchParams();

  return (
    <Drawer>
      <DrawerTrigger
        className={` border-l ${searchParams.size && "border-cyan-500"} py-2`}
      >
        {trigger}
      </DrawerTrigger>
      <DrawerContent className="h-[96%] ">
        <DrawerHeader className="flex items-center justify-between ">
          <DrawerTitle className="text-lg ">{t("title")}</DrawerTitle>{" "}
          <DrawerClose>
            <IoClose size={28} />
          </DrawerClose>
        </DrawerHeader>
        <hr />
        <div className="px-5 overflow-y-auto">
          <SortComponent />
          <PaymentMethodComponent />
          <SexComponent />
          <VibeComponent />
          <AmenityComponent />
        </div>
        <DrawerFooter>
          <DrawerClose>
            <p className="bg-cyan-500 mx-4 py-2 my-1 rounded-md text-white">
              Show Results
            </p>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;

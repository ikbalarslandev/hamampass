"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useTranslations } from "next-intl";
import HoverComponent from "@/components/hover";

const AmenitiesDrawer = ({ trigger, data }: any) => {
  const s = useTranslations("home.filters.titles");
  return (
    <Drawer>
      <DrawerTrigger className=" w-full">{trigger}</DrawerTrigger>
      <DrawerContent className="h-full">
        <DrawerHeader className=" flex justify-between items-center mt-2">
          <DrawerTitle className="text-center mb-2">
            {s("amenity_title")}
          </DrawerTitle>
          <DrawerClose className="text-xl">X</DrawerClose>
        </DrawerHeader>
        <div className="flex-1 px-4 flex flex-col gap-3 ">
          {data &&
            data.map((id: any, index: number) => (
              <HoverComponent key={index} amenity={id} isDesc={true} />
            ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default AmenitiesDrawer;

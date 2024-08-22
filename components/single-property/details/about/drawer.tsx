"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const AboutDrawerComponent = ({ trigger, description }: any) => {
  return (
    <Drawer>
      <DrawerTrigger className=" w-full">{trigger}</DrawerTrigger>
      <DrawerContent className="h-full">
        <DrawerHeader className=" flex justify-between items-center mt-2">
          <DrawerTitle className="text-center mb-2">About</DrawerTitle>
          <DrawerClose className="text-xl">X</DrawerClose>
        </DrawerHeader>
        <div className="flex-1 px-4 mt-2 overflow-y-auto ">{description}</div>
      </DrawerContent>
    </Drawer>
  );
};

export default AboutDrawerComponent;

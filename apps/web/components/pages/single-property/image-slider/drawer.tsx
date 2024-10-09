"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { useTranslations } from "@hamampass/i18n";

const GaleryDrawer = ({ trigger, data }: any) => {
  const s = useTranslations("titles");
  return (
    <Drawer>
      <DrawerTrigger className=" w-full">{trigger}</DrawerTrigger>
      <DrawerContent className="max-h-full">
        <DrawerHeader className=" flex justify-between items-center mt-2">
          <DrawerTitle className="text-center mb-2">
            {s("gallery-title")}
          </DrawerTitle>
          <DrawerClose className="text-xl">X</DrawerClose>
        </DrawerHeader>
        <div className="flex-1 px-4 flex flex-col gap-3 pb-6 overflow-y-auto">
          {data.map((photo: string) => (
            <div key={photo} className="relative w-full h-96">
              <Image src={photo} width={1600} height={900} alt="photo" />
            </div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default GaleryDrawer;

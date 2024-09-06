"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerOverlay,
} from "@/components/ui/drawer";

const DrawerGeneral = ({
  trigger,
  title,
  content,
  handleOnly = false,
  fill = true,
  fullWidth = false,
}: any) => {
  return (
    <Drawer handleOnly={handleOnly}>
      <DrawerTrigger className=" w-full ">{trigger}</DrawerTrigger>
      <DrawerContent className={fill ? "h-full" : "max-h-full"}>
        <DrawerHeader className=" flex justify-between items-center mt-2 ">
          <DrawerTitle className="text-center">{title}</DrawerTitle>
          <DrawerClose className="text-xl">X</DrawerClose>
        </DrawerHeader>
        <div
          // className="flex-1 px-4 mt-2 overflow-y-auto "
          className={
            fullWidth
              ? "flex-1 overflow-y-auto"
              : "flex-1 px-4  overflow-y-auto "
          }
        >
          {content}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerGeneral;

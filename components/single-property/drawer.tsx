"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";
import { TProduct } from "@/types";
import { useParams } from "next/navigation";

interface DrawerComponentProps {
  trigger: React.ReactNode;
  data: TProduct;
}

const DrawerComponent = ({ trigger, data }: DrawerComponentProps) => {
  const { locale } = useParams();
  return (
    <Drawer>
      <DrawerTrigger>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            {data[`name_${locale}` as keyof typeof data]}
          </DrawerTitle>

          {data[`details_${locale}` as keyof typeof data].map(
            (item: string, index: any) => (
              <DrawerDescription className="text-left" key={index}>
                {item}
              </DrawerDescription>
            )
          )}
        </DrawerHeader>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;

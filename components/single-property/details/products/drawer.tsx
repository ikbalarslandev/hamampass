"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerClose,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
} from "@/components/ui/drawer";
import React from "react";
import { TProduct } from "@/types";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { GoDotFill } from "react-icons/go";
import { productPrototypes } from "@/utils/prototypes";

interface DrawerComponentProps {
  trigger: React.ReactNode;
  data: TProduct;
}

const DrawerComponent = ({ trigger, data }: DrawerComponentProps) => {
  const t = useTranslations("home.product-type");
  const p = useTranslations("single.products");
  const { locale } = useParams();
  return (
    <Drawer>
      <DrawerTrigger>{trigger}</DrawerTrigger>
      <DrawerContent className="max-h-[90%] px-2">
        <DrawerHeader>
          <DrawerTitle>{t(data.type.toString())}</DrawerTitle>
          <DrawerClose className="absolute top-2 right-5">X</DrawerClose>

          <div className="text-left my-5">
            <div className="flex items-center gap-2 justify-between ">
              <p>
                {p("adult")} :{" "}
                <span className="text-xs">
                  ({p("older")} {data.age ?? productPrototypes[data.type].age})
                </span>
              </p>
              <p className="font-bold">
                ₺{data.adult_price}
                <span className="text-sm ml-1">TL</span>
              </p>
            </div>
            {data.child_price ? (
              <div className="flex items-center gap-2 justify-between ">
                <p>
                  {p("child")} :{" "}
                  <span className="text-xs">
                    (0 - {data.age ?? productPrototypes[data.type].age} )
                  </span>
                </p>
                <p className="font-bold">
                  ₺{data.child_price}
                  <span className="text-sm ml-1">TL</span>
                </p>
              </div>
            ) : null}
          </div>
        </DrawerHeader>

        <div className="overflow-y-auto">
          {(
            data[`detail_${locale}`] ??
            productPrototypes[data.type][`detail_${locale}`]
          ).map((item: string) => (
            <DrawerDescription
              key={item}
              className="flex items-center gap-1 text-black text-md"
            >
              <GoDotFill size={10} />
              <span>{item}</span>
            </DrawerDescription>
          ))}
        </div>

        <DrawerFooter className=" px-0  ">
          {data[`desc_${locale}`] ??
            productPrototypes[data.type][`desc_${locale}`]}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;

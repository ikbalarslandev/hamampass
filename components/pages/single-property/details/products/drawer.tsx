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
import moment from "moment";
import { useEffect } from "react";
import "moment/locale/tr";
import "moment/locale/en-gb";
import { Separator } from "@/components/ui/separator";
import CounterComponent from "./counter";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface DrawerComponentProps {
  trigger: React.ReactNode;
  data: TProduct;
}

const DrawerComponent = ({ trigger, data }: DrawerComponentProps) => {
  const t = useTranslations("home.product-type");
  const p = useTranslations("single.products");
  const { locale } = useParams();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (locale === "tr") {
      moment.locale("tr");
    } else {
      moment.locale("en-gb");
    }
  }, [locale]);

  return (
    <Drawer>
      <DrawerTrigger>{trigger}</DrawerTrigger>
      <DrawerContent className="max-h-[90%] ">
        <DrawerHeader>
          <DrawerTitle className="flex flex-col gap-2">
            <span> {t(data.type.toString())}</span>
            <span className="text-xs text-gray-400">
              {moment(
                JSON.parse(sessionStorage.getItem("selected-date") ?? "{}")
              ).format("D MMMM YYYY")}
            </span>
          </DrawerTitle>
          <DrawerClose className="absolute top-2 right-5">X</DrawerClose>
        </DrawerHeader>

        <div className="px-2">
          <div className="text-left">
            <Separator />
            <div className="my-2 flex items-center justify-between">
              <div className="flex flex-col  ">
                <p>
                  <span className="font-medium mr-1">{p("adult")}</span>

                  <span className="text-xs text-gray-400 font-light">
                    ({p("older")} {data.age ?? productPrototypes[data.type].age}
                    )
                  </span>
                </p>
                <p className="font-semibo">
                  ₺{data.adult_price}
                  <span className="text-sm ml-1">TL</span>
                </p>
              </div>

              <CounterComponent count={count} setCount={setCount} />
            </div>

            <Separator />

            {/* {data.child_price ? (
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
          ) : null} */}
          </div>

          <div className="overflow-y-auto mt-5">
            {(data[`detail_${locale}`].length > 0
              ? data[`detail_${locale}`]
              : productPrototypes[data.type][`detail_${locale}`]
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
          <div>
            {data[`desc_${locale}`] ??
              productPrototypes[data.type][`desc_${locale}`]}
          </div>
        </div>

        <DrawerFooter className=" px-3 py-2 border-t mt-4 shadow-xl flex-row items-center  ">
          <div className="flex flex-1 flex-col">
            <p className="text-xs text-gray-600">Total</p>
            <p className="font-bold text-xl">
              ₺{data.adult_price * count}
              <span className="text-sm ml-1">TL</span>
            </p>
            <p className="text-xs">no credit card required</p>
          </div>

          <Button
            className={`rounded-xl px-8 bg-cyan-500 ${
              count === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Add to Card
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;

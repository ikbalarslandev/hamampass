"use client";

import { TProduct } from "@/types";
import DrawerComponent from "./drawer";
import { PiFlowerLotus } from "react-icons/pi";
import { useTranslations } from "next-intl";
import { convertProductIcon } from "@/utils/db_translations";

interface Props {
  data: TProduct[];
}

const ProductsComponent = ({ data }: Props) => {
  const t = useTranslations("home.product-type");
  const title = useTranslations("home.filters.titles");

  return (
    <div className="mt-4">
      <h2 className="font-bold text-xl text-gray-600">
        {title("products_title")}
      </h2>
      <div className=" flex flex-col gap-3 my-4">
        {data.map((item) => (
          <DrawerComponent
            key={item.id}
            data={item}
            trigger={
              <div
                key={item.id}
                className="flex justify-between items-center px-5 border  shadow rounded-lg py-3"
              >
                <div className="flex gap-3 items-center">
                  {convertProductIcon(item.type)}

                  <h2>{t(item.type.toString())}</h2>
                </div>

                <p>₺ {item.adult_price} TL</p>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsComponent;

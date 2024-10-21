"use client";

import { TProduct, TProperty } from "@hamampass/db/types";
import DrawerComponent from "./drawer";
import { useTranslations } from "@hamampass/i18n";
import { convertProductIcon } from "@/utils/icon_translations";

interface Props {
  data: TProduct[];
  property: TProperty;
}

const ProductsComponent = ({ data, property }: Props) => {
  data = data.sort((a, b) => (a.type > b.type ? 1 : -1));

  const t = useTranslations("home.product-type");
  const title = useTranslations("titles");

  return (
    <section className="mt-4">
      <h2 className="font-bold text-xl text-gray-600">
        {title("products_title")}
      </h2>
      <div className=" flex flex-col gap-3 my-4">
        {data.map((item) => (
          <DrawerComponent
            key={item.id}
            data={item}
            property={property}
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
    </section>
  );
};

export default ProductsComponent;

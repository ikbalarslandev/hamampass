"use client";

import { TProduct } from "@/types";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import DrawerComponent from "./drawer";
import { PiFlowerLotus } from "react-icons/pi";

interface Props {
  data: TProduct[];
}

const ProductsComponent = ({ data }: Props) => {
  const { locale } = useParams();

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      {/* <h1>Products</h1> */}
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
                  <PiFlowerLotus className="text-3xl" />
                  <h2>{item[`name_${locale}` as keyof typeof item]}</h2>
                </div>

                <p>₺ {item.price}</p>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsComponent;

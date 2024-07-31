"use client";

import { TProduct } from "@/types";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import DrawerComponent from "./drawer";

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
      <div className=" flex flex-col gap-5 my-4">
        {data.map((item) => (
          <DrawerComponent
            key={item.id}
            data={item}
            trigger={
              <div
                key={item.id}
                className="flex justify-around border bg-green-600 text-white shadow-sm rounded"
              >
                <h2>{item[`name_${locale}` as keyof typeof item]}</h2>
                <p>{item.price}</p>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsComponent;

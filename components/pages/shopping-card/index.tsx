"use client";

import Image from "next/image";
import moment from "moment";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import { request } from "@/services/axios";
import { toast } from "@/components/ui/use-toast";
import { useTransition } from "react";

interface TStorage {
  property: {
    id: string;
    title: string;
    date: string;
    img: string;
  };
  products: Record<string, { count: number; price: number }>;
}

const ShoppingCardPage = () => {
  const storage = JSON.parse(localStorage.getItem("cart") || "[]") as TStorage;
  const { property } = storage;
  const { products } = storage;
  const t = useTranslations("single.review.drawer.package");

  const { locale } = useParams();
  const router = useRouter();
  const { data } = useSession();

  const [isPending, startTransition] = useTransition(); // useTransition hook

  if (!property) {
    return <div>No property found in the cart.</div>;
  }

  if (Object.keys(products).length === 0) {
    return <div className="text-center mt-5">Your cart is empty</div>;
  }

  const formattedDate = moment(property?.date ?? null).format(
    "dddd,  D MMMM YYYY"
  );

  const totalMoney = Object.entries(products).reduce(
    (acc, [, product]) => acc + product.price * product.count,
    0
  );

  const handleGoBack = () => {
    router.push(`/${locale}/${property.title.replace(/\s+/g, "-")}`);
  };

  const deleteProduct = (key: string) => {
    const newProducts = products;
    delete newProducts[key];
    localStorage.setItem(
      "cart",
      JSON.stringify({ property, products: newProducts })
    );
    window.location.reload();
  };

  const handleCheckOut = async () => {
    if (!data?.user?.id) {
      return toast({
        title: "Log in",
        description: "You need to log in to make a booking",
        duration: 500,
      });
    }

    startTransition(async () => {
      try {
        await request({
          type: "post",
          endpoint: "/booking",
          payload: {
            date: property.date,
            propertyId: property.id,
            userId: data?.user?.id,
            products,
            totalMoney,
          },
        });

        localStorage.removeItem("cart");
        toast({
          title: "Success",
          description: "Your booking is successful",
          duration: 1000,
        });
        router.push(`/${locale}`);
      } catch (error) {
        toast({
          title: "Error",
          description: "Something went wrong with the booking",
          duration: 1000,
        });
      }
    });
  };

  return (
    <div className="mt-4">
      <div className="mx-4">
        <Button
          variant="none"
          onClick={handleGoBack}
          className=" flex items-center px-0 gap-2 font-light"
        >
          <FaArrowLeft className="text-gray-500" />
          <span> Back to {property.title}</span>
        </Button>
        <div className="flex items-center justify-between ">
          <div>
            <h1 className="text-sm font-medium">{property.title}</h1>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
          <Image
            src={property.img}
            alt={property.title}
            width={90 * 1.4}
            height={160 * 1.4}
            className="rounded-xl aspect-video"
          />
        </div>
        <div className="mt-5">
          {Object.entries(products).map(
            ([key, product]: [string, { count: number; price: number }]) => (
              <div className="flex flex-col my-1" key={key}>
                <Separator />
                <div className="my-2 flex items-center justify-between">
                  <div>
                    <p className="font-medium ">{t(key.toString())}</p>
                    <div className="text-gray-500 text-sm">
                      ₺{product.price} x {product.count}
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p> ₺{product.price * product.count} TL</p>
                    <button
                      className="border px-2 rounded-full"
                      onClick={() => deleteProduct(key)}
                    >
                      x
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="fixed bottom-0 w-full px-4 pb-4 bg-white  border-t  shadow-2xl z-20 flex flex-col items-center">
        <div className="flex items-center justify-between w-full my-3">
          <p className="font-semibold">Total</p>
          <p className="font-bold text-lg">
            ₺{totalMoney}
            <span className="text-sm ml-1 font-normal">TL</span>
          </p>
        </div>

        <Button
          className="rounded-xl px-8 bg-cyan-500 w-full"
          onClick={handleCheckOut}
          disabled={isPending} // disable button while transition is pending
        >
          {isPending ? "Processing..." : "Check Out"}
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCardPage;

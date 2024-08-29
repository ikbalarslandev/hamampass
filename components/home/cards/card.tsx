import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { TProperty } from "@/types";
import { photos } from "@/mock/photos";
import { IoStar } from "react-icons/io5";
import HoverComponent from "@/components/hover";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";

const Card = ({ property }: { property: TProperty }) => {
  const { locale } = useParams();

  const sex_type = useTranslations("home.filters.sex");
  const product_type = useTranslations("home.product-type");

  const [sortedProducts, setSortedProducts] = useState(property.products);

  const router = useRouter();

  const handleCardClick = () => {
    const convertedTitle = encodeURIComponent(
      property.title.replace(/ /g, "-")
    );

    router.push(`/${locale}/${convertedTitle}`);
  };

  useEffect(() => {
    if (property.products.length > 1) {
      const count = [...property.products].sort((a, b) =>
        a.type > b.type ? 1 : -1
      );
      setSortedProducts(count);
    }
  }, [property.products]);

  return (
    <button
      onClick={handleCardClick}
      aria-label={`View details of ${property.title}`}
    >
      <Image
        src={property.photos.length > 1 ? property.photos[0] : photos[0]}
        alt={property.title}
        width={400}
        height={400}
        priority={true}
        className="rounded-lg"
      />
      <div>
        <div>
          <div className="flex  items-center justify-between">
            <h2 className="text-xl font-bold text-slate-700 my-2">
              {property.title}
            </h2>
            {property.rating && (
              <div className="flex items-start gap-1 mr-2">
                <IoStar className="text-cyan-500 w-5 h-5 " />
                <p className="font-semibold">
                  {parseFloat(property?.rating?.rate_overall?.toFixed(1)) || ""}{" "}
                  ({property?.rating?.count || 0})
                </p>
              </div>
            )}
          </div>

          <div className="flex gap-2 items-center justify-between">
            <span className="border flex items-center gap-3 p-2 px-4 rounded-lg bg-cyan-600 text-white h-2">
              <p>{sex_type(property.sex.toString())}</p>
            </span>
          </div>

          <div className="flex gap-4 mt-2 ml-1 max-w-[85vw] overflow-x-auto overflow-hidden pb-2">
            {property.amenities.map((id: number, index: number) => (
              <HoverComponent key={index} amenity={id} />
            ))}
          </div>
        </div>
        <div className=" flex h-16 mt-4">
          {sortedProducts.map((product, index) => (
            <div key={product.id} className="flex items-center">
              <div className="flex-1 flex flex-col items-start justify-between">
                <p className="font-medium text-gray-600">
                  {product_type(product.type.toString())}
                </p>

                <div className="flex gap-1 items-center">
                  <span className="font-semibold text-lg text-slate-800 ">
                    ₺{product.adult_price}
                  </span>
                  <span className="text-sm text-gray-500">TL</span>
                </div>
              </div>

              {index !== sortedProducts.length - 1 && (
                <Separator className="h-8 mx-7" orientation="vertical" />
              )}
            </div>
          ))}
        </div>
      </div>
    </button>
  );
};

export default Card;

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { TProperty } from "@/types";
import { photos } from "@/mock/photos";
import { IoStar } from "react-icons/io5";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import HoverComponent from "@/components/hover";

const Card = ({ property }: { property: TProperty }) => {
  const { locale } = useParams();

  const sex_type = useTranslations("home.filters.sex");
  const product_type = useTranslations("home.product-type");

  const router = useRouter();

  const handleCardClick = () => {
    const convertedTitle = encodeURIComponent(
      property.title.replace(/ /g, "-")
    );

    router.push(`/${locale}/${convertedTitle}`);
  };

  return (
    <div className=" mb-2 m-1">
      <Carousel>
        <CarouselContent className="rounded-xl aspect-video">
          {property.photos.length < 2
            ? photos.map((photo: string) => (
                <CarouselItem key={photo} className="rounded-xl">
                  <Image
                    src={photo}
                    alt={property.title}
                    width={400}
                    height={400}
                    priority={true}
                    className="rounded-xl"
                  />
                </CarouselItem>
              ))
            : property.photos.map((photo: string) => (
                <CarouselItem key={photo}>
                  <Image
                    src={photo}
                    alt={property.title}
                    width={400}
                    height={400}
                    priority={true}
                    className="rounded-xl"
                  />
                </CarouselItem>
              ))}
        </CarouselContent>
      </Carousel>
      <div onClick={handleCardClick}>
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
            <span className="bg-blue-500 text-white px-2 py-[.1rem] rounded-xl ">
              {sex_type(property.sex.toString())}
            </span>
          </div>

          <div className="flex gap-4 mt-2 ml-1">
            {property.amenities.map((id: number, index: number) => (
              <HoverComponent key={index} amenity={id} />
            ))}
          </div>
        </div>
        <div className=" flex h-16 mt-4 gap-2  ">
          {property.products.map((product) => (
            <div
              key={product.id}
              className=" flex-1 flex flex-col items-center justify-center "
            >
              <p>{product_type(product.type.toString())}</p>

              <div className="flex gap-1 items-center">
                <span className=" font-bold text-xl">
                  ₺{product.adult_price}
                </span>
                <span className="text-sm text-gray-500">TL</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

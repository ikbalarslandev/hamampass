import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { TProperty } from "@/types";
import { photos } from "@/mock/photos";
import { IoStar } from "react-icons/io5";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import DisplayAmenityIcon from "@/components/commons/display-amenity-icon";
import HeartComponent from "./heart";

const CardItem = ({ property }: { property: TProperty }) => {
  const { locale } = useParams();
  const sex_type = useTranslations("home.filters.sex");
  const product_type = useTranslations("home.product-type");

  const [sortedProducts, setSortedProducts] = useState(property.products);
  const [activeSlide, setActiveSlide] = useState(0);
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

  const chose = property.photos.length > 1 ? property.photos : photos;
  const images = chose.slice(0, 4);

  return (
    <button
      onClick={handleCardClick}
      aria-label={`View details of ${property.title}`}
    >
      <Carousel
        setApi={(api) =>
          api?.on("select", () => setActiveSlide(api.selectedScrollSnap()))
        }
        className="relative  "
        opts={{
          align: "start",
          loop: true,
        }}
      >
        {/* wishlist */}
        <HeartComponent title={property.title} />

        <CarouselContent className="rounded-none -ml-1 aspect-video ">
          {images.map((photo: string, index: number) => (
            <CarouselItem key={photo} className="pl-1">
              <Image
                src={photo}
                alt={property.title || "property"}
                height={900}
                width={1600}
                className="rounded-lg"
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 800px) 100vw, 800px"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-1 absolute bottom-2 left-1/2 transform -translate-x-1/2 ">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${
                index === activeSlide ? "bg-cyan-500" : "bg-gray-300/50"
              }`}
            />
          ))}
        </div>
      </Carousel>

      <div>
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-700 my-2">
              {property.title}
            </h2>
            {property.rating && (
              <div className="flex items-start gap-1 mr-2">
                <IoStar className="text-cyan-500 w-5 h-5" />
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

          <div className="flex items-center justify-start gap-4 mt-2 ml-1 max-w-[85vw] overflow-x-auto overflow-hidden pb-2">
            {property?.amenity?.facilities?.map((id: number, index: number) => (
              <DisplayAmenityIcon key={index} amenity={id} />
            ))}
          </div>
        </div>
        <div className="flex h-16 mt-4">
          {sortedProducts.map((product, index) => (
            <div key={product.id} className="flex items-center">
              <div className="flex-1 flex flex-col items-start justify-between">
                <p className="font-medium text-gray-600">
                  {product_type(product.type.toString())}
                </p>

                <div className="flex gap-1 items-center">
                  <span className="font-semibold text-lg text-slate-800">
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

export default CardItem;

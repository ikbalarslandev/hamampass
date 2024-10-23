import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "@hamampass/i18n";
import Image from "next/image";
import { TProperty } from "@hamampass/db/types";
import { photos } from "@/mock/photos";
import { IoStar } from "react-icons/io5";
import { Separator } from "@hamampass/ui/primitives/separator.tsx";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@hamampass/ui/primitives/carousel.tsx";
import { MdLocationOn } from "react-icons/md";
import { IoIosMan } from "react-icons/io";
import { IoIosWoman } from "react-icons/io";

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
  const images = chose.slice(0, 3);

  return (
    <button
      onClick={handleCardClick}
      aria-label={`View details of ${property.title}`}
      className="border border-sgray-100 shadow-sm rounded-xl"
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
        <CarouselContent className="rounded-none -ml-1 aspect-video ">
          {images.map((photo: string, index: number) => (
            <CarouselItem key={photo} className="pl-1">
              <Image
                src={photo}
                alt={property.title || "property"}
                height={900}
                width={1600}
                className="rounded-t-lg"
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
                index === activeSlide ? "bg-secondary-10 border" : "bg-white/90"
              }`}
            />
          ))}
        </div>
      </Carousel>

      <div className="mx-2 mb-3">
        <div>
          <div className="text-sm text-left mt-2 flex  items-end justify-start text-gray-500 ">
            <MdLocationOn className="text-orange-700/90 w-5 h-5" />
            <p className="text-xs">Besiktas / Istanbul</p>
          </div>
          <div className="flex items-center justify-between ">
            <h2 className="text-xl font-semibold text-slate-700">
              {property.title}
            </h2>

            {property.rating && (
              <div className="flex justify-center gap-1 mr-2 ">
                <IoStar className="text-primary-500 w-6 h-6" />
                <p>
                  <span className="text-lg font-semibold">
                    {property?.rating?.rate_overall
                      ? parseFloat(
                          property.rating.rate_overall.toFixed(1)
                        ).toFixed(1)
                      : ""}
                  </span>{" "}
                  <span className="text-xs text-gray-500 font-normal">
                    ({property?.rating?.count || 0})
                  </span>
                </p>
              </div>
            )}
          </div>

          <Separator className="text-sgray-200 mt-2 mb-2" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex ">
                <IoIosMan size={22} />
                <IoIosWoman size={22} className=" -mx-2" />
              </div>

              <p className="text-lg">Unisex</p>
            </div>
            <div className="flex gap-1 items-center">
              <span className=" text-gray-500">from</span>
              <span className="font-semibold text-lg text-slate-800">
                ₺{sortedProducts[0].adult_price}
              </span>
              <span className="text-sm text-gray-500">TL</span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default CardItem;

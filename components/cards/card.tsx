import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import HoverComponent from "./hover";
import { TProperty } from "@/types";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { photos } from "@/mock/photos";
import { useParams } from "next/navigation";
import RatingComponent from "./rating";
import { IoStar } from "react-icons/io5";

interface CardProps {
  property: TProperty;
}

const Card = ({ property }: CardProps) => {
  const { locale } = useParams();
  const t = useTranslations("card");
  const s = useTranslations("sex-number");
  const v = useTranslations("vibe");

  const router = useRouter();

  const handleCardClick = () => {
    const convertedTitle = encodeURIComponent(
      property.title.replace(/ /g, "-")
    );

    router.push(`/${locale}/${convertedTitle}`);
  };

  // enum EAmenities {
  //   Turkish_Bath === 0
  //   Shower   === 1
  //   Sauna    === 2
  //   Steam_Room  === 3
  //   Jacuzzi     === 4
  //   Pool       === 5
  //   Shock_Pool   === 6
  //   Spa      === 7
  // }

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
            <div className="flex items-start gap-1 mr-2">
              <IoStar className="text-cyan-500 w-5 h-5 " />
              <p className="font-semibold">
                {parseFloat(property.rating.rate_overall.toFixed(1))} (
                {property.rating.count})
              </p>
            </div>
          </div>

          <div className="flex gap-2 items-center justify-between">
            <span className="bg-blue-500 text-white px-2 py-[.1rem] rounded-xl ">
              {s(property.sex.toString())}
            </span>
          </div>

          <p className="flex gap-4 mt-2 ml-1">
            {property.amenities.map((id: number, index: number) => (
              <HoverComponent key={index} amenity={id.toString()} />
            ))}
          </p>
        </div>
        <div className=" flex h-16 mt-2 ">
          <div className=" flex-1 flex flex-col items-center justify-center">
            <p className="font-bold">{t("adult")}</p>

            <span className=" font-semibold text-green-600">
              ₺ {property.price.adult}
            </span>
          </div>
          <div className="w-[.1rem] flex items-center">
            <div className="bg-black w-[.1rem] h-8 "></div>
          </div>

          <div className=" flex-1 flex flex-col items-center justify-center">
            <p className="font-bold">{t("child")}</p>

            <span className=" font-semibold text-green-600">
              ₺ {property.price.child}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

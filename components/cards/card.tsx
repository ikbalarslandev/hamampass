import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import HoverComponent from "./hover";
import { FaTurkishLiraSign } from "react-icons/fa6";
import { TProperty } from "@/types";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { photos } from "@/mock/photos";
import { useParams } from "next/navigation";

interface CardProps {
  property: TProperty;
}

const Card = ({ property }: CardProps) => {
  const { locale } = useParams();
  const t = useTranslations("card");
  const s = useTranslations("sex");
  const v = useTranslations("vibe");
  let sex;

  const router = useRouter();

  const handleCardClick = () => {
    const convertedTitle = encodeURIComponent(
      property.title.replace(/ /g, "-")
    );

    router.push(`/${locale}/${convertedTitle}`);
  };

  switch (property.sex) {
    case 1:
      sex = s("men");
      break;
    case 2:
      sex = s("women");
      break;
    case 3:
      sex = s("unisex");
      break;
    case 4:
      sex = s("seperate");
      break;
  }

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

  const convertToAmenity = (id: number) => {
    switch (id) {
      case 0:
        return "Turkish_Bath";
      case 1:
        return "Shower";
      case 2:
        return "Sauna";
      case 3:
        return "Steam_Room";
      case 4:
        return "Jacuzzi";
      case 5:
        return "Pool";
      case 6:
        return "Shock_Pool";
      case 7:
        return "Spa";
    }
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
          <h2 className="text-xl font-bold text-slate-700 my-2">
            {property.title}
          </h2>
          <div>
            <span className="bg-emerald-500 text-white px-2 py-[.1rem] rounded-xl">
              {v(property.vibe.toString())}
            </span>
            <span className="bg-blue-500 text-white px-2 py-[.1rem] rounded-xl ml-2">
              {sex}
            </span>
          </div>

          <p className="flex gap-4 mt-2 ml-1">
            {property.amenities.map((id: number, index: number) => (
              <HoverComponent key={index} amenity={convertToAmenity(id)} />
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
          <div className="w-[.1rem] flex items-center">
            <div className="bg-black w-[.1rem] h-8 "></div>
          </div>
          <div className=" flex-1 flex flex-col items-center justify-center">
            <p className="font-bold">{t("scrub")}</p>

            <span className=" font-semibold text-green-600">
              ₺ {property.price.scrub}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import HoverComponent from "./hover";
import { FaTurkishLiraSign } from "react-icons/fa6";

const Card = ({ property }: any) => (
  <div className=" mb-2 m-1">
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <Image
            src={property.photos[0]}
            alt={property.title}
            width={400}
            height={400}
            className="rounded-xl"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src={property.photos[0]}
            alt={property.title}
            width={400}
            height={400}
            className="rounded-xl"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
    <div>
      <h2 className="text-xl font-bold text-slate-700 my-2">
        {" "}
        {property.title}
      </h2>
      <span className="bg-emerald-500 text-white px-2 py-[.1rem] rounded-xl">
        {" "}
        {property.vibe}
      </span>
      <p className="flex gap-4 mt-2 ml-1">
        {property.amenities.map((amenity: any, index: number) => (
          <HoverComponent key={index} amenity={amenity} />
        ))}
      </p>
    </div>

    <div className=" flex h-16 mt-2 ">
      <div className=" flex-1 flex flex-col items-center justify-center">
        <p className="font-bold">Adult</p>
        <p>
          {property.price.adult}{" "}
          <FaTurkishLiraSign className="inline-block pb-1" />
        </p>
      </div>
      <div className="w-[.1rem] flex items-center">
        <div className="bg-black w-[.1rem] h-8 "></div>
      </div>

      <div className=" flex-1 flex flex-col items-center justify-center">
        <p className="font-bold">Child</p>
        <p>
          {property.price.adult}{" "}
          <FaTurkishLiraSign className="inline-block pb-1" />
        </p>
      </div>
      <div className="w-[.1rem] flex items-center">
        <div className="bg-black w-[.1rem] h-8 "></div>
      </div>
      <div className=" flex-1 flex flex-col items-center justify-center">
        <p className="font-bold">Body Scrub</p>
        <p>
          {property.price.adult}
          <FaTurkishLiraSign className="inline-block pb-1" />
        </p>
      </div>
    </div>
  </div>
);

export default Card;

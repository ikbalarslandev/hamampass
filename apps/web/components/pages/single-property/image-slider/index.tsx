import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@hamampass/ui/primitives/carousel.tsx";
import { photos } from "@/mock/photos";
import GaleryDrawer from "./drawer";

const Slider = (property: any) => {
  const images =
    property?.data?.photos?.length < 2 ? photos : property?.data?.photos;

  return (
    <GaleryDrawer
      trigger={
        <Carousel className="rounded-none mt-2 ml-2 ">
          <CarouselContent className="rounded-none -ml-1 ">
            {images.map((photo: string, index: number) => (
              <CarouselItem key={photo} className="basis-5/6 pl-1">
                <div className="relative w-full pb-[56.25%]">
                  <Image
                    src={photo}
                    alt={property.title || "property"}
                    fill
                    className={`
                      ${index === 0 ? "rounded-l-2xl" : ""} 
                      ${index === images.length - 1 ? "rounded-r-2xl" : ""}
                      ${
                        index > 0 && index < images.length - 1
                          ? "rounded-none"
                          : ""
                      }
                      object-cover absolute inset-0
                    `}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      }
      data={images}
    />
  );
};

export default Slider;

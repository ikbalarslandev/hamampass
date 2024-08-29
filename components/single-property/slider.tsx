import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { photos } from "@/mock/photos";

const Slider = (property: any) => {
  const images =
    property?.data?.photos?.length < 2 ? photos : property?.data?.photos;

  return (
    <Carousel className="rounded-none mt-2 ml-2" onClick={() => alert("hello")}>
      <CarouselContent className="rounded-none">
        {images.map((photo: string, index: number) => (
          <CarouselItem key={photo} className="basis-5/6 ">
            <Image
              src={photo}
              alt={property.title || "property"}
              width={400}
              height={400}
              className={`
                ${index === 0 ? "rounded-l-2xl" : ""} 
                ${index === images.length - 1 ? "rounded-r-2xl" : ""}
                ${index > 0 && index < images.length - 1 ? "rounded-none" : ""}
                w-auto h-auto
              `}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Slider;
